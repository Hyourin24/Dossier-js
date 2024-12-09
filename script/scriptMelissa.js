

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

 fetch('https://jsonplaceholder.typicode.com/users', {
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
let userSection3 = document.querySelector(".userSection3")
async function AfficherPost() {
    try {
        let responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await responsePosts.json();

        let responseUsers = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await responseUsers.json();

        posts.forEach(post => {
            let postDiv = document.createElement("div");
            postDiv.classList.add("postInfo");
            userSection3.appendChild(postDiv);
            //Création des titres
            let postTitre = document.createElement("p")
            postTitre.classList.add("postTitre")
            postTitre.textContent = `Titre: ${post.title}`
            postDiv.appendChild(postTitre)
            postDiv.textContent = `Titre: ${post.title}, Contenu: ${post.body}`;

            let user = users.find(user => user.id === post.userId);
            
                let userSection = document.createElement("div");
                userSection.classList.add("userInfo");
                userSection.textContent = `Nom de l'utilisateur: ${user.name}`;
                userSection.appendChild(userInfoDiv);
            
                postComments.forEach(comment => {


                let commentsDiv = document.createElement("div");
                commentsDiv.classList.add("commentsDiv");
                commentsDiv.textContent = `Commentaire: ${comment.body}`;
                postDiv.appendChild(commentsDiv);


            });
            let deleteButton = document.createElement("button");
            deleteButton.classList.add("monBouton");
            postDiv.appendChild(deleteButton);
            deleteButton.textContent = "Supprimer"
                deleteButton.addEventListener("click", () => {
                    postDiv.remove()
            })
        })
    } catch (error) {
        console.error(error);
    }
}

AfficherPost();