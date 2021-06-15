//displays current time
function realtimeClock() {
        let date = new Date();

        let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        let am_pm = date.getHours() >= 12 ? "PM" : "AM";

        hours = date.getHours() === 0 ? 12 : hours;
        let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

        time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
        let lblTime = document.getElementById("clock");
        lblTime.innerHTML = time;
       	let t = setTimeout(realtimeClock, 500);
}

//Executes all funtions on button press
function allFunctions() {
  myFunction1();
	myFunction2();
	myFunction3();
	myFunction4();
	myFunction5();
  myFunction6();
}

function myFunction1() {
    document.getElementById("rating1").innerHTML = "Bad:";
    let date = new Date();

   	let hours = date.getHours()+3;
   	let minutes = date.getMinutes()+15;

   	if (minutes >= 60 ) {
   		minutes = minutes - 60;
   		hours = hours+1; }
   	else {
   		minutes = minutes;
   	}	

   	let am_pm = hours >= 24 ? "AM" : "PM";
   	am_pm = hours >= 12 && hours < 24 ? "PM" : "AM";

   	hours = hours > 24 ? hours - 24 : hours;
   	hours = hours > 12 ? hours - 12 : hours;
   	
    minutes = minutes < 10 ? "0" + minutes : minutes;

    time = hours + ":" + minutes + " " + am_pm;
    let lblTime = document.getElementById("demo");
    lblTime.innerHTML = time;

	document.getElementById("rating2").innerHTML = "Not good:";
}

function myFunction2() {
    let date = new Date();

   	let hours = date.getHours()+4;
   	let minutes = date.getMinutes()+45;

   	if (minutes >= 60 ) {
   		minutes = minutes - 60;
   		hours = hours+1; }
   	else {
   		minutes = minutes;
   	}	

   	let am_pm = hours >= 24 ? "AM" : "PM";
   	am_pm = hours >= 12 && hours < 24 ? "PM" : "AM";

   	hours = hours > 24 ? hours - 24 : hours;
   	hours = hours > 12 ? hours - 12 : hours;
   	
    minutes = minutes < 10 ? "0" + minutes : minutes;

    time = hours + ":" + minutes + " " + am_pm;
    let lblTime = document.getElementById("demo2");
    lblTime.innerHTML = time;

	document.getElementById("rating3").innerHTML = "Decent:";
}

function myFunction3() {
    let date = new Date();

   	let hours = date.getHours()+6;
   	let minutes = date.getMinutes()+15;

   	if (minutes >= 60 ) {
   		minutes = minutes - 60;
   		hours = hours+1; }
   	else {
   		minutes = minutes;
   	}	

   	let am_pm = hours >= 24 ? "AM" : "PM";
   	am_pm = hours >= 12 && hours < 24 ? "PM" : "AM";

   	hours = hours > 24 ? hours - 24 : hours;
   	hours = hours > 12 ? hours - 12 : hours;
   	
    minutes = minutes < 10 ? "0" + minutes : minutes;

    time = hours + ":" + minutes + " " + am_pm;
    let lblTime = document.getElementById("demo3");
    lblTime.innerHTML = time;

	document.getElementById("rating4").innerHTML = "Optimal:";
}

function myFunction4() {
    let date = new Date();

   	let hours = date.getHours()+7;
   	let minutes = date.getMinutes()+45;

   	if (minutes >= 60 ) {
   		minutes = minutes - 60;
   		hours = hours+1; }
   	else {
   		minutes = minutes;
   	}	

   	let am_pm = hours >= 24 ? "AM" : "PM";
   	am_pm = hours >= 12 && hours < 24 ? "PM" : "AM";

   	hours = hours > 24 ? hours - 24 : hours;
   	hours = hours > 12 ? hours - 12 : hours;
   	
    minutes = minutes < 10 ? "0" + minutes : minutes;

    time = hours + ":" + minutes + " " + am_pm;
    let lblTime = document.getElementById("demo4");
    lblTime.innerHTML = time;

    document.getElementById("rating5").innerHTML = "Great:";
}

function myFunction5() {
    let date = new Date();

   	let hours = date.getHours()+9;
   	let minutes = date.getMinutes()+15;

   	if (minutes >= 60 ) {
   		minutes = minutes - 60;
   		hours = hours+1; }
   	else {
   		minutes = minutes;
   	}	

   	let am_pm = hours >= 24 ? "AM" : "PM";
   	am_pm = hours >= 12 && hours < 24 ? "PM" : "AM";

   	hours = hours > 24 ? hours - 24 : hours;
   	hours = hours > 12 ? hours - 12 : hours;
   	
    minutes = minutes < 10 ? "0" + minutes : minutes;

    time = hours + ":" + minutes + " " + am_pm;
    let lblTime = document.getElementById("demo5");
    lblTime.innerHTML = time;

    document.getElementById("info3").innerHTML = "A good night's rest consists of 5-6 REM cycles. Each cycle lasts 90 minutes.";
}

function myFunction6() {
  document.getElementById("info").innerHTML = "It takes the average adult 10-20 minutes to fall asleep";
  document.getElementById("info2").innerHTML = "Times assume it will take 15 minutes to fall asleep";  
}