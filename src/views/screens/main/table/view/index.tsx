import { Button, Table, Divider, Switch } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import type { IProps } from './props';
import './styles.less';
import { ITodo } from 'src/interfaces/models';

export default (props: IProps) => {
    const {
      isTableLoading, todos, paginationSettings, handleChangePagination,
      handleUpdateTodo, handleSwitchChange, handleDeleteTodo
    } = props
    const columns = [
        {
          title: 'NAME',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'STATUS',
          dataIndex: 'id',
          key: 'when_done',
          render: (id: string) => {
            return <Switch
              checked={todos.find((todo) => todo.id === id)?.when_done !== null}
              checkedChildren='Done'
              unCheckedChildren='Not Done'
              onChange={(checked) => handleSwitchChange(id, checked)}
            />
          }
        },
        {
          title: 'ACTIONS',
          key: 'actions',
          render: (text: any, record: any) => (
            <span>
              <Button type="primary" onClick={() => handleUpdateTodo(record)}>
                Update
              </Button>
              <Divider type="vertical" />
              <Button type="primary" danger onClick={() => handleDeleteTodo(record)}>
                Delete
              </Button>
            </span>
          ),
        },
    ]

    return (
        <div>
          <Table
            rowKey='id'
            columns={columns}
            dataSource={todos}
            loading={isTableLoading}
            bordered={true}
            pagination={paginationSettings}
            onChange={handleChangePagination}
          />    
        </div>
      )
}