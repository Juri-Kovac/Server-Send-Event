<?php
date_default_timezone_set("Europe/Berlin");
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$time = date('r');
$val  = rand(1,99);
echo "data: ($val)The server time is: {$time}\n\n";
ob_end_flush();
flush();
