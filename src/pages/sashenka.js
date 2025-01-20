import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic71 from '../assets/images/pic71.jpg'

const Sashenka= (props) => (
    <Layout>
        <Helmet>
            <title>Sashenka Fernandez</title>
            <meta name="description" content="Sashenka Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Sashenka Fernandez</h1>
    <h3>Administrative Assistant</h3>
                    </header>
                    <img src={pic71} alt="" />
                    <p>More information coming soon.</p>
<p><i>Más información próximamente.</i></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Sashenka
