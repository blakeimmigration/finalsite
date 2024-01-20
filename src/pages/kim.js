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
                    <p>Bio coming soon.</p>

                    
                </div>
            </section>
        </div>

    </Layout>
)

export default kim
