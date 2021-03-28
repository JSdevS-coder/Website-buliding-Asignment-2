//declare all vars from the document

let container = $('#login-container');
let logIn = $('#logIn-form');
let input1 = $('#input1');
let input2 = $('#input2');
let userInput1 = $('#username');
let userInput2 = $('#password');
let userName = '';
let userPass = '';

//declare wanted values
let user = 'new_user';
let pass = '123456789';

// convert wanted values to arrays
let givenUser = user.split('');
let givenPass = pass.split('');

//create element for the msg
let newDiv = $('<div id="msg"></div>');
container.append(newDiv);
newDiv.css('padding-top', '1em');

//create signs in the input area

//create signs check and wrong
let correct1 = $('<i class="fas fa-check"></i>');
let wrong1 = $('<i class="fas fa-times"></i>');

let correct2 = $('<i class="fas fa-check"></i>');
let wrong2 = $('<i class="fas fa-times"></i>');


//asign colors to the signs
correct1.css('color', 'green');
wrong1.css('color', 'red');
correct2.css('color', 'green');
wrong2.css('color', 'red');

//append signs to input divs
input1.append(correct1);
input1.append(wrong1);

//position signs
correct1.css('position', 'absolute');
wrong1.css('position', 'absolute');
correct1.css('right', '9em');
wrong1.css('right', '9em');


input2.append(correct2);
input2.append(wrong2);

//position signs
correct2.css('position', 'absolute');
wrong2.css('position', 'absolute');
correct2.css('right', '9em');
wrong2.css('right', '9em');

//set font size for icons
$('.fas').css('font-size', '2em');
$('.fa-check').css('display', 'none');
$('.fa-times').css('display', 'none');


//create submit event 

logIn.submit(function (e) {
  e.preventDefault();

    //take user input values
  userName = $('#username').val();
  userPass = $('#password').val();


  //turn user input into array
  let input1Arr = userName.split('');
  let input2Arr = userPass.split('');

  //check if given data and user data are same

  //declare variables for check results
  let userNameRes; 
  let userPassRes;

  //for username
  for (let i = 0; i < givenUser.length; i++) {
    givenUser[i] === input1Arr[i] && 
    givenUser.length === input1Arr.length ? userNameRes = true : userNameRes = false;

  }

  //for password
  for (let j = 0; j < givenPass.length; j++) { 
    givenPass[j] === input2Arr[j] && 
    givenPass.length === input2Arr.length ? userPassRes = true : userPassRes = false;

  }


  //make changes to the form style  according to the check result

  //check if inputs are empty
  if (userName === '' && userPass === '') {
    newDiv.text('Please, enter username and password!');
    newDiv.css('color', 'red');
    userInput1.css('border-color', 'red');
    userInput2.css('border-color', 'red');
    $('.fa-times').css('display', 'inline');
    $('.fa-check').css('display', 'none');

    //if username is correct and password empty
  } else if (userName !== '' && userNameRes === true && userPass === '') {
    newDiv.text('Please, enter password!');
    newDiv.css('color', 'red');
    userInput1.css('border-color', 'green');
    userInput2.css('border-color', 'red');
    wrong2.css('display', 'inline');
    correct1.css('display', 'inline');
    wrong1.css('display', 'none');
    correct2.css('display', 'none');
  
    //if username is wrong and password empty
  } else if (userName !== '' && userNameRes !== true && userPass === '') {
    newDiv.text('Please, enter password and valid username!');
    newDiv.css('color', 'red');
    userInput1.css('border-color', 'red');
    userInput2.css('border-color', 'red');
    $('.fa-times').css('display', 'inline');
    $('.fa-check').css('display', 'none');
    
    //if username is empty and password correct
  } else if (userName === '' && userPassRes === true && userPass !== '') {
    newDiv.text('Please, enter username!');
    newDiv.css('color', 'red');
    userInput1.css('border-color', 'red');
    userInput2.css('border-color', 'green');
    wrong1.css('display', 'inline');
    correct2.css('display', 'inline');
    wrong2.css('display', 'none');
    correct1.css('display', 'none');
  
    //if username is empty and password wrong
  } else if (userName === '' && userPassRes !== true && userPass !== '') {
    newDiv.text('Please, enter username and valid password!');
    newDiv.css('color', 'red');
    userInput1.css('border-color', 'red');
    userInput2.css('border-color', 'red');
    $('.fa-times').css('display', 'inline');
    $('.fa-check').css('display', 'none');
    
    //if username is correct and password is correct
  } else if (userNameRes === true && userPassRes === true && userName !== '' && userPass !== '') {
    newDiv.text('Successfull login!');
    newDiv.css('color', 'green');
    userInput1.css('border-color', 'green');
    userInput2.css('border-color', 'green');
    $('.fa-check').css('display', 'inline');
    $('.fa-times').css('display', 'none');
  
    //if username is correct and password is wrong
  } else if (userNameRes === true && userPassRes !== true && userName !== '' && userPass !== '') {
    newDiv.text('Please, enter valid password!');
    newDiv.css('color', 'red');
    userInput1.css('border-color', 'green');
    userInput2.css('border-color', 'red');
    wrong2.css('display', 'inline');
    correct1.css('display', 'inline');
    wrong1.css('display', 'none');
    correct2.css('display', 'none');

    //if username is wrong and password is correct
  } else if (userNameRes !== true && userPassRes === true && userName !== '' && userPass !== '') {
    newDiv.text('Please, enter valid username!');
    newDiv.css('color', 'red');
    userInput1.css('border-color', 'red');
    userInput2.css('border-color', 'green');
    wrong1.css('display', 'inline');
    correct2.css('display', 'inline');
    wrong2.css('display', 'none');
    correct1.css('display', 'none');

    //if username is wrong and password is wrong
  } else {
    newDiv.text('Please, enter valid username and password!');
    newDiv.css('color', 'red');
    userInput1.css('border-color', 'red');
    userInput2.css('border-color', 'red');
    $('.fa-times').css('display', 'inline');
    $('.fa-check').css('display', 'none');
  }

});


