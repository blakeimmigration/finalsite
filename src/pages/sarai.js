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
                    <p>Bio coming soon. </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Sarai
