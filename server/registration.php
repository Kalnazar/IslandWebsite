<?php
	
	$db = mysqli_connect('localhost', 'root', '', 'island');

	$btn = $_REQUEST['btn'];
	if (isset($btn)) {
		$user_name = mysqli_real_escape_string($db, trim($_REQUEST['name']));
		$user_pass = mysqli_real_escape_string($db, trim($_REQUEST['pass']));
		$user_pass_con = mysqli_real_escape_string($db, trim($_REQUEST['pass2']));

		if (!empty($user_name) && !empty($user_pass) && !empty($user_pass_con) && ($user_pass == $user_pass_con)) {

			$query = "SELECT * FROM signup WHERE name = '$user_name'";
			$data = mysqli_query($db, $query);

			if (mysqli_num_rows($data) == 0) {

				$query = "INSERT INTO signup (name, password) VALUES ('$user_name', '$user_pass')";
				mysqli_query($db, $query);
				header('Location: ../index.html');

			}
			else{

				echo "This user is already registered";
			
			}

		}

	}

?>