const categoryContainer = document.getElementById("categoryContainer");
const listcontainer = document.getElementById("listcontainer");
const cardContainer = document.getElementById("cardContainer");
const category = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then((res) => res.json())
        .then((data) => {
            const categories = data.data ? data.data : data.categories;
            showcategory(categories);
        })
        .catch((err) => {
            console.log(err);
        });
};
category();
const showcategory = (categories) => {
    categories.forEach(category => {
        listcontainer.innerHTML += `
    <li id="${category.id}" class=" flex py-3  items-center hover:bg-red-600 ">${category.category_name}</li>
    `;
    });

    listcontainer.addEventListener("click", (e) => {
        const all = document.querySelectorAll("li");
        all.forEach((li) => {
            li.classList.remove("bg-red-600")
        });
        if (e.target.tagName == "LI") {
            e.target.classList.add("bg-red-600");
            loadcontainer(e.target.id);
        }
    });
};
const loadcontainer = (id) => {
    console.log(id);
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then((res) => res.json())
        .then((data) => {
            showNewsByCategory(data.plants);

        })
        .catch((err) => {
            console.log(err);
        })
};

const showNewsByCategory = (plants) => {
    if (plants.length === 0) {
        alert("No news found for this category!");
        return;
    }

    cardContainer.innerHTML = "";
    plants.forEach((plant) => {
        cardContainer.innerHTML += `
      <div class="border border-gray-300 rounded-lg p-3">
        <div>
          <img src="${plant.image}" alt="${plant.name}" class="w-full h-40 object-cover rounded-md"/>
        </div>
        <div id="${plant.id}" class="p-3">
          <h1 class="font-extrabold text-lg">${plant.name}</h1>
          <p class="text-sm text-gray-500">${plant.description}</p>
          <p class="text-sm mt-2 font-bold">${plant.price} TK</p>
          <button class="btn bg-green-600 text-white px-2 py-1 rounded-md mt-2 w-11/12">Add to card</button>
        </div>
      </div>
    `;
    });
};