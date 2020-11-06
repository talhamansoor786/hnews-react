import React from "react";
import moment from "moment";
import { truncateString } from "../../utils/truncate";
import { Tag } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';


function PostList({ posts }) {
  return (
    <div className="ant-spin-nested-loading">
      <div className="ant-spin-container">
        <ul className="ant-list-items">
          {posts &&
            !!posts.length &&
            posts.map((post) => {
              return (
                <li
                  comments={post && post?.kids && post?.kids.length}
                  link={post?.url}
                  key={post.id}
                  className="ant-list-item last-item-next-row"
                >
                  <h2 className="ant-list-item-meta-title">
                    <a href={post?.url} target="_blank" rel="noopener noreferrer">{truncateString(post?.title, 60)}</a>
                  </h2>
                  <span>
                    <span className="m-l-10 m-l-md-0">
                      <Tag icon={<ClockCircleOutlined />} color="default">
                        {moment.unix(post?.time).format("YYYY-MM-DD")}
                      </Tag>
                    </span>
                    <span className="ant-badge">
                      <span>Comments&nbsp;</span>
                      <sup data-show="true" className="ant-scroll-number ant-badge-count position-static">
                        <span className="ant-scroll-number-only">
                          <p className="ant-scroll-number-only-unit current">{post?.descendants}</p>
                        </span>
                      </sup>
                    </span>
                    {" | "}
                    points <span className="ant-tag ant-tag-green">{post?.score}</span>
                  </span>
                  <span className="order-1 ant-list-item-meta-description">
                    <em>by {post?.by}</em>
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default PostList;
