import { useEffect, useState } from 'react';
import type { ITodo } from 'src/interfaces/models';
import View from './view';
import { useDispatch } from 'react-redux';
import GetTodos from '../../../../state/todos/list'
import UpdateTodo from '../../../../state/todos/update'
import { message   } from 'antd';

export default () => {
  const dispatch: any = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const [isTableLoading, setIsTableLoading] = useState(false)
  const [todos, setTodos] = useState<ITodo[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [method, setMethod] = useState('')
  const [todo, setTodo] = useState<ITodo>()
  const [paginationSettings, setPaginationSettings] = useState({
    current: 1,
    pageSize: 10,
    showSizeChanger: true,
    showQuickJumper: true,
  });

  const handleChangePagination = async (pagination: any) => {
    console.log('!! ~ file: index.tsx:25 ~ pagination:', pagination)

    await dispatch(GetTodos({
      page: pagination.current,
      limit: pagination.pageSize,
    }))
    .unwrap()
    .then((response: ITodo[]) => {
      setTodos(response)
      setIsTableLoading(false)
      setPaginationSettings((prevSettings) =>({
        ...prevSettings,
        current: pagination.current,
        pageSize: pagination.pageSize,
        showSizeChanger: true,
        showQuickJumper: true,
        total: Number(response[0].total_count),
      }));
    }).catch((error: any) => {
      setIsTableLoading(false)
    })
  };

  const handleCreateTodo = () => {
    setMethod('Create Todo')
    setIsModalOpen(true)
  }

  const handleModalOnCancel = () => {
    setIsModalOpen(false)
  }
  const todosArray = new Array()

  const getTodos = async () => {
    await dispatch(GetTodos({
      page: paginationSettings.current,
      limit: paginationSettings.pageSize,
    }))
    .unwrap()
    .then((response: ITodo[]) => {
      if (response && response.length > 0){
        setTodos(response)
        setIsTableLoading(false)
        setPaginationSettings((prevSettings) =>({
          ...prevSettings,
          current: paginationSettings.current,
          pageSize: paginationSettings.pageSize,
          showSizeChanger: true,
          showQuickJumper: true,
          total: Number(response[0].total_count),
        }));
      }
    }).catch((error: any) => {
      setIsTableLoading(false)
    })
  }

  const submitDone = () => {
    getTodos()
    setIsModalOpen(false)
    if (method === 'Create Todo') {
      messageApi.open({
        type: 'success',
        content: `Todo's created.`,
      });
    } else {
      messageApi.open({
        type: 'success',
        content: `Todo's updated.`,
      });
    }
  }

  const handleUpdateTodo = (todo: ITodo) => {
    setIsModalOpen(true)
    setMethod('Update Todo')
    setTodo(todo)
  }

  const handleSwitchChange = async (id: string, checked: boolean) => {
    await dispatch(UpdateTodo({
      id,
      when_done: checked ? new Date().toISOString(): null,
    }))
    .unwrap()
    .then((response: ITodo) => {
      submitDone()
    }).catch((error: any) => {
      submitDone()
    })
  }

  const handleDeleteTodo = async (record: ITodo) => {
    await dispatch(UpdateTodo({
      id: record.id,
      deleted_at: new Date().toISOString(),
    }))
    .unwrap()
    .then((response: ITodo) => {
      submitDone()
    }).catch((error: any) => {
      submitDone()
    })
  }

  useEffect(() => {
    getTodos()
    // for(let i = 1; i <= 100; i++) {
    //   todosArray.push({
    //     id: String(i),
    //     name: `Todo-${i}`,
    //     when_done: new Date().toISOString(),
    //     created_at: new Date().toISOString(),
    //     updated_at: new Date().toISOString()
    //   })
    // }
    // setTodos(todosArray)
  }, [])

  return (
    <View
      isTableLoading={isTableLoading}
      todos={todos}
      paginationSettings={paginationSettings}
      handleChangePagination={handleChangePagination}
      handleCreateTodo={handleCreateTodo}
      isModalOpen={isModalOpen}
      handleModalOnCancel={handleModalOnCancel}
      method={method}
      submitDone={submitDone}
      contextHolder={contextHolder}
      handleUpdateTodo={handleUpdateTodo}
      todo={todo}
      handleSwitchChange={handleSwitchChange}
      handleDeleteTodo={handleDeleteTodo}
    />
  )
}
