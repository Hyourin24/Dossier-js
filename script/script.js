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
        
        //Pour chaque post, reprise des informations de fetch
        posts.forEach(post => {
            //Création des divs
            let postDiv = document.createElement("div");
            postDiv.classList.add("postInfo");
            userSection1.appendChild(postDiv);
            //Création des titres
            let postTitre = document.createElement("p")
            postTitre.classList.add("postTitre")
            postTitre.textContent = `Titre: ${post.title}`
            postDiv.appendChild(postTitre)
            //Création des body 
            let postBody = document.createElement("p")
            postBody.classList.add("postBody")
            postBody.textContent = `Contenu: ${post.body}`
            postDiv.appendChild(postBody)
            
            //Identification des id et des noms. Comparaisons des deux, les noms deviennent les id
            let user = users.find(user => user.id === post.userId);

            //Création des noms
            let postName = document.createElement("p");
            postName.classList.add("userInfo");
            postName.textContent = `Nom de l'utilisateur: ${user.name}`;
            postDiv.appendChild(postName);
        });
    } catch (error) {
        console.error(error);
    }
}

AfficherPost();

