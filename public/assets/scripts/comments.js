// let something = response[i].id
$(document).ready(function(){
        
        $.ajax("/api" + window.location.pathname +  "/comments", {
            type: "GET"
        }).done(function(response){
            
            for ( var i = 0; i < response.length; i++) {
                
                let commentResults = $(
                "<article class='card tile is-child box'>"
                + "<p class='title'>"
                + response[i].textbody
                +"</p>"
                + "Posted: "
                +response[i].createdAt
                +"<br />"
                + "</article>");
                
                console.log(response);
                    
                $(".searchedcontent").prepend(commentResults);
            }
        });
    
});


//Post a new comment 
$(".addcomment").on("click", function() {
    
    let textbody = $(".commentinput").val().trim();
    
    var EventIdArray = window.location.pathname.split("/");
    var EventId = EventIdArray[EventIdArray.length - 1];
    
    let newComment = {
        UserId: sessionStorage.getItem('UserId'),
        EventId: EventId,
        textbody: textbody
    };
    console.log(newComment);
    
    API2.createComment(newComment).done(function(response) {
        console.log("API2.createComment response" + JSON.stringify(response, null, 4));
    });
});