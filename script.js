document.getElementById('fetch-btn').addEventListener('click', fetchPosts);

function fetchPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('posts-container');
      container.innerHTML = ''; // Clear any previous posts

      data.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        `;
        container.appendChild(postElement);
      });
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
}