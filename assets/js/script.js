$(document).ready(function()  {

//Current day at the top of the calendar
var currentDay = dayjs().format("dddd, MMMM D, YYYY");
$("currentDay").text(currentDay);

//Generate timeblocks for standard business hours (8am - 6pm)
var businessHours = [];
for (var i = 8; i <= 17; i++)  {
    businessHours.push(i);
    $(".container").append(`
    <div class="row time-block" id="hour-$(i)">
    <div class="col-1 hour>$(i):00</div>"
    <textarea class="col-10 description"></textarea>
    <button class="col-1 saveBtn"><i class="fas fa-save"></i></button>
    </div>`);
}

});