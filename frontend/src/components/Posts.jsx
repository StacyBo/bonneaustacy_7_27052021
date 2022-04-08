import Post from "./Post";
import { useContext } from "react";
import UserContext from "../contexts/userContext";

const Posts = (props) => {
    //const [user] = useContext(UserContext);

    const addPosts = () => {
        return props.posts.map((post) => {
            return < Post
                key={post.id}
                post={post}
                handlePostDelete={() => props.handlePostDelete(post)}
                onPostUpdated={props.onPostUpdated}
            />;
        })
    }

    return (
        <>
            <section>
                {addPosts()}
            </section>
        </>
    )
}

export default Posts;