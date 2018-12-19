<?php
function logToFile( $filename, $msg ) {
	$fd  = fopen( $filename, "a" );
	$str = "[" . date( "Y/m/d h:i:s", time() ) . "] " . $msg;
	fwrite( $fd, $str . "\n" );
	fclose( $fd );
}

function PT_MkDir( $path, $mode = 0777 ) {
	$dirs  = explode( DIRECTORY_SEPARATOR, $path );
	$count = count( $dirs );
	$path  = '.';
	for ( $i = 0; $i < $count; ++ $i ) {
		$path .= DIRECTORY_SEPARATOR . $dirs[ $i ];
		if ( ! is_dir( $path ) && ! mkdir( $path, $mode ) ) {
			return false;
		}
	}

	return true;
}

function PT_generateRandom( $len ) {
	$strpattern = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
	$result     = "";
	for ( $i = 0; $i < $len; $i ++ ) {
		$rand   = rand( 0, strlen( $strpattern ) - 1 );
		$result = $result . $strpattern[ $rand ];
	}

	return $result;
}

function PT_isLogin() {
	if ( isset( $_COOKIE['PT_TOKEN'] ) ) {
		return true;
	} else {
		return false;
	}
}

function PT_setCookie( $name, $value ) {
	setcookie( $name, $value . "", time() + ( 2 * 7 * 24 * 60 * 60 ) );
}

function PT_getCookie( $name ) {
	return $_COOKIE[ $name ];
}

function PT_deleteCookie( $name ) {
	setcookie( $name, "", time() - 3600 );
}

function PT_getCurrentId() {
	if ( PT_isLogin() ) {
		return PT_getUserId( $_COOKIE['PT_TOKEN'] );
	} else {
		return "";
	}
}

function PT_getUserId( $token ) {
	global $db;
	if ( $token == "" ) {
		return "";
	} else {
		$sql    = "select id from `admin` where token = '$token'";
		$result = $db->queryArray( $sql );
		if ( $result == null ) {
			return "";
		} else {
			return $result[0]['id'];
		}
	}
}

function getCurrentAccountType() {
	if ( PT_isLogin() ) {
		return getAccountType( $_COOKIE['PT_TOKEN'] );
	} else {
		return "";
	}
}

function getAccountType( $token ) {
	global $db;
	if ( $token == "" ) {
		return "";
	} else {
		$sql    = "select account_type from admin where token = '$token'";
		$result = $db->queryArray( $sql );
		if ( $result == null ) {
			return "";
		} else {
			return $result[0]['account_type'];
		}
	}
}

function getCurrentGender() {
	if ( PT_isLogin() ) {
		return geGender( $_COOKIE['PT_TOKEN'] );
	} else {
		return "";
	}
}

function geGender( $token ) {
	global $db;
	if ( $token == "" ) {
		return "";
	} else {
		$sql    = "select gender from admin where token = '$token'";
		$result = $db->queryArray( $sql );
		if ( $result == null ) {
			return "";
		} else {
			return $result[0]['gender'];
		}
	}
}

function getCurrentUserName() {
	if ( PT_isLogin() ) {
		return getUserName( $_COOKIE['PT_TOKEN'] );
	} else {
		return "";
	}
}

function getUserName( $token ) {
	global $db;
	if ( $token == "" ) {
		return "";
	} else {
		$sql    = "select username from admin where token = '$token'";
		$result = $db->queryArray( $sql );
		if ( $result == null ) {
			return "";
		} else {
			return $result[0]['username'];
		}
	}
}

function PT_getCurrentType() {
	if ( PT_isLogin() ) {
		return PT_getUserType( $_COOKIE['PT_TOKEN'] );
	} else {
		return "";
	}
}

function PT_getUserType( $token ) {
	global $db;
	if ( $token == "" ) {
		return "";
	} else {
		$sql    = "select user_type from admin where token = '$token'";
		$result = $db->queryArray( $sql );
		if ( $result == null ) {
			return "";
		} else {
			return $result[0]['user_type'];
		}
	}
}

