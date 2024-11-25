import img1 from "../../public/image1.png"
import img2 from "../../public/image2.png"
import { allProds } from "./items"
import arrow from "../../public/arrow_right.png"
import arrow_blue from "../../public/arrow_right_blue.svg"
import arrow_red from "../../public/arrow_right_red.svg"
import logo from "../../public/logo.png"
import "./main.scss"
import Item from "./item"

export default function Main(){
    return(
        <>
            <div className="container_1">
                <img src={img1} alt="img1" className="img1"></img>
                <div className="container_1_right">
                    <h3>
                        What's new?
                    </h3>
                    <h1>
                        Meet our new coffee!
                    </h1>
                    <p>
                        Try one of our signature selections and see what everyone’s <br></br> 
                        talking about or select ‘Catalogue’ at the top of the page to <br></br> view all the possibilities.
                    </p>
                    <button>
                        <div>Learn more</div>
                        <img src={arrow} alt="arrow right"></img>
                    </button>
                </div>
            </div>
            <div className="container_2">
                <div className="container_2_left">
                    <h1>
                        What’s interesting about<br></br>
                        this coffee?
                    </h1>
                    <p>
                        Try one of our signature selections and see what everyone’s<br></br>
                        talking about or select ‘Catalogue’ at the top of the page to<br></br>
                        view all the possibilities. Try one of our signature selections<br></br>
                        and see what everyone’s talking about or select ‘Catalogue’<br></br>
                        at the top of the page to view all the possibilities.
                    </p>
                    <h3>
                        <div>Read more</div>
                        <img src={arrow_blue} alt="arrow right blue"></img>
                    </h3>
                </div>
                <img src={img2} alt="img2" className="img2"></img>
            </div>
            <div className="popularSales">
                <div className="popularSalesInfo">
                    <h1>Check our sales for popular products</h1>
                    <div>
                        <div>All sales</div>
                        <img src={arrow_red} alt="arrow right red"></img>
                    </div>
                </div>
                <div className="items">
                    {allProds.map((item)=>{
                    return <Item
                        img = {item.img}
                        itemName={item.name}
                        weight={item.weight}
                        oldPrice={item.oldPrice}
                        newPrice={item.newPrice}
                        sale = {item.sale}
                    ></Item>
                })}
                </div>
                <div className="info">
                    <div className="info__submit">
                        <h2>Subscribe to get emails about our new products and sales</h2>
                        <form>
                            <input type="text" placeholder="Enter your email" className="info__submit__email"></input>
                            <input type="submit" value="Submit" className="info__submit__submit"></input>
                        </form>
                    </div>
                    <div className="info__about">
                        <p>We have a passion for coffee and people. Make sure <br />
                            you always ahve your favorite cup of coffee around <br />
                            to start your day off right
                        </p>
                        <img src={logo} alt="logo"></img>
                    </div>
                </div>
            </div>
        </>
    )
}