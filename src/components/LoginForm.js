import React from 'react'
import { Card, Input, Form, Button } from './form'

export default function LoginForm(){

    return(
        <Card>
            <Form>
                <Input for="email" type="email" />
                <Input for="password" type="password" />
                <Button>login</Button>
            </Form>
        </Card>
    )

}