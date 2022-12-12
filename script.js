// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready( function () {

var past = $('.past');
var present = $('.present');
var future = $('.future');
var saveButton = $('#saveBtn');
var hourNine = $('#9');
var hourTen = $('#10');
var hourEleven = $('#11');
var hourTwelve = $('#12');
var hourOne = $('#13');
var hourTwo = $('#14');
var hourThree = $('#15');
var hourFour = $('#16');
var hourFive = $('#17');

var description = $(".description");

var currentHour = dayjs().format('H');
//var currentHour = 14;
console.log(currentHour);
var allTimes = [hourNine, hourTen, hourEleven, hourTwelve, hourOne, hourTwo, hourThree, hourFour, hourFive];
//console.log(allTimes);

//Add code to display the current date in the header of the page.
var currentDate = dayjs().format("dddd MMM D, YYYY");
console.log(currentDate);
$('#currentDay').text(currentDate);

//Add code to apply the past, present, or future class to each time block by comparing the id to the current hour
  description.each(function () {
  
  for (i=0; i < 9; i++) {
   
    if (currentHour == allTimes[i].attr("id")) { 
      allTimes[i].removeClass("future");
      allTimes[i].removeClass("past");
      allTimes[i].addClass("present");
    } 
    if (currentHour > allTimes[i].attr("id")) {
      allTimes[i].removeClass("future");
      allTimes[i].removeClass("present");
      allTimes[i].addClass("past");
    } 
    if (currentHour < allTimes[i].attr("id")) {
      allTimes[i].removeClass("present");
      allTimes[i].removeClass("past");
      allTimes[i].addClass("future");
    }
    }
  });


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
 
  $('.btn').on('click', function() {
    let task = $(this).siblings(".description").val();
    console.log(task);
    let time = $(this).parent().attr('id');
    localStorage.setItem(time, task);
  });
 
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  $('#9 .description').val(localStorage.getItem('9'));
  $('#10 .description').val(localStorage.getItem('10'));
  $('#11 .description').val(localStorage.getItem('11'));
  $('#12 .description').val(localStorage.getItem('12'));
  $('#13 .description').val(localStorage.getItem('13'));
  $('#14 .description').val(localStorage.getItem('14'));
  $('#15 .description').val(localStorage.getItem('15'));
  $('#16 .description').val(localStorage.getItem('16'));
  $('#17 .description').val(localStorage.getItem('17'));
  
  
});

