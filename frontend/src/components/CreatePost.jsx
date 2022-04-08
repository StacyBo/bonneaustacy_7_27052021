import { useState } from "react";
import { createPost } from "../utils/apiCalls";


function CreatePost(props) {
    const [content, setContent] = useState("")
    const [image, setImage] = useState("")

    const onClickHandler = () => {
        const params = {
            post: {
                content: content
            },
            imageUrl: image
        }
        createPost(params).then(function () {
            setContent('');
            setImage('');
            props.onPostCreated();
        })
    }

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(img);
        }
    };

    return (
        <div>
            <div className="container h-100 w-75 mb-3">
                <label className="comment mb-" htmlFor="comment">Que voulez-vous partager aujourd'hui ?</label>
                <textarea value={content} className="form-control mb-3" rows="1" id="comment" name="text" placeholder="Écrivez ce que vous voulez ici !" onChange={(e) => setContent(e.target.value)}></textarea>
                <div className="d-flex justify-content-between align-items-baseline">
                    <div className="d-flex">
                        <div className="form-file">
                            <input className="form-control form-control-sm btn btn-danger" id="formFileSm" type="file" onChange={onImageChange} />
                        </div>
                    </div>
                    <div>
                        <button type="button" className="d-flex btn btn-danger btn-sm" onClick={onClickHandler}>Poster</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;