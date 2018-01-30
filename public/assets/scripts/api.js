/* global $ */

var API = {
    createEvent: function(event) {
        return $.post("/api/events", event);
    }
};

var API2 = {
    createComment: function(event) {
        return $.post("/api/comments", event);
    }
};