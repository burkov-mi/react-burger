const method = 'POST';
const headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'})

export function post_request(endpoint, payload) {
    return fetch( endpoint, {method, headers, body: JSON.stringify(payload)})
        .then( res => res.ok ? res.json() : res.json().then((err) => Promise.reject(err)) );
}
