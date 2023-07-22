const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector("#submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

// const parrafo = document.querySelector("#text-hoverjs")     EJEMPLO DE OVERMOUSE;

const publicKey = "bGvdSN4Lr2q4ifxPU";
const serviceID = "service_1pwm3lz";
const templateID = "template_qgxgbbr";

// emailjs.init(publicKey);

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  submitBtn.innerText = "Un momento por favor..";

  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  emailjs.send(serviceID, templateID, inputFields).then(
    () => {
      submitBtn.innerText = "Su mensaje fue enviado";
      nameInput.value = "";
      emailIinput.value = "";
      messageInput.value = "";
    },
    (error) => {
      console.log(error);

      submitBtn.innerText = "Algo salió mal";
    }
  );
});




// EJEMPLO DE OVERMOUSE
// parrafo.addEventListener("mouseover", (event) => {
//   parrafo.innerHTML = "Hola qué tal";
// });

// parrafo.addEventListener("mouseleave", (event) => {
//     parrafo.innerHTML = "Chaooo pescaooo"
// })


let menus = document.querySelector(".navbar");
let menus_btn = document.querySelector(".menu-btn");
let close_btn = document.querySelector(".close-btn");

menus_btn.addEventListener("click", function () {
  menus.classList.add("active2");
});

close_btn.addEventListener("click", function () {
  menus.classList.remove("active2");
});


// ----------------------------FUNCION DE BOTONES TRADUCTOR---------------------------------

function ESP() {
  document.getElementById("Espbtn").classList.add("myself");
  document.getElementById("Espbtn").innerHTML = `Desarrollador Front-end, amante del diseño, la creatividad y la tecnología.
  Me encuentro en constante aprendizaje y manteniéndome al tanto de las últimas tendencias en
  diseño, desarrollo web y tecnología, para poder mejorar continuamente en mis capacidades y trabajos.
   También, amo trabajar en conjunto y soy capaz de hacerlo eficazmente e ir aportando grandes ideas
   para poder realizar un gran trabajo.`;
}

function ENG(){
  document.getElementById("Espbtn").classList.add("myself");
  document.getElementById("Espbtn").innerHTML = `Front-end Developer, passionate about design, creativity, and technology.
   I am consistently engaged in learning and staying abreast of the latest trends in design,
    web development, and technology to continuously enhance my skills and output.
   Moreover, I thrive in collaborative environments, effectively contributing impactful ideas to deliver exceptional results.` 
}