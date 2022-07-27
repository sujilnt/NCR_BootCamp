import React, {useState} from "react";
import {Button, Card, Form, Input, Popconfirm, Select, Table} from "antd";

const {Option} =Select;

import styles from "./style.module.css";
import {DeleteOutlined, QuestionCircleOutlined} from "@ant-design/icons";
import moment from "moment";

const lists = ["tesco", "morrissons", "sainsbury"];

function generateOptions(){
    return lists.map((value)=> (<Option value={value}>{value}</Option>))
}

interface LoyalityDetails{
    cardName:string,
    merchantName:string,
    cardNumber:string,
    cardHolderName: string
}
const columns =[
    {
        title: 'Card Friendly Name',
        dataIndex: 'cardName',
        key: 'name',
    },
    {
        title: 'Merchant Name',
        dataIndex: 'merchantName',
        key: 'MerchantName',
    },
    {
        title: 'CardNumber',
        dataIndex: 'cardNumber',
        key: 'cardNumber',
    }
];

const dummyData = [
    {
        cardName: "Tesco Club Card",
        cardHolderName: "Mr A Smith",
        merchantName: "Tesco",
        cardNumber: "xxxx-xxxx-xxxx-1234"
    },
    {
        cardName: "Nectar Card",
        cardHolderName: "Mr A Smith",
        merchantName: "Sainsbury",
        cardNumber: "xxxx-xxxx-xxxx-2134"
    }
];
export default function(){
    const [dataSource, setDataSource] = useState(dummyData);
    const [formData, setFormData] = useState([]);

    const columns =[
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
            title: 'Merchant Name',
            dataIndex: 'merchantName',
            key: 'MerchantName',
        },
        {
            title: 'CardNumber',
            dataIndex: 'cardNumber',
            key: 'cardNumber',
        },
        {
            title: "Action",
            dataIndex: "action",
            render(_, {cardNumber}:LoyalityDetails) {
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

   return(
       <div>
           <h2>Now lets link your loyalty cards</h2>
           <Card>
               <Form
                   layout="vertical"
                   requiredMark={false}
                   className={styles.form}
                   onFieldsChange={(_, allFields)=>{
                       setFormData(allFields);
                   }}>
                   <Form.Item
                       name="merchantName"
                       label="Merchant List"
                   >
                       <Select placeholder="Merchant List">
                           {generateOptions()}
                       </Select>
                   </Form.Item>
                   <Form.Item name="cardHolderName" label="Card Holder Name">
                       <Input />
                   </Form.Item>
                   <Form.Item name="cardName" label="Card Label">
                       <Input />
                   </Form.Item>
                   <Form.Item name="cardNumber" label="Card Number">
                       <Input />
                   </Form.Item>
               </Form>
               <div className={styles.buttonContainer}>
                   <Button
                       type="primary"
                       className={styles.addButton}
                       onClick={()=>{
                           const data: LoyalityDetails = formData.reduce((acc, {name,  value})=> {
                               // @ts-ignore
                               acc[name[0]] = value;
                               return acc;
                           },{}) as LoyalityDetails;

                           setDataSource([...dataSource, data]);
                       }}
                   >Add</Button>
               </div>
           </Card>
           <div className={styles.tableContainer}>
               <h2>Card Details </h2>
               <Table columns={columns} dataSource={dataSource}/>
           </div>
       </div>
   )
}