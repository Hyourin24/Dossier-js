

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

        let responseComments = await fetch('https://jsonplaceholder.typicode.com/comments');
        let comments = await responseComments.json();

        posts.forEach(post => {
    let postDiv = document.createElement("div");
    postDiv.classList.add("postInfo");
    userSection3.appendChild(postDiv);

    // Création des titres
    let postTitre = document.createElement("p");
    postTitre.classList.add("postTitre");
    postTitre.textContent = `Titre: ${post.title}`;
    postDiv.appendChild(postTitre);

    // Création du body
    let postBody = document.createElement("p");
    postBody.classList.add("postBody");
    postBody.textContent = `Contenu: ${post.body}`;
    postDiv.appendChild(postBody);

    // Création du nom de l'utilisateur
    let user = users.find(user => user.id === post.userId);
    let postName = document.createElement("p");
    postName.classList.add("postName");
    postName.textContent = `Nom de l'utilisateur: ${user.name}`;
    postDiv.appendChild(postName);

    // Affichage d'un seul commentaire
    let postComment = comments.find(comment => comment.postId === post.id);
    if (postComment) {
        let commentsDiv = document.createElement("div");
        commentsDiv.classList.add("commentsDiv");
        commentsDiv.textContent = `Commentaire: ${postComment.body}`;
        postDiv.appendChild(commentsDiv);
    }

    // Bouton de suppression
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("monBouton");
    deleteButton.textContent = "Supprimer";
    postDiv.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        postDiv.remove();
    });

    // Ajout d'un bouton/lien pour afficher uniquement ce postDiv
    let showLink = document.createElement("a");
    showLink.href = "#";
    showLink.classList.add("showLink");
    showLink.textContent = "Voir ce post";
    postDiv.appendChild(showLink);

    showLink.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        let allPosts = document.querySelectorAll(".postInfo");
        allPosts.forEach(div => {
            if (div !== postDiv) {
                div.style.display = "none"; // Cache tous les autres `postDiv`
            }
        });
        postDiv.style.display = "block"; // Assure que celui-ci reste visible
    });
});

    } catch (error) {
        console.error(error);
    }
}

AfficherPost();