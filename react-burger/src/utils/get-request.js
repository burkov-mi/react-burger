export function get_request(endpoint){
    return fetch(endpoint)
    .then( res => res.ok ? res.json() : res.json().then((err) => Promise.reject(err)) );
}
