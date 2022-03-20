

function UpdateProfile() {
    return (
        <>
            <form className="mx-1 mx-md-4 mb-4">
            <h3 className="card-header mb-4">Modifier mon profil</h3>

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
        </>
    )
}

export default UpdateProfile;