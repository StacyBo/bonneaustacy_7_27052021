function Comments (){
    return (
        <section>
            <div className="card-footer">
                <p className="comment mt-0 mb-1">Commentaires :</p>
                <div className="card">
                    <div className="card-body p-0 mx-3 mt-2">Prénom Nom<small className="text-muted mx-2">Date & heure </small></div>
                    <div className="card mx-3 my-2">
                        <div className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ligula non metus hendrerit venenatis nec et urna. Praesent vel lacus ac lectus pellentesque volutpat id vel arcu. </div>
                    </div>
                    <div className="d-flex justify-content-end mx-3 mb-2">
                        <button type="button" className="btn btn-danger mx-1 btn-sm">Supprimer</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Comments;