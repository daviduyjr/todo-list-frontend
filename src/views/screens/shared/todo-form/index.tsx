import { useEffect, useState } from 'react';
import type { ITodo } from 'src/interfaces/models';
import View from './view';
import { IProps } from './props';
import { Form, message   } from 'antd';
import { useDispatch } from 'react-redux';
import CreateTodo from '../../../../state/todos/create'
import UpdateTodo from '../../../../state/todos/update'

export default (props: IProps) => {
  const dispatch: any = useDispatch();
  const [formTodo] = Form.useForm();
  const [submitting, setSubmitting] = useState(false)

  const { isModalOpen, submitDone } = props;

  const handleCreateToDoSubmit = () => {
    console.log('create')
    setSubmitting(true)
    formTodo.validateFields().then(async (values) => {
      await dispatch(CreateTodo({
        name: values.name
      }))
      .unwrap()
      .then((response: ITodo) => {
        setSubmitting(false)
        submitDone()
      console.log('!! ~ file: index.tsx:24 ~ response:', response)
      }).catch((error: any) => {
        setSubmitting(false)
        submitDone()
      })
    console.log('!! ~ file: index.tsx:14 ~ values:', values)
    }).catch((error) => {
      console.log('!! ~ file: index.tsx:16 ~ error:', error)
    })
  }

  const handleUpdateToDoSubmit = (record: ITodo) => {
    setSubmitting(true)
    formTodo.validateFields().then(async (values) => {
      console.log('!! ~ file: index.tsx:41 ~ values:', values)
      await dispatch(UpdateTodo({
        id: record.id,
        name: values.name
      }))
      .unwrap()
      .then((response: ITodo) => {
        setSubmitting(false)
        submitDone()
      console.log('!! ~ file: index.tsx:24 ~ response:', response)
      }).catch((error: any) => {
        setSubmitting(false)
        submitDone()
      })
    }).catch((error) => {
      console.log('!! ~ file: index.tsx:16 ~ error:', error)
    })
  }

  return <View
    {...props}
    isModalOpen={isModalOpen}
    formTodo={formTodo}
    handleCreateToDoSubmit={handleCreateToDoSubmit}
    submitting={submitting}
    handleUpdateToDoSubmit={handleUpdateToDoSubmit}
  />;
};
