import Post from "./Post";
import classes from "./PostList.module.css";
import { useEffect, useState } from "react";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:8080/posts');
            const postData = await response.json();
            setPosts(postData.posts);
        }
        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json",
            }
        });
        setPosts((prevPosts) => [postData, ...prevPosts]);
    }

    return (
        <>


            {!isLoading && posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post key={post.body} body={post.body} author={post.author} />
                    ))}
                </ul>
            )}
            {isLoading && posts.length === 0 && (
                <div style={{ textAlign: "center", color: "white" }}>
                    <h2>There are no notes yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
            {isLoading && (<h1 style={{ textAlign: "center", color: "white" }}>Loading...</h1>)}
        </>
    );
};

export default PostList;
