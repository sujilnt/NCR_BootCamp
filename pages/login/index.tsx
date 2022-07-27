import React from "react";
import {Button, Form, Input} from "antd";

export default function Login(){
    return(
        <div>
         <Form layout="vertical" requiredMark={false}>
             <Form.Item name="username" label="User Name"  rules={[{ required: true }]}>
                 <Input placeholder="Enter the username" />
             </Form.Item>
             <Form.Item name="password" label="PLease enter a new password" rules={[{ required: true }]}>
                 <Input.Password />
             </Form.Item>
             <Button type={"primary"}>Submit</Button>
         </Form>
        </div>
    );
}