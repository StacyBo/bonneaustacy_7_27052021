import Navbar from './Navbar';

const Home = () => {
    return (
        <>
            < Navbar />
            <main>
                <section>
                    <div className="container h-100 w-75 mb-3">
                        <label className="comment mb-2" for="comment">Que voulez-vous partager aujourd'hui ? </label>
                        <textarea className="form-control mb-2" rows="1" id="comment" name="text" placeholder="Écrivez ce que vous voulez ici !"></textarea>
                        <div className="d-flex justify-content-end align-items-center">
                            <p className="card-text mx-2 pt-3"><small className="text-muted">Nomdelimage.jpg</small></p>
                            <i className="far fa-image"></i>
                            <button type="button" className="btn btn-danger btn-sm">Poster</button>
                        </div>
                    </div>
                    <div className="container card h-100 w-75 pt-2">
                        <div className="card-body d-flex pt-1 pb-0">
                            <h5 className="card-title">Pseudo</h5>
                            <p className="card-text mx-2"><small className="text-muted">Il y a 12min</small></p>
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
                        <div className="card-footer">
                            <p className="comment mt-0 mb-1">Commentaires :</p>
                            <div className="card">
                                <div className="card-body p-0 mx-3 mt-2">Pseudo<small className="text-muted mx-2">Il y a 8min</small></div>
                                <div className="card mx-3 my-3">
                                    <div className="card-body">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney.</div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body p-0 mx-3 mt-2">Pseudo<small className="text-muted mx-2">Il y a 4min</small></div>
                                <div className="card mx-3 my-3">
                                    <div className="card-body">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>)
}

export default Home;