import React from "react";
import {
  Layout,
  Select,
  Button,
  Card,
  Space,
  Avatar,
  Row,
  Col,
  Radio,
  Badge,
} from "antd";
import {
  QuestionCircleOutlined,
  BellOutlined,
  UserOutlined,
  DownOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

import { GoPlus } from "react-icons/go";
import { MdComputer } from "react-icons/md";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { AiOutlineMobile, AiOutlineTablet } from "react-icons/ai";

function EditorPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Layout>
        <Layout.Header
          style={{
            backgroundColor: "#fff",
            padding: "0 16px",
          }}
        >
          <Row justify="space-between">
            <Col>
              <Row gutter={6} align="middle">
                <Col>
                  <img
                    src="https://picsum.photos/200"
                    style={{ width: 82, height: 30, marginBottom: "4px" }}
                  ></img>
                </Col>
                <Col>
                  <Button icon={<ArrowLeftOutlined />}>Back</Button>
                </Col>
                <Col>
                  <Select
                    defaultValue="Logicwind.com"
                    style={{ width: "293px" }}
                  >
                    <Select.Option value="Logicwind.com">
                      Logicwind.com
                    </Select.Option>
                    <Select.Option value="Webnext.com">
                      Webnext.com
                    </Select.Option>
                  </Select>
                </Col>
                <Col>
                  <Radio.Group buttonStyle="solid">
                    <Radio.Button value="pages">Pages</Radio.Button>
                    <Radio.Button value="components">Components</Radio.Button>
                    <Radio.Button value="theme">Theme</Radio.Button>
                    <Radio.Button value="integration">Integration</Radio.Button>
                  </Radio.Group>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row align="middle">
                <Col>
                  <Button
                    icon={<QuestionCircleOutlined style={{ fontSize: 20 }} />}
                    type="text"
                  ></Button>
                </Col>
                <Col>
                  <Button
                    icon={
                      <Badge count={22}>
                        <BellOutlined style={{ fontSize: 20 }} />
                      </Badge>
                    }
                    type="text"
                  ></Button>
                </Col>
                <Col>
                  <Button type="text">
                    <Avatar src="https://picsum.photos/200" />
                    <DownOutlined style={{ fontSize: 10 }} />
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Layout.Header>
        <Layout>
          <Layout.Sider width="33%">
            <Card
              size="small"
              style={{ minHeight: "90vh" }}
              title={
                <Row justify="space-between">
                  <Col>
                    <Select defaultValue="Home(/home)"></Select>
                  </Col>
                  <Col>
                    <Button icon={<GoPlus />}>Add page</Button>
                  </Col>
                </Row>
              }
            ></Card>
          </Layout.Sider>

          <Layout.Content style={{ paddingLeft: 8 }}>
            <Card
              size="small"
              style={{ minHeight: "90vh" }}
              title={
                <Row>
                  <Col sm={23} md={23} lg={23} xl={23}>
                    <Row justify="center">
                      <Radio.Group>
                        <Radio.Button
                          style={{ fontSize: 20, padding: 5 }}
                          value="desktop"
                        >
                          <MdComputer />
                        </Radio.Button>
                        <Radio.Button
                          style={{ fontSize: 20, padding: 5 }}
                          value="tab"
                        >
                          <AiOutlineTablet />
                        </Radio.Button>
                        <Radio.Button
                          style={{ fontSize: 20, padding: 5 }}
                          value="mobile"
                        >
                          <AiOutlineMobile />
                        </Radio.Button>
                      </Radio.Group>
                    </Row>
                  </Col>
                  <Col sm={1} md={1} lg={1} xl={1}>
                    <Row>
                      <Button icon={<BsFileEarmarkCheck />}></Button>
                    </Row>
                  </Col>
                </Row>
              }
            ></Card>
          </Layout.Content>
        </Layout>
      </Layout>
      <div></div>
    </div>
  );
}

export default EditorPage;