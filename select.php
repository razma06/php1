<?php
include_once "db.php";
$sql="SELECT * FROM `users`";
$results=$conn->query($sql);

while($row=$results->fetch_assoc()){
    echo 
    "<tr id={$row['id']}>
        <td>{$row['id']}</td>
        <td>{$row['name']}</td>
        <td>{$row['surname']}</td>
        <td>{$row['age']}</td>
        <td><input type='checkbox' name='' id='{$row['id']}' class='checkbox'</td>
    </tr>";
}

?>