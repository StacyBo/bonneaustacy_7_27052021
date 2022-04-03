import Comment from "./Comment";

const Comments = (props) => {
    //console.log(props)
    return (
        <>
            <span className="border-top mt-2 mb-2"></span>
            { props.comments.length > 0 ?
                <div className="card-footer">
                    <p className="comment mt-0 mb-1">Commentaires :</p>
                    {
                        props.comments.map((comment) => {
                            return <Comment key={comment.id}
                                comment={comment}
                                post={props.post}
                                handleCommentDelete={() => props.handleCommentDelete(comment)}
                                onCommentUpdated={() => props.onCommentUpdated(comment)} />
                        })
                    }
                </div>
                : <></>
            }
        </>
    )
}

export default Comments;