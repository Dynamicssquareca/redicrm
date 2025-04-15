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

const SmallBusiness = () => {

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
                <title>Salesforce for Small Business | CRM Frontier</title>
                <meta
                    name="description"
                    content="Salesforce CRM for small business: Streamline sales, improve customer relationships, and drive growth with customizable, scalable solutions."
                />
                <link rel="canonical" href="https://www.crmforceplus.com/solutions/salesforce-small-business/" />
                <meta property="og:locale" content="US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Salesforce for Small Business | CRM Frontier" />
                <meta property="og:description" content="Salesforce CRM for small business: Streamline sales, improve customer relationships, and drive growth with customizable, scalable solutions." />
                <meta property="og:url" content="https://www.crmforceplus.com/solutions/salesforce-small-business/" />
                <meta property="og:site_name" content="CRM Frontier " />
                <meta property="og:image" content="https://www.crmforceplus.com/img/feature/Small-Business.jpg" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="og:image:type" content="image/jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@CrmforcePlus" />
                <meta name="twitter:title" content="Salesforce for Small Business | CRM Frontier" />
                <meta name="twitter:description" content="Salesforce CRM for small business: Streamline sales, improve customer relationships, and drive growth with customizable, scalable solutions." />
                <meta name="twitter:image" content="https://www.crmforceplus.com/img/feature/Small-Business.jpg" />
            </Head>
            <div className='hero-banner-two hero-banner-two-pd-40'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Salesforce for Small Businesses: Grow Faster, Smarter, and Stronger</h1>
                                <p>Boost sales, transform business operations, and increase customer engagement with Salesforce for small business products. Start your free trial today and experience the transformation! </p>
                                <ModelBox headerText="Get a Free Demo" buttonText="Request a Free Demo" />
                            </div>
                        </div>
                    </div>
                    <div className='row desk-banner-hide'>
                        <div className="elementor-background-overlay">

                            <Image src="/img/banner/small-business-banner.png" className='bg-mid' alt="small-business-banner" width={932} height={278} priority />
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
                            <Image src="/img/banner/small-business-banner-mobile.png" className='bg-mid' alt="small-business-banner-mobile" width={628} height={407} priority />
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-w'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                <span>Key Features of Salesforce for Small Business</span>
                                <h2>Simplify Your Business with Powerful Features of Salesforce for Small Business</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div className='row d-flex align-items-stretch'>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Effortless CRM</h3>
                                        <p>Track leads, manage customer relationships, and close deals seamlessly with Salesforce CRM for small businesses. </p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Automated Workflows</h3>
                                        <p>Nurture leads automatically and automate repetitive tasks to free up your time.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Mobile Access</h3>
                                        <p>Work from anywhere! With the Salesforce mobile app, stay connected to your customers on the go.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Powerful Reporting & Insights</h3>
                                        <p>Accomplish valuable insights into your sales performance and make data-driven decisions.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Integrated Solutions</h3>
                                        <p>Connect Salesforce small business with your existing tools for a unified view of your business.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Affordable & Scalable</h3>
                                        <p>Enjoy flexible Salesforce small business pricing that can grow with your business.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-3 align-self-center'>
                            <div className='right-service-img'>
                                <Image src="/img/icons/samll-business-side-pic.png" alt="samll-business-side-pic" width={215} height={166} />
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
                                <span>Salesforce Products for Small Business</span>
                                <h2>From Startup to Staggering Success: Elevate Your Business with Cutting-Edge Tools</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-stretch">
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Starter Suite</h3>
                                <p>Lay the foundation for growth with essential contact management and sales tools.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Pro Suite</h3>
                                <p>Unlock powerful automation, lead nurturing, and reporting to accelerate your sales.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Marketing</h3>
                                <p>Engage customers across channels, personalize campaigns, and drive higher ROI. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Sales</h3>
                                <p>Manage leads, track opportunities, and close deals faster with a streamlined sales process. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex m-d-none ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Service</h3>
                                <p>Provide great customer support, resolve issues quickly, and build stronger relationships.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Productivity with Slack</h3>
                                <p>Integrate Slack functionality to improve teamwork, communication, and output.</p>
                            </div>
                        </div>

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
                                <span>Benefits of Salesforce for Small Business</span>
                                <h2>Get the Potential Benefits of Salesforce CRM for Small Business: Boost Your Growth with Advanced Tools</h2>
                            </div>
                        </div>
                    </div>

                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/boost-sales-icons .png" alt="boost-sales-icons " width={65} height={65} />
                                <h3>Increase Revenue and Close More Deals</h3>
                                <p>Simplify your sales process, automate chores, and acquire insightful knowledge to quickly close deals.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/effortless-customer-icon.png" alt="effortless-customer-icon" width={65} height={65} />
                                <h3>Uncomplicated Customer Service</h3>
                                <p>Track conversations, centralize all of your customer data, and easily forge closer bonds with your clients.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/unify-business-icon.png" alt="unify-business-icon" width={65} height={65} />
                                <h3>Unify Your Business</h3>
                                <p>Connect Salesforce small business solutions with your existing tools to gain a complete view of your operations.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/data-driven-icon.png" alt="data-driven-icon" width={65} height={65} />
                                <h3>Informed Decisions</h3>
                                <p>Learn about your company's performance in real-time, spot trends, and make more informed decisions for expansion.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='cta'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 align-self-center'>
                            <Image src="/img/icons/samll-business-side-pic-cta.png" alt="samll-business-side-pic-cta.png" width={346} height={247} priority />
                        </div>
                        <div className='col-lg-7 align-self-center'>
                            <div className='cta-content'>
                                <h3>Boost Operational Efficiency with Salesforce for Small Business Solutions</h3>
                                <p>Achieve maximum output with the tailored Salesforce services.</p>
                                <ModelBox headerText="Schedule a Free Call Today!" buttonText="Schedule a Free Call Today!" />
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
                                <span>How can CRMForce + aid you?</span>
                                <h2>Your Trusted Partner for Salesforce Success: How CRMForce+ Empowers Small Businesses</h2>

                            </div>
                        </div>
                    </div>

                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/seamless-implementation-icon.png" alt="seamless-implementation-icon" width={64} height={64} />
                                <h3>SMB-Focused Expertise</h3>
                                <p>We understand the challenges SMBs face and provide Salesforce small business solutions that are impactful.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/proven-expertise-icon.png" alt="proven-expertise-icon" width={64} height={64} />
                                <h3>Certified Professionals</h3>
                                <p>We have certified experts for deploying Salesforce small business products.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/tailored-approach-icon.png" alt="tailored-approach-icon" width={64} height={64} />
                                <h3>Customer-Focused Approach</h3>
                                <p>Your success is our foremost aim. We work in tandem with you to deliver solutions that are in line with your goals.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/tailored-approach-icon.png" alt="tailored-approach-icon" width={64} height={64} />
                                <h3>Scalable Solutions</h3>
                                <p>Whether you are a startup or a growing business, we provide scalable Salesforce small business solutions.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/tailored-approach-icon.png" alt="tailored-approach-icon" width={64} height={64} />
                                <h3>Proven Track Record</h3>
                                <p>We have helped numerous SMBs streamline their operations and accomplish measurable results.</p>
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
                                <h2>Small Businesses, Big Success: Inspiring Stories of Growth</h2>
                                <p>Check out the inspiring stories of small businesses that have overcome challenges and achieved success through innovation and perseverance.</p>
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
                                            <h4>Snapology of Lehi Builds STEAM Future with Affordable CRM Capabilities</h4>
                                            <p>Focused on STEAM education, Snapology of Lehi Builds was facing challenge to grow and maintain cost efficiency due to pandemic. With the Startup Pack of Small Businesses, they have implemented an attractive user-interface and lightning App Development for ease of customisation. The business has started getting critical insights for tracking growth, and marketing campaign effectiveness.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Increased data usability by 30%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Enhanced customer base by 40%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>ICS+ Tunes Up Productivity and Unified Operations with Salesforce Small Business</h4>
                                            <p>ICS+ was facing issues managing disparate systems, limited collaboration opportunities, and ineffective lead management. With the Salesforce for Small Business implementation, they are now able to centralize data management, boost team collaboration, and enhance lead management operations more effectively.  ICS+ achieves boosted productivity, faster cash flow, and enhanced sales efficiency. </p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Increased Sales Efficiency by 25%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Achieved ROI using Salesforce by 942%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Humu Builds a People-Centered Business with Salesforce Essentials</h4>
                                            <p>Humu was facing issues in managing client relationships, empowering user adoption, and gather customer feedback. With the adoption of Salesforce Essentials, they are now able to streamline client management, adapt to intuitive user interface, utilize mobile accessibility, and perform data-driven product development. Humu is able to build strong client relationships, enhance team productivity, and boost product development.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Productivity increased by 30%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Team collaboration enhanced by 50%</span></li>
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
                                                <h3>How can the Salesforce help my small business?</h3>
                                                <span className={`icon ${open === '1' ? 'open' : 'closed'}`}>
                                                    {open === '1' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            <p>Salesforce helps your team to work smartly by enabling automation, improving sales tracking, and offering synchronized communication across departments.</p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="2">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>How much does Salesforce for Small Business cost?</h3>
                                                <span className={`icon ${open === '2' ? 'open' : 'closed'}`}>
                                                    {open === '2' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="2">
                                            <p>Salesforce offers various pricing tiers depending on the size of your business and the features you need. There are affordable options for small businesses with scalable pricing that lets you grow as your needs evolve. </p>

                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="3">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>Is Salesforce secure?</h3>
                                                <span className={`icon ${open === '3' ? 'open' : 'closed'}`}>
                                                    {open === '3' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="3">
                                            <p>Yes, Salesforce offers modern and efficient security solutions to protect customer data and your company. This platform guarantees that your data is encrypted and conforms with industry-leading security criteria. </p>
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

export default SmallBusiness;
