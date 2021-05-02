import React from 'react'
import ServicesLogo from '../../../assets/img/ServicesLogo.png'
import BigServiceCircle from '../../../assets/img/big-circle-service.png'
import SmallServiceCircle from '../../../assets/img/small-circle-service.png'
import ServiceBox from '../../../assets/img/service-box.png'
import ServiceBoxBorder from '../../../assets/img/service-box-border.png'
import ServiceCard from './ServiceCard'
import AuthService from '../../../assets/svg/AuthService.svg'
import CustomService from '../../../assets/svg/CustomService.svg'
import SellFastService from '../../../assets/svg/SellFastService.svg'
import ServiceGraph from '../../../assets/svg/ServiceGraph.svg'
import ServicePolicy from '../../../assets/svg/ServicePolicy.svg'
import ServiceShipping from '../../../assets/svg/ServiceShipping.svg'
function Services({ServiceDesktopSlash}) {
    return (
        <div className="Services">
            
            <img src={BigServiceCircle} alt="" className="left-big-service-circle"/>
            <div className="services-top">
                <img src={ServicesLogo} alt=""/>
            </div>
            <div className="service-body">
                <div className="service-body-info">
                    <div className="service-body-info-left-side">
                        <button>Services</button>
                       <img src={ServiceDesktopSlash} alt=""/>
                    </div>
                    





                   <div className="service-body-cards-container">
                   <div className="service-body-info-cards">
                            <ServiceCard servicetype="auth" icon={AuthService} heading="Authentication Guaranteed" description="In our authentcation center, we are checking the shoes if it is fake or not with our advenced technology tools and experienced authenticators, we are being sure that sending to our customers %100 authentic shoes. " />
                            <ServiceCard servicetype="CustomerService" icon={CustomService} heading="24/7 Customer Service" description="We are providing to our sellers and buyers 24/7 customer service. Our stakeholders can ask any question on their mind comfortably to our experienced call center staffs about any topic."/>
                            <ServiceCard servicetype="GraphicService" icon={ServiceGraph} heading="Graphics" description="As Turkey’s First Sneaker Stock Market we are providing to our customers day by day graphics which shows value of the sneakers in their hand. We are providing these prices from the sales which made via our platform." />
                            <ServiceCard servicetype="SellSneakers" icon={SellFastService} heading="Sell Your Sneakers Fast" description="At hypestuffs.com you can sell your sneakers fast and with best prices, our customer audiance is ready to buy the hype sneakers from your hand."/>
                            <ServiceCard servicetype="policy" icon={ServicePolicy}heading="Return policy" description="If you had bad experience from our service please contact us. Our customer service will help you about your complaint. But we only accept “Returns” if we did not properly serve our service. "/>
                            <ServiceCard servicetype="FreeShipping"icon={ServiceShipping}heading="free shipping " description="In hypestuffs.com buyers and sellers does not have to pay shipping prices. Sellers when they are sending their items to our “Authentication Center” they do not have to pay the shipping price. Also when we are sending the items to our customers we are not charging for shipping." />
                    </div>
                   </div>
                    <img src={ServiceBox} alt=""/>
                    <img src={ServiceBoxBorder} alt="" className="service-box-border"/>
                </div>
            </div>
        </div>
    )
}

export default Services
