// This will create an HTML element from JavaScript
const newPara = document.createElement("p");
newPara.textContent = "This paragraph was created by JavaScript!";
document.body.appendChild(newPara);
newPara.classList.add("newPara");

const newHeader = document.createElement('h1');
newHeader.textContent = `Trailside Junk`;
document.body.appendChild(newHeader);
newHeader.classList.add("newHeader");

const secondHeader = document.createElement('h1');
secondHeader.textContent  = `Serving Charlotte and Surrounding since 1983`;
document.body.appendChild(secondHeader);
secondHeader.classList.add("secondHeader");

                                    
