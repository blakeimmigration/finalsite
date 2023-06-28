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
                    <p> Bio coming soon. </p>
   
                </div>
            </section>
        </div>

    </Layout>
)

export default Wendy
