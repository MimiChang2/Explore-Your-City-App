/* global $, API */

$(".addevent").on("click", function() {

    console.log(".addevent clicked");

    let eventname = $(".eventinput").val().trim();
    let location = $(".locationinput").val().trim();
    let date = $(".dateinput").val().trim();
    let description = $(".descriptioninput").val().trim();

    let newEvent = {
        UserId: sessionStorage.getItem('UserId'),
        eventname,
        location,
        date,
        description
    };

    // see api.js
    API.createEvent(newEvent).done(function(response) {
        console.log("API.createEvent response: " + JSON.stringify(response, null, 4));
    });
});
