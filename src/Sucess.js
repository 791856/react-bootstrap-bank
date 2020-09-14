import React, { useState } from 'react';
import { Result, Button } from 'antd';
export const Sucess = () => {

  return (
      <div>
    <Result
      status="success"
      title="Successfully Opened Account"
      extra={[
        <Button type="primary" key="console" shape="round" href="http://localhost:3000/savings">
          Go To Home
        </Button>,
      ]}
    />
    </div>

  )
}


