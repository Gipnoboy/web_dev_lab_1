import logo from "../../public/logo.png"
import search from "../../public/search.png"
import cart from "../../public/cart.png"
import "./header.scss"


export default function Header(){


    return(
        <>
            <header>
                <img src={logo} alt="logo" className="logo"></img>
                <div className="header_right">
                    <ul>
                        <li>
                            Catalogue
                        </li>
                        <li>
                            Delivery
                        </li>
                        <li>
                            Gift cards
                        </li>
                        <li>
                            About us
                        </li>
                    </ul>
                    <button className="sign_in">
                        Sign In
                    </button>

                    <button className="search">
                        <img src={search} alt="search" ></img>
                    </button>

                    <button className="cart">
                        <img src={cart} alt="cart" ></img>
                    </button>
                </div>
            </header>
        </>
    )
}