    const myImage = document.querySelector("img"); //setting the standard for the image

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/LM_Logo.png") {
    myImage.setAttribute("src", "images/LM_Logo_glitch.png"); //if source of img is Logo 1, switch to logo 2 on click
  } else {
    myImage.setAttribute("src", "images/LM_Logo.png"); //set attribute ; make the image what I specify - > set the source as logo1
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name."); //a prompt displays a dialog box, asks user to input data and stores it in a variable
    localStorage.setItem("name", myName); //local storage stores in the web browser. Storing a data item called name, then giving it the variable name myName
    myHeading.textContent = 'Time to enter the abyss, ' + myName;
}

if (!localStorage.getItem("name")) { //if the name doesn't exist yet, make one. If it does exist, use locally stored name
    setUserName();
} else { 
    const storedName = localStorage.getItem("name");
    myHeading.textContent = 'Time to enter the abyss, ' + storedName;
}

myButton.onclick = () => { //set username on button click
    setUserName();
}