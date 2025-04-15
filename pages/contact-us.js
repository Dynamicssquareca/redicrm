import ContactUSForm from '@/components/ContactUSForm';
import Image from 'next/image';
import React from 'react';
import Head from 'next/head';

const ContactUs = () => {
    return (
        <>
            <Head>
                <title>Contact Us CRM Frontier  for Salesforce CRM Advice </title>
                <meta
                    name="description"
                    content="Contact Us to CRM Frontier for expert Salesforce CRM advice. Our team offers tailored solutions to optimize your business processes and enhance customer relationships."
                />
                <link rel="canonical" href="https://www.crmfrontier.com/contact-us/" />
                <meta property="og:locale" content="US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Contact Us CRM Frontier  for Salesforce CRM Advice" />
                <meta property="og:description" content="Contact Us to CRM Frontier for expert Salesforce CRM advice. Our team offers tailored solutions to optimize your business processes and enhance customer relationships." />
                <meta property="og:url" content="https://www.crmfrontier.com/contact-us/" />
                <meta property="og:site_name" content="CRM Frontier " />
                <meta property="og:image" content="https://www.crmfrontier.com/img/feature/Homepage.jpg" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="og:image:type" content="image/jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@CrmforcePlus" />
                <meta name="twitter:title" content="Contact Us CRM Frontier  for Salesforce CRM Advice" />
                <meta name="twitter:description" content="Contact Us to CRM Frontier for expert Salesforce CRM advice. Our team offers tailored solutions to optimize your business processes and enhance customer relationships." />
                <meta name="twitter:image" content="https://www.crmfrontier.com/img/feature/Homepage.jpg" />
            </Head>
            <section className="hero">
                <div id="hero"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Get in Touch with Us</h1>
                                <p>Looking for Salesforce experts? We are just a call away to help you out in every possible way.<br /> Reach out anytime—we're ready to help!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='m-t-m-240'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-11'>
                            <div className='form-two'>
                                <ContactUSForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="heading-style-one">
                                <span>Why Choose  Us</span>
                                <h2>Our customer-centric approach empowers you to attain great customer satisfaction with superior results</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='box-icon-box box-icon-box-center'>
                                <Image src="/img/icons/Group-1.png" alt="Tailored Solutions" width={64} height={64} />
                                <h3>Tailored Solutions</h3>
                                <p>Customized offerings to meet your unique needs.</p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='box-icon-box box-icon-box-center'>
                                <Image src="/img/icons/Group-2.png" alt="Exceptional Support" width={64} height={64} />
                                <h3>Proven Track Records</h3>
                                <p>Helped businesses achieve great results.</p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='box-icon-box box-icon-box-center'>
                                <Image src="/img/icons/Group-3.png" alt="Proven Results" width={64} height={64} />
                                <h3>Certified Experts</h3>
                                <p>Unlock Salesforce potential with professionals. </p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='box-icon-box box-icon-box-center'>
                                <Image src="/img/icons/Group-4.png" alt="Expertise and Innovation" width={64} height={64} />
                                <h3>Tailored Solutions</h3>
                                <p>Acquire your personalized solution today!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactUs;
