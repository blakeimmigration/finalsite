import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic44 from '../assets/images/pic44.jpg'

const Wendy= (props) => (
    <Layout>
        <Helmet>
            <title>Wendy Vasquez</title>
            <meta name="description" content="Wendy Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Wendy Vasquez</h1>
    <h3>Paralegal</h3>
                    </header>
                    <img src={pic44} alt="" />
                    <p> Wendy has been a paralegal at Blake Immigration Law since 2023. She grew up in Arlington, Virginia and graduated from Freedom High School. Before coming to Blake Immigration Law, Wendy worked for several years as a legal assistant at Boykin Law Firm and as an administrative assistant for LRB Business Centers in Alexandria, Virginia. Wendy loves working in immigration law because she is able to help others and learn about different cultures and customs. In her free time, Wendy enjoys photography and spending time with her two daughters. </p>
   
                </div>
            </section>
        </div>

    </Layout>
)

export default Wendy
