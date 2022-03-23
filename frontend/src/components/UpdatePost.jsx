import { useEffect, useState } from "react";
import { postPost, postUser, updatePost } from "../utils/apiCalls";


function UpdatePost(props) {
    const [contentModified, setContentModified] = useState('');
    const [imageModified, setImageModified] = useState('');
    const [newImageUrl, setNewImageUrl] = useState('');

    useEffect(() => {
        setContentModified(props.post.content);
        //setImageModified(props.post.imageUrl);
        //setNewImageUrl(props.post.imageUrl);
    }, []);

    const handleUpdatePost = () => {
        if (contentModified === '') {
            return;
        }
        const params = {
            post: {
                id: props.post.id,
                content: contentModified
            },
            //imageUrl: imageModified
        }
        updatePost(params).then(function () {
            props.onPostUpdated();
        })
    }


    return (
        <>
            <div className="container h-100 w-75 mb-3">
                <label className="comment mb-2" htmlFor="comment">Contenu de la publication</label>
                <textarea value={contentModified} className="form-control mb-2" rows="1" id="comment" name="text" placeholder="Écrivez ce que vous voulez ici !" onChange={(e) => setContentModified(e.target.value)}>
                </textarea>
                <div className="mb-3 col-4">
                    <i className="far fa-image" />
                    <input type="file" className="form-control" name="myImage" />
                </div>
                <div className="d-flex justify-content-end align-items-center">
                    <button type="button" className="btn btn-danger btn-sm" onClick={props.handleCancel}>Annuler</button>
                    <button type="button" className="btn btn-danger btn-sm mx-2" onClick={handleUpdatePost}>Mettre à jour</button>
                </div>
            </div>
        </>
    )
}

export default UpdatePost;