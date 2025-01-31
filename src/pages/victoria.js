import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic54 from '../assets/images/pic54.jpg'

const Victoria = (props) => (
    <Layout>
        <Helmet>
            <title>Victoria</title>
            <meta name="description" content="Victoria Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Victoria Grimm</h1>
    <h3>Law Clerk</h3>
                    </header>
                    <img src={pic54} alt="" />
                    <p>More information coming soon.</p>
<i><p>Más información pronto.</p></i>
                   
                </div>
            </section>
        </div>

    </Layout>
)

export default Victoria
