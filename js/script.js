const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const title = document.getElementById("hardSkillTitle");
const text = document.getElementById("hardSkillText");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
language = 'en';

open.addEventListener("click", () => {
    nav.classList.add("visible");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");
})

function handleFacebookButtonClick() {
    var facebookURL = "https://www.facebook.com/claudiocarmu";
    window.open(facebookURL, "_blank");
}

function handleGitHubButtonClick() {
    var gitHubURL = "https://github.com/claudiocarmusciano";
    window.open(gitHubURL, "_blank");
}

function handleInstagramButtonClick() {
    var instagramURL = "https://www.instagram.com/claudiocarmusciano";
    window.open(instagramURL, "_blank");
}

function handleLinkedInButtonClick() {
    var linkedInURL = "https://www.linkedin.com/in/claudio-carmusciano-ab993224a/";
    window.open(linkedInURL, "_blank");
}

function handleLinkClick(event) {
    event.preventDefault();
    const links = document.querySelectorAll(".hardSkillsAnchors a");

    links.forEach(link => link.classList.remove("selected"));
    event.target.classList.add("selected");
}

document.getElementById("frontend").addEventListener("click", function(event) {
    event.preventDefault(); 

    const frontend = document.getElementById("frontend");
    const links = document.querySelectorAll(".hardSkillsAnchors a");    
    links.forEach(link => link.addEventListener("click", handleLinkClick));
    
    if (language=='en') {
        text.textContent = "It attracts me because it is the area that has a direct relationship with the client. I consider my knowledge of native HTML and CSS important. Regarding frameworks, I have knowledge of Bootstrap and VUE.";
    } else if (language=='sp') {
        text.textContent = "Me atrae porque es el área que tiene una relación directa con el cliente. Considero importante mi conocimiento de HTML nativo y CSS. En cuanto a frameworks, tengo conocimientos de Bootstrap y VUE.";
    }
        
    title.textContent = "Front-End";
    inicializar_img();
    img1.src = "images/html.png";
    img2.src = "images/css.png";
    img3.src = "images/bootstrap-4-logo-svgrepo-com.svg";
    img4.src = "images/vue.svg"

});

frontend.click();


document.getElementById("backend").addEventListener("click", function(event) {
    event.preventDefault(); 

    const links = document.querySelectorAll(".hardSkillsAnchors a");    
    links.forEach(link => link.addEventListener("click", handleLinkClick));
    
    if (language=='en') {
        text.textContent = "Strong knowledge of back-end languages such as Java for versatile development, JavaScript for dynamic interactivity, and PHP for web implementations and server-side functionality.";
    } else {
        text.textContent = "Fuerte conocimiento de lenguajes de back-end como Java para desarrollo versátil, JavaScript para interactividad dinámica y PHP para implementaciones web y funcionalidad del lado del servidor.";
    }

    title.textContent = "Back-End";
    inicializar_img();
    img1.src = "images/java.png";
    img2.src = "images/js.svg";
    img3.src = "images/php-1-logo-svgrepo-com.svg";
    img4.style.display = "none";
});

document.getElementById("develop").addEventListener("click", function(event) {
    event.preventDefault(); 

    const links = document.querySelectorAll(".hardSkillsAnchors a");    
    links.forEach(link => link.addEventListener("click", handleLinkClick));
    
    if (language=='en') {   
        text.textContent = "Knowledge of development languages, including Java, JavaScript and Python for agile development and efficient solutions. As well as different techniques, methods and algorithms, among others.";
    } else {
        text.textContent = "Conocimiento de lenguajes de desarrollo, incluidos Java, JavaScript y Python para un desarrollo ágil y soluciones eficientes. Así como diferentes técnicas, métodos y algoritmos, entre otros.";
    }

    title.textContent = "Develop";
    inicializar_img();
    img1.src = "images/java.png";
    img2.src = "images/js.svg";
    img3.src = "images/python.png";
    img4.style.display = "none";
});

