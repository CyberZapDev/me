<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $email_from = "MyWebsite.com";
    $email_subject = "New form submission";
    $email_body = "Name: $name.\n".
        "Email: $email.\n".
        "Message: $message.\n";

    $to = "cyberzapofficial@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: ../home.html#contact");
?>