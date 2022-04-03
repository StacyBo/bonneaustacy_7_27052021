import {useEffect, useRef, useState} from "react";
import UserContext from "../contexts/userContext";
import {updateComment} from "../utils/apiCalls";

const UpdateComment = (props) => {

    const [contentModified, setContentModified] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        setContentModified(props.comment.content);
        inputRef.current.focus();
    }, []);

    const handleUpdateComment = () => {
        if (contentModified === '') {
            return;
        }
        const params = {
            comment: {
                id: props.comment.id,
                content: contentModified
            },
        }
        updateComment(params).then(function () {
            props.onCommentUpdated();
        })
    }

    return (
        <div className="card">
            <div className="card-body p-0 mx-3 mt-2">{UserContext.firstName}
                <small className="text-muted mx-2">{(new Date(props.comment.updatedAt)).toLocaleString()}</small></div>
            <div className="card mx-3 my-3">
                <div className="card-body">
                    <input value={contentModified} className="form-control" id="comment" name="text" ref={inputRef}
                           onChange={(e) => setContentModified(e.target.value)}/>
                </div>
            </div>
            <div className="d-flex justify-content-end mt-2 mb-2">
                <button type="button" className="btn btn-danger btn-sm" onClick={props.handleCancelUpdateComment}>Annuler
                </button>
                <button type="button" className="btn btn-danger btn-sm mx-2" onClick={handleUpdateComment}>Mettre à
                    jour
                </button>
            </div>
        </div>
    );
}

export default UpdateComment;