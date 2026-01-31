import { useLoaderData } from "react-router";
import Post from "./Post";
import classes from "./PostList.module.css";
import { useEffect, useState } from "react";

const PostList = () => {
  const posts = useLoaderData();

  function addPostHandler(postData) {
    setPosts((prevPosts) => [postData, ...prevPosts]);
  }

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              body={post.body}
              author={post.author}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no notes yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
