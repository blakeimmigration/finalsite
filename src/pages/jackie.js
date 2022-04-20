import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic40 from '../assets/images/pic40.jpg'

const Jackie = (props) => (
    <Layout>
        <Helmet>
            <title>Jackie Citalan</title>
            <meta name="description" content="Jackie Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Jackie Citalan</h1>
    <h3>Receptionist/Administrative Assistant</h3>
                    </header>
                    <img src={pic40} alt="" />
                    <p>Jackie has been a receiptionist and administrative assistant at Blake Immigration Law since 2022. Before joining Blake Immigration Law Jackie was a bilingual patient coordinator at a dental office in Virginia. Jackie enjoys working in immigration law because she is able to help people from all different backgrounds and understands the importance of giving clients the best attention and service. In her free time Jackie likes to listen to music, watch tv and movies, and spend time with her family and friends.</p>
    <i><p>Jackie ha sido recepcionista y asistente administrativa en Blake Immigration Law desde 2022. Antes de unirse a Blake Immigration Law, Jackie fue coordinadora bilingüe de pacientes en un consultorio dental en Virginia. Jackie disfruta trabajar en derecho de inmigración porque puede ayudar a personas de diferentes orígenes y comprende la importancia de brindar a los clientes la mejor atención y servicio. En su tiempo libre, a Jackie le gusta escuchar música, ver televisión y películas, y pasar tiempo con su familia y amigos.</p></i>
                    
                </div>
            </section>
        </div>

    </Layout>
)

export default Jackie
