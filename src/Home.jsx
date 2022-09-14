import React from "react";
import Navbar from "./Navbar";
function Home()
{
    return(
        <>
        <Navbar/>
            <div id="title-theme">
  <h1><big> THAT </big></h1>
  <h1><big> SANDWICH </big></h1>
  <h1><big> PLACE </big></h1>
  <p><big><i>The best sandwich you'll ever have. Nothing more, nothing less.</i></big></p>
  <button className="btn" type="button" id="button1"> Order Now </button>
  </div>
  <div id="order-now">
      <h1><big>ORDER ONLINE</big></h1>
      <p><big><i>Out-of-this-world ingredients between slices of our artisanal bread</i></big></p>
      <br/>
      <button type="button" className="btn btn-white btn-outline-dark" data-bs-toggle="modal" data-bs-target="#order">Pickup, ASAP (in 15 minutes) Change</button>
      <div className="modal fade" id="order">
        <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title"><i>How do you want to get your order?</i></h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <p><small>Pickup from</small></p>
            <p>500 Terry Francois Street, San Francisco, CA, USA</p>
            <p><small>Pickup time</small></p>
            <p>ASAP (in 15 minutes)</p>
          </div>
          <div class="modal-footer">
            <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Save</button>
          </div>
        </div>
        </div>
      </div>
      <br/>
      <nav className="navbar navbar-expand-sm bg-white">
        <div className="container-fluid">
          <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"> Menu </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#menu">Menu</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#our-sandwiches">OUR SANDWICHES</a>
          </li>
          </ul>
        </div>
        </nav>
        <h3 id="menu"><i>Menu</i></h3>
        <p>We Do Nothing More Than the Best Sandwiches You'll Ever Have </p>
        <br/>
        <h3 id="our-sandwiches">OUR SANDWICHES</h3>
        <p> Sandwiches you can choose out from:</p>
        <div className="card-group">
          <div className="card">
          <div class="card-body">
            <p><i>Shopsin Club</i></p>
            <p>House turkey, cranberry miso mayo, sweet pickles, bacon, avacado, bibb,...</p>
            <br/>
            <p>$9.99</p>
          </div>
          </div>
          <div className="card">
          <div class="card-body">
            <p><i>Surfer</i></p>
            <p>House turkey, melty swiss, blueberry masala jam, Duke's mayo, arugula,...</p>
            <br/>
            <p>$9.99</p>
          </div>
          </div>
          <div className="card">
          <div class="card-body">
            <p><i>Baller Classic</i></p>
            <p>House turkey, Duke's mayo, sweet pickles, raw onion, arugula, hoagie</p>
            <br/>
            <p>$9.99</p>
          </div>
          </div>
          <div className="card">
          <div class="card-body">
            <p><i>The Charred On</i></p>
            <p>Charred greens in spicy tomato-miso dressing, olive tapenade, fresh radish...</p>
            <br/>
            <p>$9.99</p>
          </div>
          </div>
        </div>
        <div id="last-item">
          <p><i>Phoagie</i></p>
          <br/>
          <p>Vegan Hoisin eggplant (contains gluten), avocado, fresh and frizzled...</p>
          <br/>
          <p>$9.99</p>
        </div>
  </div> 
  <div id="background1">

  </div>
  <div id="about-us">
    <div id="about-us-sandwich">
      <h1>ABOUT US</h1>
      <h4><i>What can we say? We're obsessed with sandwiches.</i></h4>
    </div>
    <div id="about-us-sandwich2">
      <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190322-ham-sandwich-horizontal-1553721016.png" style={{width:"500px"}}/>
    </div>
  </div>
    <div id="about-us">
    <div id="about-us-deliver">
      <img src="https://static.wixstatic.com/media/3ad585_58d78cd5f3404c4d8fe6cabe3efb6be3~mv2.jpg/v1/fill/w_561,h_340,al_c,q_90,enc_auto/Standard%20Kraft%20paper%20fast%20food%20packaging.jpg" style={{width:"500px"}}/>
    </div>
    <div id="about-us-deliver2">
      <h1>WE DELIVER</h1>
      <h4><i>Order now and get your TSP, ASAP!</i></h4>
    </div>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
  <div id="reviews">
      <h1>REVIEWS</h1>
      <h4><i>What can we say? We're obsessed with sandwiches.</i></h4>
      <br/>
      <br/>
      <div id="client-reviews">
        <div>
          <h3><i>“Can I marry a Baller Classic?”</i></h3>
          <p>Josh</p>
        </div>
        <div>
        <h3><i>“So much more than just a sandwich”</i></h3>
          <p>Davina</p>
        </div>
        <div>
        <h3><i>“Brilliant sandwiches, awesome service”</i></h3>
          <p>Lucy</p>
        </div>
      </div>
  </div>
  <div id="sideway-sandwiche">

  </div>
  <div id="contact-us">
    <h1>MADE WITH CARBS BY TSP </h1>
    <br/>
    <p>500 Terry Francois St. San Francisco CA 941083</p>
    <br/>
      <div id="contact-info">
      <div>
    <p>
      Mon - Fri 8am - 8pm
      <br/>
      Saturday: 9am - 7pm
      <br/>
      Sunday: 9am - 8pm  
    </p>
    </div>
    <div>
      <p>
        Instagram
        <br/>
        Facebook
      </p>
    </div>
    <div>
      <p>
        info@mysite.com
        123-456-7890
      </p>
    </div>
      </div>
  </div>
        </>
    )
}
export default Home;