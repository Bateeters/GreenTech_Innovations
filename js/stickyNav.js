// Sticky nav bar JS
const stickyNav = document.querySelector('.hide');
const scrollPoint = 200;

// Event listener for window scroll event
window.addEventListener("scroll", ()=>{
    // Check if scroll position is past "scrollPoint"
    if(window.scrollY > scrollPoint) {
        stickyNav.classList.add("sticky");
    } else {
        stickyNav.classList.remove("sticky");
    }
});