import UserContext from "../contexts/userContext";
import { useContext, useState } from "react";
import CreateComment from './CreateComment';
import UpdatePost from './UpdatePost';
import Comments from './Comments'

function Post(props) {
    console.log(props)
    const [user] = useContext(UserContext);
    const [editMode, setEditMode] = useState(false);


    const onPostUpdated = () => {
        setEditMode(false);
        props.onPostUpdated();
    }

    const displayActionButtons = () => {
        if (user.id === props.post.userId) {
            return (
                <>
                    <button type="button" className="btn btn-danger btn-sm mx-2"
                        onClick={() => setEditMode(!editMode)}>Modifier
                    </button>
                    <button type="button" className="btn btn-danger btn-sm"
                        onClick={props.handlePostDelete}>Supprimer
                    </button>
                </>
            )
        }
    }

    return (
        <>
            {
                editMode ? <UpdatePost post={props.post} onPostUpdated={onPostUpdated} handleCancel={() => setEditMode(false)} /> :
                    <div>
                        <div className="card-body d-flex pt-1 pb-0">
                            <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                            <p className="card-text mx-2"><small className="text-muted">{(new Date(props.post.updatedAt)).toLocaleString()}</small></p>
                        </div>
                        <div className="card-body text-card mx-3 my-1">
                            <p className="card-text">{props.post.content}</p>
                            <img src="..." className="img-fluid" alt="..."></img>
                        </div>
                        <div className="d-flex justify-content-end mt-2 mb-2">
                            <button type="button" className="btn btn-danger btn-sm">Commenter</button>
                            {displayActionButtons()}
                        </div>
                        < CreateComment />
                        < Comments />
                    </div>
            }
        </>
    )
}

export default Post;