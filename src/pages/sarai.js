import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic41 from '../assets/images/pic41.jpg'

const Sarai= (props) => (
    <Layout>
        <Helmet>
            <title>Sarai Valles-Alberto</title>
            <meta name="description" content="Sarai Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Sarai Valles-Alberto</h1>
    <h3>Paralegal</h3>
                    </header>
                    <img src={pic41} alt="" />
                    <p>Sarai has been a paralegal at Blake Immigration Law since 2022. She grew up in Woodbridge, Virginia. Sarai earned her A.A. in liberal studies with a focus on international studies from Northern Virginia Community College and B.A. in global affairs from George Mason University. She previously worked for a medical office in Manassas, Virginia and as an intern for the Law Library of Congress and Democratic Party of Virginia. She enjoys working in immigration law because she can directly impact and bring change to people's lives. In her free time she enjoys drawing, painting, and playing with her dogs Apollo and Kilo.</p>
<p><i>Sarai ha sido paralegal en Blake Immigration Law desde 2022. Creció en Woodbridge, Virginia. Sarai obtuvo su A.A. en estudios liberales con un enfoque en estudios internacionales de Northern Virginia Community College y B.A. en Asuntos Globales de la Universidad George Mason. Anteriormente trabajó para una oficina médica en Manassas, Virginia y como pasante para la Biblioteca de Derecho del Congreso y el Partido Demócrata de Virginia. Le gusta trabajar en derecho de inmigración porque puede impactar directamente y generar cambios en la vida de las personas. En su tiempo libre le gusta dibujar, pintar, y jugar con sus perros Apollo y Kilo.</i></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Sarai
