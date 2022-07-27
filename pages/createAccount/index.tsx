import React, {useState} from "react";
import {Button, Checkbox, Form, Input, message, Steps,DatePicker} from 'antd';
import AddBankDetails from "../../components/AddBankDetails";
import LoyaltyCards from "../../components/LoyaltyCards";

const { Step } = Steps;

const steps = [
    {
        title: 'User Details',
        content: 1,
    },
    {
        title: 'Set Password',
        content: 2,
    },
    {
        title: 'Card Details',
        content: 3,
    },
    {
        title: 'Loyalty Card Details',
        content: 4,
    },
];

export default function JoinRewards(){
    const [current, setCurrent] = useState(0);
    return (
        <div>
            <Steps responsive current={current}>
                {steps.map((item)=>{
                   return( <Step key={item.title} title={item.title} />);
                })}
            </Steps>
            <div>
                {steps[current].content === 1 ? (
                    <Form layout="vertical" >
                        <Form.Item name="firstName" label="First Name" rules={[{ required: true }]}>
                            <Input placeholder="Enter your First Name" />
                        </Form.Item>
                        <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
                            <Input placeholder="Enter your Last Name"/>
                        </Form.Item>
                        <Form.Item name="dateOfBirth" label="Date of Birth" rules={[{ required: true}]}>
                            <DatePicker/>
                        </Form.Item>
                        <Form.Item name="address" label="Address" rules={[{ required: true }]}>
                            <Input placeholder="Enter your Address "/>
                        </Form.Item>
                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>I agree to the terms </Checkbox>
                        </Form.Item>
                    </Form>
                ): null}
            </div>
            <div>
                {steps[current].content === 2 ? (
                    <Form layout="vertical">
                        <Form.Item name="password" label="PLease enter a new password" rules={[{ required: true }]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item name="password" label="Confirm password" rules={[{ required: true }]}>
                            <Input.Password />
                        </Form.Item>
                    </Form>
                ) : null}
            </div>
            <div>
                {steps[current].content === 3 ? (
                    <AddBankDetails/>
                ): null}
            </div>
            <div>
                {steps[current].content === 4 ? (
                    <LoyaltyCards/>
                ): null}
            </div>
            <Button onClick={ ()=> setCurrent(current-1)} disabled={current==0} type="primary">
                Prev
            </Button>
            <Button onClick={ ()=> setCurrent(current+1)} type="primary">
                Next
            </Button>
        </div>
    )
};
