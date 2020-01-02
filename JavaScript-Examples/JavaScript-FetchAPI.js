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
