<?php
    require 'connect.php';

    $connect = connect();

    // Adds data to register database

    $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata)){

        $request = json_decode($postdata);

        $photo = $request->newPhoto;
        $author = $request->newAuthor;
        $authorPhoto = $request->newAuthorPhoto;
        $blogTitle = $request->newBlogTitle;
        $description = $request->newShortBlogTitle;
        $blogInfo = $request->newBlogInfo;

        $sql = "INSERT INTO `blog`(`blog_title`, `short_desc`, `full_blog`, `blog_pic`, `author_name`, `author_pic`) VALUES ('$blogTitle', '$description', '$blogInfo', '$photo', '$type', '$author', '$authorPhoto')";

        mysqli_query($connect,$sql);
    }
    exit;
?>