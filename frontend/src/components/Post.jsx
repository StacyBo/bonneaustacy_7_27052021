import UserContext from "../contexts/userContext";
import { useContext, useState, useEffect } from "react";
import CreateComment from './CreateComment';
import { getComments, deleteComment } from "../utils/apiCalls";
import UpdatePost from './UpdatePost';
import Comments from './Comments'

function Post(props) {
    //console.log(props)
    const [user] = useContext(UserContext);
    const [editMode, setEditMode] = useState(false);
    const [editCreateComment, setEditCreateComment] = useState(false);
    const [comments, setComments] = useState([]);

    const onPostUpdated = () => {
        setEditMode(false);
        props.onPostUpdated();
    }

    const refreshComments = () => {
        getComments({ postId: props.post.id }).then(function (response) {
            setComments(response);
        });
    }

    const onCommentCreated = () => {
        setEditCreateComment(false);
        refreshComments();
    }

    const onCommentUpdated = () => {
        refreshComments();
    }

    const handleCommentDelete = (comment) => {
        deleteComment({ commentId: comment.id }).then(function () {
            refreshComments();
        });
    };

    const displayActionButtons = () => {
        if (user.isAdmin || user.id === props.post.userId){
             //console.log(props.post)
            return (
                <>
                    <button type="button" className="btn btn-danger btn-sm mx-2"
                        onClick={() => setEditMode(!editMode)}>Modifier
                    </button>
                    <button type="button" className="btn btn-danger btn-sm"
                        onClick={props.handlePostDelete}><i class="fas fa-trash-alt"></i>
                    </button>
                </>
            )
        }
    }

    useEffect(() => {
        refreshComments();
    }, [])


    return (
        <>
            {
                editMode ? <UpdatePost post={props.post} onPostUpdated={onPostUpdated} handleCancel={() => setEditMode(false)} /> :
                    <div className="card mb-3 p-3">
                        <div className="card-title d-flex">
                            <h5 className="card-title mb-0">{props.post.User.firstName} {props.post.User.lastName}</h5>
                            <p className="card-text mx-2"><small className="text-muted">{(new Date(props.post.updatedAt)).toLocaleString()}</small></p>
                        </div>
                        <div className="text-card my-1">
                            <p className="card-text mx-3">{props.post.content}</p>
                            <img src="..." className="img-fluid" alt="..."></img>
                        </div>
                        <div className="d-flex justify-content-end mt-2 mb-2">
                            <button onClick={() => { setEditCreateComment(!editCreateComment) }} type="button" className="btn btn-danger btn-sm">Commenter</button>
                            {displayActionButtons()}
                        </div>
                        <Comments
                            comments={comments}
                            post={props.post}
                            handleCommentDelete={handleCommentDelete}
                            onCommentUpdated={onCommentUpdated}/>

                        {
                            editCreateComment ?
                                <CreateComment post={props.post} onCommentCreated={onCommentCreated} handleCancelCreateComment={() => setEditCreateComment(false)} />
                                :
                                <></>
                        }
                    </div>
            }
        </>
    )
}

export default Post;