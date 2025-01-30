<?php require_once('header.php'); ?>

<?php

if(!isset($_REQUEST['id'])) {
	header('location: logout.php');
	exit;
} else {
	
	$statement = $pdo->prepare("SELECT * FROM tbl_color WHERE color_id=?");
	$statement->execute(array($_REQUEST['id']));
	$total = $statement->rowCount();
	if( $total == 0 ) {
		header('location: logout.php');
		exit;
	}
}
?>

<?php

	
	$statement = $pdo->prepare("DELETE FROM tbl_color WHERE color_id=?");
	$statement->execute(array($_REQUEST['id']));

	header('location: color.php');
?>