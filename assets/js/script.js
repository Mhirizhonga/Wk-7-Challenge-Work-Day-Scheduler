$(document).ready(function()  {

//Current day at the top of the calendar
var currentDay = dayjs().format("dddd, MMMM D, YYYY");
$("#currentDay").text(currentDay);

//Generate timeblocks for standard business hours (8am - 6pm)
var businessHours = [];
for (var i = 8; i <= 17; i++)  {
    businessHours.push(i);
    $(".container").append(`
    <div class="row time-block" id="hour-${i}">
    <div class="col-1 hour>$(i):00</div>"
    <textarea class="col-10 description"></textarea>
    <button class="col-1 saveBtn"><i class="fas fa-save"></i></button>
    </div>`);
}

//Colour-code timeblocks based on past, present, and future times
function updateHourBlocks()  {
    var currentHour = dayjs().hour();
    $(".time-block").each(function()  {
        var hour = parseInt($(this).attr("id").split("-")[1]);
        if (hour < currentHour)  {
            $(this).addClass("past");
        } else if (hour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else  {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

//Call updateHourBlocks initially to set colours.
updateHourBlocks();

//Updating timeblocks every minute to reflect current time
setInterval(updateHourBlocks, 60000);

//Allow users to enter events in each timeblock
$(".time-block").each(function()  {
    var hour = parseInt($(this).attr("id").split("-")[1]);
    var savedEvent = localStorage.getItem("event-" + hour);
    if (savedEvent)  {
        $(this).find(".description").val(savedEvent);
    }
});

//Save events to local storage
$(".saveBtn").on("click", function()  {
    var hour = parseInt($(this).parent().attr("id").split("-")[1]);
    var eventText = $(this).siblings(".description").val().trim();
    localStorage.setitem("event-" + hour, eventText);
  })
});