document.getElementById("tools").addEventListener("click", function(event) {
    event.preventDefault(); 

    const links = document.querySelectorAll(".hardSkillsAnchors a");    
    links.forEach(link => link.addEventListener("click", handleLinkClick));
    
    if (language=='en') {
        text.textContent = "Knowledge of tools like Git for version control, GitHub for repository collaboration, Trello for project management, and Draw.io for creating diagrams and visualizing ideas, among others.";
    } else {
        text.textContent = "Conocimiento de herramientas como Git para control de versiones, GitHub para colaboración de repositorios, Trello para gestión de proyectos y Draw.io para creación de diagramas y visualización de ideas, entre otras."
    }
    title.textContent = "Tools";
    inicializar_img();
    img1.src = "images/git.png";
    img2.src = "images/github-color-svgrepo-com.svg";
    img3.src = "images/trello-logo-svgrepo-com.svg";
    img4.src = "images/Diagrams.net_Logo.svg.png";
});

document.getElementById("metodologies").addEventListener("click", function(event) {
    event.preventDefault(); 

    const links = document.querySelectorAll(".hardSkillsAnchors a");    
    links.forEach(link => link.addEventListener("click", handleLinkClick));
    
    if (language=='en') {
        text.textContent = "Knowledge of development methodologies, highlighting Scrum. Study of agile teams, sprints, planning and monitoring to deliver projects in a collaborative and efficient way.";
    } else {
        text.textContent = "Conocimiento de metodologías de desarrollo, destacando Scrum. Estudio de equipos ágiles, sprints, planificación y seguimiento para entregar proyectos de forma colaborativa y eficiente.";
    }
    title.textContent = "Metodologies";
    inicializar_img();
    img1.src = "images/scrum.svg";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
});


// Script for Contact Form //

// const form = document.getElementById("contactForm");
// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
//         alert("Por favor, completa todos los campos.");
//     } else {
//         form.submit();
//     }
// });

// Translations //

