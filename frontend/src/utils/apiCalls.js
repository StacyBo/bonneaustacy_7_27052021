export function postUser(params) {
    return fetch('http://localhost:5000/api/users', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {'Content-Type': 'application/json; charset=utf-8'},
    })
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.warn(error)
        });

}

export function postLogin(params) {
    return fetch('http://localhost:5000/api/login', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {'Content-Type': 'application/json; charset=utf-8'},
    })
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.warn(error)
        });
}

export function getSubjects() {
    return fetch('http://localhost:5000/api/subjects', {
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

export async function isAuth() {
    if (!localStorage.getItem('token')) {
        return false;
    }
    return fetch('http://localhost:5000/api/auth', {
        method: 'POST',
        body: JSON.stringify({token: localStorage.getItem('token')}),
        headers: {'Content-Type': 'application/json; charset=utf-8'},
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