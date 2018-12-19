<?php
$data = file_get_contents("feed.json");
header( 'Content-Type: application/json' );
echo $data;
die();