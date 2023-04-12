console.log("moin")

const jbMobileNavbarContent = document.getElementsByClassName("jb-navbar-mobile-content")[0];

const jbMobileNavbarContentWrapper = document.getElementsByClassName("jb-navbar-mobile-content-wrapper")[0];
const jbMobileNavbarIconWrapper = document.getElementById("jb-navbar-mobile-icon-wrapper");

const jbMobileNavbarOpen = document.getElementById("jb-navbar-mobile-open");
const jbMobileNavbarClose = document.getElementById("jb-navbar-mobile-close")

let jbShowMobileNavbarContent = false;

// Method to update all elements when the navbar is shown / hidden
let updateNavbar = (open) => {
    if (open) {
        jbShowMobileNavbarContent = true;

        jbMobileNavbarOpen.style.display = "none";
        jbMobileNavbarClose.style.display = "block";

        jbMobileNavbarContentWrapper.style.display = "block";

        setTimeout(() => {
            jbMobileNavbarContent.style.translate = "0 0";    
            jbMobileNavbarContentWrapper.style.backgroundColor = style.getPropertyValue("--main-overlay");
        }, 1);

    } else {
        jbShowMobileNavbarContent = false;

        jbMobileNavbarOpen.style.display = "block";
        jbMobileNavbarClose.style.display = "none";

        jbMobileNavbarContentWrapper.style.backgroundColor = "#00000000";
        jbMobileNavbarContent.style.translate = "100% 0";
        setTimeout(() => {
            jbMobileNavbarContentWrapper.style.display = "none";
        }, 200);
    }
}

jbMobileNavbarOpen.addEventListener("click", () => {
    updateNavbar(true);

    jbMobileNavbarIconWrapper.style.backgroundColor = style.getPropertyValue("--main-background-2");  
    setTimeout(() => {
        jbMobileNavbarIconWrapper.style.backgroundColor = style.getPropertyValue("--main-background");    
    }, 100);
});

jbMobileNavbarClose.addEventListener("click", () => {
    updateNavbar(false);

    jbMobileNavbarIconWrapper.style.backgroundColor = style.getPropertyValue("--main-background-2");  
    setTimeout(() => {
        jbMobileNavbarIconWrapper.style.backgroundColor = style.getPropertyValue("--main-background");    
    }, 100);
});

jbMobileNavbarContentWrapper.addEventListener("click", (e) => {
    
    if (e.target != jbMobileNavbarContent) {
        updateNavbar(false);
    }
    
});

// Close the navbar on pageload
updateNavbar(false);
