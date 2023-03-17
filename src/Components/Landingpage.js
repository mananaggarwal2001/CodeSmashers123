import React from 'react'
import '../CSS/LandingPage.css'
import icon from '../Images/icon.png'
const Landingpage = () => {
    return (
        <>
            <div class="mainPart">
                <div class="leftSide " id="sidemenuForm">

                    <p>Your Query Here</p>
                    <div class="form leftsidewidth">
                        <form name="submit-to-google-sheet">
                            <input type="text" name="Name" placeholder="Full Name" />
                            <input type="email" name="Email" placeholder="Your Email" />
                            <input type="number" name="ContactNumber" placeholder="Contact Number" />
                            <textarea name="Message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                            <div class="formButton"><button type="reset">Reset</button><button type="submit">Submit</button>
                            </div>
                            <span id="msg"></span>
                        </form>
                    </div>
                </div>
                <div class="rightSide">
                    <div class="rit">
                        <div class="mainText" id="heading">
                            <p> Your Security Our Passion </p>
                            <p id="motto">More Privacy || More Enhanced</p>
                        </div>
                        <div class="mainIcon">
                            <img src={icon} alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="textJH">
                <h2>Why To Choose US</h2>
            </div>
            <div class="features">
                <div class="featureBox" id="featureBox1">
                    <div class="content">
                        <i class="material-symbols-outlined"> security</i>
                        <p class="heading"> Security</p>
                        <p class="text">Uses Latest Technology</p>
                    </div>
                </div>
                <div class="featureBox" id="featureBox2">
                    <div class="content">
                        <i class="material-symbols-outlined">lock</i>
                        <p class="heading"> Privacy</p>
                        <p class="text">Data is more secured</p>
                    </div>
                </div>
                <div class="featureBox" id="featureBox3">
                    <div class="content">
                        <i class="material-symbols-outlined"> vpn_key</i>
                        <p class="heading"> Password</p>
                        <p class="text">More complex hashing , more complex password.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landingpage