<?php
function curl_it(){
  $url = 'https://api.chucknorris.io/jokes/random';
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL,$url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  $data = curl_exec($ch);
  curl_close($ch);
	var_dump($data);
  return json_encode($data, true);
}

$data = file_get_contents('https://api.chucknorris.io/jokes/random');
var_dump(json_decode($data, true));


$response = curl_it();
var_dump($response);