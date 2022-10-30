import React from 'react'
import Footer from '../components/footer'
// import Categories from './Categories'
import {Route, Routes } from 'react-router-dom'
// import PlaylistPage from './pages/Playlist'
// import '../assets/img'
// import topNavBar from './components/topNavBar';
// import '../styles/body.css'
import Navbar from './Navbar';
import Home from '../pages/Home'
import img1 from "../assets/img/focus1.jpeg";
import img2 from "../assets/img/focus2.jpeg";
import img3 from "../assets/img/focus3.jpeg";
import img4 from "../assets/img/focus4.jpeg";
import img5 from "../assets/img/focus5.jpeg";
import img6 from "../assets/img/focus6.jpeg";
import img7 from "../assets/img/focus7.jpeg";
import img8 from "../assets/img/focus8.jpeg";
import img9 from "../assets/img/mood1.jpeg";
import img10 from "../assets/img/mood2.jpeg";
import img12 from "../assets/img/mood3.jpeg";
import img11 from "../assets/img/mood4.jpeg";
import img13 from "../assets/img/mood5.jpeg";
import img14 from "../assets/img/mood6.jpeg";
import img15 from "../assets/img/mood7.jpeg";
import img16 from "../assets/img/mood8.jpeg";
import img17 from "../assets/img/playlist1.jpeg";
import img18 from "../assets/img/playlist2.jpeg";
import img19 from "../assets/img/playlist3.jpeg";
import img20 from "../assets/img/playlist4.jpeg";
import img21 from "../assets/img/playlist5.jpeg";
import img22 from "../assets/img/playlist6.jpeg";
import img23 from "../assets/img/playlist7.jpeg";
import img24 from "../assets/img/playlist8.jpeg";
import img25 from "../assets/img/focus1.jpeg";
import img26 from "../assets/img/focus7.jpeg";
const Body = () => {
  return (
    <>
    <body>
      {/* <topNavBar/> */}
      {/* <Navbar/> */}
    {/* <div class="main-content">
        <div class="row-name">
            <h3 class="tile">FOCUS</h3>
            <p class="see-all">SEE ALL</p>
        </div>
        <div class="display-row">
            <div class="card-container" onmouseover="handleMouseOver()">
                <div class="card">
                    <img class="myimg" src={img1} alt=""/>
                <div>Today's Top Hits</div>
                <p>Sam Smith is on</p>
                <p> top of the ..</p>
                </div>
            </div>
            <div class="card-container">
            <div class="card">
                    <img src={img2} alt=""/>
                    <div>Bollywood Dance..</div>
                    <p>Keep calm and</p>
                    <p>focus with...</p>
            </div>
            </div>
            <div class="card-container">
            <div class="card">
                <img src={img3} alt=""/>
                <div>Calm Before the strom</div>
                <p>Focus with soft </p>
                <p>study music in ...</p>
            </div>
        </div>
            <div class="card-container">
                <div class="card">
                    <img src={img4} alt=""/>
                    <div>Peaceful piano</div>
                    <p>The perfect study</p>
                    <p>beats twenty fou...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img class="myimg" src={img5} alt=""/>
                    <div>Deep Focus</div>
                    <p>uptempo</p>
                    <p>instrumental hip...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                <img class="myimg" src={img6} alt=""/>
                <div>Instrumental studies</div>
                <p>Dedicated to all</p>
                <p>the programmers...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img class="myimg" src={img7} alt=""/>
                    <div>Coding Mode</div>
                    <p>Dedicated to all the</p>
                    <p>programmers out...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img class="myimg" src={img8} alt=""/>
                    <div>Coding Mode</div>
                    <p>Louge and chill</p>
                    <p>out music for you...</p>
                </div>
            </div>
        </div>
    </div>
    <div class="main-content">
        <div class="row-name">
            <h3 class="tile">Mood</h3>
            <p class="see-all">SEE ALL</p>
        </div>
        <div class="display-row">
            <div class="card-container" >
                <div class="card">
                    <img class="myimg" src={img9} alt=""/>
                    <div>Mood Booster</div>
                    <p>Get happy with</p>
                    <p>today's dose of</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img src={img10} alt=""/>
                    <div>Feel'ng Good</div>
                    <p>Feel good with</p>
                    <p>positively</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img src={img11} alt=""/>
                    <div>Dark and Stromy</div>
                    <p>Beautiful dark </p>
                    <p> dramatic tracks</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img src={img12} alt=""/>
                    <div>Feeling Myself</div>
                    <p>Hey there,</p>
                    <p>looking for beaut...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img class="myimg" src={img13} alt=""/>
                    <div>Chill Tracks</div>
                    <p>Happy vibes for an</p>
                    <p>upbeat morning.</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                <img class="myimg" src={img14} alt=""/>
                <div>Calm before the strom</div>
                <p>Happy vibes for an </p>
                <p>upbeat morning.</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img class="myimg" src={img15} alt=""/>
                    <div>Focus flow</div>
                    <p>Dedicated to all the</p>
                    <p>programmers out...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img class="myimg" src={img16} alt=""/>
                    <div>Feel Good Beats</div>
                    <p>The hip hop playlist</p>
                    <p>that's a whole...</p>
                </div>
            </div>
        </div>
    </div>
    <div class="main-content">
        <div class="row-name">
            <h3 class="tile">Artists</h3>
            <p class="see-all">SEE ALL</p>
        </div>
        <div class="display-row">
            <div class="card-container" onmouseover="handleMouseOver()">
                <div class="card">
                    <img class="myimg" src={img17} alt=""/>
                <div>Today's Top Hits</div>
                <p>Sam Smith is on</p>
                <p> top of the ..</p>
                </div>
            </div>
            <div class="card-container">
            <div class="card">
                    <img src={img18} alt=""/>
                    <div>Bollywood Dance..</div>
                    <p>Keep calm and</p>
                    <p>focus with...</p>
            </div>
            </div>
            <div class="card-container">
            <div class="card">
                <img src={img26} alt=""/>
                <div>Calm Before the strom</div>
                <p>Focus with soft </p>
                <p>study music in ...</p>
            </div>
        </div>
            <div class="card-container">
                <div class="card">
                    <img src={img19} alt=""/>
                    <div>Peaceful piano</div>
                    <p>The perfect study</p>
                    <p>beats twenty fou...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img class="myimg" src={img20}alt=""/>
                    <div>Deep Focus</div>
                    <p>uptempo</p>
                    <p>instrumental hip...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                <img class="myimg" src={img21} alt=""/>
                <div>Instrumental studies</div>
                <p>Dedicated to all</p>
                <p>the programmers...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img class="myimg" src={img22} alt=""/>
                    <div>Coding Mode</div>
                    <p>Dedicated to all the</p>
                    <p>programmers out...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img class="myimg" src={img23} alt=""/>
                    <div>Coding Mode</div>
                    <p>Louge and chill</p>
                    <p>out music for you...</p>
                </div>
            </div>
        </div>
    </div>
    <div class="main-content">
        <div class="row-name">
            <h3 class="tile">Playlist</h3>
            <p class="see-all">SEE ALL</p>
        </div>
        <div class="display-row">
            <div class="card-container">
                <div class="card">
                    <img class="myimg" src={img24} alt=""/>
                    <div>Top 20</div>
                    <p>Best Bollywood</p>
                    <p>songs from...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img src={img25} alt=""/>
                    <div>Your Music</div>
                    <p>Best Bollywood</p>
                    <p> songs from...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img src={img26} alt=""/>
                    <div>Let's Dance..</div>
                    <p>Best Bollywood </p>
                    <p> songs from...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img src={img5} alt=""/>
                    <div>Vibe out</div>
                    <p>Best Bollywood dance</p>
                    <p> songs from...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img class="myimg" src={img19} alt=""/>
                    <div>Hits 2021</div>
                    <p>Best Bollywood dance</p>
                    <p> songs from...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                <img class="myimg" src={img9} alt=""/>
                <div>Rock on</div>
                <p>Best Bollywood dance</p>
                <p> songs from...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img class="myimg" src={img2} alt=""/>
                    <div>Best in feild</div>
                    <p>Best Bollywood dance </p>
                    <p>songs from...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img class="myimg" src={img14} alt=""/>
                    <div>Know the lyrics</div>
                    <p>Best Bollywood dance </p>
                    <p>songs from...</p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="base-content">
        <div class="row-name">
            <h3 class="tile">Unique</h3>
            <p class="see-all">SEE ALL</p>
        </div>
        <div class="display-row">
            <div class="card-container">
                <div class="card">
                    <img class="myimg" src={img19} alt=""/>
                    <div>Bollywood Dance..</div>
                    <p>Best Bollywood </p>
                    <p>songs from...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img src={img25} alt=""/>
                    <div>Bollywood Dance..</div>
                    <p>Best Bollywood </p>
                    <p>songs from...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img src={img12} alt=""/>
                    <div>Bollywood Dance..</div>
                    <p>Best Bollywood </p>
                    <p>songs from...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img src={img25} alt=""/>
                    <div>Bollywood Dance..</div>
                    <p>Best Bollywood dance </p>
                    <p>songs from...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img class="myimg" src={img21} alt=""/>
                    <div>Bollywood Dance..</div>
                    <p>Best Bollywood dance </p>
                    <p>songs from...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                <img class="myimg" src={img15} alt=""/>
                <div>Bollywood Dance..</div>
                <p>Best Bollywood dance </p>
                <p>songs from...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img class="myimg" src={img26} alt=""/>
                    <div>Bollywood Dance..</div>
                    <p>Best Bollywood dance </p>
                    <p>songs from...</p>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img class="myimg" src={img20} alt=""/>
                    <div>Bollywood Dance..</div>
                    <p>Best Bollywood dance </p>
                    <p>songs from...</p>
                </div>
            </div>
        </div>
    </div> */}
    {/* </div> */}
    <Home/>
    </body>
    {/* <Footer/> */}
    </>
  );
}

export default Body