import {Link, useNavigate} from "react-router-dom";

const Navbar = () => {
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
                <Link to="/signup"><button className="btn btn-danger mx-2" type="submit">S'inscrire</button></Link>
                <Link to="/login"><button className="btn btn-danger" type="submit">Se connecter</button></Link>
            </div>
        </div>
    </nav>
)}

export default Navbar;