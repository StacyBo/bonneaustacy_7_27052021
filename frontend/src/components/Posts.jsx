import Post from "./Post";

const Posts = (props) => {

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