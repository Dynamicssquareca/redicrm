import React, { useRef, useState } from 'react';
import ModelBox from '@/components/ModelBox';
import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination, Autoplay } from 'swiper/modules';
import Head from 'next/head';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, } from 'reactstrap';

const ServiceCloud = () => {

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
                <title>Salesforce Service Cloud | CRM Frontier</title>
                <meta
                    name="description"
                    content="Boost customer satisfaction with Salesforce Service Cloud. Streamline support, automate workflows, and deliver personalized experiences. Contact us today!"
                />
                <link
                    rel="canonical"
                    href="https://www.crmforceplus.com/solutions/salesforce-service-cloud/"
                />
                <meta property="og:locale" content="US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Salesforce Service Cloud | CRM Frontier" />
                <meta property="og:description" content="Boost customer satisfaction with Salesforce Service Cloud. Streamline support, automate workflows, and deliver personalized experiences. Contact us today!" />
                <meta property="og:url" content="https://www.crmforceplus.com/solutions/salesforce-service-cloud/" />
                <meta property="og:site_name" content="CRM Frontier " />
                <meta property="og:image" content="https://www.crmforceplus.com/img/feature/service-cloud.jpg" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="og:image:type" content="image/jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@CrmforcePlus" />
                <meta name="twitter:title" content="Salesforce Service Cloud | CRM Frontier" />
                <meta name="twitter:description" content="Boost customer satisfaction with Salesforce Service Cloud. Streamline support, automate workflows, and deliver personalized experiences. Contact us today!" />
                <meta name="twitter:image" content="https://www.crmforceplus.com/img/feature/service-cloud.jpg" />
            </Head>
            <div className='hero-banner-two hero-banner-two-pd-40'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Transform your Customer Experience with Salesforce <span>Service Cloud</span></h1>
                                <p>Increase customer retention by providing personalized support with our tailored Salesforce Service Cloud solutions.</p>
                                <ModelBox headerText="Get a Free Demo" buttonText="Request a Free Demo" />
                            </div>
                        </div>
                    </div>
                    <div className='row desk-banner-hide'>
                        <div className="elementor-background-overlay">

                            <Image src="/img/banner/service-cloud-banner-new.png" className='bg-mid' alt="service-cloud-banner-new" width={932} height={278} priority />
                            <Image src="/img/icons/cloud-hero-bg.png" alt='cloud-hero-bg' className='bg-top' width={434} height={313} priority />
                            <Image src="/img/banner/solution-banner-bg-1.png" className='bg-back' alt="solution-banner-bg-1" width={1696} height={298} priority />
                        </div>
                    </div>
                </div>

            </div>


            <section className='mobile-banner-hide text-center'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <Image src="/img/banner/service-cloud-banner-mobile.png" className='bg-mid' alt="service-cloud-banner-mobile" width={628} height={407} priority />
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-w'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                <span>Key Features of Salesforce Service Cloud</span>
                                <h2>Empower Agents & Foster utmost Customer Satisfaction with Salesforce Service Cloud Features  </h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div className='row d-flex align-items-stretch'>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>360° Customer View </h3>
                                        <p>Access a unified view of customer data, interactions, and history through Salesforce service cloud features. </p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Omnichannel Routing </h3>
                                        <p>Provide seamless customer support across multi-channel from a single platform via the Salesforce Service Cloud data model. </p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Quality Customer Support </h3>
                                        <p>The Salesforce Service Cloud Voice support feature is designed to streamline customer service. </p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Improved Customer Satisfaction </h3>
                                        <p>Salesforce Service Cloud features leverage AR for effective customer service. </p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Customer Satisfaction Tracking </h3>
                                        <p>Turn feedback into priorities to measure sentiment and refine your service. </p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Faster Resolutions </h3>
                                        <p>Leverage the power of Salesforce CRM Service Cloud AI and resolve issues in a speedy manner.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-3 align-self-center'>
                            <div className='right-service-img'>
                                <Image src="/img/section/service-cloud-side.png" alt="service-cloud-side" width={301} height={166} />
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
                                <span>Service Cloud Products</span>
                                <h2>Power up the Customer Experience with different Service Cloud Products </h2>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-stretch">
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Customer Service AI</h3>
                                <p>Leverage the power of Salesforce CRM Service Cloud AI to offer intelligent and personalized service for better output. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Data-Driven Service</h3>
                                <p>Empower data to guide service executives throughout the customer service cycle and optimize strategies. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Field Service </h3>
                                <p>Empower your mobile workforce to streamline field operations and delight on-site customers. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Self-Service</h3>
                                <p>Offer self-service tools to your customers so that they can find solutions on their own terms. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex m-d-none ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill ">
                                <h3>Contact Center</h3>
                                <p>Unify your interactions to deliver seamless service across all communication channels. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Digital Engagement</h3>
                                <p>Engage customers from everywhere to connect and build relationships in the digital age. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Visual Remote Assistant</h3>
                                <p>View the customer issue in real-time to empower agents with live visuals for faster issue resolutions. </p>
                            </div>
                        </div>
                        {!showAll && (
                            <div className="col-lg-3 d-flex">
                                <div className="service-box-three flex-fill custom-anc bg-gradiant" onClick={handleShowAll}>
                                    <div className="text-center">
                                        <a>See all Products</a>
                                    </div>
                                </div>
                            </div>
                        )}
                        {showAll && (
                            <>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill bg-gradiant">
                                        <h3>Customer Service AI</h3>
                                        <p>Leverage the power of Salesforce CRM Service Cloud AI to offer intelligent and personalized service for better output. </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill">
                                        <h3>Data-Driven Service</h3>
                                        <p>Empower data to guide service executives throughout the customer service cycle and optimize strategies. </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill bg-gradiant">
                                        <h3>Field Service </h3>
                                        <p>Empower your mobile workforce to streamline field operations and delight on-site customers. </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill">
                                        <h3>Self-Service</h3>
                                        <p>Offer self-service tools to your customers so that they can find solutions on their own terms. </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill ">
                                        <h3>Contact Center</h3>
                                        <p>Unify your interactions to deliver seamless service across all communication channels. </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill bg-gradiant">
                                        <h3>Digital Engagement</h3>
                                        <p>Engage customers from everywhere to connect and build relationships in the digital age. </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill">
                                        <h3>Visual Remote Assistant</h3>
                                        <p>View the customer issue in real-time to empower agents with live visuals for faster issue resolutions. </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill bg-gradiant">
                                        <h3>Customer Service Automation </h3>
                                        <p>Streamline your service delivery to automate routine tasks and free agents for high-touch interactions. </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill">
                                        <h3>Einstein Bots </h3>
                                        <p>Answer questions with Salesforce CRM Service Cloud AI and experience personalized customer journeys. </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill bg-gradiant">
                                        <h3>Customer Service Incident Management </h3>
                                        <p>Resolve issues efficiently to track, prioritize, and collaborate to get things back on track. </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill">
                                        <h3>Intelligent Service Operations </h3>
                                        <p>Transform service delivery utilizing data and AI for intelligent automation and problem-solving. </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill">
                                        <h3>Service Cloud Voice </h3>
                                        <p>Elevate your phone support to deliver a seamless voice experience with integrated features. </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill bg-gradiant">
                                        <h3>Service Cloud for Slack </h3>
                                        <p>Boost collaboration to integrate Salesforce Service Cloud with Slack for faster issue resolution. </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill">
                                        <h3>Employee Service </h3>
                                        <p>Empower your team to streamline internal service requests and boost employee satisfaction. </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill bg-gradiant">
                                        <h3>CRM Analytics </h3>
                                        <p>Turn customer data into insights to uncover trends, measure performance, and optimize your service strategy. </p>
                                    </div>
                                </div>

                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill bg-gradiant">
                                        <h3>Einstein Bots</h3>
                                        <p>Get AI-powered assistants that answer questions, deflect tickets, and personalize customer journeys.</p>
                                    </div>
                                </div>





                            </>
                        )}
                    </div>

                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                <span>Benefits of Salesforce Sales Cloud</span>
                                <h2>Boost Efficiency, Automate Operations, and Deliver more with Salesforce Service Cloud </h2>
                            </div>
                        </div>
                    </div>

                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/Effortless-Customer-icon-new.png" alt="Increased Agent Productivity " width={65} height={65} />
                                <h3>Increased Agent <br />Productivity  </h3>
                                <p>Boost agent productivity with our Salesforce-certified Service Cloud Consultant. </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/Faster-Issue-Resolution-icon.png" alt="Improved Customer Satisfaction " width={65} height={65} />
                                <h3>Improved Customer <br />Satisfaction </h3>
                                <p>Salesforce service cloud features foster proactive case management, bringing a better support experience. </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/Happier-Agents-icon.png" alt="Drive Efficiency " width={65} height={65} />
                                <h3>Drive <br />Efficiency </h3>
                                <p>Streamline your customer service processes, automate repetitive tasks, and reduce manual work. </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/Data-Driven-Decisions-icon.png" alt="Data-Driven-Decisions-icon" width={65} height={65} />
                                <h3>Data-Driven Decisions for Better Service </h3>
                                <p>Supercharge your service performance with valuable insights through comprehensive CRM features. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='cta'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 align-self-center'>
                            <Image src="/img/section/soluion-cta-pic.png" alt="soluion-cta-pic.png" width={346} height={247} priority />
                        </div>
                        <div className='col-lg-7 align-self-center'>
                            <div className='cta-content'>
                                <h3>Future-Proof Your Customer Experience with a Salesforce Service Cloud Implementation </h3>
                                <p>Contact CRMForce+ to implement a Salesforce Service Cloud solution that perfectly aligns with your business. </p>
                                <ModelBox headerText="Schedule a Free Salesforce Demo Now! " buttonText="Schedule a Free Salesforce Demo Now! " />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="heading-style-two">
                                <span>How CRMForce + can help you?</span>
                                <h2>Fuel your Business with Salesforce Service Cloud - your Gateway to Unlock Growth </h2>
                            </div>
                        </div>
                    </div>

                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/seamless-implementation-icon.png" alt="seamless-implementation-icon" width={65} height={65} />
                                <h3>Tailored Approach</h3>
                                <p>Our experienced Salesforce Service Cloud Consultant understands your requirements and configures whether it aligns with your business uniqueness.  </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/End-to-End-Support-icon.png" alt="End-to-End-Support-icon" width={65} height={65} />
                                <h3>End-to-End Support </h3>
                                <p>We will monitor your performance and provide data-driven recommendations for process optimization to ensure best-in-class support. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/Clear-Communication-icon.png" alt="Clear-Communication-icon" width={65} height={65} />
                                <h3>Clear Communication & Transparency </h3>
                                <p>Clear communication is the backbone of transparency and strategic decisions. Our Salesforce Service Cloud implementation experts keep you informed at every step. </p>
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
                                <span>Pricing</span>
                                <h2>Salesforce Small Business Pricing</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-lg-4 col-md-6 d-flex'>
                            <div className='pricing-box'>
                                <div className='pricing-box-header'>
                                    <h3>Starter Suite</h3>
                                </div>
                                <div className='pricing-box-body'>
                                    <h4>$25</h4>
                                    <span className='mon'>User/Month</span>
                                    <span className='bill'>(Starting price. Transaction fees apply. Billed monthly or annually.)</span>
                                    <p>The simple CRM suite with marketing, sales, service and commerce.</p>
                                    <ul>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Dynamic Email Marketing and Analytics</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Out-of-the-box Sales Processes</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Seamless Customer Service</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Simplified Shop Front Builder</span></li>
                                    </ul>
                                </div>
                                <div className='pricing-box-footer'>
                                    <ModelBox headerText="Get a Free Demo" className="my-custom-class" buttonText="Get In Touch" />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 d-flex'>
                            <div className='pricing-box'>
                                <div className='pricing-box-header'>
                                    <h3>Pro Suite</h3>
                                </div>
                                <div className='pricing-box-body'>
                                    <h4>$100</h4>
                                    <span className='mon'>User/Month</span>
                                    <span className='bill'>(Starting price. Transaction fees apply. Billed annually. Contract required.)</span>
                                    <p>The flexible CRM suite with even more marketing, sales, service, and commerce tools.</p>
                                    <ul>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Everything in Starter plus Enhanced, Real-Time Chat</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Greater Customisation and Automation</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Sales Quoting and Forecasting</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Access to AppExchange</span></li>

                                    </ul>
                                </div>
                                <div className='pricing-box-footer'>
                                    <ModelBox headerText="Get a Free Demo" className="my-custom-class" buttonText="Get In Touch" />
                                </div>
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
                                <span>Pricing</span>
                                <h2>Salesforce Service Cloud Pricing</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 d-flex'>
                            <div className='pricing-box'>
                                <div className='pricing-box-header'>
                                    <h3>Starter Suite</h3>
                                </div>
                                <div className='pricing-box-body'>
                                    <h4>$25</h4>
                                    <span className='mon'>User/Month</span>
                                    <span className='bill'>(billed annually)</span>
                                    <p>The simple CRM suite for marketing, sales, service, and commerce.</p>
                                    <ul>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Case Management</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Customizable Reports & Dashboards</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Knowledge Base</span></li>

                                    </ul>
                                </div>
                                <div className='pricing-box-footer'>
                                    <ModelBox headerText="Get a Free Demo" className="my-custom-class" buttonText="Get In Touch" />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 d-flex'>
                            <div className='pricing-box'>
                                <div className='pricing-box-header'>
                                    <h3>Pro Suite</h3>
                                </div>
                                <div className='pricing-box-body'>
                                    <h4>$100</h4>
                                    <span className='mon'>User/Month</span>
                                    <span className='bill'>(Billed annually)</span>
                                    <p>The flexible CRM suite with even more marketing, sales, service, and commerce tools.</p>
                                    <ul>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Greater Customization and Automation</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Sales Quoting and Forecasting</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Sales Quoting and Forecasting</span></li>
                                    </ul>
                                </div>
                                <div className='pricing-box-footer'>
                                    <ModelBox headerText="Get a Free Demo" className="my-custom-class" buttonText="Get In Touch" />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 d-flex'>
                            <div className='pricing-box'>
                                <div className='pricing-box-header'>
                                    <h3>Enterprise</h3>
                                </div>
                                <div className='pricing-box-body'>
                                    <h4>$165</h4>
                                    <span className='mon'>User/Month</span>
                                    <span className='bill'>(Billed annually)</span>
                                    <p>The CRM for service with built-in AI.</p>
                                    <ul>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>AI for Customer Service</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Self-Service Help Centre</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Workflow Automation</span></li>
                                    </ul>
                                </div>
                                <div className='pricing-box-footer'>
                                    <ModelBox headerText="Get a Free Demo" className="my-custom-class" buttonText="Get In Touch" />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 d-flex'>
                            <div className='pricing-box'>
                                <div className='pricing-box-header'>
                                    <h3>Unlimited</h3>
                                </div>
                                <div className='pricing-box-body'>
                                    <h4>$330</h4>
                                    <span className='mon'>User/Month</span>
                                    <span className='bill'>(Billed annually)</span>
                                    <p>The CRM for service with chat and 24/7 support.</p>
                                    <ul>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>24/7/365 support</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>AI-powered Chatbots</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Chat</span></li>
                                    </ul>
                                </div>
                                <div className='pricing-box-footer'>
                                    <ModelBox headerText="Get a Free Demo" className="my-custom-class" buttonText="Get In Touch" />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 d-flex'>
                            <div className='pricing-box'>
                                <div className='pricing-box-header'>
                                    <h3>Einstein 1 Service</h3>
                                </div>
                                <div className='pricing-box-body'>
                                    <h4>$500</h4>
                                    <span className='mon'>User/Month</span>
                                    <span className='bill'>(Billed annually)</span>
                                    <p>The best Salesforce for Service with trusted AI & Data.</p>
                                    <ul>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Everything in Unlimited plus Digital Channels, Service Intelligence, and Slack</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Einstein Copilot (Beta) powered by generative AI</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Data Cloud</span></li>
                                    </ul>
                                </div>
                                <div className='pricing-box-footer'>
                                    <ModelBox headerText="Get a Free Demo" className="my-custom-class" buttonText="Get In Touch" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section>
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="heading-style-one">
                                <span>Customer Stories</span>
                                <h2>Real Results, Real Customers: How Service Cloud Transformed Businesses</h2>
                                <p>See how businesses like yours leveraged Service Cloud to achieve remarkable results. </p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='slider-one'>
                                <Swiper
                                    spaceBetween={30}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: true,
                                    }}

                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 1,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 2,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    modules={[Pagination, Autoplay]}
                                    className="mySwiper"
                                >

                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Air India Takes Flight with Salesforce: A 360° View for World-Class Customer Service</h4>
                                            <p>Air India, aiming for 30% market share, tackled data silos hindering customer service. Salesforce Data Cloud unified customer data, giving agents a 360° view. Einstein 1 Service then routed cases and offered AI-powered recommendations, boosting efficiency. This partnership empowers Air India to deliver world-class service and personalize experiences.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Improved customer service by 30%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Enabled automation by 40%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Mascoma Bank Unifies Data, Boosts Efficiency with Salesforce Service Cloud</h4>
                                            <p>Salesforce Data Cloud unified data from 66 systems, giving a 360° customer view. Financial Services Cloud and CRM Analytics personalized interactions and boosted upselling. Automated workflows streamlined processes, and Service Cloud Voice improved phone support. Mascoma Bank now offers proactive service, faster loan processing, and data-driven marketing.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Reduced call center hold times by 98%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Increased operational efficiency by 40%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Algo Speeds Up Service Cloud with AI and Cuts Resolution Times by 80%</h4>
                                            <p>The rapid growth led to an influx of technical cases, overwhelming Algo's service agents. The Service Cloud implementation promotes the usage of AI-powered features to streamline workflows and empower agents. New agents were onboarded quickly with 90% AI support accuracy, allowing them to handle complex inquiries. </p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Reduced resolution times by 80%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Improved agent response speed by 67%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Iron Mountain Speeds Up Service with Service Cloud AI</h4>
                                            <p>Manual processes and scattered information hampered Iron Mountain's customer support. The implementation enables them to access generative AI based automated replies with knowledge base links. Einstein Work summaries and predictive Article predictive  further boosted agent productivity. They have achieved faster case resolution, and a reduced backlog of inquiries.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Increased the cases closing by 80%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Chat abandoned rate decreased by 80%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>George Mason Streamlines Student Support with Service Cloud</h4>
                                            <p>Disconnected services and a lack of student data hindered personalized support at George Mason University. Service Cloud implementation created a central hub for student services, providing a unified view of each student's needs. Real-time data allowed staff to address issues and offer support. It increased student satisfaction and improved recruitment efforts with targeted outreach.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>High school applications have increased by 9%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Student cases are now resolved on the spot by 90%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Turtle Bay Resort Tailors Guest Experiences with the Service Cloud</h4>
                                            <p>Limited data made it difficult for Turtle Bay Resort to personalize guest experiences and recommend ideal activities. The implementation led them to access Service Cloud, Data Cloud, and Einstein 1 features with a 360-degree view of guests.  Einstein 1 Marketing sent personalized email campaigns, while a custom AI model identified guest preferences.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Increases booking conversions by 20%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Repeat bookings are increased by 15%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section>
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="heading-style-one">
                                <span>Pricing</span>
                                <h2>Contact us for tailored pricing options <br /> that suit your needs perfectly</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


        </>
    );
}

export default ServiceCloud;
