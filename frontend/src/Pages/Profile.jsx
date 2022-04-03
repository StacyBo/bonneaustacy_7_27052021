import Navbar from '../components/Navbar';
import UserContext from "../contexts/userContext";
import { useContext } from "react";
//import UpdateProfile from "../components/UpdateProfile";
import LastPosts from "../components/LastPosts"


function Profile() {
    const [user] = useContext(UserContext);

    return (
        <>
            < Navbar />
            <main className="container">
                <section className="">
                    <div className="container card h-100 w-50 mb-4 pt-2">
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