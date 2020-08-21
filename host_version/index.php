<?php include 'db.php'; ?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Landing Page Project</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <!-- Load Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Fira+Sans:900|Merriweather&display=swap" rel="stylesheet">  <!-- Load Styles -->

  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <!-- HTML Follows BEM naming conventions 
  IDs are only used for sections to connect menu achors to sections -->
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
  <!--<header class="page__header"> -->
   
      <!-- Navigation starts as empty UL that will be populated with JS -->
      <ul class="navbar__list nav navbar-nav" id="navbar__list">
	  
	  </ul>
  
 <!-- </header> -->

  </div>
</nav>
  <main>
    <header class="main__hero">
      <h1>Landing Page </h1>
    </header>
    <!-- Each Section has an ID (used for the anchor) and 
    a data attribute that will populate the li node.
    Adding more sections will automatically populate nav.
    The first section is set to active class by default -->
    


	 

	   
	       <?php 
	 global $con;
	 
	 
	$query = "SELECT * FROM sections ";
    $res = mysqli_query($con, $query);


    while ($row = mysqli_fetch_assoc($res)) {
	 $section_id = $row['id'];
	 $section_title = $row['name'];
	 $section_deatlis = $row['details'];


    
    ?>
    
    <section id="<?php echo 'section' . $section_id . '"' ?> data-nav="Section 1" class="section">
      <div class="landing__container">
        <h2><?php echo $section_title ?></h2>
        <p><?php echo $section_deatlis; ?></p>
      </div>
    </section>
    
    
    <?php      
         }
    
    ?>
   
  </main>
  <footer class="page__footer">
    <p>&copy Udacity</p>
  </footer>
  

  

<script src="app.js"></script>


</body>
</html>
