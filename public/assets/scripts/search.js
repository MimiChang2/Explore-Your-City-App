
$(document).ready( function(){
    
    $.ajax("/api/events", {
        type: "GET"
    }).done(function(response){
        
        console.log(response);
        
        let currentUserId = parseInt(sessionStorage.getItem("UserId"));
        console.log("currentUserId: " + currentUserId);

        for (let i = 0; i < response.length; i++) {
            
            console.log("response[i].UserId: " + response[i].UserId);
            let id = response[i].id;
            
            let articleResults = $(
                "<article class='card tile is-child box foundarticle'>"
                + "<p class='title eventtitle'>"
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
            
          if (!currentUserId){
              $(".deletebutton").addClass("is-hidden");
          }
          if (currentUserId !== response[i].UserId){
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


$(".searchsubmit").on("click", function(){
    
    $(".searchedcontent").empty();
    let search = $(".searchinput").val().trim();
    
   $.ajax("/api/events/", {
        type: "GET"
        }).done(function(response) {
        
        for(var j = 0; j < response.length; j++){
            //console.log("Response: " + response[j].eventname);
            let eventname = response[j].eventname;
            if(eventname.includes(search)){
                
                console.log("Searching:" + response[j].eventname);  
            
                let currentUserId = parseInt(sessionStorage.getItem("UserId"));
                let id = response[j].id;
                
                let articleSearchResults = $(
                "<article class='card tile is-child box foundarticle'>"
                + "<p class='title eventtitle'>"
                + response[j].eventname
                + "<a class='deletebutton button is-black is-rounded is-pulled-right'id='deletebutton' data-id='"+id+"'>" + "Delete Event" + "</a>"
                +"<a href=' events/" + response[j].id + "' class='idbutton button is-black is-rounded is-pulled-right'>" + "Comments" + "</a>"
                +"</p>"
                + response[j].location
                +"<br />"
                + response[j].date
                +"<br />"
                + response[j].description
                + "</article>");
            
            if (!currentUserId){
              $(".deletebutton").addClass("is-hidden");
            } 
            if (currentUserId !== response[j].UserId){
              $(".deletebutton").addClass("is-hidden");
          }     
               
            $(".searchedcontent").append(articleSearchResults);
                
                
            }
            
            
        }
        
        });
})