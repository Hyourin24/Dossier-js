// Affichez sous forme de fil les posts créés par un utilisateur spécifique.

const userIdInput = document.getElementById("userId");
const loadPostsButton = document.getElementById("loadPosts");
const postsList = document.getElementById("postsList");

function loadUserPosts(userId) {
    postsList.innerHTML = "";

    fetch("https://jsonplaceholder.typicode.com/posts?")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur : ${response.status}`);
            }
            return response.json();
        })
        .then(posts => {
            // Filtrer les posts 
            const userPosts = posts.filter(post => post.userId === userId);
            if (userPosts.length === 0) {
                postsList.innerHTML = "<li>Aucun post trouvé pour cet utilisateur.</li>";
                return;
            }

            // Afficher les posts dans la liste
            userPosts.forEach(post => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
                postsList.appendChild(listItem);

            });
        })
        .catch(error => {
            console.error("Erreur lors du chargement des posts :", error);
        });
}

loadPostsButton.addEventListener("click", () => {
    const userId = parseInt(userIdInput.value, 10);
    if (isNaN(userId) || userId <= 0) {
        alert("Veuillez entrer un ID utilisateur valide.");
        return;
    }

    loadUserPosts(userId);
});

console.log(userId)