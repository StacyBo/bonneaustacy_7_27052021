import NavbarCo from './NavbarCo';

const Profile = () => {
    return (
        <>
            < NavbarCo />
            <main className="container">
                <h2>Mon profil</h2>
                <section className="vh-100">
                    <div className="container h-100 w-50">
                        <div className="row d-flex justify-content-center h-100">
                            <form className="mx-1 mx-md-4">
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <label className="form-label" htmlFor="lastname">Nom</label>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <label className="form-label" htmlFor="firstname" >Prénom</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <label className="form-label" htmlFor="email">Email</label>
                                    </div>
                                </div>
                                
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

                                <div className="d-flex justify-content-end mt-2 mb-2">
                                    <button type="button" className="btn btn-danger btn-sm mx-2">Modifier</button>
                                    <button type="button" className="btn btn-danger btn-sm">Supprimer mon compte</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </section>

            </main>
        </>)
}

export default Profile;