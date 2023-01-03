import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic20 from '../assets/images/pic20.jpg'

const Jennifer = (props) => (
    <Layout>
        <Helmet>
            <title>Jennifer</title>
            <meta name="description" content="Jennifer Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Jennifer Araujo</h1>
    <h3>Associate Attorney</h3>
                    </header>
                    <img src={pic20} alt="" />
                    <p> Jennifer is an associate attorney at Blake Immigration Law. She has worked at the firm since 2017, first as a paralegal, and as an attorney since 2022. She was born and raised in northern Virginia and earned her B.A. in political science from the Pennsylvania State University and J.D. from the University of the District of Columbia (UDC) David A. Clarke School of Law. During college she studied abroad in Barcelona, Spain. During law school Jennfier volunteered at the UDC Immigration and Human Rights Legal Clinic processing applications for adjustment of status and conducting legal research. At graduation, she was awarded the UDC Law Outstanding Clinical Student Award. She is passionate about helping immigrants obtain legal status in the United States and likes interacting with people from different cultural backgrounds. In her free time Jennifer enjoys spending time with her family and baking cakes.</p>
<i><p>Jennifer es una abogada en Blake Immigration Law y ha trabajado en el bufete desde 2017 primeramente como paralegal, y como abogada desde 2022. Nació y creció en el norte de Virginia y obtuvo su licenciatura en ciencias políticas en la Universidad Estatal de Pensilvania y su doctorada en derecho de la facultad de derecho David A. Clarke de la universidad del Distrito de Columbia (UDC). Durante sus estudios de derecho, participó en la Clínica de la Facultad de Derecho David A. Clarke de la Universidad del Distrito de Columbia (UDC) procesando solicitudes para el ajuste de estatus y realizando investigando legales. Al graduarse, recibió el Premio al Estudiante Clínico Sobresaliente de Derecho de la UDC. Le apasiona ayudar a los inmigrantes a obtener su estatus legal en los Estados Unidos y le gusta interactuar con personas de diferentes orígenes culturales. En su tiempo libre a ella le gusta pasar tiempo con su familia y hornear pasteles. 
</p></i>                
</div>
            </section>
        </div>

    </Layout>
)

export default Jennifer
