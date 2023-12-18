const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").foreach(n => n.addEventListener("click" , () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
    
}))


function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "foziam139@gmail.com",
        Password : "fawziyah17",
        To : 'foziam139@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form enquiry",
        Body : "name: " + document.getElementById("name").value 
        + "<br> Email: " + document.getElementById("email").value 
        + "<br> Message: " + document.getElementById("message").value 
    }).then(
      message => alert("Message Sent Successfully!")
    );
}





