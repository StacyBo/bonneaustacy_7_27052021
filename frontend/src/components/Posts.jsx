import Post from "./Post";
import UpdatePost from "./UpdatePost";
import { useContext } from "react";
import UserContext from "../contexts/userContext";

const Posts = (props) => {
    const [user,setUser] = useContext(UserContext);

    return (
        <>
            <section>
                {props.posts.map((post, index) => {
                    return < Post key={index} post={post} handlePostDelete={() => props.handlePostDelete(post)} />;
                })}

            </section>
        </>
    )
}

export default Posts;