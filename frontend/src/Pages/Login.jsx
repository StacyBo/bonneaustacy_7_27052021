import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";
import { postLogin } from "../utils/apiCalls";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import UserContext from "../contexts/userContext";
import LogoGroupomania from '../logogroupo.svg';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [user, setUser] = useContext(UserContext);
    const [loginFail, setLoginFail] = useState(false);
    const validateForm = () => {
        if (!email) {
            alert('Email invalide');
            return false;
        }
        if (!password) {
            alert('Mot de passe invalide');
            return false;
        }
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateForm()) {
            return
        }
        postLogin({ password, email }).then(function (response) {
            if (response.user && response.user.id > 0 && response.token) {
                localStorage.setItem("token", response.token);
                setUser(response.user);
                navigate('/');
            } else {
                setLoginFail(true)
            }
        })
    };

    return (
        <>
            < Navbar />
            <main className="container w-75">
                <div className="card p-4">
                    <h2 className="text-center mb-4">Se connecter</h2>
                    <section className="vh-50">
                        <div className="container h-50 w-75">
                            <div className="row d-flex justify-content-center h-100">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    {loginFail ?
                                        <span className="text-danger text-center"><p>Connexion impossible !</p></span>
                                        :
                                        null
                                    }
                                    <div>
                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className="btn btn-danger mt-2">Se connecter</button>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-center mt-3">
                                        <p className="text-center">ou si vous ne possédez pas de compte</p>
                                        <Link to="/signup">
                                            <button className="btn btn-outline-danger" type="submit">S'inscrire ici</button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="container-logo">
                    <img className="logogroupo" src={LogoGroupomania} alt="Logo Groupomania" />
                </div>
            </main>
        </>
    );
}

export default Login;