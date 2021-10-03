<?php
include_once "db.php";
$id = $_POST['id'];

$sql = "DELETE FROM `users` WHERE `id`=$id";

if($conn->query($sql)===True){
    echo "success";   
}else{
    echo "failed";
}
?>