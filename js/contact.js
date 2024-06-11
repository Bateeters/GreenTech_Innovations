// Contact Us page script

// form elements
const formFirstName = document.querySelector("#first-name");
const formLastName = document.querySelector("#last-name");
const formEmail = document.querySelector("#email");
const formPhone = document.querySelector("#phone");
const formMsg = document.querySelector("#comment");
const submitBtn = document.querySelector("#formSubmitBtn");
const formHeader = document.querySelector("#formHeader");
const formContainer = document.querySelector(".formContainer");

// Form Complete Message Elements
const formCompleteCard = document.querySelector(".formCompleteCard");
const formCompleteText = document.querySelector(".formCompleteTxt");
const formCompleteBtn = document.querySelector(".formCompleteBtn");


submitBtn.addEventListener("click", ()=>{
    if(formFirstName.value!="" && formLastName.value!="" && formEmail.value!=""){
        event.preventDefault();
        formCompleteCard.classList.remove("hide");
        formContainer.setAttribute("style", "display:none");
        formHeader.classList.add("hide");
    }
});

formCompleteBtn.addEventListener("click", ()=>{
    // clear all fields
    formFirstName.value = '';
    formLastName.value = '';
    formEmail.value = '';
    formPhone.value = '';
    formMsg.value = '';

    // revert the form to show again.
    formCompleteCard.classList.add("hide");
    formContainer.setAttribute("style", "display:flex");
    formHeader.classList.remove("hide");
})