<?php

header('Access-Control-Allow-Origin: *');

$port = 41951;
$url = $_SERVER['REQUEST_URI'];
$url = substr($url, 10);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://localhost:'.$port.$url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

if(!empty($_POST)){
  $fields_string = '';
  
  foreach($_POST as $key=>$value) { 
    $fields_string .= $key.'='.urlencode($value).'&'; 
  }
  rtrim($fields_string, '&');

  $fields_string = str_replace('+', '%20', $fields_string);
  $fields_string = substr($fields_string, 0, -1);
  
  curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
}

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
$result = curl_exec($ch);
curl_close($ch);

echo $result;
?>