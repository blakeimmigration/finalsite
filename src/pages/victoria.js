import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic54 from '../assets/images/pic54.jpg'

const Victoria = (props) => (
    <Layout>
        <Helmet>
            <title>Victoria</title>
            <meta name="description" content="Victoria Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Victoria Grimm</h1>
    <h3>Associate Attorney</h3>
                    </header>
                    <img src={pic54} alt="" />
                    <p>Victoria grew up nearby in Fairfax, Virginia. She earned her B.A. in international relations from Virginia Tech and law degree from George Washington University Law School. During law school she was active in the GW Immigration Law Clinic. Victoria enjoys working in immigration law because she can transform the lives of others and benefit the entire community. She also enjoys learning about different cultural backgrounds. In her free time Victoria likes to watch musicals, read, and try new foods.</p>
<i><p>Victoria creció en Fairfax, Virginia. Obtuvo su licenciatura en relaciones internacionales en Virginia Tech y su doctorada en derecho de la Facultad de Derecho de la Universidad George Washington. Durante sus estudios de derecho, participó activamente en la Clínica de Derecho de Inmigración de la Universidad George Washington. A Victoria le gusta trabajar en el ámbito del derecho de inmigración porque puede transformar la vida de los demás y beneficiar a toda la comunidad. También disfruta aprendiendo sobre diferentes culturas. En su tiempo libre, a Victoria le gusta ver musicales, leer y probar nuevas comidas.</p></i>
                   
                </div>
            </section>
        </div>

    </Layout>
)

export default Victoria
