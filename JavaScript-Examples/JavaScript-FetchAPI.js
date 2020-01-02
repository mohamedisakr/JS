const url = "https://jsonplaceholder.typicode.com/users";
let users = [];
fetch(url)
  .then(response => {
    response.json().then(data => {
      users = [...data];
      console.log(users);
    });
  })
  .catch(err => {
    console.log("Fetch Error :-S", err);
  });

// ===============================================

function getAllUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  let users = fetch(url)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log("Fetch Error :-S", err);
    });

  return users;
}

const result = getAllUsers();
console.log(result);

function getUserDate(name) {
  try {
    fetch(`https://github.com/${name}`).then(async response => {
      return response.json();
    });
  } catch (err) {
    console.error(err);
  }
}

const username = "mohamedisakr";
const result = getUserDate(username);
console.log(result);

/*  
function getAllUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  let users = [];
  fetch(url)
    .then(response => {
      response.json().then(data => {
        users = [...data];
        // console.log(users);
        debugger;
      });
    })
    .catch(err => {
      console.log("Fetch Error :-S", err);
    });

  return users;
}

async function getUserDate(name) {
  try {
    await fetch(`https://github.com/${name}`).then(async response => {
      return await response.json();
    });
  } catch (err) {
    console.error(err);
  }
}
*/
