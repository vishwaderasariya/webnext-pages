import React from "react";
import { Tabs } from "antd";

function Content() {
  return (
    <div style={{ height: "80vh" }}>
      <Tabs defaultActiveKey="1" tabPosition="left">
        <Tabs.TabPane tab="Blogs" key="1"></Tabs.TabPane>
        <Tabs.TabPane tab="Forms" key="2"></Tabs.TabPane>
        <Tabs.TabPane tab="Surveys" key="3"></Tabs.TabPane>
        <Tabs.TabPane tab="Subscriptions" key="4"></Tabs.TabPane>
        <Tabs.TabPane tab="Images" key="5"></Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Content;
