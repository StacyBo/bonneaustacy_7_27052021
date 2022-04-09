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
                            props.lastPost.imageUrl ? <img src={props.lastPost.imageUrl} className="post-img img-fluid" alt={props.lastPost.id} onclick={"window.open(this.src,'_blank','toolbar=0, location=0, directories=0, status=0, scrollbars=0, resizable=0, copyhistory=0, menuBar=0, width=75%, height=75%);"} /> : <></>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default LastPost;