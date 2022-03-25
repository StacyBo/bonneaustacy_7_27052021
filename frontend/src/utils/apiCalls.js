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

// recuperer les posts
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

// Creer un post
export function createPost(params) {
    /*let data = new FormData();
    data.append('post', JSON.stringify(params.post));
    data.append('image', params.imageUrl);*/

    return fetch('http://localhost:5000/api/post', {
        method: 'POST',
        body: JSON.stringify(params.post),
        headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') },
    })
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.warn(error)
        });
}


// Recuperer les 3 derniers posts
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

//Modifier un post 
export function updatePost(params) {
    /*let data = new FormData();
    data.append('post', JSON.stringify(params.post));
    data.append('image', params.imageUrl);*/

    return fetch('http://localhost:5000/api/post/' + params.post.id, {
        method: 'PATCH',
        body: JSON.stringify(params.post),
        headers: { 'Content-Type': 'application/json; charset=utf-8','Authorization': localStorage.getItem('token') },
    })
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.warn(error)
        });
}

// Supprimer un post 
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