import Post from "./Post";
import { useContext } from "react";
import UserContext from "../contexts/userContext";

const Posts = (props) => {
    //const [user] = useContext(UserContext);

    return (
        <>
            <section>
                {props.posts.map((post,index) => {
                    return < Post key={index} post={post} handlePostDelete={() => props.handlePostDelete(post)} onPostUpdated={props.onPostUpdated} />;
                })}

            </section>
        </>
    )
}

export default Posts;