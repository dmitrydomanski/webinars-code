const posts = [
    {title: 'Post 1', content: 'This is post 1'},
    {title: 'Post 2', content: 'This is post 2'}
];

getPosts = () => {
    setTimeout(() => {
        let output ='';
        posts.forEach(post => output += `<li>${post.title}</li>`);
        document.body.innerHTML = output;
    }, 1000);
}

createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

const postThree = {title: 'Post 3', content: 'This is post three'}

// getPosts();
createPost(postThree, getPosts);