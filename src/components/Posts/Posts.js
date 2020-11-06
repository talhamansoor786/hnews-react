/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import PostList from "../PostList/PostList";
import { fetchMainPosts, fetchPostIds, fetchPosts } from "../../utils/api";
import { Divider } from 'antd';

function Posts(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postIds, setPostIds] = useState([]);
  const SHOW_MORE_FETCH_AMOUNT = 10;

  useEffect(() => {
    setIsLoading(true);
    fetchMainPosts(props.type).then((response) => {
      setPosts(response);
      setIsLoading(false);
    });

    fetchPostIds(props.type)
      .then((response) => setPostIds(response))
      .catch((error) => console.log(error));
  }, [props.type]);

  const showMorePosts = () => {
    const currentPostLength = posts.length;
    fetchPosts(
      postIds.slice(
        currentPostLength - 1,
        currentPostLength + SHOW_MORE_FETCH_AMOUNT
      )
    ).then((response) => setPosts(posts.concat(response)));
  };

  return (
    <>
      {isLoading ? (
        <>
          <ul className="ant-list-items"><li className="ant-list-item">Loading...</li></ul>
        </>
      ) : (
        <div>
          <PostList posts={posts} />
          <Divider />
          <div className="show-more-block">
            <button type="button" className="ant-btn" onClick={showMorePosts}>
              <span>Load more</span>
            </button>
          </div>
          <Divider />
        </div>
      )}
    </>
  );
}

export default Posts;
