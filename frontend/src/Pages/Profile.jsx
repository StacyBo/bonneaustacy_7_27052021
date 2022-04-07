import Navbar from '../components/Navbar';
import UserContext from "../contexts/userContext";
import { useContext } from "react";
import LastPosts from "../components/LastPosts"
import {deleteUser} from "../utils/apiCalls";
import { Link, useNavigate } from "react-router-dom";


function Profile() {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();

    const onClickDelete = () => {
        deleteUser().then((response) => {
            if (response && response.status === 200) {
                navigate('/login');
                setUser(null);
                localStorage.removeItem("token");
            }
        });
    }

    return (
        <>
            < Navbar />
            <main className="container">
                <section className="">
                    <div className="container card h-100 w-75 mb-4 pt-2">
                        <h3 className="card-header mb-4">Mon profil</h3>
                        <div className="row d-flex justify-content-center h-100">
                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" htmlFor="lastname">{user.lastName}</label>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" htmlFor="firstname" >{user.firstName}</label>
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-2">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" htmlFor="email">{user.email}</label>
                                </div>
                            </div>

                            <div className="d-flex justify-content-end mt-2 mb-2">
                                <button type="button" className="btn btn-danger btn-sm" onClick={onClickDelete}>Supprimer mon compte</button>
                            </div>

                            {/*<span className="border-top mt-2 mb-2"></span>

                            <UpdateProfile />*/}
                        </div>
                    </div>
                    <LastPosts />
                </section>

            </main>
        </>)
}

export default Profile;