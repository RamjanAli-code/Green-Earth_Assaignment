const categoryContainer = document.getElementById("categoryContainer");
const cardContainer = document.getElementById("cardContainer");
const cardListContainer = document.getElementById("cardListContainer");
const totalContainer = document.getElementById("totalContainer");
const modalbox = document.getElementById("modal");
const category = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(data => {
            const categories = data.data ? data.data : data.categories;
            showcategory(categories);
            allplants();
        })
        .catch(err => console.log(err));
};
category();

const showcategory = (categories) => {
    categories.forEach(category => {
        categoryContainer.innerHTML += `
            <li id="${category.id}" class="flex py-3 items-center hover:bg-green-600 rounded-md">${category.category_name}</li>
        `;
    });

    categoryContainer.addEventListener("click", (e) => {
        const all = document.querySelectorAll("li");
        all.forEach(li => li.classList.remove("bg-green-600"));
        if (e.target.tagName === "LI") {
            showLoading();
            e.target.classList.add("bg-green-600");
            loadcontainer(e.target.id);
        }
    });
};

const allplants = () => {
    showLoading();
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(data => {
            const plants = data.plants.slice(0, 6);
            showplants(plants);

        })
        .catch(err => console.log(err));
};

const loadcontainer = (id) => {
    console.log(id);
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then((res) => res.json())
        .then((data) => {
            // showNewsByCategory(data.plants);
            showplants(data.plants);
        })
        .catch((err) => {
            console.log(err);
        })
};




const showplants = (plants) => {
    cardContainer.innerHTML = "";
    plants.forEach(plant => {
        const card = document.createElement("div");
        card.innerHTML += `
        <div class="border border-gray-300 rounded-lg p-2 bg-white h-[400px] w-[100%]">
        <div> <img src="${plant.image}" alt="${plant.name}" class="w-full h-40 object-cover rounded-md"/> </div> <div class="p-1 item">
         <h1 class="font-extrabold text-lg name">${plant.name}</h1> 
         <p class="text-sm text-gray-500 plant-desc">${plant.description}</p> 
         <div class="flex justify-between items-center py-1"> 
         <p class="text-sm text-green-400 border border-green-2 plant-category rounded-xl p-1">${plant.category}</p> 
         <p class="text-sm mt-2 font-bold price">${plant.price} TK</p> </div> <button class="add-to-card bg-green-600 text-white px-2 py-1 rounded-3xl mt-2 w-full"> Add to card </button> </div> </div>
        `;
        card.querySelector(".name").addEventListener("click", () => {
            openModal(plant);
        });
        card.querySelector(".add-to-card").addEventListener("click", () => {
            addToCardList(plant.name, plant.price);
        });
        cardContainer.appendChild(card);
    });
}
cardContainer
let totalprice = 0;
const addToCardList = (name, price) => {
    price = parseFloat(price);
    const div = document.createElement("div");
    div.className = "flex justify-between items-center bg-white p-2 rounded mb-2 ";
    div.innerHTML = `<div class="bg-green-200 w-[100%] rounded-xl flex flex-row p-2 justify-between items-center">
    <div class=" flex flex-col ">
        <span>${name}</span>
        <span class="text-green-600 font-bold">${price}</span>
        </div>
        <div>
        <button class="delete  text-red px-2 py-1 rounded"><i class="fa-solid fa-xmark"></i></button>
        </div>
        </div>
    `;
    div.querySelector(".delete").onclick = () => {
        cardListContainer.removeChild(div);
        totalprice -= price;
        total();
    };
    cardListContainer.appendChild(div);
    totalprice += price;
    total();
}
const total = () => {
    totalContainer.textContent = `Total : ${totalprice} TK`;
}

function openModal(plant) {
    modalbox.innerHTML = `
        <div class="bg-white p-1 rounded-lg w-100 relative ">
            <h1 class="font-bold text-lg mb-2">${plant.name}</h1>
            <img src="${plant.image}" alt="${plant.name}" class="w-full h-40 object-cover rounded-md mb-2"/>
         <p><strong>Category:</strong> ${plant.category}</p>  
            <p class="py-2"><strong>Price:</strong> ${plant.price} TK</p>
           <p class="text-sm text-gray-500 mb-2">${plant.description}</p>
            <div class="flex items-end justify-end ">
           
             <button class="btn join-item " id="close">Close</button>
           
        </div>
        </div>
    `;
    document.getElementById("close").onclick = () => modalbox.classList.add("hidden");
    modalbox.classList.remove("hidden");
}
modalbox.addEventListener("click", e => {
    if (e.target === modalbox) modalbox.classList.add("hidden");
});

const showLoading = () => {
    cardContainer.innerHTML = `
     <div class="bg-green-500 p-3 h-[200px] w-[200px] flex justify-center items-center ">Loading...</div>
    `
}
































// const categoryContainer = document.getElementById("categoryContainer");
// const cardContainer = document.getElementById("cardContainer");
// const cardListContainer = document.getElementById("cardListContainer");
// const totalContainer = document.getElementById("totalContainer");
// const modalbox = document.getElementById("modal");

