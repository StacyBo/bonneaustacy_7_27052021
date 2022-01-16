import Navbar from './Navbar';

const Home = () => {
    return (
        <>
            < Navbar />
            <main>
                <section>
                    <div className="container h-100 w-75 mb-2">
                        <label className="comment mb-2" for="comment">Que voulez-vous partager aujourd'hui ?</label>
                        <textarea className="form-control mb-2" rows="1" id="comment" name="text" placeholder="Écrivez ce que vous voulez ici !"></textarea>
                        <div className="d-flex justify-content-end align-items-center">
                            <p className="card-text mx-2 pt-3"><small className="text-muted">Nomdelimage.jpg</small></p>
                            <i className="far fa-image"></i>
                            <button type="button" className="btn btn-danger btn-sm">Poster</button>
                        </div>
                    </div>
                    <div className="container card h-100 w-75 mb-4 pt-2">
                        <div className="card-body d-flex pt-1 pb-0">
                            <h5 className="card-title">Prénom Nom</h5>
                            <p className="card-text mx-2"><small className="text-muted">date & heure</small></p>
                        </div>
                        <div className="card-body text-card mx-3 my-1">
                            <p className="card-text"> Hello à tous !<br></br>Comment allez-vous aujourd'hui !?</p>
                            <img src="..." className="img-fluid" alt="..."></img>
                        </div>
                        <div className="d-flex justify-content-end mt-2 mb-2">
                            <button type="button" className="btn btn-danger btn-sm">Commenter</button>
                            <button type="button" className="btn btn-danger btn-sm mx-2">Modifier</button>
                            <button type="button" className="btn btn-danger btn-sm">Supprimer</button>
                        </div>

                        <span className="border-top mt-2 mb-2"></span>

                        <div className="container h-100 mb-3">
                            <label className="comment mb-2" for="comment">Réagissez ici ! </label>
                            <textarea className="form-control mb-2" rows="1" id="comment" name="text" placeholder="Un commentaire ?"></textarea>
                            <div className="d-flex justify-content-end align-items-center">
                                <button type="button" className="btn btn-danger btn-sm">Poster</button>
                            </div>
                        </div>

                        <div className="card-footer">
                            <p className="comment mt-0 mb-1">Commentaires :</p>
                            <div className="card">
                                <div className="card-body p-0 mx-3 mt-2">Prénom Nom<small className="text-muted mx-2">Date & heure </small></div>
                                <div className="card mx-3 my-2">
                                    <div className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ligula non metus hendrerit venenatis nec et urna. Praesent vel lacus ac lectus pellentesque volutpat id vel arcu. </div>
                                </div>
                                <div className="d-flex justify-content-end mx-3 mb-2">
                                    <button type="button" className="btn btn-danger mx-1 btn-sm">Commenter</button>
                                    <button type="button" className="btn btn-danger mx-1 btn-sm">Supprimer</button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body p-0 mx-3 mt-2">Prénom Nom<small className="text-muted mx-2">Date & heure </small></div>
                                <div className="card mx-3 my-2">
                                    <div className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ligula non metus hendrerit venenatis nec et urna. Praesent vel lacus ac lectus pellentesque volutpat id vel arcu. </div>
                                </div>
                                <div className="d-flex justify-content-end mx-3 mb-2">
                                    <button type="button" className="btn btn-danger mx-1 btn-sm">Commenter</button>
                                    <button type="button" className="btn btn-danger mx-1 btn-sm">Supprimer</button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body p-0 mx-3 mt-2">Prénom Nom<small className="text-muted mx-2">Date & heure </small></div>
                                <div className="card mx-3 my-2">
                                    <div className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ligula non metus hendrerit venenatis nec et urna. Praesent vel lacus ac lectus pellentesque volutpat id vel arcu. </div>
                                </div>
                                <div className="d-flex justify-content-end mx-3 mb-2">
                                    <button type="button" className="btn btn-danger mx-1 btn-sm">Commenter</button>
                                    <button type="button" className="btn btn-danger mx-1 btn-sm">Supprimer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>)
}

export default Home;