import React, { useState } from 'react';
import { Form, FormInput, FormGroup } from 'shards-react';
import { Card, CardHeader, CardTitle, CardBody, CardFooter, Button } from 'shards-react';


export default function SubscriberForgetPassword() {

    const [email, setEmail] = useState('');

    

    return (
        <div>
            <Card className="login" theme="info" style={{ maxWidth: '450px' }}>
                <CardHeader></CardHeader>
                {/* <CardImg src="https://place-hold.it/300x200" /> */}
                <CardBody>
                    <CardTitle className="tex">Subscriber Forget Password</CardTitle>
                    <Form >
                        <FormGroup>
                            <label htmlFor="email">Email</label>
                            <FormInput
                                type="email"
                                id="email"
                                placeholder="Email"
                                onChange={event => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </FormGroup>
                        <Button className="button1" theme="success" >
                            Submit
                        </Button>
                    </Form>
                </CardBody>
                <CardFooter>
                    <a href="/subscriber/login/">Log in</a>
                </CardFooter>
            </Card>
        </div>
    );
}