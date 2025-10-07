// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(res => {
//     if(!res.ok) {
//         throw new Error('Network response not ok!')
//     }
//     return res.json()})
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.error(`Error : ${err}`)
// })

// // POST METHOD
// const postData = {
//     title: "New Post",
//     body: "This the body a new post",
//     userId: 1
// }

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     headers: {
//         'Content-type' : 'application/json'
//     },
//     body : JSON.stringify(postData)
// })
// .then(response => response.json())
// .then(data => 
//     console.log("Data posted :", data))
// .catch(error => {
//     console.error("Error Posting Data : ", error)
// })

// async
async function getPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error('Network response not ok!');
    }

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

getPost();

