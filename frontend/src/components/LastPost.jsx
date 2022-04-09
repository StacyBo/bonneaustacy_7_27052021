import UserContext from "../contexts/userContext";
import { useContext } from "react";


const LastPost = (props) => {
    const [user] = useContext(UserContext);

    return (
        <>
            <div className="container card mb-2">
                <div className="card-body d-flex pt-2 pb-0">
                    <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                    <p className="card-text mx-2"><small className="text-muted">{(new Date(props.lastPost.updatedAt)).toLocaleString()}</small></p>
                </div>
                <div className="card-body mx-2 my-2 ">
                    <p className="text-card p-2">{props.lastPost.content}</p>
                    <div className="d-flex justify-content-center mb-3">
                        {
                            props.lastPost.imageUrl ? <img src={props.lastPost.imageUrl} className="post-img img-fluid" alt={props.lastPost.id} /> : <></>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default LastPost;