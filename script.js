function realtimeClock() {
        var date = new Date();

        var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        var am_pm = date.getHours() >= 12 ? "PM" : "AM";

        hours = date.getHours() == 0 ? 12 : hours;
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

        time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
        var lblTime = document.getElementById("clock");
        lblTime.innerHTML = time;
       	var t = setTimeout(realtimeClock, 500);
}

function allFunctions() {
	myFunction1();
	myFunction2();
	myFunction3();
	myFunction4();
	myFunction5();
}

function myFunction1() {
    var date = new Date();

   	var hours = date.getHours()+3;
   	var minutes = date.getMinutes();

   	if (minutes >= 60 ) {
   		minutes = minutes - 60;
   		hours = hours+1; }
   	else {
   		minutes = minutes;
   	}	

   	var am_pm = hours >= 24 ? "AM" : "PM";
   	am_pm = hours >= 12 && hours < 24 ? "PM" : "AM";

   	hours = hours > 24 ? hours - 24 : hours;
   	hours = hours > 12 ? hours - 12 : hours;
   	
    minutes = minutes < 10 ? "0" + minutes : minutes;

    time = hours + ":" + minutes + " " + am_pm;
    var lblTime = document.getElementById("demo");
    lblTime.innerHTML = time;

	document.getElementById("or").innerHTML = "OR";
}

function myFunction2() {
    var date = new Date();

   	var hours = date.getHours()+4;
   	var minutes = date.getMinutes()+30;

   	if (minutes >= 60 ) {
   		minutes = minutes - 60;
   		hours = hours+1; }
   	else {
   		minutes = minutes;
   	}	

   	var am_pm = hours >= 24 ? "AM" : "PM";
   	am_pm = hours >= 12 && hours < 24 ? "PM" : "AM";

   	hours = hours > 24 ? hours - 24 : hours;
   	hours = hours > 12 ? hours - 12 : hours;
   	
    minutes = minutes < 10 ? "0" + minutes : minutes;

    time = hours + ":" + minutes + " " + am_pm;
    var lblTime = document.getElementById("demo2");
    lblTime.innerHTML = time;

	document.getElementById("or2").innerHTML = "OR";
}

function myFunction3() {
    var date = new Date();

   	var hours = date.getHours()+6;
   	var minutes = date.getMinutes();

   	if (minutes >= 60 ) {
   		minutes = minutes - 60;
   		hours = hours+1; }
   	else {
   		minutes = minutes;
   	}	

   	var am_pm = hours >= 24 ? "AM" : "PM";
   	am_pm = hours >= 12 && hours < 24 ? "PM" : "AM";

   	hours = hours > 24 ? hours - 24 : hours;
   	hours = hours > 12 ? hours - 12 : hours;
   	
    minutes = minutes < 10 ? "0" + minutes : minutes;

    time = hours + ":" + minutes + " " + am_pm;
    var lblTime = document.getElementById("demo3");
    lblTime.innerHTML = time;

	document.getElementById("or3").innerHTML = "OR";
}

function myFunction4() {
    var date = new Date();

   	var hours = date.getHours()+7;
   	var minutes = date.getMinutes()+30;

   	if (minutes >= 60 ) {
   		minutes = minutes - 60;
   		hours = hours+1; }
   	else {
   		minutes = minutes;
   	}	

   	var am_pm = hours >= 24 ? "AM" : "PM";
   	am_pm = hours >= 12 && hours < 24 ? "PM" : "AM";

   	hours = hours > 24 ? hours - 24 : hours;
   	hours = hours > 12 ? hours - 12 : hours;
   	
    minutes = minutes < 10 ? "0" + minutes : minutes;

    time = hours + ":" + minutes + " " + am_pm;
    var lblTime = document.getElementById("demo4");
    lblTime.innerHTML = time;

    document.getElementById("or4").innerHTML = "OR";
}

function myFunction5() {
    var date = new Date();

   	var hours = date.getHours()+9;
   	var minutes = date.getMinutes();

   	if (minutes >= 60 ) {
   		minutes = minutes - 60;
   		hours = hours+1; }
   	else {
   		minutes = minutes;
   	}	

   	var am_pm = hours >= 24 ? "AM" : "PM";
   	am_pm = hours >= 12 && hours < 24 ? "PM" : "AM";

   	hours = hours > 24 ? hours - 24 : hours;
   	hours = hours > 12 ? hours - 12 : hours;
   	
    minutes = minutes < 10 ? "0" + minutes : minutes;

    time = hours + ":" + minutes + " " + am_pm;
    var lblTime = document.getElementById("demo5");
    lblTime.innerHTML = time;

    document.getElementById("or5").innerHTML = "OR";
}