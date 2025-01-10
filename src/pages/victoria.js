import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic54 from '../assets/images/pic54.jpg'

const Shane = (props) => (
    <Layout>
        <Helmet>
            <title>Shane</title>
            <meta name="description" content="Victoria Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Victoria Grimm</h1>
    <h3>Associate Attorney</h3>
                    </header>
                    <img src={pic54} alt="" />
                    <p>Victoria is a law clerk at Blake Immigration Law.</p>
<i><p>Victoria is a law clerk at Blake Immigration Law.</p></i>
                   
                </div>
            </section>
        </div>

    </Layout>
)

export default Victoria
