const main = async () => {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  const usersContainer = document.getElementById("users");
  data.users.forEach((user) => {
    const smallContainer = document.createElement("h1");
    const userSpan = document.createElement("span");
    const userDiv = document.createElement("div");
    const userStrong = document.createElement("strong");

    userDiv.innerHTML = `<img src="${user.image}">`;
    userStrong.innerHTML = `${user.firstName} ${user.lastName} `;
    userSpan.innerHTML = `${user.email}`;
    usersContainer.appendChild(userDiv);
    usersContainer.appendChild(userStrong);
    usersContainer.appendChild(userSpan);
  });
  console.log(data);
};

main();
