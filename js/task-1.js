let list = document.querySelector("#categories").querySelectorAll(".item");

console.log(`Number of categories: ${list.length}`);

list.forEach((item) => {
    console.log(`Category: ${item.querySelector("h2").innerHTML}`);
    console.log(`Elements: ${item.querySelector("ul").querySelectorAll("li").length}`);
});