let users = JSON.parse(localStorage.getItem("users")) || [
  {
    name: "Amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "Amita mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "Isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
  {
    name: "Diya bansal",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "a little chaos, a lot of art 🎨✨ | just vibes",
  },
  {
    name: "Tanay rawat",
    pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
  },
  {
    name: "Mohit chhabra",
    pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
  },
];

// Function to render users
function showUsers(arr) {
  const container = document.querySelector(".flex");
  container.innerHTML = "";

  arr.forEach((user) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = user.pic;
    img.alt = user.name;
    img.classList.add("bg-img");

    let blurredLayer = document.createElement("div");
    blurredLayer.classList.add("blurred-layer");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;

    let content = document.createElement("div");
    content.classList.add("content");

    let h3 = document.createElement("h3");
    h3.textContent = user.name;

    let p = document.createElement("p");
    p.textContent = user.bio;

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    const mainIndex = users.indexOf(user);
    deleteBtn.addEventListener("click", () => {
      removeUser(mainIndex);
    });

    content.appendChild(h3);
    content.appendChild(p);
    content.appendChild(deleteBtn);

    card.appendChild(content);
    card.appendChild(img);
    card.appendChild(blurredLayer);

    container.appendChild(card);
  });
}

showUsers(users);

// Search functionality
let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
  let newusers = users.filter((user) => {
    return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
  });

  showUsers(newusers);

  let result = document.querySelector(".result");

  if (newusers.length === 0) {
    result.textContent = "No users found";
    result.classList.add("show");
  } else {
    result.classList.remove("show");
  }
});

// Modal functionality
const modal = document.getElementById("modal");
const showFormBtn = document.getElementById("showFormBtn");
const cancelForm = document.getElementById("cancelForm");
const addUserBtn = document.getElementById("addUser");

showFormBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

cancelForm.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Add new user
addUserBtn.addEventListener("click", () => {
  let name = document.getElementById("name").value.trim();
  let pic = document.getElementById("pic").value.trim();
  let info = document.getElementById("info").value.trim();

  if (name && pic && info) {
    users.push({ name: name, pic: pic, bio: info });
    localStorage.setItem("users", JSON.stringify(users));
    showUsers(users);
    modal.classList.add("hidden");

    // clear form
    document.getElementById("name").value = "";
    document.getElementById("pic").value = "";
    document.getElementById("info").value = "";
  } else {
    alert("Please fill in all fields before adding a user.");
  }
});

function removeUser(index) {
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  showUsers(users);
}
