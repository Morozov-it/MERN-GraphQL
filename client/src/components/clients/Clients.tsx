import React, { useState } from 'react'
import { useGetClientsQuery } from '@queries/get-clients.gen'
import { Button, Card, List, message, Skeleton } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import AddClientModal from './AddClientModal'

const Wrapper = styled.div`
    .ant-card-body {
        display: flex;
        align-items: center;
        & button {
            margin-left: auto;
        }
    }
    .add-button {
        width: 100%;
        margin-top: 5px;
    }
`

const Clients: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const { data, loading, error } = useGetClientsQuery()

    if (error) message.error(error.message)

    return (
        <Wrapper>
            <List
                loading={loading}
                itemLayout="horizontal"
                dataSource={data?.clients ?? []}
                renderItem={(item) => (
                    <Card title={item?.name}>
                        <Skeleton avatar title={false} loading={loading} active>
                            <div>
                                <span>{item?.email}</span> 
                                <br />
                                <span>{item?.phone}</span> 
                            </div>
                            <Button icon={<DeleteOutlined />} />
                        </Skeleton>
                    </Card>
                )}
            />
            <Button className='add-button' onClick={() => setIsModalVisible(true)}>Add</Button>
            <AddClientModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
        </Wrapper>
    )
}

export default Clients