import { useContext, useState } from "react";
import UpdateComment from "./UpdateComment";
import UserContext from "../contexts/userContext";

const Comment = (props) => {
    //console.log(props)
    const [editMode, setEditMode] = useState(false);
    const [user, setUser] = useContext(UserContext);

    const onCommentUpdated = () => {
        setEditMode(false);
        props.onCommentUpdated();
    }


    const displayActionButtons = () => {
        if (user.isAdmin || user.id === props.comment.userId) {
            return (
                <>
                    <div className="d-flex justify-content-end mt-2 mb-2">
                        <button type="button" className="btn btn-danger btn-sm mx-"
                            onClick={() => setEditMode(!editMode)}>Modifier
                        </button>
                        <button type="button" className="btn btn-danger btn-sm mx-2"
                            onClick={props.handleCommentDelete}>Supprimer
                        </button>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            {
                editMode ? <UpdateComment
                    comment={props.comment}
                    post={props.post}
                    onCommentUpdated={onCommentUpdated}
                    handleCancelUpdateComment={() => setEditMode(false)} /> :

                    <div className="card my-3">
                        <div className="card-body mx-3 mt-3">{props.comment.User.firstName} {props.comment.User.lastName}
                            <small className="text-muted mx-2">{(new Date(props.comment.updatedAt)).toLocaleString()}</small></div>
                        <div className="mx-3 my-3">
                            <div className="card-text">{props.comment.content}</div>
                        </div>
                        {displayActionButtons()}
                    </div>

            }
        </>
    )
}

export default Comment;