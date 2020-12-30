const BASEURL = ' https://coetus.herokuapp.com';
const API = '/api/forum';
const USERS = '/users';
const USERSID = ':user_id'
const MESSAGE = '/message';
const TOPICS = '/topics';
const TOPICSID = '/:topic_id'

function register(user) {
    return fetch(`${BASEURL}${API}${USERS}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'PUT',
        body: JSON.stringify(user)
    }).then(res => res.json())
}

function login(user) {
    let res = fetch(`${BASEURL}${API}${USERS}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'POST',
        body: JSON.stringify(user)
    }).then(res => res.json())
    return res
}


function getUsername(user_id) {
    return fetch(`${BASEURL}${API}${USERS}/${user_id}`)
        .then(res => res.json())
}


function getTopic(topics) {
    return fetch(`${BASEURL}${API}/topics`)
        .then(res => res.json())

}

function addTopic(user_id, title) {
    return fetch(`${BASEURL}${API}${TOPICS}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'PUT',
        body: JSON.stringify({user_id,title})
    }).then(res => res.json())
}

function getMsnOnTpc(id) {
    return fetch(`${BASEURL}${API}${MESSAGE}/${id}`)
        .then(res => res.json())
}

function addMessage(user) {
    return fetch(`${BASEURL}${API}${MESSAGE}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'PUT',
        body: JSON.stringify(user)
    }).then(res => res.json())
}



export {
    register,
    login,
    getUsername,
    getTopic,
    addTopic,
    getMsnOnTpc,
    addMessage
}