// Time from 'moment' to create variables to store time
var currentTime = moment().format('MMM Do YY');
var currentHour = moment().format('HH')
var pastTime = moment().startOf('hour').fromNow();
var workTime = ['9am','10am', '11am', '12pm', '1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm'];

// When document loads
$('document').ready(function () {

// Current date
$('#currentDay').text(currentTime);

// Creation of rows
for (var i = 0; i < workTime.length; i++) {
var time =workTime[i];

//Variables
var newRow = $('<div>').attr('class','row');
var newP = $('<p>').text(time).attr('class', 'col-1 hour');

// to compare elements in workTime to the current hour
if(i+9 < currentHour){
    var newTa = $('<textarea>').attr('placeholder','Enter task here: ').attr('class', 'col-5 past');
} else if (i+9 == currentHour){
    var newTa = $('<textarea>').attr('placeholder','Enter task here: ').attr('class', 'col-5 present');
} else {
    var newTa = $('<textarea>').attr('placeholder','Enter task here: ').attr('class', 'col-5 future');
}

newTa.val(localStorage.getItem(time))
var newBtn = $('<button>').html('save <i class="bi bi-archive"></i>').attr('class', 'col-1 saveBtn').on("click", saveToLocal);

//Create rows
newRow.append(newP);
newRow.append(newTa);
newRow.append(newBtn);

$('.time-block').append(newRow);

} 

// Save to local storage the task
function saveToLocal (e) {
    var valueToSave = $(this).prev().val()
    var keyFromSave = $(this).prev().prev().text()
    localStorage.setItem(keyFromSave, valueToSave)
}



// Main section format
//$('main').css("background-color:")


// Table for time, task, save






}); //end of document readiness






















