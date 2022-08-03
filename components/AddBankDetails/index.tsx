import React, {useState} from "react";
import {Button, DatePicker, Form, Input, Table, Popconfirm, Card} from "antd";
import {DeleteOutlined,QuestionCircleOutlined} from "@ant-design/icons";

import moment from "moment";

import styles from "./style.module.css"
import {FieldData} from "rc-field-form/es/interface";

interface CardDetails{
    cardName:string,
    cardNumber:string,
    cardHolderName:string,
    expiryDate: string
}
const dummyData:CardDetails[] = [
    {cardName: 'Smith Credit Card', cardNumber: 'xxxx-xxxx-xxxx-1234', cardHolderName: 'Mr A Smith', expiryDate: moment().format("MM/GGGG") },
    {cardName: 'Smiths Debit Card', cardNumber: 'xxxx-xxxx-xxxx-2314', cardHolderName: 'Mr A Smith', expiryDate: moment().format("MM/GGGG")},
]


export default function(){
    const [dataSource, setDataSource] = useState(dummyData);
    const [formData, setFormData] = useState<FieldData[]>([]);

    const columns = [
        {
            title: 'Card Friendly Name',
            dataIndex: 'cardName',
            key: 'name',
        },
        {
            title: 'Card Holder Name',
            dataIndex: 'cardHolderName',
            key: 'cardHolderName',
        },
        {
            title: 'CardNumber',
            dataIndex: 'cardNumber',
            key: 'cardNumber',
        },
        {
            title: 'expiryDate',
            dataIndex: 'expiryDate'
        },
        {
            title: "Action",
            dataIndex: "action",
            render(_:any, {cardNumber}:CardDetails) {
                return (
                    <Popconfirm title="Are you sure？"
                                onConfirm={()=>{
                                    setDataSource(dataSource.filter((x)=>x.cardNumber !== cardNumber))
                                }}
                                icon={<QuestionCircleOutlined style={{ color: 'red' }}/>}>
                        <DeleteOutlined />
                    </Popconfirm>
                );
            }
        }
    ];

    return (
        <div>
            <h2>Now Lets add your bank card</h2>
            <Card>
                <Form
                    layout={"vertical"}
                    requiredMark={false}
                    className={styles.form}
                    onFieldsChange={(_, allFields)=>{
                          setFormData(allFields );
                      }} >
                    <Form.Item
                        className={styles.item}
                        name="cardName"
                        label="Enter friendly Card Name"
                        rules={[{ required: true }]}>
                        <Input placeholder="Name to remember the card" />
                    </Form.Item>
                    <Form.Item  className={styles.item} name="cardHolderName" label="Name on the Card" rules={[{ required: true }]}>
                        <Input placeholder="Name on the card" />
                    </Form.Item>
                    <Form.Item  className={styles.item} name="cardNumber" label="Card Number" rules={[{ required: true }]}>
                        <Input placeholder="CardNumber" />
                    </Form.Item>
                    <Form.Item  className={styles.item} name="expiryDate" label="Expiry Date" rules={[{ required: true}]}>
                        <DatePicker/>
                    </Form.Item>
                </Form>
                <div className={styles.buttonContainer}>
                    <Button className={styles.button} type="primary" onClick={()=>{
                        const data: CardDetails = formData.reduce((acc, {name,  value})=> {
                            // @ts-ignore
                            acc[name[0]] = name[0] === "expiryDate" ? moment(value).format("MM/GGGG") : value;
                            return acc;
                        },{}) as CardDetails;

                        setDataSource([...dataSource, data]);
                    }}>Add</Button>
                </div>
            </Card>
            <div className={styles.tableContainer}>
                <h2>Card Details </h2>
                <Table columns={columns} dataSource={dataSource}/>
            </div>
        </div>
    )
}