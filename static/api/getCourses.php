<?php
require 'connect.php';

$connect = connect();

// Get the data
$people = array();
$sql = "SELECT course_id, course_title, course_image, course_desc, course_short FROM courses";

if($result = mysqli_query($connect,$sql))
{
  $count = mysqli_num_rows($result);

  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
      $people[$cr]['course_id']    = $row['course_id'];
      $people[$cr]['course_title']  = $row['course_title'];
      $people[$cr]['course_image'] = $row['course_image'];
      $people[$cr]['course_desc'] = $row['course_desc'];
      $people[$cr]['course_short'] = $row['course_short'];

      $cr++;
  }
}

$json = json_encode($people);
echo $json;
exit;
