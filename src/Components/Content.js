import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import { Tabs } from "antd";
import {
  MailOutlined,
  SettingOutlined,
  UserOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import Blog from "./Blog";
import Forms from "./Forms";
import Survey from "./Survey";
import Subscriptions from "./Subscriptions";
import Images from "./Images";
function Content() {
  return (
    <Tabs Key="1" tabPosition="left">
      <Tabs.TabPane
        tab={
          <BrowserRouter>
            <NavLink to="content/blog" style={{ color: "#595959" }}>
              <UserOutlined /> Blogs
            </NavLink>
          </BrowserRouter>
        }
        key="1"
      >
        <Blog />
      </Tabs.TabPane>

      <Tabs.TabPane
        tab={
          <BrowserRouter>
            <NavLink to="/content/forms" style={{ color: "#595959" }}>
              <SettingOutlined /> Forms
            </NavLink>
          </BrowserRouter>
        }
        key="2"
      >
        <Forms></Forms>
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <BrowserRouter>
            <NavLink to="/content/survey" style={{ color: "#595959" }}>
              <BulbOutlined /> Survey
            </NavLink>
          </BrowserRouter>
        }
        key="3"
      >
        <Survey />
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <BrowserRouter>
            <NavLink to="content/subscription" style={{ color: "#595959" }}>
              <MailOutlined /> Subscriptions
            </NavLink>
          </BrowserRouter>
        }
        key="4"
      >
        <Subscriptions />
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <BrowserRouter>
            <NavLink to="/content/images" style={{ color: "#595959" }}>
              <SettingOutlined />
              Images
            </NavLink>
          </BrowserRouter>
        }
        key="5"
      >
        <Images />
      </Tabs.TabPane>
    </Tabs>
  );
}

export default Content;
