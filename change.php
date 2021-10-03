<?php
include_once "db.php";

$name = $_POST['name'];
$surName = $_POST['surName'];
$age = $_POST['age'];

$sql = "INSERT INTO `users`(`name`, `surname`, `age`) VALUES ('$name','$surName','$age')";

if(empty($name) || empty($surName) || empty($age)){
    echo "failed";
}else{
    if($conn->query($sql)===True){
        $last_id = $conn->insert_id;

        echo $last_id;
        
    }else{
        echo "failed";
    }
};



?>