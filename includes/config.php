<?php
ob_start();
session_start();
define( "DB_TYPE", "mysql" );
define( "DB_HOSTNAME", "localhost" );

define( "DB_USERNAME", "pickeringtoyota_toyota" );
//define( "DB_USERNAME", "root" );
define( "DB_PASSWORD", "L?1,[#6-9b=Q" );
//define( "DB_PASSWORD", "" );

define( "DB_DATABASE", "pickeringtoyota_toyota" );

define( "SITE_NAME", "Pickering Toyota" );

define( "PT_BACKEND", "https://pickeringtoyota.com/toyotasubadmin/" );
define( "PT_FRONTEND", "https://pickeringtoyota.com/" );
define("PT_SERVER_DECUMENT_ROOT", $_SERVER['DOCUMENT_ROOT'] . "/toyotasubadmin/");

define( "SMTP_USER_NAME", 'smtp@pickeringtoyota.com' );
define( "SMTP_PASSWORD", '1(c8OzZ{$[WU' );
define( "SMTP_HOST", 'mail.pickeringtoyota.com' );
define( "SMTP_PORT", 465 );
define( "SMTP_SECURE", 'ssl' );
define( "SMTP_SET_FROM", 'noreply@pickeringtoyota.com' );
define( "SMTP_ADD_REPLYTO", 'noreply@pickeringtoyota.com' );

define( "PT_BACKENDJang", "https://pickeringtoyota.com/toyotasubadmin/" );
//define( "PT_BACKENDJang", "toyotasubadmin/" );

define( "PT_Email", "leads@pickeringtoyota.com" );
define( "PT_Email_Media", "media@pickeringtoyota.com" );
//define( "PT_Email", "nnshsoft123@gmail.com" );

?>