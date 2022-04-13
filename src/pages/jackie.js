import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic40 from '../assets/images/pic40.jpg'

const Jackie= (props) => (
    <Layout>
        <Helmet>
            <title>Jackie</title>
            <meta name="description" content="Jackie Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Jackie Citalan</h1>
    <h3>Receptionist/Administrative Assistant</h3>
                    </header>
                    <img src={pic40} alt="" />
                    <p>Bio coming soon...</p>
    <i><p>...</p></i> 
            
    </div>
            </section>
        </div>

    </Layout>
)

export default Jackie
