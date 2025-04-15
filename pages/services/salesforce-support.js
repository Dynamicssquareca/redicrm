import React, { useRef, useState } from 'react';
import ModelBox from '@/components/ModelBox';
import Image from 'next/image';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import Head from 'next/head';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';



const SupportPage = () => {

    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(true);
    };

    const slideStyle = {
        transition: 'transform 0.5s ease',
        transform: showAll ? 'translateX(0)' : 'translateX(-100%)',
    };


    /*accordain coed*/
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };


    return (
        <>
            <Head>
                <title>Salesforce Support Services | CRM Frontier </title>
                <meta
                    name="description"
                    content="Get expert Salesforce support services to optimize your CRM performance, improve user experience, and streamline business operations with tailored solutions."
                />
                <link rel="canonical" href="https://www.crmforceplus.com/services/salesforce-support/" />
                <meta property="og:locale" content="US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Salesforce Support Services | CRM Frontier" />
                <meta property="og:description" content="Get expert Salesforce support services to optimize your CRM performance, improve user experience, and streamline business operations with tailored solutions." />
                <meta property="og:url" content="https://www.crmforceplus.com/services/salesforce-support/" />
                <meta property="og:site_name" content="CRM Frontier " />
                <meta property="og:image" content="https://www.crmforceplus.com/img/feature/Support.jpg" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="og:image:type" content="image/jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@CrmforcePlus" />
                <meta name="twitter:title" content="Salesforce Support Services | CRM Frontier" />
                <meta name="twitter:description" content="Get expert Salesforce support services to optimize your CRM performance, improve user experience, and streamline business operations with tailored solutions." />
                <meta name="twitter:image" content="https://www.crmforceplus.com/img/feature/Support.jpg" />
            </Head>
            <div className='hero-banner-two height-auto'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Get Unwavering Salesforce Support Service with CRMForce+</h1>
                                <p>Keep your Salesforce environment running smoothly with 24/7 expert support.</p>
                                <ModelBox headerText="Get a Free Demo" buttonText="Contact for Support!" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className="elementor-background-default">
                        <Image src="/img/banner/customization-and-integration-banner.png" className='bg-defult' alt="customization-and-integration-banner" width={1920} height={314} priority />
                    </div>
                </div>
            </div>

            <section className='bg-wss'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                {/* <span>Features of Salesforce Sales Cloud</span> */}
                                <h2>Ensure Peak Performance: Receive Continuous Salesforce Support Services</h2>
                                <p>If you come across any disruptions in your Salesforce ecosystem, then premier Salesforce support services at CRMForce+ are for you. We are a renowned Salesforce support provider, giving assistance with aspects like system errors, broken functionality, user access issues, data problems, and configuration problems. </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/proven-expertise-icon.png" alt="proven-expertise-icon" width={65} height={65} />
                                <h3>Expert Team</h3>
                                <p>Our team consists of certified professionals with years of hands-on experience who provide premier Salesforce support.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/Custom-Fit-Approach-icon.png" alt="Custom-Fit-Approach-icon" width={65} height={65} />
                                <h3>Rapid Response</h3>
                                <p>We understand the urgency of Salesforce disruptions. Our team works quickly to resolve issues with minimal impact on your operations.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/Seamless-Integrations-icon.png" alt="Seamless-Integrations-icon" width={65} height={65} />
                                <h3>Continuous Availability</h3>
                                <p>With 24/7 Salesforce support services, you can rest assured that help is always available whenever you need it.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className=''>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                {/* <span>Sales Product</span> */}
                                <h2>Our Salesforce Support Services</h2>
                                <p>We provide a range of Salesforce support services, ensuring our clients can make the best use of their Salesforce system.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-stretch">
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>System Error Resolution </h3>
                                <p>Our Salesforce support and maintenance services quickly diagnose and resolve issues that foster downtime & hinder seamless user experience.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Functionality Repair </h3>
                                <p>When Salesforce functionality is compromised, our experts step in to fix broken features, restore operations, and enhance performance to meet your business needs.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>User Access Management </h3>
                                <p>CRMForce+, a renowned Salesforce partner support, ensures your users have the right access levels, helping prevent security breaches and access-related problems.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Data Integrity and Management </h3>
                                <p>Data is the backbone of Salesforce. We assist with data migration, cleaning, and deduplication and ensure that your data is accurate, secure, and easily accessible.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Configuration Assistance </h3>
                                <p>Our team provides expert Salesforce CRM technical support customization, integration, and configuration & ensures that Salesforce is fully optimized for your organization.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>



            <section className='bg-grey p-top-60'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 align-self-center'>
                            <div className="heading-style-two">
                                <h2>Why Choose CRMForce+ for Salesforce Support Services?</h2>
                                <p>CRMForce+ is always ready to assist, ensuring your Salesforce instance stays operational at all times.  We take care of every nitty-gritty of your Salesforce ecosystem and provide support that can instantly resolve the existing issue.</p>
                                <div className='p-t-15'><a className="btn btn-prime" href='/contact-us/'>Schedule a Free Demo!</a></div>
                            </div>
                        </div>
                        <div className='col-lg-7'>
                            <div className='row'>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Tailored Solutions</h4>
                                            <p>We provide solutions that are specifically customized to your business, ensuring Salesforce works for you, not the other way around.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Scalable Services</h4>
                                            <p>Whether you need ongoing support or help with a one-time issue, we offer flexible service plans to suit your needs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>24/7 Support </h4>
                                            <p>No matter when issues arise, CRMForce+ provides continuous support around the clock. </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='cta'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 align-self-center'>
                            <Image src="/img/icons/custmization-integration-cta.png" alt="custmization-integration-cta.png" width={346} height={247} priority />
                        </div>
                        <div className='col-lg-7 align-self-center'>
                            <div className='cta-content'>
                                <h3>Invest in Your Team's Success</h3>
                                <p>Need Salesforce Support? Contact CRMForce+ today!</p>
                                <ModelBox headerText="Schedule a Free Call" buttonText="Contact Salesforce Experts Now!" />
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
                                <span>FAQ</span>
                                {/* <h2>FAQ</h2> */}
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='accordion-one'>
                                <Accordion open={open} toggle={toggle}>
                                    <AccordionItem>
                                        <AccordionHeader targetId="1">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>How can I contact a Salesforce customer support partner? </h3>
                                                <span className={`icon ${open === '1' ? 'open' : 'closed'}`}>
                                                    {open === '1' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            <p>You can reach out to CRMForce+ at <b>+1 213 438 9925</b>, or you can mail us at <b>info@crmforceplus.com</b>. Our team would be happy to assist you.</p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="2">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>What is the Salesforce Support Case process?</h3>
                                                <span className={`icon ${open === '2' ? 'open' : 'closed'}`}>
                                                    {open === '2' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="2">
                                            <p>Salesforce offers three main support plans, known as Success Plans, to help customers get the most out of their Salesforce investment.  </p>
                                            <ul>
                                                <li>Standard Success Plan</li>
                                                <li>Premier Success Plan</li>
                                                <li>Signature Success Plan</li>
                                            </ul>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="2">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>Can I track my Salesforce support tickets?</h3>
                                                <span className={`icon ${open === '3' ? 'open' : 'closed'}`}>
                                                    {open === '3' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="3">
                                            <p>Our team of professional experts brings their expertise to the table and enables the tracking of Salesforce support tickets.</p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="4">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>How do I escalate a Salesforce support case?</h3>
                                                <span className={`icon ${open === '4' ? 'open' : 'closed'}`}>
                                                    {open === '4' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="4">
                                            <p>It is a complex process that requires a team of experts. We at CRMForce+ help you get this work seamlessly.  </p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="5">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>Do you provide on-site support or consulting?</h3>
                                                <span className={`icon ${open === '5' ? 'open' : 'closed'}`}>
                                                    {open === '5' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="5">
                                            <p>Yes, Salesforce provides both on-site support and consulting services through our Professional Services and a network of certified consulting partners.</p>
                                        </AccordionBody>
                                    </AccordionItem>


                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}

export default SupportPage;
