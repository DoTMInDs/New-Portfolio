<?php

    include('database.php');

    if(isset($_POST["submit"])){
        
        $fullname = $_POST["fullname"];
        $email = $_POST["email"];
        $subject = $_POST["subject"];
        $message = $_POST["message"];

        $sql = "INSERT INTO portfolio_database(fullname, email, subject, message) 
                VALUES ('$fullname', '$email', '$subject', '$message')";
        
        if(mysqli_query($conn, $sql)){
            echo"New entry inserted successfully";
        }
        else{
            echo"Error: " . $sql . "" . mysqli_error($conn);
        }
        mysqli_close($conn);
    }
?>