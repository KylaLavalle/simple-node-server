//Creates a popup box with text Hello World! function sayHello()
        { alert("Hello World!"); } 
                     
function changeImage() {
    document.getElementById("lbulb").src = "http://www.w3schools.com/js/pic_bulbon.gif";
    var par = document.getElementById("sample1");
        par.style.color = "yellow";
        par.style.fontWeight = "bold";
}

function outputDetails(name, age){
        document.write (name + " is " + age + " years old.");
}

//Concatenates the first and last name
    function concatenate(first, last) {
        var full;
        full = first + " " + last;
        return full;
    }

//Writes in the page the first and last name values
    function outputName(first, last) {
        document.write ("First name: " + first + ".<br>");
        document.write ("Last name: " + last + ".<br>");
        var result = concatenate(first, last)
        document.write ("Put it together: " + result + "!");
    }

function getCelsius() {
    var fahr = document.getElementById("fahrenheit").value;
    document.getElementById("celsius").value = (5/9) * (fahr-32);
} 

function convertToHex() {
        document.getElementById("sample2").innerHTML = "0xFF = " + 0xFF;
}

function computeInf() {
    var x = 2/0;
    var y = -2/0;
    document.getElementById("sample3").innerHTML = "To " + x + " or " + y + " and Beyond!";
}

function computeNaN() {
    document.getElementById("sample4").innerHTML = 100 / "Hello World!";
}

function numToStr(num1, num2) {
    var x = num1+ num2;
    var x = num1.toString() + num2.toString();
    document.getElementById("sample5").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + x + ". <br/> Put it together: " + y + "! <3";
}

function strToNum(str1, str2) {
    var w = parseInt(str1);
    var x = parseInt(str2);
    var y = parseFloat(str2);
    var z;    //try to convert str1 to float
    document.getElementById("sample6").innerHTML = w + "<br/>" + x + "<br/>" + y;
}

function outputCons() {
    document.getElementById("sample7").innerHTML = "E = " + Math.E + "<br>" + "PI = " + Math.PI + "<br>" + "Square root of 2 = " + Math.SQRT2 + "<br>";
}

function getMax() {
    document.getElementById("sample8").innerHTML = Math.max(0, 150, 30, 20, -8);
}

function getRand() {
    var x = Math.random(); //randomize
    var y = Math.floor((Math.random() * 50) + 1); //randomize between 1 to 50
    document.getElementById("sample9").innerHTML = x + "<br/>" + y;
    document.getElementById("rand").value = "Click Me Baby One More Time!";
}

