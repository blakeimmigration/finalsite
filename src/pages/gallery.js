import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerVictories from '../components/BannerVictories'

import pic26 from '../assets/images/pic26.jpg'
import pic28 from '../assets/images/pic28.jpg'
import pic29 from '../assets/images/pic29.jpg'
import pic30 from '../assets/images/pic30.jpg'
import pic31 from '../assets/images/pic31.jpg'
import pic32 from '../assets/images/pic32.jpg'
import pic33 from '../assets/images/pic33.jpg'
import pic34 from '../assets/images/pic34.jpg'
import pic35 from '../assets/images/pic35.jpg'
import pic36 from '../assets/images/pic36.jpg'
import pic37 from '../assets/images/pic37.jpg'
import pic38 from '../assets/images/pic38.jpg'
import pic46 from '../assets/images/pic46.jpg'
import pic47 from '../assets/images/pic47.jpg'
import pic48 from '../assets/images/pic48.jpg'
import pic49 from '../assets/images/pic49.jpg'
import pic50 from '../assets/images/pic50.jpg'
import pic51 from '../assets/images/pic51.jpg'
import pic52 from '../assets/images/pic52.jpg'
import pic53 from '../assets/images/pic53.jpg'

const Victories = (props) => (
    <Layout>
        <Helmet>
            <title>Victories</title>
            <meta name="description" content="Victory Gallery" />
        </Helmet>

        <BannerVictories />

        <div id="main">
            <section id="one">
                <div className="inner">
                   
                </div>
            </section>
    
            <section id="two" className="spotlights">
        <section>
                    <Link to="/gallery" className="image">
                        <img src={pic48} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Asylum(2022)</h3>
                                <i><h3>Asilo(2022)</h3></i>
                            </header>
                      
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/gallery" className="image">
                        <img src={pic26} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Cancellation of Removal (2022)</h3>
                                <i><h3>Cancelación de Deportación (2022)</h3></i>
                            </header>
                      
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/gallery" className="image">
                        <img src={pic28} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Adjustment of Status (Residency) (2022)</h3>
                                <i><h3>Ajuste de Estatus (Residencia) (2022)</h3></i>
                            </header>
                            
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/gallery" className="image">
                        <img src={pic29} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Asylum (2022)</h3>
                                <i><h4>Asilo (2022)</h4></i>
                            </header>
                            
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/gallery" className="image">
                        <img src={pic30} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                               <h3>Adjustment of Status (Residency)(2021)</h3>
                                <i><h3>Ajuste de Estatus (Residencia)(2021)</h3></i>
                            </header>
                          
                        </div>
                    </div>
                </section>
                    <section>
                    <Link to="/gallery" className="image">
                        <img src={pic31} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Humanitarian Asylum (2021)</h3>
                            <i><h3>Asilo Humanitario (2021)</h3></i>
                            </header>
                           
                        </div>
                    </div>
                </section>
                    <section>
                    <Link to="/gallery" className="image">
                        <img src={pic32} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Adjustment of Status (Residency)(2021)</h3>
                                <i><h3>Ajuste de Estatus (Residencia)(2021)</h3></i>
                            </header>
                           
                        </div>
                    </div>
                </section>
  <section>
                    <Link to="/gallery" className="image">
                        <img src={pic34} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Naturalization (2021)</h3>
                                <i><h3>Naturalización (2021)</h3></i>
                            </header>
                           
                        </div>
                    </div>
                </section>

  <section>
                    <Link to="/gallery" className="image">
                        <img src={pic33} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Adjustment of Status (Residency)(2021)</h3>
                                <i><h3>Ajuste de Estatus (Residencia)(2021)</h3></i>
                            </header>
                           
                        </div>
                    </div>
                </section>


  <section>
                    <Link to="/gallery" className="image">
                        <img src={pic36} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Naturalization (2020)</h3>
                                <i><h3>Naturalización (2020)</h3></i>
                            </header>
                           
                        </div>
                    </div>
                </section>

            </section>
        </div>

    </Layout>
)

export default Victories
