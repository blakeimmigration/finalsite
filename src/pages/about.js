import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAbout from '../components/BannerAbout'

import pic18 from '../assets/images/pic18.jpg'
import pic19 from '../assets/images/pic19.jpg'
import pic20 from '../assets/images/pic20.jpg'
import pic11 from '../assets/images/pic11.jpg'
import pic21 from '../assets/images/pic21.jpg'
import pic25 from '../assets/images/pic25.jpg'
import pic39 from '../assets/images/pic39.jpg'
import pic40 from '../assets/images/pic40.jpg'
import pic41 from '../assets/images/pic41.jpg'
import pic43 from '../assets/images/pic43.jpg'
import pic44 from '../assets/images/pic44.jpg'
import pic45 from '../assets/images/pic45.jpg'
import pic54 from '../assets/images/pic54.jpg'
import pic55 from '../assets/images/pic55.jpg'
import pic71 from '../assets/images/pic71.jpg'

const About = (props) => (
    <Layout>
        <Helmet>
            <title>About Test</title>
            <meta name="description" content="About Page" />
        </Helmet>

        <BannerAbout />

        <div id="main">
            <section id="one">
                <div className="inner">
                   <p>We are a group of immigration law professionals including attorneys, paralegals, and administrative assistants committed to offering the best possible service to our clients.</p>
   <i><p> Somos un grupo de profesionales del derecho de inmigración que incluye abogados, asistentes legales, y asistentes administrativos comprometidos a ofrecer el mejor servicio posible a nuestros clientes. </p></i>           
    </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/jillian" className="image">
                        <img src={pic18} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Jillian Blake, Esq.</h3>
                                <h4>Principal Attorney/Owner</h4>
                            </header>
                            <p>Jillian Blake has been an attorney at Blake Immigration Law since founding the firm in 2015. She grew up in San Francisco, California and earned her B.A. and M.A. in international relations from Johns Hopkins University. She received her J.D. from the University of Michigan Law School. <a href="https://blakeimmigration.netlify.app/jillian/">Read more about Jillian...</a></p>
    <i><p>Jillian ha sido abogada en Blake Immigration Law desde 2015. Creció en San Francisco, California y obtuvo su B.A. y M.A. en relaciones internacionales de la Universidad Johns Hopkins. Obtuvo su J.D. de la Facultad de Derecho de la Universidad de Michigan. <a href="https://blakeimmigration.netlify.app/jillian/">Leer más sobre Jillian ...</a></p></i>
                            <ul className="actions">
                                <li><a href="mailto:jillian@blakeimmigration.com" className="button fit">jillian@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/amelia" className="image">
                        <img src={pic19} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Amelia Wester, Esq.</h3>
                                <h4>Associate Attorney</h4>
                            </header>
                            <p> Amelia has been an attorney at Blake Immigration Law since 2021. She grew up outside of Cleveland, Ohio and earned her B.A. in international studies and Latin American studies from Miami University. She received her J.D. from Case Western Reserve University School of Law. <a href="https://blakeimmigration.netlify.app/amelia/">Read more about Amelia...</a></p>
                            <i><p>Amelia ha sido abogada en Blake Immigration Law desde 2021. Creció en el norte de Ohio y obtuvo su B.A. en estudios internacionales y estudios latinoamericanos de la Universidad de Miami. Obtuvo su J.D. de la Facultad de Derecho de la Universidad Case Western Reserve. <a href="https://blakeimmigration.netlify.app/amelia/">Leer más sobre Amelia ...</a></p></i>
                            <ul className="actions">
                                <li><a href="mailto:amelia@blakeimmigration.com" className="button fit">amelia@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/shane" className="image">
                        <img src={pic25} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Shane Ivey, Esq.</h3>
                                <h4>Associate Attorney</h4>
                            </header>
                            <p> Shane has been an attorney at Blake Immigration Law since 2021. He grew up outside of Dallas, Texas and earned his B.A. in political science and psychology from the University of North Texas. He received his J.D. from George Mason University.<a href="https://blakeimmigration.netlify.app/shane/"> Read more about Shane...</a></p>
                            <i><p>Shane ha sido abogado en Blake Immigration Law desde 2021. Creció cerca de Dallas, Texas y obtuvo su B.A. en ciencias politicas y psicología de la Universidad del Norte de Texas. Obtuvo su J.D. de la Facultad de Derecho de la Universidad George Mason.<a href="https://blakeimmigration.netlify.app/shane/"> Leer más sobre Shane ...</a></p></i>
                            <ul className="actions">
                                <li><a href="mailto:shane@blakeimmigration.com" className="button fit">shane@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/jennifer" className="image">
                        <img src={pic20} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Jennifer Araujo, Esq.</h3>
<h4>Associate Attorney</h4>
                            </header>
                            <p>Jennifer has worked at Blake Immigration Law since 2017, first as a paralegal, and as an attorney since 2022. She grew up in northern Virginia and earned her B.A. in political science from the Pennsylvania State University and her J.D. from the University of the District of Columbia (UDC) David A. Clarke School of Law. <a href="https://blakeimmigration.netlify.app/jennifer/">Read more about Jennifer...</a></p>
    <i><p>Jennifer ha trabajado en Blake Immigration Law desde 2017, primeramente como paralegal y como abogada desde 2022. Creció en el norte de Virginia y obtuvo su B.A. en ciencias políticas de la Universidad Estatal de Pensilvania y su J.D. de la facultad de derecho David A. Clarke de la universidad del Distrito de Columbia (UDC). <a href="https://blakeimmigration.netlify.app/jennifer/">Leer más sobre Jennifer ... </a></p></i>
                            <ul className="actions">
                                <li><a href="mailto:jennifer@blakeimmigration.com" className="button fit">jennifer@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
 <section>
                    <Link to="/victoria" className="image">
                        <img src={pic54} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Victoria Grimm</h3>
<h4>Law Clerk</h4>
                            </header>
                            <p>Victoria has been a law clerk at Blake Immigration Law since 2024. Victoria grew up nearby in Fairfax, Virginia. She earned her B.A. in international relations from Virginia Tech and law degree from George Washington University Law School.<a href="https://blakeimmigration.netlify.app/victoria/">Read more about Victoria...</a></p>
    <i><p>Victoria ha sido asistente legal en Blake Immigration Law desde 2024. Victoria creció en Fairfax, Virginia. Obtuvo su licenciatura en relaciones internacionales de Virginia Tech y su doctorada en derecho de la Facultad de Derecho de la Universidad George Washington.<a href="https://blakeimmigration.netlify.app/victoria/">Leer más sobre Victoria... </a></p></i>
                            <ul className="actions">
                                <li><a href="mailto:victoria@blakeimmigration.com" className="button fit">victoria@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                    <section>
                    <Link to="/karina" className="image">
                        <img src={pic11} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Karina Merchant</h3>
                            <h4>Senior Paralegal</h4>
                            </header>
                            <p>Karina has been a paralegal at Blake Immigration Law since 2017. She grew up in northern Virginia and earned her A.A. in liberal arts from Northern Virginia Community College. <a href="https://blakeimmigration.netlify.app/karina/">Read more about Karina...</a></p>
    
    
<i><p>Karina ha sido paralegal en Blake Immigration Law desde 2017. Creció en el norte de Virginia y obtuvo su título de A.A. en artes liberales del Colegio Comunitario de Virginia del Norte. <a href="https://blakeimmigration.netlify.app/karina/">Leer más sobre Karina ...</a></p></i>
                            <ul className="actions">
                           <li><a href="mailto:karina@blakeimmigration.com" className="button fit">karina@blakeimmigration.com</a></li>

                            </ul>
                        </div>
                    </div>
                </section>

<section>
                    <Link to="/diana" className="image">
                        <img src={pic39} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Diana Maravilla</h3>
                                <h4>Paralegal</h4>
                            </header>
                            <p> Diana has worked at Blake Immigration Law since 2021, first as an administrative assistant and now as a paralegal. Diana grew up in Arlington, Virginia and earned her Immigration Law Specialist Paralegal Certificate at the Washington Online Learning Institute. <a href="https://blakeimmigration.netlify.app/diana/">Read more about Diana...</a> </p>
    <i><p>Diana ha trabajado en Blake Immigration Law desde 2021 como asistente administrativa y ahora como paralegal. Diana creció en Arlington, Virginia y obtuvo su Certificado de asistente legal de especialista en derecho de inmigración en el Washington Online Learning Institute. <a href="https://blakeimmigration.netlify.app/diana/">Leer más sobre Diana... </a></p></i>
                            <ul className="actions">
                                <li><a href="mailto:diana@blakeimmigration.com" className="button fit">diana@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

<section>
                    <Link to="/sarai" className="image">
                        <img src={pic41} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sarai Valles-Alberto</h3>
                                <h4>Paralegal</h4>
                            </header>
                            <p>Sarai has been a paralegal at Blake Immigration Law since 2022. She grew up in Woodbridge, Virginia. Sarai earned her A.A. in liberal studies with a focus on international studies from Northern Virginia Community College and B.A. in global affairs from George Mason University. <a href="https://blakeimmigration.netlify.app/sarai/">Read more about Sarai...</a></p>
     <i><p>Sarai ha sido paralegal en Blake Immigration Law desde 2022. Creció en Woodbridge, Virginia. Sarai obtuvo su A.A. en estudios liberales con un enfoque en estudios internacionales de Northern Virginia Community College y B.A. en asuntos globales de la Universidad George Mason. <a href="https://blakeimmigration.netlify.app/sarai/">Leer más sobre Sarai... </a></p></i>
                            <ul className="actions">
                                <li><a href="mailto:sarai@blakeimmigration.com" className="button fit">sarai@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
    
    <section>
                    <Link to="/arlena" className="image">
                        <img src={pic45} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Arlena Lara Quinteros</h3>
<h4>Paralegal</h4>
                            </header>
                            <p>Arlena has been a paralegal at Blake Immigration Law since 2023. Arlena grew up in the DMV (DC, Maryland, Virginia) area. She earned a B.A. in international affairs and sociology from the University of Virginia.<a href="https://blakeimmigration.netlify.app/arlena/">Read more about Arlena...</a></p>
    <i><p>Arlena ha sido paralegal en Blake Immigration Law desde 2023. Arlena creció en el área del DMV (DC, Maryland, Virginia). Ella obtuvo su B.A. en asuntos internacionales y sociología de la Universidad de Virginia.<a href="https://blakeimmigration.netlify.app/arlena/">Leer más sobre Arlena...</a></p></i>
                            <ul className="actions">
                                <li><a href="mailto:arlena@blakeimmigration.com" className="button fit">arlena@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
     
        <section>
                    <Link to="/kim" className="image">
                        <img src={pic43} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Kim Whatley</h3>
<h4>Paralegal</h4>
                            </header>
                            <p>Kim has worked at Blake Immigration Law since 2023, first as an administrative assistant, and now as a paralegal. Kim grew up in Guatemala City, Guatemala and attended law school at Universidad San Carlos de Guatemala.<a href="https://blakeimmigration.netlify.app/kim/">Read more about Kim...</a></p>
   <i><p>Kim ha trabajado en Blake Immigration Law desde 2023, primero como asistente administrativa y ahora como paralegal. Kim creció en la Ciudad de Guatemala, Guatemala y asistió a la facultad de derecho en la Universidad San Carlos de Guatemala.<a href="https://blakeimmigration.netlify.app/kim/">Leer más sobre Kim...</a></p></i>
   
                            <ul className="actions">
                                <li><a href="mailto:kim@blakeimmigration.com" className="button fit">kim@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
    <section>
                    <Link to="/sara" className="image">
                        <img src={pic55} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sara Sanchez</h3>
<h4>Administrative Assistant</h4>
                            </header>
                            <p>Sara has been an administrative assistant at Blake Immigration Law since 2024. Sara grew up in Colombia and immigrated to the United States in 2021. She studied law at the Universidad Autónoma Latinoamericana in Medellín, Colombia.<a href="https://blakeimmigration.netlify.app/sara/">Read more about Sara...</a></p>
    <i><p>Sara ha sido asistente administrativa en Blake Immigration Law desde 2024. Sara creció en Colombia y imigró a los Estados Unidos en 2021. Estudió derecho en la Universidad Autónoma Latinoamericana en Medellín, Colombia.<a href="https://blakeimmigration.netlify.app/sara/">Leer más sobre Sara...</a></p></i>
                            <ul className="actions">
                                <li><a href="mailto:sara@blakeimmigration.com" className="button fit">sara@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
     <section>
                    <Link to="/sashenka" className="image">
                        <img src={pic71} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sashenka Fernandez</h3>
<h4>Administrative Assistant</h4>
                            </header>
                            <p>Bio coming soon...<a href="https://blakeimmigration.netlify.app/sashenka/">Read more about Sashenka...</a></p>
    <i><p>Biografía próximamente...<a href="https://blakeimmigration.netlify.app/sara/">Leer más sobre Sashenka...</a></p></i>
                            <ul className="actions">
                                <li><a href="mailto:sashenka@blakeimmigration.com" className="button fit">sashenka@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
       </section>

 
    </div>
    </Layout>
)
export default About
