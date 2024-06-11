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
const formCompleteBtn = document.querySelector(".formCompleteBtn");
const formCompleteTxt = document.createElement("h1");


submitBtn.addEventListener("click", ()=>{
    if(formFirstName.value!="" && formLastName.value!="" && formEmail.value!=""){
        event.preventDefault();
        formContainer.setAttribute("style", "display:none");
        formHeader.classList.add("hide");


        formCompleteTxt.textContent=`Thank you ${formFirstName.value} for submitting a contact request.
        One of our representatives will be reaching out to you shortly at: ${formEmail.value}`;
        formCompleteCard.prepend(formCompleteTxt);
        formCompleteCard.classList.remove("hide");
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
    formCompleteCard.removeChild(formCompleteTxt);
    formCompleteCard.classList.add("hide");
    formContainer.setAttribute("style", "display:flex");
    formHeader.classList.remove("hide");
})