function PT_sendEmail( $email, $subject, $message ) {

	$mail = new PHPMailer( true );

	$mail->IsSMTP();
	$mail->SMTPDebug  = 1;
	$mail->SMTPAuth   = true;
	$mail->SMTPSecure = SMTP_SECURE;
	$mail->Port       = SMTP_PORT;
	$mail->Username   = SMTP_USER_NAME; // SMTP username
	$mail->Password   = SMTP_PASSWORD; // SMTP password

	$mail->Host   = SMTP_HOST;
	$mail->Mailer = "smtp";

	$mail->SetFrom( SMTP_SET_FROM, SITE_NAME );
	$mail->AddReplyTo( SMTP_ADD_REPLYTO, SITE_NAME );

	$mail->AddAddress( $email, SITE_NAME );
	$mail->AddAddress( 'hiteshmprajapati@gmail.com', SITE_NAME );
	$mail->AddAddress( 'julyp307@gmail.com', SITE_NAME );
	$mail->AddAddress( 'softensoftwares@gmail.com', SITE_NAME );
	//$mail->AddAttachment("/home/pickeringtoyota/public_html/toyota.mp4", 'Toyota');
	//$mail->AddAttachment(dirname(__FILE__)."/toyota.mp4", 'Toyota');
	//$mail->AddAttachment("includes/dolbycanyon.mp4","dolbycanyon.mp4");

	$mail->Subject  = $subject;
	$mail->Timeout  = 60;
	$mail->WordWrap = 80;

	$mail->Body = $message;
	//$mail->MsgHTML($content);

	$mail->IsHTML( true );

	if ( ! $mail->Send() ) {
		return "Mailer Error: " . $mail->ErrorInfo;
	} else {
		return "Message sent!";
	}
}

function PT_sendResetEmail( $email, $subject, $message ) {

	$mail = new PHPMailer( true );

	$mail->IsSMTP();
	$mail->SMTPDebug  = 1;
	$mail->SMTPAuth   = true;
	$mail->SMTPSecure = SMTP_SECURE;
	$mail->Port       = SMTP_PORT;
	$mail->Username   = SMTP_USER_NAME; // SMTP username
	$mail->Password   = SMTP_PASSWORD; // SMTP password

	$mail->Host   = SMTP_HOST;
	$mail->Mailer = "smtp";

	$mail->SetFrom( SMTP_SET_FROM, SITE_NAME );
	$mail->AddReplyTo( SMTP_ADD_REPLYTO, SITE_NAME );

	$mail->AddAddress( $email, SITE_NAME );
//    $mail->AddAddress('hiteshmprajapati@gmail.com', SITE_NAME);
	$mail->AddAddress( 'julyp307@gmail.com', SITE_NAME );
//    $mail->AddAddress('softensoftwares@gmail.com', SITE_NAME);
	//$mail->AddAttachment("/home/pickeringtoyota/public_html/toyota.mp4", 'Toyota');
	//$mail->AddAttachment(dirname(__FILE__)."/toyota.mp4", 'Toyota');
	//$mail->AddAttachment("includes/dolbycanyon.mp4","dolbycanyon.mp4");

	$mail->Subject  = $subject;
	$mail->Timeout  = 60;
	$mail->WordWrap = 80;

	$mail->Body = $message;
	//$mail->MsgHTML($content);

	$mail->IsHTML( true );

	if ( ! $mail->Send() ) {
		return "Mailer Error: " . $mail->ErrorInfo;
	} else {
		return "Message sent!";
	}
}

function PT_sendBuildEmail( $email, $subject, $message, $attachment, $attachName ) {

	$mail = new PHPMailer( true );

	$mail->IsSMTP();
	$mail->SMTPDebug  = 1;
	$mail->SMTPAuth   = true;
	$mail->SMTPSecure = SMTP_SECURE;
	$mail->Port       = SMTP_PORT;
	$mail->Username   = SMTP_USER_NAME; // SMTP username
	$mail->Password   = SMTP_PASSWORD; // SMTP password

	$mail->Host   = SMTP_HOST;
	$mail->Mailer = "smtp";

	$mail->SetFrom( SMTP_SET_FROM, SITE_NAME );
	$mail->AddReplyTo( SMTP_ADD_REPLYTO, SITE_NAME );

	$mail->AddAddress( $email, SITE_NAME );
	$mail->AddAddress( 'hiteshmprajapati@gmail.com', SITE_NAME );
	$mail->AddAddress( 'julyp307@gmail.com', SITE_NAME );
	$mail->AddAddress( 'softensoftwares@gmail.com', SITE_NAME );
	//$mail->AddAttachment("/home/pickeringtoyota/public_html/toyota.mp4", 'Toyota');
	//$mail->AddAttachment(dirname(__FILE__)."/toyota.mp4", 'Toyota');

	$mail->AddAttachment( $attachment, $attachName );

	$mail->Subject  = $subject;
	$mail->Timeout  = 60;
	$mail->WordWrap = 80;

	$mail->Body = $message;
	//$mail->MsgHTML($content);

	$mail->IsHTML( true );

	if ( ! $mail->Send() ) {
		return "Mailer Error: " . $mail->ErrorInfo;
	} else {
		return "Message sent!";
	}
}
?>