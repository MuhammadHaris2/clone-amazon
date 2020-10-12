import React from 'react';
import {Link} from "react-router-dom";
import './index.css'
import Products from './Products';

const Home = ()=>{
    return(
        <div className="home">
            <Link to="/login">
            <img className="hm_image" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/adrive/images/photos/landingpage/APH_memories-delivered_family-photo_hero_1x._TTH_.jpg" alt =""/>

            </Link>
            <div className="hm__products">

            <Products
                id="11"
                title="Ideal for Recording 4K UHD Video: Samsung micro SD EVO Select is perfect for high res devices"
                images="https://images-na.ssl-images-amazon.com/images/I/81Cmetw9jTL._AC_SL1500_.jpg"
                price={22.35}
                rating={5}
            />

            <Products
                id="12"
                title="Live Streaming Webcam, PAPALOOK PA552 1080P Gaming StreamCam with Studio-Like Ring Light, Dual Microphones and Tripod for Twitch, Xbox One, OBS"
                images="https://images-na.ssl-images-amazon.com/images/I/41UsKRZDYNL._AC_.jpg"
                price={20.35}
                rating={5}
            />

             <Products
                id="11"
                title="Ideal for Recording 4K UHD Video: Samsung micro SD EVO Select is perfect for high res devices"
                images="https://images-na.ssl-images-amazon.com/images/I/81Cmetw9jTL._AC_SL1500_.jpg"
                price={22.35}
                rating={5}
            />
            </div>

            <div className="hm__products">

            <Products
                id="13"
                title="AmazonBasics HDMI to DVI Adapter Cable, Black, 6 Feet, 1-Pack"
                images="https://m.media-amazon.com/images/I/711lDrVDlpL._AC_UL480_FMwebp_QL65_.jpg"
                price={7.35}
                rating={5}
            />

            <Products
                id="14"
                title="Logitech M570 Wireless Trackball Mouse – Ergonomic Design with Sculpted Right-Hand Shape, Compatible with Apple Mac"
                images="https://m.media-amazon.com/images/I/61QrqZ8uurL._AC_UL480_FMwebp_QL65_.jpg"
                price={22.35}
                rating={5}
            />

            
            

            </div>

<div className="hm__products">

            <Products
                id="15"
                title="Logitech BRIO Ultra HD Webcam for Video Conferencing, Recording, and Streaming"
                images="https://images-na.ssl-images-amazon.com/images/I/61yuDpKZnLL._AC_SL1500_.jpg"
                price={21.30}
                rating={5}
            />
            
            <Products
                id="16"
                title="Logitech USB Headset H390 with Noise Cancelling Mic"
                images="https://images-na.ssl-images-amazon.com/images/I/61CqYq%2BxwNL._AC_SL1500_.jpg"
                price={30.09}
                rating={5}
            />
            
            <Products
                id="15"
                title="Logitech BRIO Ultra HD Webcam for Video Conferencing, Recording, and Streaming"
                images="https://images-na.ssl-images-amazon.com/images/I/61yuDpKZnLL._AC_SL1500_.jpg"
                price={21.30}
                rating={5}
            />

           
            </div>

            <div className="hm__products">

            <Products
                id="13"
                title="AmazonBasics HDMI to DVI Adapter Cable, Black, 6 Feet, 1-Pack"
                images="https://m.media-amazon.com/images/I/711lDrVDlpL._AC_UL480_FMwebp_QL65_.jpg"
                price={7.35}
                rating={5}
            />
            </div>


            
        </div>
    );
};

export default Home;