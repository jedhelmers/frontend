const api = 'http://localhost:3001';

console.log("fetching from url", api);


let token = localStorage.token
if(!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

console.log("with token", token);

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAllPosts = () => {
  fetch(`${api}/posts`, {headers})
    .then(res => {
      return res.json();
    })
}
