import React, { useState } from 'react';
import '../App.css';
import { Button, Form, Input } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const InputTodo = () => {
  const formRef = React.useRef(null);
  const [form] = Form.useForm();
  const [todoList, setTodoList] = React.useState([]);

  const onFinish = (values) => {
    if (!values || !values.tareas) return;
    setTodoList([...todoList, { text: values.tareas, done: false }]);
    form.resetFields();
  };

  const handleDelete = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  };

  const onReset = () => {
    formRef.current?.resetFields();
  };
  return (
    <>
      <Form
        {...layout}
        ref={formRef}
        name="control-ref"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          name="tareas"
          label="tareas"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
      <div className="lista-renderizada">
        <ul>
          {todoList.map((todo, index) => (
            <li key={index}>
              <span>{todo.text}</span>
              <Button
                type="danger"
                size="small"
                onClick={() => handleDelete(index)}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default InputTodo;