import Navbar from "./Navbar";
import { postUser } from "../utils/apiCalls";
import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const navigate = useNavigate();
    const inputEmailValidation = useRef();
    const validateForm = () => {
        let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/;
        console.log(email);
        if (regexEmail.test(email) === false) {
            console.log("rgetg")
            inputEmailValidation.current.textContent = 'Veuillez saisir une adresse Email valide';
            inputEmailValidation.current.style.display = 'block';
            return false;
        } else {
            inputEmailValidation.current.textContent = '';
            inputEmailValidation.current.style.display = "none";
        }
        if (!lastName) {
            alert('Nom invalide');
            return false;
        }
        if (!firstName) {
            alert('Prénom invalide');
            return false;
        }
        if (!email) {
            alert('Email invalide');
            return false;
        }
        if ( password === "" || password.length < 9) {
            alert('Mot de passe invalide');
            return false;
        }
        if (password !== passwordRepeat) {
            alert('Les mots de passe ne correspondent pas');
            return false;
        }
        return true;
    };

    const onClickHandler = () => {
        console.log("ok")
        if (!validateForm()) {
            return;
        }

        postUser({ firstName, lastName, password, email }).then(function () {
            navigate('/login');
        })
    };
    return (
        <>
            <Navbar />
            <main className="container">
                <h2>S'inscrire</h2>
                <section className="vh-100">
                    <div className="container h-100 w-50">
                        <div className="row d-flex justify-content-center h-100">
                            <form className="mx-1 mx-md-4">
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <label className="form-label" htmlFor="lastname">Nom</label>
                                        <input type="text" id="lastname"
                                            className="form-control" onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <label className="form-label" htmlFor="firstname">Prénom</label>
                                        <input type="text" id="firstname"
                                            className="form-control" onChange={(e) => setFirstName(e.target.value)} />
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <label className="form-label" htmlFor="email">Email</label>
                                        <input type="text" id="email"
                                            className="form-control" onChange={(e) => setEmail(e.target.value)} />
                                            <div class="invalid-feedback" ref={inputEmailValidation}></div>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <label className="form-label" htmlFor="password">Mot de passe</label>
                                        <input type="password" id="password"
                                            className="form-control" onChange={(e) => setPassword(e.target.value)} />                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <label className="form-label" htmlFor="password-repeat">Répétez votre mot de passe</label>
                                        <input type="password" id="password-repeat"
                                            className="form-control" onChange={(e) => setPasswordRepeat(e.target.value)} />                                    </div>
                                </div>

                                <div className="d-flex mx-4 mb-3 mb-lg-4">
                                    <button type="button" className="btn btn-danger btn-lg" onClick={onClickHandler}>S'inscrire</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>)
}

export default Signup;