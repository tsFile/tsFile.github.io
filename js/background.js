const section = document.querySelector("section");
const bgImageList = ["0.jpg", "1.jpg", "2.jpg"];
const randomNum = Math.floor(Math.random() * bgImageList.length);

section.style.background = `url("../img/${bgImageList[randomNum]}")`;