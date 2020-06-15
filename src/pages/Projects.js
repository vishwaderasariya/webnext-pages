import React from "react";
import { Card, Space, PageHeader } from "antd";
import {
  PlusSquareTwoTone,
  QuestionCircleOutlined,
  BellOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

function Projects() {
  return (
    <div>
      <PageHeader style={{ border: "1px solid #D9D9D9" }}>
        <div>
          <QuestionCircleOutlined
            style={{ marginLeft: "85%", marginRight: "2%" }}
          />
          <BellOutlined style={{ marginRight: "2%" }} />
          <UserOutlined style={{ marginRight: "2%" }} />
          <DownOutlined />
        </div>
      </PageHeader>
      <div
        style={{
          display: "flex",
          marginTop: "2%",
          marginLeft: "2%",
        }}
      >
        <Space>
          <Card
            style={{
              position: "absolute",
              width: "23%",
              height: "25%",
              border: "1px solid #C4C4C4",
            }}
          >
            <PlusSquareTwoTone />
          </Card>
          <Card
            title="webnext.com"
            style={{
              position: "absolute",
              width: "23%",
              height: "26%",
              border: "1px solid #C4C4C4",
              marginLeft: "25%",
            }}
          >
            <div
              style={{
                display: "inline",
              }}
            >
              <p>Summary</p>
              <p>Analytics</p>
              <p>Other</p>
              <p>info</p>
            </div>
          </Card>
          <Card
            title="Logicwind.com"
            style={{
              position: "absolute",
              width: "23%",
              height: "26%",
              border: "1px solid #C4C4C4",
              marginLeft: "50%",
            }}
          >
            <div
              style={{
                display: "inline",
              }}
            >
              <p>Summary</p>
              <p>Analytics</p>
              <p>Other</p>
              <p>info</p>
            </div>
          </Card>
        </Space>
      </div>
    </div>
  );
}

export default Projects;
