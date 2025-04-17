import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic55 from '../assets/images/pic55.jpg'

const Sara= (props) => (
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
                    <p>Sara has been an administrative assistant at Blake Immigration Law since 2024. Sara grew up in Colombia and immigrated to the United States in 2021. She studied law at the Universidad Autónoma Latinoamericana in Medellín, Colombia and since coming to the United States gained significant experience in customer service and administrative management. Her passion for immigration law comes from her own personal journey. She strongly believes in the opportunities for immigrants in the United States for better and more peaceful life. She enjoys helping others through their immigration process and ensuring they have the support they need. Outside of work Sara loves spending time with her family and her dog, Bailey. She also loves learning languages; she is fluent in three languages and currenly learning Italian. She also enjoys hiking, watching movies, and traveling.  </p>
<p><i>Más información próximamente.</i></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Sara

 
