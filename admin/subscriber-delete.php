<?php require_once('header.php'); ?>

<?php

if(!isset($_REQUEST['id'])) {
	header('location: logout.php');
	exit;
} else {
	
	$statement = $pdo->prepare("SELECT * FROM tbl_subscriber WHERE subs_id=?");
	$statement->execute(array($_REQUEST['id']));
	$total = $statement->rowCount();
	if( $total == 0 ) {
		header('location: logout.php');
		exit;
	}
}
?>

<?php

	// Delete from tbl_subscriber
	$statement = $pdo->prepare("DELETE FROM tbl_subscriber WHERE subs_id=?");
	$statement->execute(array($_REQUEST['id']));

	header('location: subscriber.php');
?>