import React from "react";
import Navbar from "./Navbar";
function About()
{
    return(
        <>
        <Navbar/>
          <div id="title-theme2">
  <h3> - Offical home of - </h3>
  <img src="https://www.zelda.com/assets/img/common/logo-loz.svg" height="300" width="500"/>
  <br/>
  <p><i>Discover</i></p>
  <h1>THE LEGEND</h1>
  </div>
  <div id="the-creation">
    <h3 style={{color: 'white;'}}> - THE CREATION - </h3>
    <p><i>According to ancient tales, the world was created by three goddesses:</i></p>
    <div className="card-group">
      <div className="card text-center">
        <div className="card-body">
          <img src="https://www.zelda.com/assets/img/about/symbol-din.png"/>
          <h2> DIN </h2>
          <br/>
          <p><i>The goddess of power created the land.</i></p>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <img src="https://www.zelda.com/assets/img/about/symbol-nayru.png"/>
          <h3> NAYRU </h3>
          <br/>
          <p> <i>The goddess of wisdom created order.</i> </p>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <img src="https://www.zelda.com/assets/img/about/symbol-farore.png"/>
          <h3> FARORE </h3>
          <br/>
          <p> <i>The goddess of courage created life.</i> </p>
        </div>
      </div>
    </div>
  </div>
  <br/>
  <div id="triforce">
  <h3> - The Triforce - </h3>
  <br/>
  <p><i> Before they left the world they created, the three goddesses created the Triforce—a magical object made up of three golden triangles—and entrusted it with the goddess Hylia.</i></p>
  <p><i>The Triforce grants a wish to those who possess the three virtues of the goddesses: power, wisdom, and courage. If one doesn't have the proper balance of virtues, the Triforce will split into three pieces. Only by reuniting all three pieces can the true power of the Triforce be obtained.</i></p>
  <p><i>Throughout time, the Triforce has chosen a select few to wield its individual powers:</i></p>
  <div id="info">
    <div>
    <img src="https://www.zelda.com/assets/img/gallery-assets/triforce-2x.png" style={{height:"400px", width:"400px;"}}/>
    <h3><i> Triforce </i></h3>
    </div>
    <div>
      <img src="https://www.zelda.com/assets/img/about/zelda_play.png"/>
      <p> Zelda as seen in: The Legend of Zelda: Twilight Princess </p>
    </div>
  </div>
  </div>
  <div id="history" className="m-top">
    <h3><b> - THE HISTORY OF HYRULE - </b></h3>
    <br/>
    <br/>
    <p style={{paddingRight:'300px', paddingLeft:'300px' }}> Each game in The Legend of Zelda tells an important part of Hyrule. Trace their paths through the various eras in this comprehensive timeline.</p>
    <br/>
    <br/>
    <h1 style={{color:'goldenrod', paddingRight:'500px', paddingLeft:'500px'}}> The Legend of the Goddess and Hero </h1>
    <br/>
    <br/>
    <div id="games">
      <div>
        <img src="https://www.zelda.com/assets/img/timeline/skyward-sword/thumbnail.jpg" style={{height:'100px'}}/>
        <p><i>The Legend of Zelda: Skyward Sword</i></p>
      </div>
      <div>
        <img src="https://www.zelda.com/assets/img/timeline/the-minish-cap/thumbnail.jpg" style={{height:'100px'}}></img>
        <p><i>The Legend of Zelda: The Minish Cap </i></p>       
        </div>

      <div>
        <img src="https://www.zelda.com/assets/img/timeline/four-swords/thumbnail.jpg" style={{height:'100px'}}/>
        <p><i>The Legend of Zelda: Four Swords </i></p>
        </div>
      <div>
        <img src="https://www.zelda.com/assets/img/timeline/ocarina-of-time/thumbnail.jpg" style={{height:'100px'}}/>
        <p><i>The Legend of Zelda: Ocarina of Time</i></p>
        </div>
    </div>
    <br/>
    <br/>
    <p><i> Use the left and right arrows to navigate between games and the up and down arrows to choose a path when it splits. </i></p>
  <div id="demo" className="carousel slide" data-bs-ride="carousel">

  
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
  </div>
  <br/>
  <div className="carousel-item active">
        <img src="https://media.npr.org/assets/img/2021/07/21/switch_zeldasshd_nd-feb_scrn02_bmp_jpgcopy_wide-914358c713cef98c14a5f93261a237c2b5e85518.jpg" style={{height:'200px'}}/>
      </div>
      <div className="carousel-item">
        <img src="https://venturebeat.com/wp-content/uploads/2015/01/minishcapheader.jpg?w=1200&strip=all" style={{height:'200px'}}/>
      </div>
      <div className="carousel-item">
        <img src="https://preview.redd.it/i2oijmfw6sx31.jpg?auto=webp&s=c13574d16a7448ffc3f89769c4ea05a626d5aa23" style={{height:'200px'}}/>
      </div>
      <div className="carousel-item">
        <img src="https://wallpaperaccess.com/full/1596097.jpg" style={{height:'200px'}}/>
      </div>
      <div className="carousel-item">
        <img src="https://www.awanireview.com/wp-content/uploads/2022/05/1652599721_The-Legend-of-Zelda-Twilight-Princess-HD-on-Nintendo-Switch.jpg" style={{height:'200px'}}/>
      </div>
      <div className="carousel-item">
        <img src="https://i.ytimg.com/vi/NRqTKjOCTw8/maxresdefault.jpg" style={{height:'200px'}}/>
      </div>
      <div className="carousel-item">
        <img src="https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/Video/posters/BOTW_Switch_Presentation_Trailer" style={{height:'200px'}}/>
      </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>    
    
  </div>
  <div id="glossary" className="m-top">
    <h3> -GLOSSARY- </h3>
    <div id="characters1">
      <div><img src="https://www.zelda.com/assets/img/gallery-assets/portal-characters-link-off.png"/></div>
      <div><img src="https://www.zelda.com/assets/img/gallery-assets/portal-characters-zelda-off.png"/></div>
      <div><img src="https://www.zelda.com/assets/img/gallery-assets/portal-characters-ganondorf-off.png"/></div>
      <div><img src="https://www.zelda.com/assets/img/gallery-assets/portal-characters-ganon-off.png"/></div>
      <div><img src="https://www.zelda.com/assets/img/gallery-assets/portal-characters-impa-off.png"/></div>
      <div><img src="https://www.zelda.com/assets/img/gallery-assets/portal-characters-deku-off.png"/></div>
    </div>
    <div id="characters2">
    <div><img src="https://www.zelda.com/assets/img/gallery-assets/portal-characters-sheikah-off.png"/></div>
    <div><img src="https://www.zelda.com/assets/img/gallery-assets/portal-characters-goron-off.png"/></div>
    <div><img src="https://www.zelda.com/assets/img/gallery-assets/portal-characters-zora-off.png"/></div>
    <div><img src="https://www.zelda.com/assets/img/gallery-assets/portal-characters-kokiri-off.png"/></div>
    <div><img src="https://www.zelda.com/assets/img/gallery-assets/portal-characters-koroks-off.png"/></div>
    <div><img src="https://www.zelda.com/assets/img/gallery-assets/portal-characters-gerudo-off.png"/></div>
    </div>
    <div id="characters3">
  <div><img src="https://www.zelda.com/assets/img/gallery-assets/portal-characters-midna-off.png"/></div>
  <div><img src="https://www.zelda.com/assets/img/gallery-assets/portal-characters-great-fairy-off.png"/></div>
  <div><img src="https://www.zelda.com/assets/img/gallery-assets/portal-characters-rito-off.png"/></div>
  <div><img src="https://www.zelda.com/assets/img/gallery-assets/portal-characters-tingle-off.png"/></div>
  <div><img src="https://www.zelda.com/assets/img/gallery-assets/portal-characters-kaepora-gaebora-off.png"/></div>
  <div><img src="https://www.zelda.com/assets/img/gallery-assets/portal-characters-king-of-hyrule-off.png"/></div>
    </div>
  </div>
        </>
    )
}
export default About;