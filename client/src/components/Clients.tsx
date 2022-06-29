import React from 'react'
import { useGetClientsQuery } from '@queries/get-clients.gen'
import { Button, Card, List, message, Skeleton } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const Wrapper = styled(List)`
    .ant-card-body {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
` as typeof List

const Clients: React.FC = () => {
    const { data, loading, error } = useGetClientsQuery()

    if (error) message.error(error.message)

    return (
        <Wrapper
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
    )
}

export default Clients