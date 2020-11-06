import React from "react";
import { Link } from "react-router-dom";
import { PageHeader } from 'antd';
import { Menu } from 'antd';

function Nav() {
  return (
    <>
      <PageHeader
        className="site-page-header-responsive"
        title="Hacker News"
        subTitle="in React"
        footer={
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="welcome">
              <Link to="/welcome">Welcome</Link>
            </Menu.Item>
            <Menu.Item key="new">
              <Link to="/new">New</Link>
            </Menu.Item>
            <Menu.Item key="best">
              <Link to="/best">Best</Link>
            </Menu.Item>
            <Menu.Item key="jobs">
              <Link to="/jobs">Jobs</Link>
            </Menu.Item>
            <Menu.Item key="submit">
              <Link to="/submit">Submit</Link>
            </Menu.Item>
          </Menu>
        }
      >
      </PageHeader>
    </>
  );
}

export default Nav;
