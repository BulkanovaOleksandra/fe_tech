const heading = document.getElementById("lab4");
heading.addEventListener("click", function(){
    if (heading.style.color == 'red'){
        heading.style.color ='black';
    }else{
        heading.style.color ='red';
    };
    if(heading.style.backgroundColor == 'purple'){
        heading.style.backgroundColor = 'white';
    }else{
        heading.style.backgroundColor ='purple'
    }
});

const BirthElement =document.querySelector("p");
BirthElement.addEventListener("click", function(){
    if (BirthElement.style.color == 'pink'){
        BirthElement.style.color ='black';
    }else{
        BirthElement.style.color ='pink';
    };
    if(BirthElement.style.backgroundColor == 'blue'){
        BirthElement.style.backgroundColor = 'white';
    }else{
        BirthElement.style.backgroundColor ='blue'
    }
})

// const img = document.querySelector("img");

// const addBtn = document.getElementById("addBtn"); 
// addBtn.addEventListener("click", () => {  
//     const newImg = document.createElement("img"); 
//     newImg.src = "wien2.jpg";
//     newImg.alt = "Vienna 2";
//     newImg.style.width = "300px";
//     document.body.insertBefore(newImg, document.querySelector(".buttons")); 
// });

// const increaseBtn = document.getElementById("increaseBtn"); 
// const decreaseBtn = document.getElementById("decreaseBtn"); 
// const deleteBtn = document.getElementById("deleteBtn");

// increaseBtn.addEventListener("click", () => { img.style.width = (img.offsetWidth + 50) + "px"; });
// decreaseBtn.addEventListener("click", () => { img.style.width = (img.offsetWidth - 50) + "px"; }); 
// deleteBtn.addEventListener("click", () => { img.remove();});

const container = document.getElementById("imageContainer");

let photo1Added = true;   // перше фото вже є на сторінці
let photo2Added = false;  // друге фото ще не додавали

const addBtn = document.getElementById("addBtn");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const deleteBtn = document.getElementById("deleteBtn");

// Додати фото (по черзі)
addBtn.addEventListener("click", () => {
    if (!photo1Added) {
        const img1 = document.createElement("img");
        img1.src = "wien1.jpg";
        img1.alt = "Vienna 1";
        img1.style.width = "300px";
        container.appendChild(img1);
        photo1Added = true;
    } else if (!photo2Added) {
        const img2 = document.createElement("img");
        img2.src = "wien2.jpg";
        img2.alt = "Vienna 2";
        img2.style.width = "300px";
        container.appendChild(img2);
        photo2Added = true;
    }
});

// Збільшити останнє фото
increaseBtn.addEventListener("click", () => {
    const currentImg = container.querySelector("img:last-of-type");
    if (currentImg) currentImg.style.width = (currentImg.offsetWidth + 50) + "px";
});

// Зменшити останнє фото
decreaseBtn.addEventListener("click", () => {
    const currentImg = container.querySelector("img:last-of-type");
    if (currentImg) currentImg.style.width = (currentImg.offsetWidth - 50) + "px";
});

// Видалити останнє фото
deleteBtn.addEventListener("click", () => {
    const currentImg = container.querySelector("img:last-of-type");
    if (currentImg) {
        if (currentImg.src.includes("wien1.jpg")) {
            photo1Added = false;
        }
        if (currentImg.src.includes("wien2.jpg")) {
            photo2Added = false;
        }
        currentImg.remove();
    }
});
