/**
 * Authors:    Tristan & Skye
 * Created:   09.28.2022
 **/

 function ready(){
  console.log ("hello");
  document.querySelector(".content");
}

let newButton = document.createElement('button');
newButton.innerHTML = "mister button";
document.body.appendChild(newButton);
newButton.style.color = 'orange';
newButton.style.background = 'green';
newButton.style.border = 'thick solid orange'

let newButtondos = document.createElement('button');
newButtondos.innerHTML = "missy button";
document.body.appendChild(newButtondos);
newButtondos.style.color = 'green';
newButtondos.style.background = 'orange';
newButtondos.style.border = 'thick solid green'





/*let para1 = document.createElement("button");
para.innerText = "This is paragraph 1";
document.body.appendChild(para1);

let para2 = document.createElement("button");
para.innerText = "This is paragraph 2";
document.body.appendChild(para2);

/**
*In class activity*
console.log('it shows results as you type')
let divVar = document.body.children[1];
divVar.style.border = "thick solid white";
let pVar = document.body.querySelector('.text');
pVar.style.color = 'black'

let newParagraph = document.creativeElement('p');
console.log(newParagraph);
newParagraph.textContent = 'Second paragraph';
let parent = document.querySelector('#content');
parent.appendChild(newParagraph);
**/
