// let main = document.querySelector(".main")
// async function grosseMerde() {
//     try {
//         // Récupération des posts
//         let responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
//         let posts = await responsePosts.json();
//         console.log(posts);

//     } catch (err) {
//         console.error(err);
//     }
//     posts.forEach(post => {
//             let postDiv = document.createElement("div");
//             postDiv.classList.add("postInfo");
//             postDiv.textContent = `Titre: ${post.title}, Contenu: ${post.body}`;
//             document.body.appendChild(postDiv);

//             let userIdDiv = document.createElement("div");
//             userIdDiv.classList.add("userIdPage");
//             userIdDiv.textContent = `ID Utilisateur: ${post.userId}`;
//             document.body.appendChild(userIdDiv);
//         });

//     try {
//         let responseUsers = await fetch('https://jsonplaceholder.typicode.com/users');
//         let users = await responseUsers.json();
//         console.log(users);
//         users.forEach(user => {
//             let userDiv = document.createElement("div");
//             userDiv.classList.add("userNameInfo");
//             userDiv.textContent = `Nom: ${user.name}`;
//             document.body.appendChild(userDiv);
//         });
//     } catch (err) {
//         console.error(err);
//     }
// }

// grosseMerde()




let main = document.querySelector(".main");
let userSection1 = document.querySelector(".userSection1")
async function AfficherPost() {
    try {
        let responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await responsePosts.json();

        let responseUsers = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await responseUsers.json();
        

        //--- Selection de chaque élément du fetch
        posts.forEach(post => {
            //-----Création de div égales au nombre de profil 
            let postDiv = document.createElement("div");
            postDiv.classList.add("postInfo");
            userSection1.appendChild(postDiv);
            //-----Sélection de chaque titre
            let postTitre = document.createElement("a")
            postTitre.classList.add("postTitre")
            postTitre.textContent = `Titre: ${post.title}`
            postDiv.appendChild(postTitre);
            //------Sélection de chaque contenu
            let postBody = document.createElement("a")
            postBody.classList.add("postBody")
            postBody.textContent = `Contenu: ${post.body}`
            postDiv.appendChild(postBody);
            
            //------Reprise de la balise user et userID pour que les deux soient égales avec find
            let user = users.find(user => user.id === post.userId);
            
                let postName = document.createElement("p");
                postName.classList.add("postName");
                postName.textContent = `Nom de l'utilisateur: `;
                postDiv.appendChild(postName);
                let userLink = document.createElement("a");
                userLink.textContent = user.name; 
                userLink.href = `https://jsonplaceholder.typicode.com/users/${user.id}`; 

                // Ajouter le lien au div utilisateur
                postName.appendChild(userLink);
               
        });
    } catch (error) {
        console.error(error);
    }
}

AfficherPost();

