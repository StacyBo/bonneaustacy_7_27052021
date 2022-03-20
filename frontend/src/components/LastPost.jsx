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
                <div className="card-body text-card mx-3 my-2">
                    <p className="card-text">{props.lastPost.content}</p>
                    <img src="..." className="img-fluid" alt="..."></img>
                </div>
            </div>
        </>
    )
}

export default LastPost;