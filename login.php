<?php
$username = $_REQUEST['username'];
$pwd = $_REQUEST['pwd'];

$conn = mysqli_connect('127.0.0.1','root','','QQ',3306);
mysqli_query($conn,"SET NAMES UTF8");
$sql = "SELECT user_id FROM qq_users WHERE user_name='$username' AND user_pwd='$pwd'";
$result = mysqli_query($conn,$sql);

$row = mysqli_fetch_assoc($result);
if($row === null){
	echo 'err';
}else{
	echo 'succ';
}