// let totalprice = 0;

// // Load categories
// function category() {
//     fetch("https://openapi.programming-hero.com/api/categories")
//         .then(res => res.json())
//         .then(data => {
//             const categories = data.data;
//             showcategory(categories);
//             allplants(); // Load initial plants
//         })
//         .catch(err => console.log(err));
// }

// // Show categories
// function showcategory(categories) {
//     categoryContainer.innerHTML = "";
//     categories.forEach(category => {
//         const li = document.createElement("li");
//         li.textContent = category.category_name;
//         li.id = category.id;
//         li.className = "flex py-3 items-center hover:bg-green-600 cursor-pointer";
//         li.addEventListener("click", () => {
//             const all = categoryContainer.querySelectorAll("li");
//             all.forEach(li => li.classList.remove("bg-red-600"));
//             li.classList.add("bg-red-600");
//             loadcontainer(category.id);
//         });
//         categoryContainer.appendChild(li);
//     });
// }

// // Load initial plants
// function allplants() {
//     fetch("https://openapi.programming-hero.com/api/plants")
//         .then(res => res.json())
//         .then(data => {
//             showplants(data.plants.slice(0, 6));
//         })
//         .catch(err => console.log(err));
// }

// // Load plants by category
// function loadcontainer(id) {
//     fetch(`https://openapi.programming-hero.com/api/category/${id}`)
//         .then(res => res.json())
//         .then(data => {
//             showplants(data.plants);
//         })
//         .catch(err => console.log(err));
// }

// // Show plant cards
// function showplants(plants) {
//     cardContainer.innerHTML = "";
//     plants.forEach(plant => {
//         const card = document.createElement("div");
//         card.className = "border border-gray-300 rounded-lg p-2 bg-white h-[400px]";

//         card.innerHTML = `
//             <div>
//                 <img src="${plant.image}" alt="${plant.name}" class="w-full h-40 object-cover rounded-md"/>
//             </div>
//             <div class="p-1 item">
//                 <h1 class="font-extrabold text-lg name cursor-pointer">${plant.name}</h1>
//                 <p class="text-sm text-gray-500 plant-desc">${plant.description}</p>
//                 <div class="flex justify-between items-center py-1">
//                     <p class="text-sm text-green-400 border border-green-2 plant-category rounded-3xl p-1">${plant.category}</p>
//                     <p class="text-sm mt-2 font-bold price">${plant.price} TK</p>
//                 </div>
//                 <button class="add-to-card bg-green-600 text-white px-2 py-1 rounded-3xl mt-2 w-full">
//                     Add to cart
//                 </button>
//             </div>
//         `;

//         // Name click -> show modal
//         card.querySelector(".name").addEventListener("click", () => {
//             fetch(`https://openapi.programming-hero.com/api/plant/${plant.id}`)
//                 .then(res => res.json())
//                 .then(data => openModal(data.data))
//                 .catch(err => console.log(err));
//         });

//         // Add to cart
//         card.querySelector(".add-to-card").addEventListener("click", () => {
//             addToCardList(plant.name, plant.price);
//         });

//         cardContainer.appendChild(card);
//     });
// }

// // Modal
// function openModal(plant) {
//     modalbox.innerHTML = `
//         <div class="bg-white p-4 rounded-lg w-96 relative shadow-lg">
//             <span id="closeModal" class="absolute top-2 right-2 cursor-pointer text-red-500 text-xl font-bold">&times;</span>
//             <div>
//                 <img src="${plant.image}" alt="${plant.name}" class="w-full h-40 object-cover rounded-md"/>
//             </div>
//             <div class="p-2">
//                 <h1 class="font-extrabold text-lg mb-2">${plant.name}</h1>
//                 <p class="text-sm text-gray-500 mb-2">${plant.description}</p>
//                 <p><strong>Category:</strong> ${plant.category}</p>
//                 <p><strong>Price:</strong> ${plant.price} TK</p>
//                 <p><strong>Other Info:</strong> ${plant.other_info || "No additional info"}</p>
//             </div>
//         </div>
//     `;
//     document.getElementById("closeModal").onclick = () => modalbox.classList.add("hidden");
//     modalbox.classList.remove("hidden");
// }

// // Add to cart
// function addToCardList(name, price) {
//     price = parseFloat(price);
//     const div = document.createElement("div");
//     div.className = "flex justify-between items-center bg-white p-2 rounded mb-2 shadow";
//     div.innerHTML = `
//         <div class="flex flex-col">
//             <span>${name}</span>
//             <span class="text-green-600 font-bold">${price}</span>
//         </div>
//         <button class="delete text-red px-2 py-1 rounded"><i class="fa-solid fa-xmark"></i></button>
//     `;
//     div.querySelector(".delete").onclick = () => {
//         cardListContainer.removeChild(div);
//         totalprice -= price;
//         total();
//     };
//     cardListContainer.appendChild(div);
//     totalprice += price;
//     total();
// }

// // Update total
// function total() {
//     totalContainer.textContent = `Total : ${totalprice.toFixed(2)} TK`;
// }

// // Initialize
// category();