
// get the thing
let navContent = document.getElementById("navContent");

// log the thing to make sure you got the thing
// console.log(navContent);

console.log(navContent.children);

// create an element
let nameElement = document.createElement("p");

// get the data and set it to the text of the new element
nameElement.innerText = getGitHubInfo().name;
nameElement.style["color"] = 'white';
console.log(nameElement)

nameElement.innerText = "hi, " + getGitHubInfo().name;
nameElement.classList.add('col-1');
nameElement.classList.add('align-self-end');
nameElement.classList.add('text-start');

// TODO: Add nameElement to the DOM - specifically in between the GitHub Logo and the ul on the navbar





navContent.insertBefore(nameElement, navContent.children[1]);


let contentDiv = document.querySelector('div.container.container-fluid.container.md.row.mx-md-auto.mt-4');

let details = document.createElement('p');
details.innerText = getGitHubInfo().details;

contentDiv.replaceChildren(details);


// PRETEND THIS IS AN API CALL ACROSS THE INTERWEBS
function getGitHubInfo(){
    return {
        name: "vegetasrevenge",
        details: "I AM HERE"
    };
}