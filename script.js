const pages = document.querySelectorAll(".page");
const header = document.querySelector("header");
const buttonSuivants = document.querySelectorAll("button[type=button]");

const nbPages = pages.length;
let pageCurrent = 0;

window.onload = () => {
    pages[pageCurrent].style.display = "block";

    pages.forEach((page, index) => {
        let div = document.createElement('div');
        div.classList.add("page-num");
        if(index == pageCurrent) {
            div.classList.add("page-num-active");
        }
        div.textContent = index + 1;
        header.appendChild(div);
    });

    for(let button of buttonSuivants) {
        button.addEventListener("click", pageSuivante);
    }
}

const pageSuivante = () => {
    pageCurrent += 1;

    for(let page of pages) {
        page.style.display = "none";   
    }
    pages[pageCurrent].style.display = "block";

    document.querySelector(".page-num-active").classList.remove("page-num-active");
    const pageNum = document.querySelectorAll(".page-num");
    pageNum[pageCurrent].classList.add("page-num-active");
}

