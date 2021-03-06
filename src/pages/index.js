import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic15 from '../assets/images/pic15.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Blake Immigration Law"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>About Us</h3>
                                <p>Meet Our Team</p>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Services</h3>
                                <p>Removal Defense, Humanitarian Visas, Family-Based Petitions, Naturalization</p>
                            </header>
                            <Link to="/services" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Testimonials</h3>
                                <p>Hear From People We've Helped</p>
                            </header>
                            <Link to="/testimonials" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Victories</h3>
                                <p>See What We've Done</p>
                            </header>
                            <Link to="/victories" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic15})`}}>
                            <header className="major">
                                <h3>Social Media</h3>
                                <p>Stay Up to Date</p>
                            </header>
                            <Link to="/social" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Contact Us</h3>
                                <p>Contact Us For a Consultation</p>
                            </header>
                            <Link to="/contact" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Mission</h2>
                            </header>
                            <p>Our law firm is dedicated to offering excellent, affordable legal services to immigrants and refugees in the Washington, DC area. We represent our clients before the Arlington and Baltimore Immigration Courts, the Board of Immigration Appeals (BIA) and U.S. Citizenship and Immigration Services (USCIS) with a focus on removal (deportation) defense, asylum and family-based immigrant petitions. Our offices are conveniently located in Old Town Alexandria, Virginia and Baltimore, Maryland.</p>
                            <ul className="actions">
                                 <li><a href="tel:7035947857" className="button next scrolly">Call Us (703) 594-7857</a></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
