<?php

function curl_it(){
  $url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20/';

  //starta request
  /*Initializes a new session and return a cURL handle for use with the curl_setopt(), curl_exec(), and curl_close() functions.*/
  $ch = curl_init();

  /*curl_setopt — Set an option for a cURL transfer*/
  //bool curl_setopt ( resource $ch , int $option , mixed $value )
  /*
  ch
  A cURL handle returned by curl_init().

  option
  The CURLOPT_XXX option to set.

  value
  The value to be set on option*/
  curl_setopt($ch, CURLOPT_URL,$url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

  // Här är vår data som returneras
  /*curl_exec — Perform a cURL session*/
  $data = curl_exec($ch);
	
	
	
  //avsluta request
  //curl_close — Close a cURL session
  //void curl_close ( resource $ch )
  curl_close($ch);

  return json_decode($data, true);
}


$data = curl_it();
