<?php
    require 'connect.php';

    $connect = connect();

    // Adds data to register database

    $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata)){

        $request = json_decode($postdata);

        $photo = $request->newPhoto;
        $product = $request->newProduct;
        $description = $request->newDescription;
        $price = $request->newPrice;

        $sql = "INSERT INTO `products`(`product_name`, `product_desc`, `price`, `pic`) VALUES ('$product', '$description', '$price', '$photo')";

        mysqli_query($connect,$sql);
    }
    exit;
?>