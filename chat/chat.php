<?php
require_once( "../includes/DB_Connection.php" );
require_once( "../includes/functions.php" );
global $db;

$code = "200";
$resp = array();

$action = $_POST["action"];
$loginId = 1;

$nowDate = time();

if ($action == "polling"){

	$pollingTime = time();
	$oldPollingTime = $_POST["pollingTime"] ? $_POST["pollingTime"] : $pollingTime;

	$sql       = "SELECT * FROM `tbl_chat_sessions` WHERE is_online = '1' AND update_time >=  ".$oldPollingTime." ";
	$chatUsers = $db->queryArray( $sql );

	if ( ! $chatUsers ) {
		$chatUsers = [];
	}

	$resp["chatClients"] = $chatUsers;

	$sql    = "SELECT chm.*, chs.session_id, chs.session_ip, chs.is_online
				FROM `tbl_chat_messges` chm, `tbl_chat_sessions` chs 
				WHERE chm.chat_to = '$loginId' 
				AND chm.chat_from = chs.id
				AND chm.chat_time >=  ".$oldPollingTime." 
				AND chm.chat_type = 'C'";
	$result = $db->queryArray( $sql );

	if ( ! $result ) {
		$result = [];
	}

	$resp["messages"] = $result;
	$resp["pollingTime"] = $pollingTime;

}elseif ($action == "sendMessage"){

	$message = $_POST["message"];
	$chatClient = $_POST["chatClient"];
	$chatClient = 1;

	$sql = "INSERT INTO tbl_chat_messges
					  SET chat_from = '1', 
					  	  chat_to = '$chatClient',
					  	  chat_message = '$message',
					      chat_time = '$nowDate',
					      chat_type = 'A'";

	$db->queryInsert( $sql );

}



$data['code'] = $code;
$data['data'] = $resp;
header( 'Content-Type: application/json' );
echo json_encode( $data );