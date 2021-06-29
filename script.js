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
function allSleepNow() {
  sleepNowTime1();
}

function sleepNowTime1() {
  
  document.getElementById("info").innerHTML = "It takes the average adult 10-20 minutes to fall asleep";
  document.getElementById("info2").innerHTML = "Times assume it will take 15 minutes to fall asleep"; 

  let rating1 = document.getElementById("rating1").innerHTML = "Bad";
  let rating2 = document.getElementById("rating2").innerHTML = "Not good";
  let rating3 = document.getElementById("rating3").innerHTML = "Decent";
  let rating4 = document.getElementById("rating4").innerHTML = "Optimal";
  let rating5 = document.getElementById("rating5").innerHTML = "Great";

  for (let i = 1; i < 6; i++) {
    document.getElementById("rating"+i).innerHTML;
    let date = new Date();

    let hours = date.getHours()+3;
    let minutes = date.getMinutes()+15;

    if (i == 2) {
      hours = date.getHours()+4;
      minutes = date.getMinutes()+45;
    }

    if (i == 3) {
      hours = date.getHours()+6;
      minutes = date.getMinutes()+15;
    }

    if (i == 4) {
      hours = date.getHours()+7;
      minutes = date.getMinutes()+45;
    }

    if (i == 5) {
      hours = date.getHours()+9;
      minutes = date.getMinutes()+15;
    }

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
    let lblTime = document.getElementById("sleepNow"+i);
    lblTime.innerHTML = time;

  }

  document.getElementById("info3").innerHTML = "A good night's rest consists of 5-6 REM cycles. Each cycle lasts 90 minutes.";

}

function addTime() {
    let selectHrs = document.getElementById("hours").selectedOptions[0].text;
    let selectMins = document.getElementById("minutes").selectedOptions[0].text;
    let selectAmpm = document.getElementById("ampm").selectedOptions[0].text;

    let hours = parseInt(selectHrs);
    let minutes = parseInt(selectMins);
    let am_pm = selectAmpm;

    for (let i = 1; i < 6; i++) {

    if (am_pm == 'AM') {

      if (am_pm == 'AM' && hours == 12) {
          am_pm = 'Midnight';
      }

      hours = hours + 3;
      minutes = minutes + 15;

      if (minutes >= 60 ) {
        minutes = minutes - 60;
        hours = hours+1; }
      else {
        minutes = minutes;
      }

      let date = new Date(2000, 0, 1, hours, minutes);

      if (am_pm == 'Midnight') {
          am_pm = hours >= 12 && hours < 24 ? "AM" : "PM";
      } else {
          am_pm = hours >= 12 ? 'PM' : 'AM';
      }

      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;

      minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      time = hours + ":" + minutes + " " + am_pm;

    }

    else  {

      if (am_pm == 'PM' && hours == 12) {
          am_pm = 'Midday';
      }

      hours = hours + 3;
      minutes = minutes + 15;

      if (minutes >= 60 ) {
        minutes = minutes - 60;
        hours = hours+1; }
      else {
        minutes = minutes;
      }

      let date = new Date(2000, 0, 1, hours, minutes);

      if (am_pm == 'Midday') {
          am_pm = hours >= 12 && hours < 24 ? "PM" : "AM";
      } else {
          am_pm = hours >= 12 ? 'AM' : 'PM';
      }

      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;

      minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      time = hours + ":" + minutes + " " + am_pm;
      
      }

    let lblTime = document.getElementById("wakeTime"+i);
    lblTime.innerHTML = time;
  }
}

function subtractTime() {
    let selectHrs = document.getElementById("hours").selectedOptions[0].text;
    let selectMins = document.getElementById("minutes").selectedOptions[0].text;
    let selectAmpm = document.getElementById("ampm").selectedOptions[0].text;

    let hours = parseInt(selectHrs);
    let minutes = parseInt(selectMins);
    let am_pm = selectAmpm;

    if (am_pm == 'AM') {

      if (am_pm == 'AM' && hours == 12) {
          am_pm = 'Midnight';
      }

      hours = hours - 3;
      minutes = minutes - 15;

      if (minutes < 0 ) {
        minutes = minutes - 60;
        hours = hours-1; }
      else {
        minutes = minutes;
      }

      let date = new Date(2000, 0, 1, hours, minutes);


      if (am_pm == 'Midnight') {
          am_pm = hours >= 12 && hours < 24 ? "AM" : "PM";
      } else {
          am_pm = hours >= 12 ? 'PM' : 'AM';
      }

      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'

      if (hours < 0) {
        hours = hours + 12;
        am_pm = 'PM';
      }

      minutes = minutes < 10 ? '0' + minutes : minutes;

      minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      time = hours + ":" + minutes + " " + am_pm;

    }

    else  {

      if (am_pm == 'PM' && hours == 12) {
          am_pm = 'Midday';
      }

      hours = hours - 3;
      minutes = minutes - 15;

      if (minutes < 0 ) {
        minutes = minutes - 60;
        hours = hours-1; }
      else {
        minutes = minutes;
      }

      let date = new Date(2000, 0, 1, hours, minutes);

      if (am_pm == 'Midday') {
          am_pm = hours >= 12 && hours < 24 ? "PM" : "AM";
      } else {
          am_pm = hours >= 12 ? 'AM' : 'PM';
      }

      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'

      if (hours < 0) {
        hours = hours + 12;
        am_pm = 'AM';
      }

      minutes = minutes < 10 ? '0' + minutes : minutes;

      minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      time = hours + ":" + minutes + " " + am_pm;
      
      }

      alert(time);
}

