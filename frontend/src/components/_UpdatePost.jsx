

function UpdatePost() {


    return (
        <>
        <div className="container h-100 w-75 mb-3">
            <label className="comment mb-2" htmlFor="comment">Contenu de la publication</label>
            <textarea className="form-control mb-2" rows="1" id="comment" name="text" placeholder="Écrivez ce que vous voulez ici !">
            </textarea>
            <div className="mb-3 col-4">
                <i className="far fa-image" />
                <input type="file" className="form-control" name="myImage" />
            </div>
            <div className="d-flex justify-content-end align-items-center">
                <button type="button" className="btn btn-danger btn-sm">Annuler</button>
                <button type="button" className="btn btn-danger btn-sm mx-2">Mettre à jour</button>
            </div>
        </div>
        </>
    )
}

export default UpdatePost;