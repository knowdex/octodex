<?php
    require 'connect.php';

    $connect = connect();

    // Adds data to register database

    $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata)){

        $request = json_decode($postdata);

        $name = $request->newName;
        $lastName = $request->lastName;
        $email = $request->newEmail;
        $faculty = $request->newFaculty;
        $type = $request->newType;
        $phone = $request->newPhone;
        $password = $request->newPassword;

        $sql = "INSERT INTO `register`(`fname`, `lname`, `email`, `faculty`, `type`, `phone`, `password`) VALUES ('$name', '$lastName', '$email', '$faculty', '$type', '$phone', '$password')";

        mysqli_query($connect,$sql);
    }
    exit;
?>