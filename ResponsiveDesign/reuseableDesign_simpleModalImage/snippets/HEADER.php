<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!--integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">-->
    <!--FontAwesome-->
      <link rel="stylesheet" href="css/font-awesome.min.css">
    <!--index.css-->
      <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <!--Collapsible Sidebar-->
      <a href="#" id="SidebarToggle" data-target="#sidebar" data-toggle="collapse">
          <i class="fa fa-navicon fa-2x py-2 p-1"></i>
      </a>
      <!--navbar button toggle -->
      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#collapsableContent">
          <span class="navbar-toggler-icon"></span>
      </button>
      <!--collapsible content-->
      <div class="navbar-collapse collapse" id="collapsableContent" aria-expanded="false" style="">
          <!--navbar links-->
          <ul class="navbar-nav mr-auto">

          </ul>
          <!--form search-->
          <form class="form-inline my-2 my-lg-0" action="/action_page.php">
              <input class="form-control mr-sm-2" type="text" placeholder="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
      </div>

  </nav>
  <div class="container-fluid">
      <div class="row d-flex d-md-block flex-nowrap wrapper">
          <div id="sidebar" class="col-md-3 float-left col-1 pl-0 pr-0 collapse width show">
              <div class="list-group border-0 card text-center text-md-left">

                  <a href="#menu1" class="list-group-item d-inline-block collapsed" data-toggle="collapse"
                     data-parent="#sidebar" aria-expanded="false">
                      <i class="fa fa-dashboard"></i><span class="d-none d-md-inline-block">Account</span>
                  </a>
                  <div id="menu1" class="collapse">
                      <a href="#" class="list-group-item" data-parent="#menu1">Profile</a>
                      <a href="#" class="list-group-item" data-parent="#menu1">Notifications</a>
                      <a href="#" class="list-group-item" data-parent="#menu1">Messages</a>
                  </div>

                  <a href="#" class="list-group-item d-inline-block collapsed" data-toggle="collapse"
                     data-parent="#sidebar" aria-expanded="false">
                      <i class="fa fa-film"></i><span class="d-none d-md-inline-block">Home</span>
                  </a>
              </div>
          </div>
          <main class="col-md-9 float-left col px-5 pl-md-2 pt-2 main">

