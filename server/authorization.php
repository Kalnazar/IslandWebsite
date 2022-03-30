<?php

	$db = mysqli_connect('localhost', 'root', '', 'island');

	if (isset($_REQUEST['btn'])) {
		
		$auto_name = mysqli_real_escape_string($db, trim($_REQUEST['name']));
		$auto_pass = mysqli_real_escape_string($db, trim($_REQUEST['pass']));

		if (!empty($auto_name) && !empty($auto_pass)) {

			$query = "SELECT 'id', 'name' FROM signup WHERE name = '$auto_name' AND password = '$auto_pass' "; 
			$data = mysqli_query($db, $query);

			if (mysqli_num_rows($data) == 1) {

				header('Location: ../index.html');

			}
			else{
				echo "Sorry, you entered your username and password incorrectly.";
			}

		}

	}


?>