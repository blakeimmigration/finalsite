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
                    <p>Sara has been an administrative assistant at Blake Immigration Law since 2024. Sara grew up in Colombia and immigrated to the United States in 2021. She studied law at the Universidad Autónoma Latinoamericana in Medellín, Colombia and since coming to the United States gained significant experience in customer service and administrative management. Her passion for immigration law comes from her own personal journey. She strongly believes in the opportunities for immigrants in the United States for a better and more peaceful life. She enjoys helping others through their immigration process and ensuring they have the support they need. Outside of work Sara loves spending time with her family and her dog, Bailey. She also loves learning languages; she is fluent in three languages and currenly learning Italian. She also enjoys hiking, watching movies, and traveling.  </p>
<p><i>Sara ha sido asistente administrativa en Blake Immigration Law desde 2024. Sara creció en Colombia y imigró a los Estados Unidos en 2021. Estudió derecho en la Universidad Autónoma Latinoamericana en Medellín, Colombia, y desde que llegó a los Estados Unidos adquirió una importante experiencia en atención al cliente y gestión administrativa. Su pasión por el derecho migratorio proviene de su propia trayectoria. Cree firmemente en las oportunidades que tienen los inmigrantes en Estados Unidos para una vida mejor y más tranquila. Disfruta ayudando a otros en su proceso migratorio y asegurándose de que reciban el apoyo que necesitan. Fuera del trabajo, a Sara le encanta pasar tiempo con su familia y su perro, Bailey. También le encanta aprender idiomas; habla tres idiomas con fluidez y actualmente está aprendiendo italiano. También le gusta el senderismo, ver películas y viajar.</i></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Sara

 
