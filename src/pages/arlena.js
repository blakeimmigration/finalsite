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
                    <p> Bio coming soon. </p>
   
                </div>
            </section>
        </div>

    </Layout>
)

export default Arlena
