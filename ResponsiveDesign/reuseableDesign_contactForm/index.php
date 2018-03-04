<?php require_once ('snippets/HEADER.php');?>
<!--Introduction Section-->
    <div class="jumbotron jumbotron-fluid" id="HomeSection">
       <h1 id="jumbotronHeading" class="display-3 jumbotronTextOnImages text-center">Heading</h1>
       <img id="jumbotronImage" src="images/Youtube_2Bnew_2Bheader_u0ruil.png" alt="jumbotron image">
   </div>
<!--Team Section-->
    <div class="container-fluid" id="TeamSection">
        <div class="row">
            <div class="col-12 text-center">
                <h1>Our Awesome Team</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur exercitationem harum nulla quis voluptates! Animi atque debitis doloremque eius molestias mollitia, reprehenderit! Facere nihil odit rem reprehenderit voluptatibus voluptatum?</p>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-lg-3 col-sm-6 col-xs-12 teamMemberContainer"><img
                        src="images/Team/thumbnails/thumbnails.png" alt=""
                        class="img-fluid img-thumbnail teamMemberImage">
                <h4>John1</h4>
                <p class="text-muted">Developer</p>
                <p>John is the most Awesome Person in the world!</p>
                <div class="col-12">
                    <a href="" target="_blank"><img alt="Twitter" class="socialImages" src="https://simplesharebuttons.com/images/somacro/twitter.png"></a>
                    <a href="" target="_blank"><img alt="Facebook" class="socialImages" src="https://simplesharebuttons.com/images/somacro/facebook.png"></a>
                    <a href="" target="_blank"><img alt="Google" class="socialImages" src="https://simplesharebuttons.com/images/somacro/google.png"></a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-xs-12 teamMemberContainer"><img
                        src="images/Team/thumbnails/thumbnails.png" alt=""
                        class="img-fluid img-thumbnail teamMemberImage">
                <h4>John2</h4>
                <p class="text-muted">Developer</p>
                <p>John is the most Awesome Person in the world!</p>
                <div class="col-12">
                    <a href="" target="_blank"><img alt="Twitter" class="socialImages" src="https://simplesharebuttons.com/images/somacro/twitter.png"></a>
                    <a href="" target="_blank"><img alt="Facebook" class="socialImages" src="https://simplesharebuttons.com/images/somacro/facebook.png"></a>
                    <a href="" target="_blank"><img alt="Google" class="socialImages" src="https://simplesharebuttons.com/images/somacro/google.png"></a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-xs-12 teamMemberContainer"><img
                        src="images/Team/thumbnails/thumbnails.png" alt=""
                        class="img-fluid img-thumbnail teamMemberImage">
                <h4>John3</h4>
                <p class="text-muted">Developer</p>
                <p>John is the most Awesome Person in the world!</p>
                <div class="col-12">
                    <a href="" target="_blank"><img alt="Twitter" class="socialImages" src="https://simplesharebuttons.com/images/somacro/twitter.png"></a>
                    <a href="" target="_blank"><img alt="Facebook" class="socialImages" src="https://simplesharebuttons.com/images/somacro/facebook.png"></a>
                    <a href="" target="_blank"><img alt="Google" class="socialImages" src="https://simplesharebuttons.com/images/somacro/google.png"></a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-xs-12 teamMemberContainer"><img
                        src="images/Team/thumbnails/thumbnails.png" alt=""
                        class="img-fluid img-thumbnail teamMemberImage">
                <h4>John4</h4>
                <p class="text-muted">Developer</p>
                <p>John is the most Awesome Person in the world!</p>
                <div class="col-12">
                    <a href="" target="_blank"><img alt="Twitter" class="socialImages" src="https://simplesharebuttons.com/images/somacro/twitter.png"></a>
                    <a href="" target="_blank"><img alt="Facebook" class="socialImages" src="https://simplesharebuttons.com/images/somacro/facebook.png"></a>
                    <a href="" target="_blank"><img alt="Google" class="socialImages" src="https://simplesharebuttons.com/images/somacro/google.png"></a>
                </div>
            </div>
        </div>
    </div>
<!--Contact-Form Section-->
    <div class="container-fluid" id="ContactSection">
        <div class="row">
            <div class="col-12 text-center">
                <h1>Contact Us</h1>
            </div>
        </div>
        <form action="">
            <div class="row">
                <div class="col-md-6">
                    <label for="contactEmail">Email Address</label>
                    <input type="email" class="form-control" id="contactEmail" placeholder="Enter Email Address">
                    <small class="form-text">We'll never share your email with anyone else.</small>
                </div>
                <div class="col-md-6">
                    <label for="contactName" Name="">name</label>
                    <input type="text" class="form-control" id="contactName" placeholder="Enter Your Name">
                </div>
                <div class="col-12">
                    <label for="contactMessage">Message</label>
                    <textarea type="text" class="form-control" id="contactMessage" rows="5"></textarea>
                </div>
                <div class="col-12" id="contactButtonContainer">
                    <button class="col-12 btn btn-primary" type="button">Send Message</button>
                </div>
            </div>
        </form>
    </div>
<?php  require_once('snippets/FOOTER.php');?>