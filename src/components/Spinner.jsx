import React from "react";
import { Space, Spin } from "antd";
const Spinner = () => (
  <div className="min-h-[80vh] flex justify-center items-center">
    <Space size="middle">
      <Spin size="small" />
      <Spin />
      <Spin size="large" />
    </Space>
  </div>
);
export default Spinner;
