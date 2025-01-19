import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic55 from '../assets/images/pic55.jpg'

const sara = (props) => (
    <Layout>
        <Helmet>
            <title>Sara Sanchez</title>
            <meta name="description" content="Sara Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Sara Sanchez</h1>
    <h3>Administrative Assistant</h3>
                    </header>
                    <img src={pic55} alt="" />
                    <p>More information soon. </p>
<i><p>Mas informacion pronto.</p></i>
                    
                </div>
            </section>
        </div>

    </Layout>
)

export default sara
