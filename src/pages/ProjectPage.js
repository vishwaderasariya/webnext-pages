import React from "react";
import { PageHeader, Select, Button, Tabs } from "antd";
import {
  QuestionCircleOutlined,
  BellOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import Content from "../Components/Content";

function ProjectPage() {
  return (
    <div>
      <PageHeader style={{ border: "1px solid #D9D9D9" }}>
        <div style={{ display: "flex" }}>
          <Select defaultValue="Logicwind.com" style={{ width: "40%" }}>
            <Select.Option value="Logicwind.com">Logicwind.com</Select.Option>
            <Select.Option value="Webnext.com">Webnext.com</Select.Option>
          </Select>
          <Button style={{ width: "5%", marginLeft: "2%" }}>Editor</Button>

          <QuestionCircleOutlined
            style={{ marginLeft: "70%", marginRight: "2%" }}
          />
          <BellOutlined style={{ marginRight: "2%" }} />
          <UserOutlined style={{ marginRight: "2%" }} />
          <DownOutlined style={{ marginRight: "2%" }} />
        </div>
      </PageHeader>
      <div style={{ display: "flex", borderBottom: "1px solid #C4C4C4" }}>
        <Tabs defaultActiveKey="1" style={{ marginLeft: "2%" }}>
          <Tabs.TabPane tab="General" key="1"></Tabs.TabPane>
          <Tabs.TabPane tab="SEO" key="2"></Tabs.TabPane>
          <Tabs.TabPane tab="Analytics" key="3"></Tabs.TabPane>
          <Tabs.TabPane tab="Plugins" key="4"></Tabs.TabPane>
          <Tabs.TabPane tab="Content" key="5">
            <Content />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Assests" key="6"></Tabs.TabPane>
          <Tabs.TabPane tab="Access" key="7"></Tabs.TabPane>
          <Tabs.TabPane tab="Settings" key="8"></Tabs.TabPane>
        </Tabs>
        <Button type="primary" style={{ marginLeft: "50%", marginTop: "1%" }}>
          Editor
        </Button>
      </div>
    </div>
  );
}

export default ProjectPage;
