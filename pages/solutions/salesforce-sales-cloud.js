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

const SalesCloude = () => {

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
                <title>Salesforce Sales Cloud  | CRM Frontier</title>
                <meta
                    name="description"
                    content="Boost your sales with Salesforce Sales Cloud. Streamline processes, enhance customer relationships, and drive revenue with powerful CRM solutions."
                />
                <link rel="canonical" href="https://www.crmforceplus.com/solutions/salesforce-sales-cloud/" />
                <meta property="og:locale" content="US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Salesforce Sales Cloud  | CRM Frontier" />
                <meta property="og:description" content="Boost your sales with Salesforce Sales Cloud. Streamline processes, enhance customer relationships, and drive revenue with powerful CRM solutions." />
                <meta property="og:url" content="https://www.crmforceplus.com/solutions/salesforce-sales-cloud/" />
                <meta property="og:site_name" content="CRM Frontier " />
                <meta property="og:image" content="https://www.crmforceplus.com/img/feature/salescloud.jpg" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="og:image:type" content="image/jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@CrmforcePlus" />
                <meta name="twitter:title" content="Salesforce Sales Cloud  | CRM Frontier" />
                <meta name="twitter:description" content="Boost your sales with Salesforce Sales Cloud. Streamline processes, enhance customer relationships, and drive revenue with powerful CRM solutions." />
                <meta name="twitter:image" content="https://www.crmforceplus.com/img/feature/salescloud.jpg" />
            </Head>
            <div className='hero-banner-two hero-banner-two-pd-40'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Simplify Sales Processes and Nurture Leads with Salesforce  <span>Sales Cloud</span></h1>
                                <p>Maximize your sales potential with AI-enabled Salesforce Sales Cloud. Get the single source of truth for all your customer data. Streamline every interaction, build trust & grow partnerships.</p>
                                <ModelBox headerText="Get a Free Demo" buttonText="Request a Free Demo" />
                            </div>
                        </div>
                    </div>
                    <div className='row desk-banner-hide'>
                        <div className="elementor-background-overlay">

                            <Image src="/img/banner/solutions-banner-1.png" className='bg-mid' alt="solutions-banner-1" width={993} height={296} priority />
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
                            <Image src="/img/banner/sales-cloud-banner-mobile.png" className='bg-mid' alt="sales-cloud-banner-mobile" width={602} height={407} layout="responsive" priority />
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-w'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                <span>Features of Salesforce Sales Cloud</span>
                                <h2>Supercharge your Sales with Salesforce Sales Cloud Features  </h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div className='row d-flex align-items-stretch'>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Lead Management</h3>
                                        <p>Track, nurture, and prioritize leads for higher conversion rates with Sales Cloud Salesforce.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Opportunity Management</h3>
                                        <p>Manage deals through every sales stage for better pipeline visibility and control.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Contact and Account Management</h3>
                                        <p>Centralized data to track customer information, interactions, and sales activities efficiently.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Sales Forecasting</h3>
                                        <p>Accurate, AI-driven predictions for revenue, helping optimize sales strategies and resources.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Einstein AI </h3>
                                        <p>AI-driven insights and automation to optimize sales workflows and predict future trends.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>High Velocity Sales</h3>
                                        <p>Accelerate sales with automated lead engagement and task prioritization with Salesforce Sales Cloud.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-3 align-self-center'>
                            <div className='right-service-img'>
                                <Image src="/img/icons/cloude-key-icons.png" alt="cloude-key-icons" width={215} height={154} />
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
                                <span>Sales Product</span>
                                <h2>Digitalize Sales and Business Operations with Diverse Sales Cloud Apps</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-stretch">
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Sales Engagement</h3>
                                <p>Build customer engagement with minimal effort using Salesforce Automation Software by Sales Cloud.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Buyer Engagement</h3>
                                <p>Enhance collaboration between sales and marketing to capture more leads and close deals.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Sales AI</h3>
                                <p>Utilize modern AI capabilities to support executives at every sales event in Salesforce.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Einstein Conversation Insights</h3>
                                <p>Leverage data-driven insights to reduce the time it takes to convert leads.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex m-d-none ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Revenue Intelligence</h3>
                                <p>Categorize leads based on revenue potential through built-in analytics and actionable insights.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Sales Planning</h3>
                                <p>Develop strategies to capture leads, increase conversions, and maximize ROI with Salesforce Sales Cloud features.  </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Sales Programs</h3>
                                <p>Deploy AI-powered coaching to maximize sales output and optimize team performance.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Sales Analytics</h3>
                                <p>Gain actionable sales insights to simplify pipelines and optimize sales operations effectively.</p>
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
                                <span>Benefits of Salesforce Sales Cloud</span>
                                <h2>Boost Sales performance, Delight Customers, and Generate More Revenue</h2>
                            </div>
                        </div>
                    </div>

                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/Unify-Customer-Data-icon.png" alt="Unify-Customer-Data-icon" width={65} height={65} />
                                <h3>Unify Customer Data</h3>
                                <p>Record and collect customer conversations and store them digitally in a unified database.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/Scale-with-ease-icon.png" alt="Scale-with-ease-icon" width={65} height={65} />
                                <h3>Scale with ease</h3>
                                <p>With business growth, scale your Salesforce Sales cloud CRM system without any hassle.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/Generate-Valuable-Reports-icon.png" alt="Generate-Valuable-Reports-icon" width={65} height={65} />
                                <h3>Generate Valuable Reports</h3>
                                <p>Collect and analyze your data to make productive reports without relying on another solution.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/Access-Automation-icon.png" alt="Access-Automation-icon" width={65} height={65} />
                                <h3>Access Automation</h3>
                                <p>Leverage automation to eliminate system redundancies and automate different processes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='cta'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 align-self-center'>
                            <Image src="/img/icons/sales-cloud-cta.png" alt="sales-cloud-cta.png" width={346} height={247} priority />
                        </div>
                        <div className='col-lg-7 align-self-center'>
                            <div className='cta-content'>
                                <h3>Eliminate Administrative Pains and Automate Sales with Salesforce Sales Cloud</h3>
                                <p>Power up your sales operations with a tailored Salesforce Sales Cloud implementation. Contact a Salesforce expert today for a free consultation.</p>
                                <ModelBox headerText="Schedule a Free Call" buttonText="Schedule a Free Call" />
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
                                <h2>Double up your Sales Numbers with CRMForce+: A Salesforce CRM Certified Sales Cloud Partner</h2>
                                {/* <p>We enable the Salesforce to work for you. Build relationships, transform the customer experience, and drive uninterrupted growth with our expert guidance.<br /><br />Don't settle for just a Salesforce partner. We deliver results. Our Salesforce experts combine experience, proven solutions, and advanced technology to harness the power of CRM and transform your business.</p> */}
                            </div>
                        </div>
                    </div>

                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/seamless-implementation-icon.png" alt="seamless-implementation-icon" width={65} height={65} />
                                <h3>Seamless Implementation</h3>
                                <p>Join hands with certified experts for an efficient, productive, and successful Salesforce Sales Cloud implementation.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/proven-expertise-icon.png" alt="proven-expertise-icon" width={65} height={65} />
                                <h3>Proven Expertise</h3>
                                <p>We encompass experienced Salesforce Sales Cloud consultants, available to simplify and optimize sales processes.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/tailored-approach-icon.png" alt="tailored-approach-icon" width={65} height={65} />
                                <h3>Tailored Approach</h3>
                                <p>We provide tailored Salesforce Sales Cloud services that can align with the requirements of your business.</p>
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
                                <h2>Sales Cloud has transformed the sales operations of different businesses to go all digital</h2>
                                <p>Explore such businesses to see the effectiveness of Salesforce Sales Cloud with a tailored approach.</p>
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

                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>World Economic Forum, a global forum, aimed to centralize systems with Sales Cloud. </h4>
                                            <p>Being a global discussion forum, they were using email attachments and spreadsheets to manage data for large programs. Managing data from different aspects becomes time-consuming using different solutions. Salesforce integrated different solutions, including Sales Cloud, into WEF. This implementation led them to track attendees and manage potential memberships.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Grammarly, an AI-based writing application, aimed to increase the conversion rate.</h4>
                                            <p>Grammarly is a popular tool with over 30 million global users. They used to collect, filter, and process inbound leads manually, making the process hectic. The Einstein 1 Marketing of Sales Cloud utilized AI to connect sales with marketing and automated processes to increase the conversion rate by 30%.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>The Texas Rangers, an American-based baseball team, want to get a 360° view of operations.</h4>
                                            <p>The Texas Rangers are a world-champion baseball team that wants to eliminate the manual ways of guest service while eliminating data silos from the system. With the Sales Cloud implementation, Texas Ranger can now connect diverse systems to get a unified business view with real-time data insights.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Pirelli, a premium tire company, aims to utilize data to enhance business efficiency.</h4>
                                            <p>Pirelli is a renowned brand with a global presence of approx. 1.8 million orders per day using their dealer platform. They were facing issues establishing connections with dealers and customers to generate more sales. This lets the business implement a B2B2C consulting model with Sales Cloud to capture data insights and perform data-driven sales.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>John Lewis Partnership, a popular business in the UK, aimed to utilize data.</h4>
                                            <p>Being a popular and largest employee-owned business in the UK with 34 shops and 329 supermarket stores, they have collected huge amounts of data in different departments but are unable to utilize it. Now, with Sales Cloud implementation, they are able to centralize data across departments to offer an exceptional customer experience.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Spotify, a streaming giant, wants to supercharge sales with Salesforce Sales Cloud.</h4>
                                            <p>Spotify is a digital music platform with millions of global users. They want to capture customer data so that they can serve ads better. Also, they want to show more personalized content using data analytics to retain users for the long run. All such issues were resolved using the Salesforce Sales Cloud implementation.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
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
                                <h2>Salesforce Sales Cloud Pricing</h2>
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
                                    <span className='bill'>(Billed monthly or annually)</span>
                                    <p>The simple CRM suite with marketing, sales, service, and commerce.</p>
                                    <ul>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Email Integration</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Lead, Account, Contact, and Opportunity Management</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Simplified Setup and Onboarding</span></li>

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
                                    <p>The enhanced CRM suite with even more marketing, sales, service, and commerce tools.</p>
                                    <ul>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Improved, Real-Time Chat</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Effective Customization and Automation</span></li>
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
                                    <p>The CRM for sales with more flexibility and web API.</p>
                                    <ul>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Pro Suite offers enhanced sales features, including advanced pipeline management and detailed deal insights</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Workflow and Approvals Automation</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Conversation Intelligence</span></li>
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
                                    <p>The CRM for sales with intelligent automation and developer support built in.</p>
                                    <ul>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Everything in Enterprise plus Predictive AI</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Conversation Intelligence and Sales Engagement</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Premier Success Plan and Full Sandbox</span></li>
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
                                    <h3>Einstein 1 Sales</h3>
                                </div>
                                <div className='pricing-box-body'>
                                    <h4>$500</h4>
                                    <span className='mon'>User/Month</span>
                                    <span className='bill'>(Billed annually)</span>
                                    <p>The best of Salesforce for sales teams in a single offering.</p>
                                    <ul>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Everything in Unlimited, plus Generative AI</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Performance Management, Sales Programmes and Team Collaboration with Slack</span></li>
                                        <li><i className="bi bi-check-circle-fill"></i> <span>Connect and Unify All Data with Data Cloud and Revenue Intelligence</span></li>
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
                                                <h3>What is Sales Cloud?</h3>
                                                <span className={`icon ${open === '1' ? 'open' : 'closed'}`}>
                                                    {open === '1' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            <p>Sales Cloud is Salesforce's platform that enables businesses to automate sales processes, manage leads, opportunities, and accounts, and boost team productivity and collaboration.</p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="2">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>What are the benefits of Sales Cloud?</h3>
                                                <span className={`icon ${open === '2' ? 'open' : 'closed'}`}>
                                                    {open === '2' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="2">
                                            <p>Sales Cloud has benefits like better lead management, more accurate forecasting, streamlined sales processes, automated workflows, real-time data, and better teamwork. It also helps businesses make their teams more productive and give each customer a more unique experience.</p>

                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="3">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>How do I get started implementing Sales Cloud?</h3>
                                                <span className={`icon ${open === '3' ? 'open' : 'closed'}`}>
                                                    {open === '3' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="3">
                                            <p>For a smooth Sales Cloud implementation, CRMForce+ offers customized, cutting-edge services that are designed to fit the exact needs of your business, guaranteeing a smooth and successful rollout. For your queries, you can email us at <a href="mailto:info@crmforceplus.com" target='_blank'>info@crmforceplus.com</a>. </p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="4">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>Can Salesforce Sales Cloud integrate with other applications?</h3>
                                                <span className={`icon ${open === '4' ? 'open' : 'closed'}`}>
                                                    {open === '4' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="4">
                                            <p>Yes, Salesforce Sales Cloud can be integrated with other applications through APIs, AppExchange apps, and pre-built connectors. It ensures smooth data integration and boosts functionality with tools such as email, marketing, and ERP systems.</p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="5">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>What are the key features of Salesforce Sales Cloud?</h3>
                                                <span className={`icon ${open === '5' ? 'open' : 'closed'}`}>
                                                    {open === '5' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="5">
                                            <p>Key features of Salesforce Sales Cloud include managing leads and opportunities, making predictions, automating tasks, getting insights from AI, reporting, and letting the sales team work together. Besides, mobile access, process automation, account management, and customized dashboards are some other features that can help you be more productive.</p>
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

export default SalesCloude;
