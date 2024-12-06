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

        posts.forEach(post => {
            let postDiv = document.createElement("div");
            postDiv.classList.add("postInfo");
            postDiv.textContent = `Titre: ${post.title}, Contenu: ${post.body}`;
            userSection1.appendChild(postDiv);
            

            let user = users.find(user => user.id === post.userId);
                let userInfoDiv = document.createElement("div");
                userInfoDiv.classList.add("userInfo");
                userInfoDiv.textContent = `Nom de l'utilisateur: ${user.name}`;
                postDiv.appendChild(userInfoDiv);
        });
    } catch (error) {
        console.error(error);
    }
}

AfficherPost();

