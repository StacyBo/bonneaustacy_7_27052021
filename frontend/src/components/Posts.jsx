import { useEffect, useState } from "react";
import { getPosts } from "../utils/apiCalls";
import Post from "./Post";



const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts()
            .then((postsResult) => {
                setPosts(postsResult)
            })
    },
        [])



    return (
        <>
            <section>
                {posts.map((postsResult) => {
                    return < Post post={postsResult}
                    />
                })}

            </section>
        </>
    )
}

export default Posts;