
let main = document.querySelector(".main");
 export let userSection3 = document.querySelector(".userSection3")
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
            postDiv.textContent = `Titre: ${post.title}, Contenu: ${post.body}`;
            userSection3.appendChild(postDiv);

            let user = users.find(user => user.id === post.userId);
            let userInfoDiv = document.createElement("div");
            userInfoDiv.classList.add("userInfo");
            userInfoDiv.textContent = `Nom de l'utilisateur: ${user.name}`;
            postDiv.appendChild(userInfoDiv);

            let comment = users.find( comment => comment.id === post.userId);
            let userCommentsDiv = document.createElement("div");
            userCommentsDiv.classList.add("userComments");
            userCommentsDiv.textContent = `Commentaire: ${comments.body}`;
            userSection3.appendChild(userCommentsDiv);
        });
    } catch (error) {
        console.error(error);
    }
}

AfficherPost();

