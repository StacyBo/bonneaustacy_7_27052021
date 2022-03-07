import { Link, useNavigate } from "react-router-dom";
import IsAuthenticatedContext from "../contexts/isAuthenticatedContext";
import UserContext from "../contexts/userContext";
import { useContext } from "react";


const Navbar = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useContext(IsAuthenticatedContext);
    const [user] = useContext(UserContext);

    const logout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        navigate('/login');
    }

    const updateProfile = () => {
        navigate('/profile/' + user.id);
    }

    const displayConnectedButtons = () => {
        if (isAuthenticated) {
            return (
                <>
                    <div className="user-connected me-5">
                        {user.firstName} {user.lastName} est connecté
                    </div>
                    <button className="btn btn-outline-danger mx-1" type="submit" onClick={updateProfile}>Modifier mon profil</button>
                    <button className="btn btn-outline-danger mx-1" type="submit" onClick={logout}>Se déconnecter</button>
                </>
            );
        } else {
            return (
                <>
                    <Link to="/signup"><button className="btn btn-outline-danger" type="submit">S'inscrire</button></Link>
                    <Link to="/login"><button className="btn btn-outline-danger mx-2" type="submit">Se connecter</button></Link>
                </>
            )
        }
    }
    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Groupomania</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Accueil</Link>
                        </li>
                    </ul>
                    {displayConnectedButtons()}
                </div>
            </div>
        </nav>
    );

}

export default Navbar;