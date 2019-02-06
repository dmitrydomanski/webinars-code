const posts = [
  { title: "Post 1", content: "This is post 1" },
  { title: "Post 2", content: "This is post 2" }
];

getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach(post => (output += `<li>${post.title}</li>`));
    document.body.innerHTML = output;
  }, 500);
};

createPost = post => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: something went wrong");
      }
    }, 1000);
  });
};
const postThree = { title: "Post 3 async", content: "This is post three" };

// createPost(postThree).then(getPosts).catch(err => alert(err));

// const promise1 = Promise.resolve("Hi there");
// const promise2 = 100;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Good bye")
// );

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => console.log(data));


// Promise.all([promise1, promise2, promise3, promise4 ]).then(value => console.log(value));

// async/await

init = async()=>{
    await createPost(postThree);
    getPosts();
}

fetchUsers = async () => {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await result.json(); 
        console.log(data);   
    } catch (error) {
        console.error();
    }
}

fetchUsers();

// init();


