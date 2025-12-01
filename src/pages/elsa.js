import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic75 from '../assets/images/pic75.jpg'

const Elsa= (props) => (
    <Layout>
        <Helmet>
            <title>Elsa Corea Largaespada</title>
            <meta name="description" content="Elsa Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Elsa Corea Largaespada</h1>
    <h3>Administrative Assistant</h3>
                    </header>
                    <img src={pic75} alt="" />
                    <p> Bio coming soon... </p>
  
                </div>
            </section>
        </div>

    </Layout>
)

export default Elsa
