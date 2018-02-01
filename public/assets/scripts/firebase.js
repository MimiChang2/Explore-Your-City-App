var config = {
    apiKey: "AIzaSyA-XaIQq-4_-SupvM-zjS8zx-NGgisC06E",
    authDomain: "project-3-login-36b9b.firebaseapp.com",
    databaseURL: "https://project-3-login-36b9b.firebaseio.com",
    projectId: "project-3-login-36b9b",
    storageBucket: "project-3-login-36b9b.appspot.com",
    messagingSenderId: "351598459573"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(firebaseUser => {

    if (firebaseUser) {
        console.log(firebaseUser.uid);
        $("#signout").removeClass("is-invisible")
        $("#addeventbutton").removeClass("is-invisible")

        $.ajax({
            url: "/api/user",
            method: "GET",
            data: {
                userId: firebaseUser.uid,
                email: firebaseUser.email
            }
        }).done(function(response) {

            console.log("UserId: " + response);
            sessionStorage.setItem("UserId", response);
        });



    }
    else {
        console.log("not logged in");
        $("#signout").addClass("is-invisible")
        $("#addeventbutton").addClass("is-invisible")
    }
});
