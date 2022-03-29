import {createComment} from "../utils/apiCalls";
import {useEffect, useRef, useState} from "react";

function CreateComment(props) {
    console.log(props)
    const [content, setContent] = useState("")
    const inputRef = useRef();


    const handleCreateComment = () => {
        const params = {
            comment: {
                content: content
            },
            postId: props.post.id,
        }
        createComment(params).then(function () {
            props.onCommentCreated();
        })
    }

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <section>
            <div className="container h-100 mb-3">
                <div className="card-body">
                    <label htmlFor="comment" className="form-label">Commentaire</label>
                    <input value={content} className="form-control mb-2" id="comment" name="text" ref={inputRef}
                        onChange={(e) => setContent(e.target.value)} />
                </div>                <div className="d-flex justify-content-end align-items-center">
                    <button type="button" className="btn btn-danger btn-sm" onClick={handleCreateComment}>commenter</button>
                </div>
            </div>
        </section>
    )
}

export default CreateComment;