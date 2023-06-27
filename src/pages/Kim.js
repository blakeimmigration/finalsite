import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import kim from '../assets/images/kim.jpg'

const Kim = (props) => (
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
    <h3>Receptionist/Administrative Assistant</h3>
                    </header>
                    <img src={kim} alt="" />
                    <p>Bio coming soon.</p>

                    
                </div>
            </section>
        </div>

    </Layout>
)

export default Jackie
