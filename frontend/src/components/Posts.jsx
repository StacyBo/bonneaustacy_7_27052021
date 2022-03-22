import { useEffect, useState } from "react";
import { getPosts } from "../utils/apiCalls";
import Post from "./Post";

const Posts = (props) => {


return (
    <>
        <section>
            {props.posts.map((post, index) => {
                return < Post key={index} post={post}
                />
            })}

        </section>
    </>
)
}

export default Posts;