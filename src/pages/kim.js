import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic43 from '../assets/images/pic43.jpg'

const kim = (props) => (
    <Layout>
        <Helmet>
            <title>Kim Whatley</title>
            <meta name="description" content="Kim Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Kim Whatley</h1>
    <h3>Paralegal</h3>
                    </header>
                    <img src={pic43} alt="" />
                    <p>Kim has worked at Blake Immigration Law since 2023, first as an administrative assistant, and now as a paralegal. Kim grew up in Guatemala City, Guatemala and attended law school at Universidad San Carlos de Guatemala. Before working at Blake Immigration Law, Kim interned at American University School of Law and worked at Mil Mujeres, a nonprofit organization that helps immigrants who have been victims of crimes. Kim enjoys working in immigration law because, as an immigrant herself, she realizes the great impact she can have on the lives of others. In her free time Kim likes to care for her plants, cook, and spend time with her dog, Ruby. </p>
<i><p>Kim ha trabajado en Blake Immigration Law desde 2023, primero como asistente administrativa y ahora como paralegal. Kim creció en la Ciudad de Guatemala, Guatemala y asistió a la facultad de derecho en la Universidad San Carlos de Guatemala. Antes de trabajar en Blake Immigration Law, Kim hizo una pasantía en la facultad de derecho de la Universidad American y trabajó en Mil Mujeres, una organización sin fines de lucro que ayuda a inmigrantes que han sido víctimas de delitos. A Kim le gusta trabajar en derecho de inmigración porque, como inmigrante, se da cuenta del gran impacto que puede tener en las vidas de los demás. En su tiempo libre, a Kim le gusta cuidar sus plantas, cocinar, y pasar tiempo con su perro Ruby.</p></i>
                    
                </div>
            </section>
        </div>

    </Layout>
)

export default kim
