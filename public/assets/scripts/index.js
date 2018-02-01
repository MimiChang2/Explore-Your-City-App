/* global firebase, $ */


let name;

let email = "";
let username = "";
let password = "";



$("#register").on("click", function(event) {
    $(".modalone").addClass("is-active");

});

$("#cancel").on("click", function(event) {
    $(".modalone").removeClass("is-active");
});

$("#signin").on("click", function(event) {
    $(".modaltwo").addClass("is-active");

});

$("#cancel2").on("click", function(event) {
    $(".modaltwo").removeClass("is-active");
});


$(".registersubmit").on("click", function() {

    email = $("#emailcreate").val().trim();
    username = $("#usernamecreate").val().trim();
    password = $("#passwordcreate").val().trim();

    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
    location.reload();


});

$(".loginsubmit").on("click", function() {

    email = $("#emailsignin").val().trim();
    username = $("#usernamesignin").val().trim();
    password = $("#passwordsignin").val().trim();

    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
    //location.reload();


});

$("#signout").on("click", function() {
    firebase.auth().signOut();
});
