import aboutImg from "./images/about-us-img.jpg"

function About(){
    return(
        <div className="about-wrapper">
            <div className="about-container">
                <img className="about-img" src={aboutImg} alt="Jewelry"/>
                <div className="about-us">
                    <h2 className="about-heading">Our mission</h2>
                    <p className="about-text">Lorem ipsum dolor sit amet, veniam epicuri lucilius ea eos. Mei ex quodsi senserit posidonium, sit posse voluptua oporteat cu.</p>
                </div>
            </div>
            <div className="about-container">
                <div className="about-us">
                    <h2 className="about-heading">Our location</h2>
                    <p className="about-text">Address: 50 Danforth Ave, Toronto, ON M4K 1M8</p>
                    <div className="opening-hours-container">
                        <p className="opening-hours">Mon.-Sat.: 10:00AM-7:00PM</p>
                        <p className="opening-hours">Sun.: 11:00AM-6:00PM</p>
                    </div>
                    <p className="contacts"><a href="tel:+14371111111">(437) 111 1111</a></p>
                    <p className="contacts"><a href="mailto:office@exclusive-jewelry.com">office@exclusive-jewelry.com</a></p>
                </div>
                <iframe className="location-map" title="location" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Toronto,%20Danforth%20ave,%2050+(Exclusive%20Jewelry)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe>
            </div>
        </div>
    )
}

export default About;