const letters = /^[a-zA-Z]+$/;
const name = document.querySelector(".fullName");
const email = document.querySelector(".email");
const contactMessage = document.querySelector(".subject");
const sendBtn = document.querySelector(".contactButton");

sendBtn.addEventListener("click", (event) => {
    event.preventDefault();
    validate();
})

function validate() {
    if(name.value.match(letters)){
        name.style.borderColor = 'black';
    }else{
        name.style.borderColor = 'red';
    }

    if(email.value.match(letters)){
        email.style.borderColor = 'black';
    }else{
        email.style.borderColor = 'red';
    }

    if(contactMessage.value.match(letters)){
        contactMessage.style.borderColor = 'black';
    }else{
        contactMessage.style.borderColor = 'red';
    }

    if(name.value.match(letters) && email.value.match(letters) && contactMessage.value.match(letters)){
        alert("Thank you for your attention")
    }
}