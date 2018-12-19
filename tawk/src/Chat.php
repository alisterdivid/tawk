<?php

namespace Ratchet\Tutorials;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

class Chat implements MessageComponentInterface {
	protected $clients;

	public function __construct() {
		$this->clients = new \SplObjectStorage;
	}

	public function onOpen( ConnectionInterface $conn ) {
		// Store the new connection to send messages to later
		$this->clients->attach( $conn );
	}

	public function onMessage( ConnectionInterface $from, $msg ) {
//		file_put_contents( time() . "msg.txt", $msg );
		foreach ( $this->clients as $client ) {
			if ( $msg == "2probe" ) {
				$res_msg = "3probe";
				$client->send( $res_msg );
			} elseif ( $msg == "2" ) {
				$res_msg = "3";
				$client->send( $res_msg );
			} else {
				$prefix = substr($msg, 0, 1);
				$res_msg = $prefix;

				$msg = ltrim($msg, $prefix);
				$msg = json_decode($msg, true);
				$action = $msg["c"];
				$prams= $msg["p"];
				$cb = $msg["cb"];
				if ($action == "getAgents"){
					$res_msg = file_get_contents("data/getAgents.json");
				}else if ($action == "getAgentInvites"){
					$res_msg = file_get_contents("data/getAgentInvites.json");
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

				$client->send( $prefix.json_encode($res_msg));
			}
		}

	}

	public function onClose( ConnectionInterface $conn ) {
		// The connection is closed, remove it, as we can no longer send it messages
		$this->clients->detach( $conn );
	}

	public function onError( ConnectionInterface $conn, \Exception $e ) {
		trigger_error( "An error has occurred: {$e->getMessage()}\n", E_USER_WARNING );

		$conn->close();
	}
}