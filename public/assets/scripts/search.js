
$(document).ready( function(){
    
    $.ajax("/api/events", {
        type: "GET"
    }).done(function(response){
        
        console.log(response);
        
        for (let i = 0; i < response.length; i++) {
            
            console.log("User: " + response[i].UserId);
            let id = response[i].id;
            
            let articleResults = $(
                "<article class='card tile is-child box'>"
                + "<p class='title'>"
                + response[i].eventname
                + "<a class='deletebutton button is-black is-rounded is-pulled-right'id='deletebutton' data-id='"+id+"'>" + "Delete Event" + "</a>"
                +"<a href=' events/" + response[i].id + "' class='idbutton button is-black is-rounded is-pulled-right'>" + "Comments" + "</a>"
                +"</p>"
                + response[i].location
                +"<br />"
                + response[i].date
                +"<br />"
                + response[i].description
                + "</article>");
            
            
            let currentUserId = sessionStorage.getItem("UserId");
            console.log("Current User :" + currentUserId);
            
          if (currentUserId == response[i].UserId){
              $(".deletebutton").addClass("is-hidden");
          }    
                
            $(".searchedcontent").append(articleResults);
            

            
        }
    })
    

$(document).on("click", ".deletebutton", function() {

            $.ajax({
            method: "DELETE",
            url: "/api/events/" + $(this).data("id")
        }).done(function() {
        
        location.reload();
        });
                    
    });
});
