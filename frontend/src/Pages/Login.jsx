import Navbar from '../components/Navbar';
import { postLogin } from "../utils/apiCalls";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import UserContext from "../contexts/userContext";
import { set } from 'react-hook-form';

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
            <main className="container">
                <h2>Se connecter</h2>
                <section className="vh-100">
                    <div className="container h-100 w-50">
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
                                <button type="submit" className="btn btn-danger">Se connecter</button>
                                {loginFail ?
                                <span className="text-danger">Connexion impossible !</span>
                                :
                                null
                                }
                            </form>
                        </div>
                    </div>
                </section>

            </main>

        </>
    );
}

export default Login;