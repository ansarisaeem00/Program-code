<?php
$con = mysqli_connect('localhost','root','','gazzete');

if (!$con)
  {
  die('Could not connect: ' . mysqli_error());
  }
?>

<!DOCTYPE html>
    <head>
        <title></title>
    </head>
    <body>
<form action="searching.php" method="post">  
Search: <input type="text" name="term" /><br />  
<input type="submit" name="submit" />  
</form>  

<?php

$term = $_POST['term'];   
			$sql="SELECT s_name FROM student where s_name='".$term."' ";
					$run3=mysqli_query($con,$sql);//here run the sql query.  
					while($row=mysqli_fetch_array($run3))//while look to fetch the result and store in a array $row.  
				        {  

				      		$search=$row[0];
				      		echo $search;
						}
?>
    </body>
</html>