const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

console.log(teamMembers);

//elemento html card  da creare

/* <div class="card">

<img class="image" src="/img/female1.png" alt="female1">

<div class="info">
    <h2>Laura Rossi</h2>
    <h3> Designer</h3>
    <h3 class="mail">mail@gmail.com</h3>
</div>

</div>  */

//Prossimi step: 
//renderizzare la card
//creare elemeto html
//appenderlo al parente nell'html

const parentElement = document.querySelector('.main');

console.log(parentElement);

renderHTML(parentElement, teamMembers);

//lavoro sul form

const memberFormElement = document.getElementById('member-form');
console.log(memberFormElement);

memberFormElement.addEventListener('submit',function(event){

  event.preventDefault();
  console.log('ho inviato il form');
})




//creo le funzioni

// la prima crea ed appende un elemento html ad un genitore per quanti sono gli elementi dell'oggetto preso in considerazione

function renderHTML(parent, elements){
  console.log(parent);
  console.log(elements);

  let items = '';

  for(let i= 0; i<elements.length; i++){

    let currentElement=elements[i];

    console.log(currentElement);

    items += createHTMLElement(currentElement);

  }

  parent.innerHTML=items;

  console.log(parent);

};

//la seconda nello specifico crea un elemtento html ed è usata all'interno della prima

function createHTMLElement(object){

  return `<div class="card">
            <img class="image" src="${object.img}" alt="${object.name}">
            <div class="info">
              <h2>${object.name}</h2>
              <h3>${object.role}</h3>
              <h3 class="mail">${object.email}</h3>
            </div>
          </div>`
};