import { useContext, useState } from "react";
import UserContext from "../contexts/userContext";

const Comment = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [user, setUser] = useContext(UserContext);


    const displayActionButtons = () => {
        if (user.isAdmin || user.id === props.comment.userId) {
            return (
                <>
                    <div className="d-flex justify-content-end mt-2 mb-2">
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
                !editMode ?
                    <div className="card my-3">
                        <div className="card-body p-0 mx-3 mt-2"> {user.firstName}
                            <small className="text-muted mx-2">{(new Date(props.comment.updatedAt)).toLocaleString()}</small>
                        </div>
                        <div className="card mx-3 my-3">
                            <div className="card-body">{props.comment.content}</div>
                        </div>
                        {displayActionButtons()}
                    </div>
                    :
                    <></>
            }
        </>
    )
}

export default Comment;