function CreateComment() {
    return (
        <section>
            <div className="container h-100 mb-3">
                <label className="comment mb-2" htmlFor="comment">Réagissez ici !</label>
                <textarea className="form-control mb-2" rows="1" id="comment" name="text" placeholder="Un commentaire ?"></textarea>
                <div className="d-flex justify-content-end align-items-center">
                    <button type="button" className="btn btn-danger btn-sm">Poster</button>
                </div>
            </div>
        </section>
    )
}

export default CreateComment;