import { useContext, useState, useEffect } from "react";
import UserContext from "../contexts/userContext";
import Navbar from '../components/Navbar';
import CreatePost from '../components/CreatePost';
import Posts from '../components/Posts';
import { Link } from "react-router-dom";
import { getPosts, deletePost } from '../utils/apiCalls';


function Home() {
    const [user] = useContext(UserContext);
    const [posts, setPosts] = useState([]);

    const refreshPosts = () => {
        getPosts().then((postsResult) => {
            setPosts(postsResult)
        })
    }
    const onPostCreated = () => {
        refreshPosts()
    }
    const onPostUpdated = () => {
        refreshPosts();
    }
    const handlePostDelete = (post) => {
        deletePost({post : post}).then(function () {
            refreshPosts();
        });
    }
    useEffect(() => {
        if (user) {
            refreshPosts();
        }
    }, [user]);

    if (user) {
        return (
            <>
                < Navbar />
                <main>
                    <section>
                        < CreatePost onPostCreated={onPostCreated} />
                        <div className="container card h-100 w-75 mb-3 pt-1">
                            < Posts posts={posts} handlePostDelete={handlePostDelete} onPostUpdated={onPostUpdated}/>
                        </div>
                    </section>
                </main>
            </>)
    } else {
        return (
            <div className="text-center mt-4">
                <p>Connectez-vous pour voir la liste des publications !</p>
                <Link to="/login">
                    <button className="btn btn-outline-danger" type="submit">Se connecter</button>
                </Link>
            </div>
        )
    }
}

export default Home;