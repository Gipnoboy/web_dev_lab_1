import "./footer.scss"
import logo_white from "../../public/logo_white.png"
import facebook from "../../public/facebook.png"
import instagram from "../../public/instagram.png"
import twitter from "../../public/twitter.png"

export default function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="footer__main">
                    <div className="footer__main__logo">
                        <img src={logo_white} alt="logo white"></img>
                        <h3>Coffee shop</h3>
                    </div>
                    <div className="footer__main__other">
                        <ul>
                            <li>Catalogue</li>
                            <li>Gift cards</li>
                            <li>Delivery</li>
                        </ul>
                        <ul>
                            <li>About company</li>
                            <li>Job opportunities</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                            <li>Contact Us </li>
                        </ul>
                        <div>
                            <h2>Follow us</h2>
                            <div>
                                <img src={facebook} alt="facebook"></img>
                                <img src={instagram} alt="instagram"></img>
                                <img src={twitter} alt="twitter"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__license">
                    <p>© 2023 CoffeeBuy. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}