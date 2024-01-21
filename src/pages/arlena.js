import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic45 from '../assets/images/pic45.jpg'

const Arlena= (props) => (
    <Layout>
        <Helmet>
            <title>Arlena Lara Quinteros</title>
            <meta name="description" content="Arlena Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Arlena Lara Quinteros</h1>
    <h3>Paralegal</h3>
                    </header>
                    <img src={pic45} alt="" />
                    <p> Arlena has been a paralegal at Blake Immigration Law since 2023. Arlena earned a B.A. in international affairs and sociology from the University of Virginia. During college, Arlena developed her passion for immigrants' rights during her studies on race, class, and migration and supported immigrants' rights through student-led initiatives in Charlottesville, Virginia. She enjoys working in immigration law because she can see the direct impact her work has on clients' lives. In her free time Arlena enjoys attending live music venues and spending time with her dog, Luna. </p>
    <i><p>Arlena ha sido paralegal en Blake Immigration Law desde 2023. Arlena obtuvo su B.A. en asuntos internacionales y sociología de la Universidad de Virginia. Durante la universidad, Arlena desarrolló su pasión por los derechos de los inmigrantes durante sus estudios sobre raza, clase social y migración y apoyó los derechos de los inmigrantes a través de iniciativas dirigidas por estudiantes en Charlottesville, Virginia. Le gusta trabajar en derecho de inmigración porque puede ver el impacto directo que tiene su trabajo en la vida de los clientes. En su tiempo libre, a Arlena le gusta asistir a lugares de música en vivo y pasar tiempo con su perro, Luna.</i></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Arlena
