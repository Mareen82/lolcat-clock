var time = new Date().getHours();
var messageText;
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;

var updateClock = function() {
    var timeEvent = document.getElementById("timeEvent");
    var lolcat = document.getElementById("lolcat");
    if (time == partyTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
        messageText = "Party time!!";
    } else if (time == napTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "zzzzzzzz";
    } else if (time == lunchTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "bon apetit";
    } else if (time == wakeupTime) {
        image = "https://img2.thejournal.ie/inline/1015093/original/?width=455&version=1015093";
        messageText = "wake me up before you go";
    } else if (time < noon) {
        messageText = "Good morning!";
		 image = "https://img2.thejournal.ie/inline/1015093/original/?width=455&version=1015093";
    } else if (time > evening) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "Good Evening!";
    } else {
        messageText = "Good afternoon!";
    }

    lolcat.src = image;
    timeEvent.innerText = messageText;

    var showCurrentTime = function() {
        // display the string on the webpage
        var clock = document.getElementById('clock');

        var currentTime = new Date();

        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";

        // Set hours 
        if (hours >= noon) {
            meridian = "PM";
        }
        if (hours > noon) {
            hours = hours - 12;
        }

        // Set Minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        // Set Seconds
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        // put together the string that displays the time
        var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

        clock.innerText = clockTime;
    };
    showCurrentTime();
};
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

//Party Time Button
var partyEvent = function() {

    if (isPartyTime === false) {
        isPartyTime = true;
        time = partyTime;
        partyTimeButton.innerText = "Party Over";
        partyTimeButton.style.background = "rgb(10, 141, 171)";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
        messageText = "Party time!!";
    } else {
        isPartyTime = false;
        time = new Date().getHours();
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.background = "rgb(34, 34, 34)";
	image = "https://img2.thejournal.ie/inline/1015093/original/?width=455&version=1015093";
    }
};

partyTimeButton.addEventListener("click", partyEvent);

//Wake Up Selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
//Lunch Time Selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener('change', lunchEvent);
//Nap Time Selector
var napTimeSelector = document.getElementById("napTimeSelector");
var napEvent = function() {
    napTime = napTimeSelector.value;
};
napTimeSelector.addEventListener('change', napEvent);

partyTimeButton.addEventListener("click", timeEvent);
