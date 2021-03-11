//Get local time
var hours = new Date().toLocaleDateString('us-EN', { hour: 'numeric', hour12: true, minute: "2-digit" })
//Getting minutes and hours emelents
let myHours = document.getElementById('hours');

//Complete my spans with data from function Data();
myHours.textContent = hours



//Get elements from UI to JavaScript manitpulations
let charactersLength = document.getElementById('characthers-length-input');
let upperCharacters = document.getElementById('upper_latters');
let lowerCharacters = document.getElementById('lower_latters');
let numbersCharacters = document.getElementById('numbers');
let specialCharacters = document.getElementById('special_characters');
let generatePassword = document.getElementById('password-generate-button');
let sublabelText = document.getElementById('password-length-sublabel');

//Generate a string from user input preferences 
let passwordCharactersTypes = '';
let result = '';
let upperCases = 'QWERTYUIOPASDFGHJKLZXCVBNM';
let lowerCases = 'qwertyuiopasdfghjklzxcvbnm';
let numberCases = '1234567890';
let specialCases = '!@#$%^&*()":?><';
//Adding an event listner to clik on generate button
generatePassword.addEventListener('click', function () {
    //Checking for user input to be biger then 8 and lesser then 128
    let myPasswordLength = parseInt(charactersLength.value);
    if (myPasswordLength < 8 || myPasswordLength > 128) {
        //Changing color in red to an alert label if user input dont meet condition above
        sublabelText.style.color = 'red';
        return false;
    }
    else {
        sublabelText.style.color = 'transparent';
        //In normal condition our text is transprent
    }
    //If user do not check any of conditioning checkboxex(upperCases, lowerCase)
    if (upperCharacters.checked === false && lowerCharacters.checked === false
        && numbersCharacters.checked === false && specialCharacters.checked === false) {
        sublabelText.textContent = 'Check an option for your password!';
        sublabelText.style.color = ' red';
        return false;

    }//Creating ar string from user preferences
    if (upperCharacters.checked) {
        passwordCharactersTypes += upperCases;
    }
    if (lowerCharacters.checked) {
        passwordCharactersTypes += lowerCases;
    }
    if (numbersCharacters.checked) {
        passwordCharactersTypes += numberCases;
    }
    if (specialCharacters.checked) {
        passwordCharactersTypes += specialCases;
    }
    //Looping thru my string from user preferences adn select an random index from this string
    for (let i = 0; i < parseInt(charactersLength.value); i++) {
        result += passwordCharactersTypes[Math.floor(Math.random() * passwordCharactersTypes.length)];
    }
    //Get generated password in my webSite
    let passwordGeneratedTextArea = document.getElementById('password-generated');
    passwordGeneratedTextArea.textContent = result;
    result = '';

});

//Save to clipboard function
let saveToClipBoardButton = document.getElementById('save-generate-button');
saveToClipBoardButton.addEventListener('click', () => {
    let mypassTextArea = document.getElementById('password-generated');
    mypassTextArea.select();
    document.execCommand('copy');
    console.log('PasswordSaved');


})














