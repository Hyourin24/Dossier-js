
try {
    fetch('https://jsonplaceholder.typicode.com/posts/[postId]/comments', {
    method: 'POST',
    body: JSON.stringify({
     title: 'foo',
      body: 'bar',
      userId: 1,
  }),
   headers: {
  'Content-type': 'application/json; charset=UTF-8',
   },
         
  }).then((response) => response.json())
  .then((json) => console.log(json));

} catch(error) {
  console.log(error);
}


try {
    fetch('https://jsonplaceholder.typicode.com/users/[userId]', {
    method: 'POST',
    body: JSON.stringify({
     title: 'foo',
      body: 'bar',
      userId: 1,
  }),
   headers: {
  'Content-type': 'application/json; charset=UTF-8',
   },
         
  }).then((response) => response.json())
  .then((json) => console.log(json));

} catch(error) {
  console.log(error);
}


try {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=[userId]', {
    method: 'POST',
    body: JSON.stringify({
     title: 'foo',
      body: 'bar',
      userId: 1,
  }),
   headers: {
  'Content-type': 'application/json; charset=UTF-8',
   },
         
  }).then((response) => response.json())
  .then((json) => console.log(json));

} catch(error) {
  console.log(error);
}

let user = userArray[1];
        console.log(user);


