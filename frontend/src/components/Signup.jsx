import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Signup = () => {
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
                                            className="form-control" />
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <label className="form-label" htmlFor="firstname">Prénom</label>
                                        <input type="text" id="firstname"
                                            className="form-control" />
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <label className="form-label" htmlFor="email">Email</label>
                                        <input type="email" id="email"
                                            className="form-control" />
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <label className="form-label" htmlFor="password">Mot de passe</label>
                                        <input type="password" id="password" className="form-control" />
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <label className="form-label" htmlFor="password-repeat">Répétez votre mot de passe</label>
                                        <input type="password" id="password-repeat" className="form-control" />
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <div className="form-check">
                                        <label className="form-check-label" htmlFor="is-admin">Modérateur
                                            <input type="checkbox" className="form-check-input" id="is-admin" />
                                        </label>
                                    </div>
                                </div>
                                <div className="d-flex mx-4 mb-3 mb-lg-4">
                                <Link to="/"><button type="button" className="btn btn-danger btn-lg">S'inscrire</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>)
}

export default Signup;