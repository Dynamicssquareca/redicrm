import React, { useRef, useState } from 'react';
import ModelBox from '@/components/ModelBox';
import Image from 'next/image';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Head from 'next/head';

const CommerceCloud = () => {

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
                <title>Salesforce Commerce Cloud | CRM Frontier</title>
                <meta
                    name="description"
                    content="Enhance your online sales with Salesforce Commerce Cloud. Deliver personalized shopping experiences, streamline operations, and grow your eCommerce business. "
                />
                <link rel="canonical" href="https://www.crmforceplus.com/solutions/salesforce-commerce-cloud/" />
                <meta property="og:locale" content="US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Salesforce Commerce Cloud | CRM Frontier" />
                <meta property="og:description" content="Enhance your online sales with Salesforce Commerce Cloud. Deliver personalized shopping experiences, streamline operations, and grow your eCommerce business." />
                <meta property="og:url" content="https://www.crmforceplus.com/solutions/salesforce-commerce-cloud/" />
                <meta property="og:site_name" content="CRM Frontier " />
                <meta property="og:image" content="https://www.crmforceplus.com/img/feature/ecommerce.jpg" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="og:image:type" content="image/jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@CrmforcePlus" />
                <meta name="twitter:title" content="Salesforce Commerce Cloud | CRM Frontier" />
                <meta name="twitter:description" content="Enhance your online sales with Salesforce Commerce Cloud. Deliver personalized shopping experiences, streamline operations, and grow your eCommerce business." />
                <meta name="twitter:image" content="https://www.crmforceplus.com/img/feature/ecommerce.jpg" />
            </Head>
            <div className='hero-banner-two hero-banner-two-pd-40'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Salesforce Commerce Cloud: Transforming the Future of <span>eCommerce</span> </h1>
                                <p>Take charge of your online store and unlock the future of seamless shopping experiences with Salesforce Commerce Cloud. Empower your business to grow and thrive in the dynamic world of eCommerce</p>
                                <ModelBox headerText="Scale Your Store! " buttonText="Scale Your Store! " />
                            </div>
                        </div>
                    </div>
                    <div className='row desk-banner-hide'>
                        <div className="elementor-background-overlay">

                            <Image src="/img/banner/Commerce-Cloud-banner.png" className='bg-mid' alt="Commerce-Cloud-banner" width={932} height={278} priority />
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
                            <Image src="/img/banner/Commerce-Cloud-banner-mobile.png" className='bg-mid' alt="Commerce-Cloud-banner-mobile" width={628} height={407} priority />
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-w'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                <span>Key Features of Salesforce Commerce Cloud </span>
                                <h2>Turn on Your Store for Growth: Features of Salesforce Commerce Cloud </h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div className='row d-flex align-items-stretch'>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Smooth Customer Journeys </h3>
                                        <p>Give each customer a unique shopping experience tailored to their needs. </p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Omnichannel Commerce </h3>
                                        <p>Integrate your online store with physical locations and other sales channels for a cohesive customer journey. </p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Agile Marketing Tools</h3>
                                        <p>Boost engagement with targeted promotions and campaigns. </p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Effortless Content Management </h3>
                                        <p>Update product information, images, and promotions easily with intuitive tools. </p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Scalable Inventory Management</h3>
                                        <p>Ensure smooth order fulfillment with accurate, multi-channel inventory tracking. </p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Powerful Order Management System</h3>
                                        <p>Deliver great customer service with automated workflows and real-time order tracking capabilities. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-3 align-self-center'>
                            <div className='right-service-img'>
                                <Image src="/img/icons/Commerce-Cloud-side-pic.png" alt="Commerce-Cloud-side-pic" width={257} height={166} />
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
                                <span>Salesforce Commerce Cloud Products</span>
                                <h2>Beyond the Platform: Harnessing the Capabilities of Commerce Cloud Products </h2>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-stretch">
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Storefront Templates </h3>
                                <p>Kickstart your store with ready-to-use templates or customize them for a unique experience. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Composable Storefronts </h3>
                                <p>Choose and combine features to build your ideal modular storefront. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Headless Commerce</h3>
                                <p>Offer frictionless shopping across devices, including apps and social platforms. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Order Management</h3>
                                <p>Automate workflows for fulfillment and real-time order tracking. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex m-d-none ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Web3 Commerce</h3>
                                <p>Accept cryptocurrency payments and explore new opportunities in digital commerce. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Pay Now</h3>
                                <p>Provide secure and seamless payment options for your customers. </p>
                            </div>
                        </div>
                        {/* <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Sales Programs</h3>
                                <p>Deploy sufficient resources using AI-powered coaching to maximize sales output.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Sales Analytics</h3>
                                <p>Get sales insights to simplify the sales pipeline and optimize different sales operations.</p>
                            </div>
                        </div> */}
                        {/* {!showAll && (
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
                                        <h3>Sales Engagement</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill">
                                        <h3>Sales Programs</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill bg-gradiant">
                                        <h3>Partner Relationship Management</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill">
                                        <h3>Sales Team Productivity</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill ">
                                        <h3>Buyer Engagement</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill bg-gradiant">
                                        <h3>Sales AI</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill">
                                        <h3>Sales Analytics</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill bg-gradiant">
                                        <h3>Sales AI</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill bg-gradiant">
                                        <h3>Sales Engagement</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill">
                                        <h3>Sales Programs</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill bg-gradiant">
                                        <h3>Partner Relationship Management</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action</p>
                                    </div>
                                </div>
                            </>
                        )} */}
                    </div>

                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                <span>Benefits of Salesforce Commerce Cloud</span>
                                <h2>Elevate Your E-commerce Game: The Compelling Benefits of Commerce Cloud </h2>
                            </div>
                        </div>
                    </div>

                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/Omnichannel-Excellence-icon.png" alt="Omnichannel-Excellence-icon" width={65} height={65} />
                                <h3>Omnichannel Excellence</h3>
                                <p>Helps offer consistent shopping experiences across mobile apps, websites, and physical stores. </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/Scalability-Agility-icon.png" alt="Scalability-Agility-icon" width={65} height={65} />
                                <h3>Scalability & Agility</h3>
                                <p>Helps grow your business with a platform designed to scale as your needs evolve. </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/Data-Driven-Insights-icon.png" alt="Data-Driven-Insights-icon" width={65} height={65} />
                                <h3>Data-Driven Insights</h3>
                                <p>Optimize marketing campaigns and strategies with actionable customer data and analytics. </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/Reduced -total-icon.png" alt="Reduced -total-icon" width={65} height={65} />
                                <h3>Reduced Total Cost of Ownership</h3>
                                <p>Streamline operations and reduce development costs with a cloud-based platform. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='cta'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 align-self-center'>
                            <Image src="/img/icons/commerce-cloud-cta.png" alt="commerce-cloud-cta.png" width={346} height={247} priority />
                        </div>
                        <div className='col-lg-7 align-self-center'>
                            <div className='cta-content'>
                                <h3>Thrive Beyond Limits: Redefine eCommerce with Salesforce Commerce Cloud </h3>
                                <p>Reimagine your online store and unlock limitless growth potential with Salesforce Commerce Cloud? Act now! </p>
                                <ModelBox headerText="Transform with Us! " buttonText="Transform with Us! " />
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
                                <span>How CRMforce+ Can Help You?</span>
                                <h2>Why Choose CRMForce+ for Your Salesforce Commerce Cloud Implementation? </h2>
                                {/* <p>We enable the Salesforce to work for you. Build relationships, transform the customer experience, and drive uninterrupted growth with our expert guidance.<br /><br />Don't settle for just a Salesforce partner. We deliver results. Our Salesforce experts combine experience, proven solutions, and advanced technology to harness the power of CRM and transform your business.</p> */}
                            </div>
                        </div>
                    </div>

                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/Deep-Expertise-icon.png" alt="Deep Expertise & Proven Results " width={65} height={65} />
                                <h3>Deep Expertise & Proven Results</h3>
                                <p>Work with certified Salesforce Commerce Cloud consultants, delivering successful projects. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/Streamlined-Implementation-Process-icon.png" alt="Streamlined Implementation Process " width={65} height={65} />
                                <h3>Streamlined Implementation Process</h3>
                                <p>With Salesforce Commerce Cloud implementation partners, you are sure to have a smooth deployment experience with solutions tailored to your business goals. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/Ongoing-Support-Optimization-icon.png" alt="Ongoing-Support-Optimization-icon" width={65} height={65} />
                                <h3>Ongoing Support & Optimization</h3>
                                <p>Leverage our support services to maximize the potential of your Salesforce Commerce Cloud solution. </p>
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
                                <h2>Salesforce Commerce Cloud Pricing</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 d-flex'>
                            <div className='pricing-box'>
                                <div className='pricing-box-header'>
                                    <h3>Starter<br /> Suite</h3>
                                </div>
                                <div className='pricing-box-body'>
                                    <h4>$25</h4>
                                    <span className='mon'>User/Month</span>
                                    <span className='bill'>(Starting price. Transaction fees apply. Billed monthly or annually.) </span>
                                    <p>The simple CRM suite with marketing, sales, service, and commerce. </p>
                                    <ul>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Dynamic Email Marketing and Analytics</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Out-of-the-box Sales Processes</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Seamless Customer Service</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Simplified Storefront Builder</span></li>

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
                                    <h3>Pro <br /> Suite </h3>
                                </div>
                                <div className='pricing-box-body'>
                                    <h4>$100 </h4>
                                    <span className='mon'>User/Month</span>
                                    <span className='bill'>(Starting price. Transaction fees apply. Billed annually. Contract required.) </span>
                                    <p>The flexible CRM suite with even more marketing, sales, service, and commerce tools. </p>
                                    <ul>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Everything in Starter plus Enhanced, Real-Time Chat </span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Greater Customization and Automation </span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Sales Quoting and Forecasting </span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Access to AppExchange </span></li>
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
                                    <h3>Commerce Cloud <br /> Pay-As-You-Go </h3>
                                </div>
                                <div className='pricing-box-body'>
                                    <h4>1% gross merchandise value </h4>
                                    <span className='mon'>USD/Org/Month</span>
                                    <span className='bill'>(Billed annually)</span>
                                    <p>Scale at your own pace and pay for only the sales you make. No upfront commitment required</p>
                                    <ul>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>6 D2C Storefronts </span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Order Management Lite </span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Payments </span></li>
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
                                                <h3>What does Salesforce Commerce Cloud do? </h3>
                                                <span className={`icon ${open === '1' ? 'open' : 'closed'}`}>
                                                    {open === '1' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            <p>With tools for personalized shopping, omnichannel integration, and easy order management, <b>Salesforce Commerce Cloud</b> helps businesses run and grow their online eCommerce stores. </p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="2">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>What are the components of Salesforce Commerce Cloud? </h3>
                                                <span className={`icon ${open === '2' ? 'open' : 'closed'}`}>
                                                    {open === '2' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="2">
                                            <p>Key components include <b>storefront templates, order management, headless commerce</b> capabilities, and tools for omnichannel and <b>Web3 commerce</b>. </p>

                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="3">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>What are the benefits of using an e-commerce platform? </h3>
                                                <span className={`icon ${open === '3' ? 'open' : 'closed'}`}>
                                                    {open === '3' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="3">
                                            <p>Some of the notable benefits are better operations, customer experiences, and decisions backed by real-time data in addition to more flexible infrastructure. </p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="4">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>Does my business need e-commerce software? </h3>
                                                <span className={`icon ${open === '4' ? 'open' : 'closed'}`}>
                                                    {open === '4' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="4">
                                            <p>Yes, if you want to use solutions like <b>Salesforce Commerce Cloud services</b> to run your online store more quickly, make the shopping experience better for customers, and boost sales. </p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="5">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>How do I choose the right e-commerce software? </h3>
                                                <span className={`icon ${open === '5' ? 'open' : 'closed'}`}>
                                                    {open === '5' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="5">
                                            <p>Evaluate your business needs, budget, scalability, and compatibility with your existing tools, such as Commerce Cloud Salesforce CRM. </p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="6">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>Is Salesforce Commerce Cloud the same as Demandware? </h3>
                                                <span className={`icon ${open === '6' ? 'open' : 'closed'}`}>
                                                    {open === '6' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="6">
                                            <p>Yes, <b>Salesforce Commerce Cloud</b> is the improved form of Demandware that combines features from Salesforce CRM to make it more useful. </p>
                                        </AccordionBody>
                                    </AccordionItem>

                                </Accordion>
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
                                <span>Case Stories</span>
                                <h2>From Clicks to Committed Customers: Salesforce Commerce Cloud Success Stories</h2>
                                <p>Dive into these case studies and discover how businesses of all sizes are leveraging Commerce Cloud to achieve success.</p>
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
                                        650: {
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

                                    <SwiperSlide className="d-flex">
                                        <div className='slider-one-inner flex-fill'>
                                            <h4>Duluth Trading Company Builds a Blazing-Fast Shopping Experience with Commerce Cloud</h4>
                                            <p>Duluth Trading Company, an online workwear retailer, needed to create a faster, more convenient online shopping experience for its customers. With Commerce Cloud implementation, they can now achieve a headless architecture that delivers an app-like experience on the web. This eliminated the need for a separate mobile app and boosted site speed by a full second.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Increased brand sales by 60%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>User engagement enhanced by 30%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>YETI Hikes to Conversion Success with a Customized Commerce Cloud Experience</h4>
                                            <p>Yeti is a popular name in premium outdoor gear who wants to create a unique online experience for its drinkware campaign while maintaining its existing Commerce Cloud storefront. With Commerce Cloud, they can now combine existing templates with new composable technology, offering a fully customized journey for customers while keeping the core storefront intact.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Mobile conversion rate increased by 63%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Enhanced online shopping experience by 50%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Heathrow Takes Off with Personalized Digital Experiences Powered by Salesforce Commerce Cloud</h4>
                                            <p>Heathrow was facing challenges in delivering a seamless digital experience. The disjointed systems and fragmented data were hindering personalization efforts. They decided on a Commerce Cloud implementation along with different solutions. This enabled personalized services and communication. Also, passengers benefited from a more seamless digital experience, with features like pre-booking parking and receiving personalized product recommendations.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Increased digital revenue by 30%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Average call handling time reduced to 27%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Santander UK Empowers Businesses for Global Growth with Salesforce Commerce Cloud</h4>
                                            <p>Santander UK, a commercial bank, aims to empower businesses, especially SMEs, to navigate the complexities of international trade and unlock global growth opportunities. Marketing Cloud implementation led them to build a digital platform named Santander Navigator. This platform offers growth strategies, market insights, and connections to international trade experts.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Increased conversions by 40%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Data utilisation enhanced by 60%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>ReserveBar Raises a Glass to Scalability with Salesforce Commerce Cloud</h4>
                                            <p>They need a robust solution to manage their complex marketplace. They were unable to scale up their legacy solution. With Commerce Cloud implementation, they can now manage inventory and pricing across all partner stores, utilizing the power of automation. Now, they have gained the flexibility to manage a vast product range and partner network, paving the way for future expansion. </p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Increased revenue by 40%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Enhanced customer interaction by 30%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Kellogg's Serves Up Success with Data-Driven Commerce and Philanthropy using Commerce Cloud</h4>
                                            <p>Kellogg's is a popular brand for SMBs who want to get valuable insights and recommendations. Also, they want to build brand loyalty and gather consumer feedback for product development. The Salesforce implementation empowered them to launch a mobile e-commerce platform that offers dynamic segmentation, suggested orders, and optimized shipping.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>User-friendliness increased by 50%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Customer engagement enhanced by 60%</span></li>
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



        </>
    );
}

export default CommerceCloud;
