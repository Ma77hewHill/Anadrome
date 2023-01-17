//get a string from the user
// controller function
function getValue(){
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}

//Reverse the string
//logic function 
function reverseString(userString){

    let revString = [];

    
    //reverse a string using a for loop

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }

    return revString;
}

//display the reversed string to the user 
//view function 
function displayString(revString){

    //write to the page 
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    //show the alert box 
    document.getElementById("alert").classList.remove("invisible");
}