import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import type { IProps } from './props';

export default (props: IProps) => {
  const {
    formTodo, isModalOpen, handleModalOnCancel, method,
    handleCreateToDoSubmit, submitting, todo, handleUpdateToDoSubmit
  } = props
  if (method === 'Create Todo') {
    console.log('create')
  }
  return (
    <Modal
      open={isModalOpen}
      // title='Create Todo'
      title={method === 'Create Todo' ? 'Create Todo' : 'Update Todo'}
      onCancel={handleModalOnCancel}
      footer={null}
    >
      <Form
        form={formTodo}
        //   onFinish={onFinish}
        initialValues={todo!}
        layout='vertical'
      >
        <Form.Item
          name='name'
          label='Name'
          rules={[
            {
              required: true,
              message: 'Please enter a name for the Todo',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button 
            loading={submitting}
            type='primary'
            onClick={() => method === 'Create Todo' ? handleCreateToDoSubmit() : handleUpdateToDoSubmit(todo!)}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
