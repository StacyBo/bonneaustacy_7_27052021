import Navbar from './Navbar';

const Updatepost = () => {
    return (
        <>
            < Navbar />
            <main>
                <section>
                    <div className="container card h-100 w-75 mb-4 pt-2">
                        <div className="card-body d-flex pt-1 pb-0">
                            <h5 className="card-title">Prénom Nom</h5>
                        </div>
                        <div className="card-body text-card mx-3 my-1">
                            <textarea className="form-control mb-2" rows="1" id="comment" name="text" placeholder="Ancien post"></textarea>
                            <img src="..." className="img-fluid" alt="..."></img>
                        </div>
                        <div className="d-flex justify-content-end mt-2 mb-2">
                            <div className="container-img d-flex justify-content-end align-items-center">
                                <p className="card-text mx-2 pt-3"><small className="text-muted">Nomdelimage.jpg</small></p>
                                <i className="far fa-image"></i>
                            </div>
                            <button type="button" className="btn btn-danger btn-sm mx-2">Enregistrer</button>
                            <button type="button" className="btn btn-danger btn-sm">Supprimer</button>
                        </div>
                    </div>
                </section>
            </main>
        </>)
}

export default Updatepost;