const translations = {
    principal: {
        en: "Hi, my name is Claudio Carmusciano. <br> Junior Developer.",
        sp: "Hola, mi nombre es Claudio Carmusciano. <br> Desarrollador Junior."
    },

    'home-a': {
        en: "Home",
        sp: "Inicio"
    },

    'aboutMe-a': {
        en: "About Me",
        sp: "Sobre mí"
    },

    'socialNetworks-a': {
        en: "Social Networks",
        sp: "Redes Sociales"
    },

    'skills-a': {
        en: "Skills",
        sp: "Habilidades"
    },

    'education-a': {
        en: "Education",
        sp: "Educación"
    },

    'contactMe-a': {
        en: "Contact Me",
        sp: "Contáctame"
    },

    subtitle: {
        en: "I love what I do and enjoy what I do.",
        sp: "Amo lo que hago y disfruto lo que hago."
    },

    titleAboutMe: {
        en: "About Me",
        sp: "Sobre mí"
    },

    textAboutMe: {
        en: "I consider myself a person who wants to learn and undertake. My main characteristics: responsible, friendly, helpful, reliable. Excellent interaction with other people. I adapt to all types of respectful work environment. I am passionate about computers and technology. I am excited and eager to explore new possibilities and challenges in my career in order to gain extensive experience in all things programming.",
        sp: "Me considero una persona con ganas de aprender y emprender. Mis características principales: responsable, amable, servicial, confiable. Excelente interacción con otras personas. Me adapto a todo tipo de ambiente de trabajo respetuoso. Soy un apasionado de la informática y la tecnología. Estoy emocionado y ansioso por explorar nuevas posibilidades y desafíos en mi carrera para obtener una amplia experiencia en todo lo relacionado con la programación."
    },

    titleSocialNetworks: {
        en: "My Social Networks",
        sp: "Mis redes sociales"
    },

    titleSoftSkills: {
        en: "Soft Skills",
        sp: "Habilidades blandas"
    },

    titleHardSkills: {
        en: "Hard Skills",
        sp: "Habilidades duras"
    },

    communicationSpan: {
        en: "Communication",
        sp: "Comunicación"
    },

    communicationText: {
        en: "Effective communication with others, both verbal and non-verbal. Ability to listen, speak, write and read.",
        sp: "Comunicación efectiva con los demás, tanto verbal como no verbal. Habilidad para escuchar, hablar, escribir y leer."
    },

    teamworkSpan: {
        en: "Teamwork",
        sp: "Trabajo en equipo"
    },

    teamworkText: {
        en: "Ability to work with others to achieve a common goal. With the ability to collaborate, communicate and resolve conflicts.",
        sp: "Habilidad para trabajar con otros para lograr un objetivo común. Con capacidad para colaborar, comunicarse y resolver conflictos."
    },

    problemSpan: {
        en: "Problem resolution",
        sp: "Resolución de problemas"
    },

    problemText: {
        en: "Ability to identify and solve problems effectively. This includes the ability to think critically, to identify root causes, and to develop solutions.",
        sp: "Habilidad para identificar y resolver problemas de manera efectiva. Esto incluye la capacidad de pensar críticamente, identificar las causas fundamentales y desarrollar soluciones."
    },

    responsabilitySpan: {
        en: "Seriousness and responsibility",
        sp: "Seriedad y responsabilidad"
    },

    responsabilityText: {
        en: "Professional attitude and commitment to tasks and deadlines. Fulfillment of duties, proactive to solve problems and learn from mistakes.",
        sp: "Actitud profesional y compromiso con las tareas y los plazos. Cumplimiento de deberes, proactivo para resolver problemas y aprender de los errores."
    },

    adaptabilitySpan: {
        en: "Adaptability",
        sp: "Adaptabilidad"
    },

    adaptabilityText: {
        en: "Ability to adapt to changes in the environment. Being flexible, learning from new things and solving problems.",
        sp: "Capacidad de adaptación a los cambios del entorno. Ser flexible, aprender de cosas nuevas y resolver problemas."
    },

    emotionalSpan: {
        en: "Emotional intelligence",
        sp: "Inteligencia emocional"
    },

    emotionalText: {
        en: "Understand and manage one's own emotions and the emotions of others. Ability to be self-aware, to be empathetic and to manage conflict.",
        sp: "Comprender y gestionar las propias emociones y las emociones de los demás. Habilidad para ser consciente de sí mismo, ser empático y manejar conflictos."
    },

    motivationSpan: {
        en: "Motivation",
        sp: "Motivación"
    },

    motivationText: {
        en: "Ability to stay motivated and focused on achieving goals. Ability to set goals, develop a plan, and persevere through difficulties.",
        sp: "Capacidad para mantenerse motivado y enfocado en el logro de objetivos. Habilidad para establecer metas, desarrollar un plan y perseverar a través de las dificultades."
    },

    titleHardSkills: {
        en: "Hard Skills",
        sp: "Habilidades duras"
    },

    frontend: {
        en: "Front-End",
        sp: "Front-End"
    },

    backend: {
        en: "Back-End",
        sp: "Back-End"
    },

    develop: {
        en: "Develop",
        sp: "Desarrollo"
    },

    tools: {
        en: "Tools",
        sp: "Herramientas"
    },

    metodologies: {
        en: "Metodologies",
        sp: "Metodologías"
    },

    educationTitle: {
        en: "Education and Knowledge",
        sp: "Educación y conocimientos"
    },

    analystTitle: {
        en: "Systems Analyst",
        sp: "Analista de Sistemas"
    },

    download1: {
        en: "Download Certificate",
        sp: "Descargar certificado"
    },

    download2: {
        en: "Download Certificate",
        sp: "Descargar certificado"
    },

    download3: {
        en: "Download my Resume",
        sp: "Descargar mi CV"
    },

    tudaiTitle: {
        "en": "University Technician in Computer <br> Application Development",
        "sp": "Técnico Universitario en Desarrollo <br> de Aplicaciones Informáticas"
    },

    contactTitle: {
        en: "Contact Me",
        sp: "Contáctame"
    },

    name: {
        en: "Name:",
        sp: "Nombre:"
    },

    email: {
        en: "Email:",
        sp: "Correo electrónico:"
    },

    message: { 
        en: "Message:",
        sp: "Mensaje:"
    },

    send_b: {
        en: "Send",
        sp: "Enviar"
    }
};



function updateLanguage(language) {
    for (const key in translations) {
      const element = document.getElementById(key);
      if (element) {
        element.innerHTML = translations[key][language];
      }
    }
}

const englishFlag = document.querySelector('.englishLanguage');
const spanishFlag = document.querySelector('.spanishLanguage');
const hard = document.getElementById('frontend');

englishFlag.addEventListener('click', function () {
    language = 'en';
    hard.click();
    updateLanguage(language);
});

spanishFlag.addEventListener('click', function () {
    language = 'sp'
    hard.click();
    updateLanguage(language);
});

function inicializar_img() {
    img1.style.display = "inline-block";
    img2.style.display = "inline-block";
    img3.style.display = "inline-block";
    img4.style.display = "inline-block";
}