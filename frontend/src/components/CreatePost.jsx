function CreatePost() {

    return (
        <div>
            <div className="container h-100 w-75 mb-2">
                <label className="comment mb-2" htmlFor="comment">Que voulez-vous partager aujourd'hui ?</label>
                <textarea className="form-control mb-2" rows="1" id="comment" name="text" placeholder="Écrivez ce que vous voulez ici !"></textarea>
                <div className="d-flex justify-content-end align-items-center">
                    <p className="card-text mx-2 pt-3"><small className="text-muted">Nomdelimage.jpg</small></p>
                    <i className="far fa-image"></i>
                    <button type="button" className="btn btn-danger btn-sm" >Poster</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;