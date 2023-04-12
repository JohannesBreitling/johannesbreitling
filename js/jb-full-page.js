let jbFullPageElements = document.getElementsByClassName("jb-full-page");

let resizeFullPage = () => {
    for (let i = 0; i < jbFullPageElements.length; i++) {
        jbFullPageElements[i].style.height = window.innerHeight + "px";
        jbFullPageElements[i].style.width = window.innerWidth + "px";
    }
}

resizeFullPage();

window.addEventListener("resize", () => {
    resizeFullPage();
})