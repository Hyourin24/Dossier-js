
try {
    fetch('https://jsonplaceholder.typicode.com/posts', {
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

async function AfficherPost() {
    try {
        let responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await responsePosts.json();

        let responseUsers = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await responseUsers.json();

        posts.forEach(post => {
            let userSection = document.createElement("postDiv");
            userSection.classList.add("postInfo");
            userSection.textContent = `Titre: ${post.title}, Contenu: ${post.body}`;
            document.body.appendChild(userSection);

            let user = users.find(user => user.id === post.userId);
            if (user) {
                let userSection = document.createElement("div");
                userSection.classList.add("userInfo");
                userSection.textContent = `Nom de l'utilisateur: ${user.name}`;
                userSection.appendChild(userInfoDiv);
            }
        });
    } catch (error) {
        console.error(error);
    }
}

AfficherPost();