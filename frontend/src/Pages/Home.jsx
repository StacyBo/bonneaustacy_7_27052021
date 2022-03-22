import { useContext } from "react";
import UserContext from "../contexts/userContext";
import Navbar from '../components/Navbar';
import CreatePost from '../components/CreatePost';
import Posts from '../components/Posts';
import { Link } from "react-router-dom";


function Home() {
    const [user] = useContext(UserContext);
    if (user) {
        return (
            <>
                < Navbar />
                <main>
                    <section>
                        < CreatePost />
                        <div className="container card h-100 w-75 mb-4 pt-2">
                            < Posts />
                            <span className="border-top mt-2 mb-2"></span>
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