<?php
require_once( "../common/config.php" );
header('Access-Control-Allow-Credentials:true');
if ($_SERVER['REQUEST_METHOD'] == "GET"){
	if ( ! isset( $_GET['sid'] ) ) {
		$_SESSION['payload'] = array();
		$data = file_get_contents("data/init/sid.txt");
		header( 'Content-Type: text/plain' );
		echo $data;
		die();
	}elseif (!$_SESSION['payload']){
		$data = file_get_contents("data/init/ready.txt");
		header( 'Content-Type: text/plain' );
		echo $data;
		die();
	} elseif ($_SESSION['payload']){
		foreach ($_SESSION['payload'] as $item){
			$msg = $item;
			header( 'Content-Type: text/plain' );
			if ( $msg == "2probe" ) {
				$res_msg = "3probe";
				echo (strlen($res_msg)).":".$res_msg;
			} elseif ( $msg == "2" ) {
				$res_msg = "0:3";
				echo $res_msg;
			} else {
				$prefix = substr($msg, 0, 1);
				$res_msg = $prefix;

				$msg = ltrim($msg, $prefix);
//				file_put_contents("msg".time().".txt", $msg);
				$msg = json_decode($msg, true);

				$action = $msg["c"];
				$prams= $msg["p"];
				$cb = $msg["cb"];
				if ($action == "getAgents"){
					$res_msg = file_get_contents("data/getAgents.json");
				}else if ($action == "getAgentInvites"){
					$res_msg = file_get_contents("data/getAgentInvites.json");
				}else if ($action == "getInitData"){
					$res_msg = file_get_contents("data/init/initData.json");
				}else if ($action == "service"){
					$service_type = $prams[0];
					$service_url = $prams[1];
					if ( $service_type == "property" ) {
						$res_msg = file_get_contents("data/service_property.json");
					} elseif ( $service_type == "agent-chat" ) {
						$res_msg = file_get_contents("data/agent-chat.json");
					} elseif ( $service_type == "webrtc" ) {
						$res_msg = file_get_contents("data/webrtc.json");
					} elseif ( $service_type == "conversations" && $service_url == "/v1/frontend/conversations/aggregateMine") {
						$res_msg = file_get_contents("data/conversations.json");
					}elseif ( $service_type == "conversations" && $service_url == "/v1/frontend/5a60123e3098e70e78bf9fad/conversations") {
						$res_msg = file_get_contents("data/conversations1.json");
					}elseif ( $service_type == "conversations" && $service_url == "/v1/frontend/5a60123e3098e70e78bf9fad/conversations/tags") {
						$res_msg = file_get_contents("data/conversations2.json");
					}elseif ( $service_type == "conversations" && $service_url == "/v1/frontend/5a67ac584b401e45400c5653/conversations/tags") {
						$res_msg = file_get_contents("data/5a67ac584b401e45400c5653tabs.json");
					}elseif ( $service_type == "analytics" && $service_url == "/v1/chats/5a67ac584b401e45400c5653/volume") {
						$res_msg = file_get_contents("data/5a67ac584b401e45400c5653volume.json");
					}elseif ( $service_type == "analytics" && $service_url == "/v1/chats/5a67ac584b401e45400c5653/duration") {
						$res_msg = file_get_contents("data/5a67ac584b401e45400c5653duration.json");
					}elseif ( $service_type == "analytics" && $service_url == "/v1/chats/5a67ac584b401e45400c5653/missed") {
						$res_msg = file_get_contents("data/5a67ac584b401e45400c5653missed.json");
					}elseif ( $service_type == "analytics" && $service_url == "/v1/chats/5a67ac584b401e45400c5653/satisfaction") {
						$res_msg = file_get_contents("data/5a67ac584b401e45400c5653satisfaction.json");
					}elseif ( $service_type == "analytics" && $service_url == "/v1/chats/5a67ac584b401e45400c5653/waiting") {
						$res_msg = file_get_contents("data/5a67ac584b401e45400c5653waiting.json");
					}elseif ( $service_type == "analytics" && $service_url == "/v1/tickets/5a67ac584b401e45400c5653/volume") {
						$res_msg = file_get_contents("data/tickets/5a67ac584b401e45400c5653/volume.json");
					}elseif ( $service_type == "analytics" && $service_url == "/v1/tickets/5a67ac584b401e45400c5653/solved") {
						$res_msg = file_get_contents("data/tickets/5a67ac584b401e45400c5653/solved.json");
					}elseif ( $service_type == "analytics" && $service_url == "/v1/tickets/5a67ac584b401e45400c5653/source") {
						$res_msg = file_get_contents("data/tickets/5a67ac584b401e45400c5653/source.json");
					}elseif ( $service_type == "analytics" && $service_url == "/v1/tickets/5a67ac584b401e45400c5653/resolution") {
						$res_msg = file_get_contents("data/tickets/5a67ac584b401e45400c5653/resolution.json");
					}elseif ( $service_type == "analytics" && $service_url == "/v1/tickets/5a67ac584b401e45400c5653/reopened") {
						$res_msg = file_get_contents("data/tickets/5a67ac584b401e45400c5653/reopened.json");
					}elseif ( $service_type == "analytics" && $service_url == "/v1/tickets/5a67ac584b401e45400c5653/response") {
						$res_msg = file_get_contents("data/tickets/5a67ac584b401e45400c5653/response.json");
					}elseif ( $service_type == "billing" && $service_url == "/v1/payment-method/stripe") {
						$res_msg = file_get_contents("data/payment-method/stripe.json");
					}elseif ( $service_type == "addon" && $service_url == "/v1/5a67ac584b401e45400c5653/addons") {
						$res_msg = file_get_contents("data/5a67ac584b401e45400c5653/addons.json");
					}
				}else if ($action == "getShortcutChanges"){
					$res_msg = file_get_contents("data/getShortcutChanges.json");
				}else if ($action == "getActiveVisitorSessions"){
					$res_msg = file_get_contents("data/getActiveVisitorSessions.json");
				}else if ($action == "loadDashboardVisitorCount"){
					$res_msg = file_get_contents("data/loadDashboardVisitorCount.json");
				}else if ($action == "getHourlyStats"){
					$res_msg = file_get_contents("data/getHourlyStats.json");
				}else if ($action == "getDailyStats"){
					$res_msg = file_get_contents("data/getDailyStats.json");
				}else if ($action == "getTagsForAllPages"){
					$res_msg = file_get_contents("data/getTagsForAllPages.json");
				}else if ($action == "subscribeVisitorMonitoring"){
					$res_msg = file_get_contents("data/subscribeVisitorMonitoring.json");
				}else if ($action == "unsubscribeVisitorMonitoring"){
					$res_msg = file_get_contents("data/unsubscribeVisitorMonitoring.json");
				}else if ($action == "getPageForEditing"){
					$res_msg = file_get_contents("data/getPageForEditing.json");
				}

				if ($res_msg != $prefix){
					$res_msg = json_decode($res_msg,  true);
					$res_msg["cb"] = $cb;
				}
				echo (strlen(json_encode($res_msg))*1+1).":".$prefix.json_encode($res_msg);
			}
		}
		die();
	}

}elseif($_SERVER['REQUEST_METHOD'] == "POST"){
	$request_body = file_get_contents('php://input');
	$payload = decodePayload($request_body);
	$_SESSION['payload'] = $payload;
	header( 'Content-Type: text/html' );
	die();
}

function decodePayload($request_body){
	$payload = array();
	$body_length_pos = strpos($request_body, ":");
	$body_length = substr($request_body, 0, $body_length_pos);
	$request_item = substr($request_body, $body_length_pos*1+1, $body_length*1);
	$payload[] = $request_item;
	$request_rest = substr($request_body, strlen($body_length.":". $request_item));
	if (trim($request_rest)){
		$rest_payload = decodePayload(trim($request_rest));
		$payload = array_merge($payload, $rest_payload);
	}

	return $payload;
}