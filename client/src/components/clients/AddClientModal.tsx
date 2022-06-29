import React from 'react'
import { Button, Form, Input, Modal } from 'antd'

interface Props {
    isModalVisible: boolean,
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

const AddClientModal:React.FC<Props> = ({isModalVisible, setIsModalVisible}) => {
    const onFinish = (values: any) => {
        console.log('Success:', values)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    return (
        <Modal
            title="Add new client"
            visible={isModalVisible}
            footer={null}
            onCancel={handleCancel}>
            <Form
                name="basic"
                labelCol={{ span: 6 }}
                onFinish={onFinish}
                autoComplete="off">
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input name!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input email!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[{ required: true, message: 'Please input phone number!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default AddClientModal