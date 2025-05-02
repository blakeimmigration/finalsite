import React from 'react'
import pic72 from 'pic72.png'


const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
    <img src={pic72} width="200" height="200" alt="" />

            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto=jillian@blakeimmigration.com">jillian@blakeimmigration.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(703) 594-7857</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Addresses</h3>
                        <span><b>Mailing Address</b><br />
                            107 S. West St. #810<br />
                        Alexandria, VA 22314<br />
                        </span>
<span><b>Physical Address</b><br />
                            1517 King St.<br />
                        Alexandria, VA 22314<br />
                        </span>

                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
