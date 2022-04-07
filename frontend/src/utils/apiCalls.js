//Ajout d'utilisateur
export function postUser(params) {
    return fetch('http://localhost:5000/api/user', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
    })
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.warn(error)
        });

}

// pour se connecter
export function postLogin(params) {
    return fetch('http://localhost:5000/api/login', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
    })
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.warn(error)
        });
}


export async function isAuth() {
    if (!localStorage.getItem('token')) {
        return false;
    }
    return fetch('http://localhost:5000/api/auth', {
        method: 'POST',
        body: JSON.stringify({ token: localStorage.getItem('token') }),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
    })
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.warn(error)
        })
        .then(function (r) {
            if (r.hasOwnProperty('id')) {
                return r;
            } else {
                console.warn(r)
                return false;
            }
        });
}

// recuperer les articles
export function getPosts() {
    return fetch('http://localhost:5000/api/post', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': localStorage.getItem('token') },
    })
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.warn(error)
        });
}

// Creer un article
export function createPost(params) {
    let data = new FormData();
    data.append('post', JSON.stringify(params.post));
    data.append('image', params.imageUrl);

    return fetch('http://localhost:5000/api/post', {
        method: 'POST',
        body: data,
        headers: {'Authorization': localStorage.getItem('token')},
    })
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.warn(error)
        });
}


// Recuperer les 3 derniers articles
export function getLastPosts() {
    return fetch('http://localhost:5000/api/post/lastposts', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': localStorage.getItem('token') },
    })
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.warn(error)
        });
}

//Modifier un article 
export function updatePost(params) {
    let data = new FormData();
    data.append('post', JSON.stringify(params.post));
    data.append('image', params.imageUrl);

    return fetch('http://localhost:5001/api/post/' + params.post.id, {
        method: 'PUT',
        body: data,
        headers: {'Authorization': localStorage.getItem('token')},
    })
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.warn(error)
        });
}

// Supprimer un article 
export function deletePost(params) {
    return fetch('http://localhost:5000/api/post/' + params.post.id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': localStorage.getItem('token') },
    })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.warn(error)
        });
}

// creer un commentaire
export function createComment(params) {
    return fetch('http://localhost:5000/api/comment/post/' + params.postId, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': localStorage.getItem('token')},
    })
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.warn(error)
        });
}

// récuperer les commentaires
export function getComments(params) {
    return fetch('http://localhost:5000/api/comment/post/' + params.postId, {
        method: 'GET',
        headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': localStorage.getItem('token')},
    })
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.warn(error)
        });
}

// Modifier le commentaire
export function updateComment(params) {
    return fetch('http://localhost:5000/api/comment/' + params.comment.id, {
        method: 'PUT',
        body: JSON.stringify(params),
        headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': localStorage.getItem('token')},
    })
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.warn(error)
        });
}

//supprimer un commentaire
export function deleteComment(params) {
    return fetch('http://localhost:5000/api/comment/' + params.commentId, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': localStorage.getItem('token')},
    })
        .then(function (response) {
            return response.json;
        })
        .catch(function (error) {
            console.warn(error)
        });
}

//supprimer un utilisateur
export function deleteUser() {
    return fetch('http://localhost:5000/api/user/delete', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': localStorage.getItem('token')},
    });
}