<?php require_once ('snippets/HEADER.php');?>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <!--Carousel Container-->
                <div id="AwesomeCarousel" class="carousel slide" data-ride="carousel">
                    <!--Carousel Indicators-->
                    <ol class="carousel-indicators">
                        <li data-target="#AwesomeCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#AwesomeCarousel" data-slide-to="1"></li>
                        <li data-target="#AwesomeCarousel" data-slide-to="2"></li>
                    </ol>
                    <!--Carousel Items's Container-->
                    <div class="carousel-inner" role="listbox">
                        <!--Carousel Items-->
                        <div class="carousel-item active">
                            <img class="d-block img-fluid carouselImg" src="images/slider1.jpg"  alt="">
                            <div class="carousel-caption d-none d-md-block">
                                <h3>Mountains</h3>
                                <p>mountains are the earth pillars.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block img-fluid carouselImg" src="images/Youtube_2Bnew_2Bheader_u0ruil.png"  alt="">
                            <div class="carousel-caption d-none d-md-block">
                                <h3>Creative</h3>
                                <p>Creative Design is our JOb.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block img-fluid carouselImg" src="images/Team/thumbnails/thumbnails.png"  alt="">
                            <div class="carousel-caption d-none d-md-block">
                                <h3>Mr. lion</h3>
                                <p>lion king is a good king:-D</p>
                            </div>
                        </div>
                    </div>
                    <!--Forward Backward Carousel Buttons-->
                    <a href="#AwesomeCarousel" class="carousel-control-prev" data-slide="prev" role="button">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a href="#AwesomeCarousel" class="carousel-control-next" data-slide="next" role="button">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
<?php  require_once('snippets/FOOTER.php');?>