const posts = [
  { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
  { title: 'CSS!', author: 'Chris Coyier', id: 2 },
  { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
];

const authors = [
  { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
  { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
  { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
];
function getPostById(id) {
  // create a new promise
  return new Promise((resolve, reject) => {
    // using a settimeout to mimick a databse
    setTimeout(() => {
      // find the post we want
      const post = posts.find(post => post.id === id);
      if(post) {
        resolve(post); // send the post back
      } else {
        reject(Error('No Post Was Found!'));
      }
    }, 200);
  });
}

function hydrateAuthor(post) {
  return new Promise ((resolve, reject) => {
    const hydrated = authors.find(person => person.name == post.author)
    if (hydrated) {
      post.author = hydrated 
      resolve(post)
    } else {
      reject(Error('Could not hydrate author'))
    }
  })
}

// function hydrateAuthor(post) {
//   return new Promise((resolve, reject) => {
//     const authorDetails = authors.find(person => person.name === post.author);
//     if(authorDetails) {
//       post.author = authorDetails;
//       resolve(post);
//     } else {
//       reject(Error('Can not find the author'));
//     }
//   });
// }

getPostById(3)
  .then(post => {
    return hydrateAuthor(post);
  })
  .then(post => {
    console.log(post);
  })
  .catch(err => {
    console.error(err);
  });

// const posts = [
//   { title: 'js', author: 'wes', id: '1'},
//   { title: 'css', author: 'chris', id: '2'},
//   { title: 'dev', author: 'addy', id: '3'}
// ]

// const authors = [
//   { name: 'wes', twitter: '@wesbos', bio: 'canadian'},
//   { name: 'chris', twitter: '@chros', bio: 'csstriks'},
//   { name: 'addy', twitter: '@addy', bio: 'google'}
// ]

// function hydrateAuthor(post) {
//   return new Promise ((resolve, reject) => {
//     const hydrated = authors.find(person => person.name == post[0].author)
//     if (hydrated) {
//       post[0].author === hydrated 
//       resolve(post)
//     } else {
//       reject(Error('Could not hydrate author'))
//     }
//   })
// }

// function getPostById(num) {
//   return new Promise ((resolve, reject) => {
//     const currentPost = posts.filter(post => post.id == num)
//     if (currentPost) {
//       resolve(currentPost)
//     } else { 
//       reject(Error('Couldn\'t get post.'))
//     } 
//   })
// }

// getPostById(2)
//   .then(post => hydrateAuthor(post))
//   .then(post => console.log(post))
//   .catch(err => console.log(err))
