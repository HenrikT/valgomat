<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "valgomat";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//Query
$statement = $conn->prepare("INSERT INTO `valgomat`.`resultater` (`id`, `gender`, `age`, `party`, `county`, `municipality`, `p_ap`, `p_frp`, `p_h`, `p_krf`, `p_mdg`, `p_r`, `p_sp`, `p_sv`, `p_v`, `p_andre`)
VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);");

$statement->bind_param('sssssiiiiiiiiii', $_REQUEST["answers"]["gender"], $_REQUEST["answers"]["age"], $_REQUEST["answers"]["party"], $_REQUEST["answers"]["county"], $_REQUEST["answers"]["municipality"], $_REQUEST["results"]["p_ap"], $_REQUEST["results"]["p_frp"], $_REQUEST["results"]["p_h"], $_REQUEST["results"]["p_krf"], $_REQUEST["results"]["p_mdg"], $_REQUEST["results"]["p_r"], $_REQUEST["results"]["p_sp"], $_REQUEST["results"]["p_sv"], $_REQUEST["results"]["p_v"], $_REQUEST["results"]["p_andre"]);

if($statement->execute()) {
	print "success!";
} else {
	print $statement->error;
	
}

$conn->close();
?>