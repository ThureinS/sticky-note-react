import { useState } from "react";
import PostList from "../components/PostList";
import { Outlet } from "react-router";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const postData = await response.json();
  return postData.posts;
}
