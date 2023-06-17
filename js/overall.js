const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
  }

const sections = document.getElementsByName('main');

const sectBtns = document.getElementById('nav-links');
const sectBtn = document.querySelectorAll('.nav-link')


const allSections = document.querySelectorAll('.main-content')
console.log(sectBtns);
function PageTransitions(){
    //Sections Activator
    sectBtns.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            document.body.dataset.nav = document.body.dataset.nav = "false";
            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
                section.classList.remove('animateOnStartUpIn');
                section.classList.remove('animateOnNavedIn')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
            element.classList.add('animateOnNavedIn')
        }
    })
     
    
}

const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 2 : 1})`
  }
  
  trailer.animate(keyframes, { 
    duration: 100, 
    fill: "forwards" 
  });
}

const getTrailerClass = type => {
  switch(type) {
    case "rotate":
        return "fa-solid fa-arrows-rotate";
    case "video":
      return "fa-solid fa-play";
    case "button":
        return "fa-solid fa-circle-dot";
    default:
      return "fa-solid fa-up-right-from-square"; 
  }
}

window.onmousemove = e => {
  const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
  
  const icon = document.getElementById("trailer-icon");
  
  animateTrailer(e, interacting);
  
  trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
  if(interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  }
}

PageTransitions();
