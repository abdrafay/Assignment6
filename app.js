firstName = prompt("Enter your First Name");
lastName = prompt("Enter your Last Name");

fullName = firstName + "" + lastName;
document.write(fullName)

// =======================================================


favouriteMobile = prompt("Enter Your Favourite Mobile Phone Model");
document.write("My Favourite Mobile Phone is: " + favouriteMobile + "<br>");
document.write("Length of the string is: " + favouriteMobile.length);

// =======================================================

country = "Pakistani";
document.write("String: " + country + "<br>");
document.write("Index of 'n': " +  country.indexOf("n") + "<br> <br>");

// =======================================================

var greeting = "Hello World";
document.write("String: " + greeting + "<br>");
var lastIndex = greeting.lastIndexOf('l');
document.write("Last index of 'l': " + lastIndex + "<br> <br>")

// =======================================================

var Mycountry = "Pakistani";
document.write("String: " + Mycountry + "<br>");
document.write("Character at index 3: "+ Mycountry[3] + "<br> <br>");

// ======================================================

var firstName = prompt("Enter your First Name") + " ";
var lastName = prompt("Enter your Last Name");

var fullName= firstName.concat(lastName);
document.write(fullName + "<br> <br>")

// ======================================================

var city = "Hyderabad";
document.write("City: " + city + "<br>");
var newCity = city.replace("Hyder", "Islam");   
document.write("After replacement: "+ newCity + "<br> <br>");

// ======================================================

var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(message + "<br>")
var repMessage = message.replace("and", "&");
document.write(repMessage + "<br> <br>");

// =====================================================

var myInt = "472";
var type = typeof(myInt);
document.write("Value: " + myInt + "<br>" +"Type: " + type + "<br>");

var intStr = parseInt(myInt);
var type = typeof(intStr);
document.write("Value: " + intStr + "<br>" +"Type: " + type + "<br> <br>");

// =====================================================

var userInput = prompt("User Input");
document.write("User input: " + userInput + "<br>");
var userInpUpper = userInput.toUpperCase(); 
document.write("Upper case: " + userInpUpper + "<br> <br>")

// =====================================================

var inp = prompt("User Input");
document.write("User input: " + inp + "<br>");
var inpLower = inp.toLowerCase();
var fUpper = inpLower[0].toUpperCase() + inp.slice(1);
document.write("Title Case: " + fUpper+ "<br> <br>");

// =====================================================

var nm = 35.36;
document.write("Number: " + nm + "<br>");
var nmStr = nm.toString();
var nmStrdc = nmStr.replace(".", "");
document.write("Result: " + nmStrdc);

// =====================================================


