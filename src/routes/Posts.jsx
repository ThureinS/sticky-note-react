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
