import { Link } from 'react-router-dom';
import Navbar from './Navbar';


const Login = () => {
    return (
        <>
            < Navbar />
            <main className="container">
                <h2>Se connecter</h2>
                <section className="vh-100">
                    <div className="container h-100 w-50">
                        <div className="row d-flex justify-content-center h-100">
                            <form className="mx-1 mx-md-4">
                                <div class="mb-3 justify-content-center">
                                    <label for="exampleInputEmail1" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3 justify-content-center">
                                    <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <Link to="/"><button type="submit" class="btn btn-danger">Se connecter</button></Link>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>)
}

export default Login;