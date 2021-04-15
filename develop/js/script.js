// Time from 'moment' to create variables to store time
var currentDay = moment().format('dddd');
var currentTime = moment().format('MMMM Do YYYY');
var currentHour = moment().format('HH')
var pastTime = moment().startOf('hour').fromNow();
var workTime = ['9am','10am', '11am', '12pm', '1pm','2pm','3pm','4pm','5pm'];
var imgSave = "./assets/archive.svg";

// When document loads
$('document').ready(function () {

// Current date
var nowT = currentDay + ", " + currentTime;
$('#currentDay').text(nowT);

// Loop for row creation
for (var i = 0; i < workTime.length; i++) {
var time = workTime[i];

// Variables to create the elements to populate the rows
var newRow = $('<div>').attr('class','row');
var newP = $('<p>').text(time).attr('class', 'col-1 hour');

// Compare elements in workTime to the current hour to determine background color
if(i+9 < currentHour){
    var newTsk = $('<textarea>').attr('placeholder','').attr('class', 'col-10 past description');
} else if (i+9 == currentHour){
    var newTsk = $('<textarea>').attr('placeholder','').attr('class', 'col-10 present description');
} else {
    var newTsk = $('<textarea>').attr('placeholder','').attr('class', 'col-10 future description');
}

newTsk.val(localStorage.getItem(time))
var newBtn = $('<button>').html('<i class="bi bi-archive"></i>').attr('class', 'col-1 saveBtn far fa-save imgSave').on("click", saveToLocal);

// Populate rows
newRow.append(newP);
newRow.append(newTsk);
newRow.append(newBtn);

// Attach the image to the button


// 
$('.time-block').append(newRow);

} 

// Save to local storage the task
function saveToLocal (e) {
    var valueToSave = $(this).prev().val()
    var keyFromSave = $(this).prev().prev().text()
    localStorage.setItem(keyFromSave, valueToSave)
}

}); //end of document readiness






















