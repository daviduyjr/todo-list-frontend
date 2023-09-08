import { useEffect, useState } from 'react';
import { Button, Table, Row, Col } from 'antd'
import TodosTable from '../../table';
import './styles.less';
import type { ITodo } from 'src/interfaces/models';
import type { IProps } from './props';
import TodoForm from '../../../shared/todo-form';

export default (props: IProps) => {
  const {
    isTableLoading, todos, paginationSettings, handleChangePagination,
    handleCreateTodo, isModalOpen, handleModalOnCancel, method,
    submitDone, contextHolder, handleUpdateTodo, todo, handleSwitchChange,
    handleDeleteTodo,
  } = props
  return (
    <div className='todo-table-container'>
      {contextHolder}
      {
        isModalOpen && 
        <TodoForm
          isModalOpen={isModalOpen}
          handleModalOnCancel={handleModalOnCancel}
          method={method}
          submitDone={submitDone}
          todo={todo}
        />
      }
      <Row>
        <Col span={24}>
          <div className='create-button-container'>
            <Button onClick={handleCreateTodo} type='primary'>Create Todo</Button>
          </div>
        </Col>
        <Col span={24}>
          <TodosTable 
            todos={todos}
            isTableLoading={isTableLoading}
            paginationSettings={paginationSettings}
            handleChangePagination={handleChangePagination}
            handleUpdateTodo={handleUpdateTodo}
            handleSwitchChange={handleSwitchChange}
            handleDeleteTodo={handleDeleteTodo}
          />
        </Col>
      </Row>
    </div>
  )
}