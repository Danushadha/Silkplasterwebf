<?php
    $name = $_POST['name'];
    $userEmail = $_POST['email'];
    $message = $_POST['message'];

    $email_from = $userEmail;

    $email_subject = "New Email From web client";

    $email_body = "User Name: $name.\n".
                    "User Email: $userEmail.\n".
                        "User Message: $message.\n";

    $to = "silkplasterssl@gmail.com";

    $headers = "From:$email_from \r\n";

    $headers .= "Reply-To: $userEmail \r\n";

    mail($to,$email_subject,$email_body,$headers);
    
    header("Location: index.html");

?>