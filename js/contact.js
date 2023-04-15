const input_name = document.getElementById("jb-contact-name");
const input_mail = document.getElementById("jb-contact-mail");
const input_subject = document.getElementById("jb-contact-subject");
const input_message = document.getElementById("jb-contact-message");

const form = document.getElementById("jb-contact-form");

const loader = document.getElementById("contact-form-loader");
const sendingSuccess = document.getElementById("contact-form-success");
const sendingFailed = document.getElementById("contact-form-failed");
const sendingSubmit = document.getElementById("contact-form-submit");

let initMail = () => {
    emailjs.init('yJmFigiSQiNilkKwb');
}

let sendMessage = () => {
    let name = input_name.value;
    let mail = input_name.value;
    let subject = input_subject.value;
    let message = input_message.value;

    console.log("moin")
    console.log(name, mail, subject, message);
}

let clearForm = () => {
    input_name.value = "";
    input_mail.value = "";
    input_subject.value = "";
    input_message.value = "";
}

initMail();

form.addEventListener("submit", (e) => {
    e.preventDefault();

    loader.style.visibility = "visible";
    sendingFailed.display = "none";
    sendingSuccess.style.display = "block";
    sendingSuccess.style.visibility = "hidden";
    sendingSubmit.disabled = true;

    emailjs.sendForm('contact_service', 'contact_form', form)
        .then(() => {
            loader.style.visibility = "hidden";
            
            // Blend in success
            sendingSuccess.style.display = "block";
            sendingSuccess.style.visibility = "visible";

            sendingFailed.style.visibility = "hidden";
            sendingFailed.style.display = "none";

            sendingSubmit.disabled = false;

            clearForm();
        }, (error) => {
            loader.style.visibility = "hidden";

            // Blend in fail
            sendingSuccess.style.display = "none";
            sendingSuccess.style.visibility = "hidden";
            
            sendingFailed.style.visibility = "visible";
            sendingFailed.style.display = "block";

            sendingSubmit.disabled = false;
        });
});