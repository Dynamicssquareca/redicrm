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



const Integration = () => {

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
                <title>Salesforce Integration Services | CRM Frontier</title>
                <meta
                    name="description"
                    content="Enhance your business efficiency with Salesforce integration services. Integrate CRM, automate workflows, and streamline operations for seamless growth and efficiency."
                />
                <link rel="canonical" href="https://www.crmforceplus.com/services/salesforce-integration/" />
                <meta property="og:locale" content="US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Salesforce Integration Services | CRM Frontier" />
                <meta property="og:description" content="Enhance your business efficiency with Salesforce integration services. Integrate CRM, automate workflows, and streamline operations for seamless growth and efficiency." />
                <meta property="og:url" content="https://www.crmforceplus.com/services/salesforce-integration/" />
                <meta property="og:site_name" content="CRM Frontier " />
                <meta property="og:image" content="https://www.crmforceplus.com/img/feature/Integration.jpg" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="og:image:type" content="image/jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@CrmforcePlus" />
                <meta name="twitter:title" content="Salesforce Integration Services | CRM Frontier" />
                <meta name="twitter:description" content="Enhance your business efficiency with Salesforce integration services. Integrate CRM, automate workflows, and streamline operations for seamless growth and efficiency." />
                <meta name="twitter:image" content="https://www.crmforceplus.com/img/feature/Integration.jpg" />
            </Head>
            <div className='hero-banner-two height-auto'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Boost Productivity & Enhance Collaboration with Leading Salesforce Integration Partner </h1>
                                <p>CRMForce+ Your Reliable Partner in Gaining End-to-end Visibility </p>
                                <ModelBox headerText="Get a Free Demo" buttonText="Schedule a Consultation Call" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className="elementor-background-default">
                        <Image src="/img/banner/integration-salesforce.png" className='bg-defult' alt="customization-and-integration-banner" width={2010} height={315} priority />
                    </div>
                </div>
            </div>

            <section className='bg-wss'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                {/* <span>Features of Salesforce Sales Cloud</span> */}
                                <h2>Unify Your Business Process with Salesforce Integration Services </h2>
                                <p>CRMForce+, a Salesforce integration partner, bridges the gap between Salesforce and your critical business tools. Whether you need to connect Salesforce with enterprise systems, external applications, or custom-built platforms, we ensure a seamless and efficient integration process tailored to your unique business needs. </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/proven-expertise-icon.png" alt="proven-expertise-icon" width={65} height={65} />
                                <h3>Certified Salesforce Experts </h3>
                                <p>Our team comprises certified Salesforce developers and consultants with years of experience delivering successful integrations across industries. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/Custom-Fit-Approach-icon.png" alt="Custom-Fit-Approach-icon" width={65} height={65} />
                                <h3>Customized Approach</h3>
                                <p>We provide tailored integration solutions for your business, with expert knowledge in API, MuleSoft, and Salesforce integration methods. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/Seamless-Integrations-icon.png" alt="Seamless-Integrations-icon" width={65} height={65} />
                                <h3>Proven Track Record </h3>
                                <p>With a portfolio of successful Salesforce integration, we are trusted by businesses across sectors to deliver impactful results. </p>
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
                                <h2>Salesforce Integration Services We Offer </h2>
                                <p>CRMForce+, an experienced Salesforce integration consulting company, provides different types of Salesforce integration services, eliminating data silos and fostering enhanced workflows. </p>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-stretch">
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Salesforce API Integration </h3>
                                <p>Exchange data, automate workflows, and enhance functionality with our leading Salesforce integration consulting experts. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Backend Integration </h3>
                                <p>Deliver exceptional customer service with a custom-built Service Cloud and flawless integrations. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>User Interface Integration </h3>
                                <p>Enhance user experience and get a unified interface for accessing and managing data from multiple sources. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Data Integration </h3>
                                <p>Create a single source of truth and gain a 360 degree-view of your customer journey or foster collaboration. </p>
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
                                <h2>Achieve Operational Harmony: Choose CRMForce+ for Salesforce Integration </h2>
                                <p>We offer more than just technical expertise; we bring a strategic methodology, extensive industry knowledge, and commitment to your success. </p>
                                <div className='p-t-15'><a className="btn btn-prime" href='/contact-us/'>Upgrade Your Salesforce Now!</a></div>
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
                                            <h4>Certified Salesforce Experts </h4>
                                            <p>Our team comprises certified Salesforce developers and consultants with more than 14 years of experience delivering successful integrations across industries. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Seamless Integration </h4>
                                            <p>We offer end-to-end integration that helps you gain comprehensive visibility among the workflows prevalent in different departments. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Comprehensive Solutions </h4>
                                            <p>We help you unlock the full potential of Salesforce by integrating it with your existing systems, enabling smoother workflows and smarter data utilization. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Training and Support </h4>
                                            <p>We provide thorough training to your team and offer ongoing support to ensure the integration continues to meet your evolving needs. </p>
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
                                <h3>Get a Free Consultation for Your Salesforce Integration Needs
                                </h3>
                                <ModelBox headerText="Schedule a Free Call" buttonText="Talk to Our Salesforce Expert! " />
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
                                                <h3>What is the need for Salesforce integration services? </h3>
                                                <span className={`icon ${open === '1' ? 'open' : 'closed'}`}>
                                                    {open === '1' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            <p>Salesforce integration services are a way to enhance operational harmony by fostering data synchronization and improved collaboration among the various business processes. </p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="2">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>How long does it take to implement Salesforce integration? </h3>
                                                <span className={`icon ${open === '2' ? 'open' : 'closed'}`}>
                                                    {open === '2' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="2">
                                            <p>The timeline for Salesforce integration depends on the complexity and scope of your project. Our team of certified staff do the strategic analysis of your existing workflows and provides a detailed timeline. </p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="3">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>Do you provide secure Salesforce integration services? </h3>
                                                <span className={`icon ${open === '3' ? 'open' : 'closed'}`}>
                                                    {open === '3' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="3">
                                            <p>Yes, we provide secured integration services by adhering to the standard security protocols. </p>
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

export default Integration;
