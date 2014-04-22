<?php

/* Email Variables */
$emailSubject = 'Shuu Italia contact form'; 
$webMaster = 'joezacek@gmail.com';

/* Data Variables */
$name = $_POST['first_name'];
$surname = $_POST ['surname'];
$email = $_POST['email'];
$checkbox = $_POST['checkbox'];
$message = $_POST['message'];



$body = <<<EOD
<br><hr><br>
Name: $name <br>
Surname: $surname <br>
Email: $email <br>
Comments: $message <br>
EOD;
$headers = "From: $email\r\n";
$headers .= "Content-type: text/html\r\n";
$success = mail($webMaster, $emailSubject, $body, $headers);


/* Results rendered as HTML */
$theResults = <<<EOD
<html>
<head>
<meta charset="UTF-8">
<title>sent message</title>

 <meta http-equiv="refresh" content="5; URL=index.html"/>
<style type="text/css">
<!--
body {
	background-color: #fff;
}
h1 {
	color: #603;
	padding-top: 200px;
	text-align:center;
}
p {
	text-align:center;
}
-->
</style>
</head>
<body>
<h1>The message has been successfully sent</h1>
<p><a href="index.html">Home page</a></p>

<!-- analytics -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-50279814-1', 'josefzacek.cz');
  ga('send', 'pageview');

</script>
</body>
</html>
EOD;
echo "$theResults";
?>