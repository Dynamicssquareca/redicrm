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



const CustomizationAndIntegration = () => {

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
                <title>Salesforce Customization Services | CRM Frontier</title>
                <meta
                    name="description"
                    content="Enhance your business with expert Salesforce customization services. Tailored solutions for CRM, workflow automation, and integrations to boost efficiency and growth."
                />
                <link rel="canonical" href="https://www.crmforceplus.com/services/salesforce-customization/" />
                <meta property="og:locale" content="US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Salesforce Customization Services | CRM Frontier" />
                <meta property="og:description" content="Enhance your business with expert Salesforce customization services. Tailored solutions for CRM, workflow automation, and integrations to boost efficiency and growth." />
                <meta property="og:url" content="https://www.crmforceplus.com/services/salesforce-customization/" />
                <meta property="og:site_name" content="CRM Frontier " />
                <meta property="og:image" content="https://www.crmforceplus.com/img/feature/customization.jpg" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="og:image:type" content="image/jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@CrmforcePlus" />
                <meta name="twitter:title" content="Salesforce Customization Services | CRM Frontier" />
                <meta name="twitter:description" content="Enhance your business with expert Salesforce customization services. Tailored solutions for CRM, workflow automation, and integrations to boost efficiency and growth." />
                <meta name="twitter:image" content="https://www.crmforceplus.com/img/feature/customization.jpg" />
            </Head>
            <div className='hero-banner-two height-auto'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Extend your Salesforce Functionalities with Our Tailored Salesforce Customization Services</h1>
                                <p>Get the personalized Salesforce customization services and enhance your client relationship & business workflow with CRMForce+</p>
                                <ModelBox headerText="Get a Free Demo" buttonText="Schedule a Free Call!" />
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
                                <h2>Maximize Your Business Potential with Expert Salesforce Customization Services from CRMForce+</h2>
                                <p>Unlock the full potential of your Salesforce system and align your business workflows with our leading Salesforce customization services. We help you create a unified platform for your existing system that can be easily integrated with third-party applications.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/proven-expertise-icon.png" alt="proven-expertise-icon" width={65} height={65} />
                                <h3>Extensive Salesforce Proficiency</h3>
                                <p>Our team of certified experts are well-versed with the Salesforce ecosystem, ensuring optimal Salesforce custom development.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/Custom-Fit-Approach-icon.png" alt="Custom-Fit-Approach-icon" width={65} height={65} />
                                <h3>Bespoke Services</h3>
                                <p>One-size-suits-all approaches are obsolete. Our team of experts analyzes every granular detail of your Salesforce system and delivers customized services.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/Seamless-Integrations-icon.png" alt="Seamless-Integrations-icon" width={65} height={65} />
                                <h3>Seamless Integration</h3>
                                <p>Break down data silos and enhance workflow efficiency by connecting Salesforce with your current CRM, marketing automation, or ERP systems.</p>
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
                                <h2>Salesforce Products We Offer Customization for:</h2>
                                <p>We offer an overarching Salesforce customization service and configuration aid that can align with your business goals and seamlessly enhance the workflows of your existing system.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-stretch">
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Sales Cloud Customization Services</h3>
                                <p>Maximize your sales pipeline efficiency by centralizing the customer information and automating various tasks.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Service Cloud Customization Services</h3>
                                <p>Provide outstanding customer support with a tailored Service Cloud customization service.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Marketing Cloud Customization Services</h3>
                                <p>Tailor customer experiences and automate campaigns with top-tier Marketing Cloud customization solutions.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Commerce Cloud Customization Services</h3>
                                <p>Consolidate your online store and optimize sales with expert Commerce Cloud customization services.</p>
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
                                <h2>Revitalize your Business: Choose CRMForce+ for Salesforce Customization Services</h2>
                                <p>Salesforce customization is more than a technical step; it is a strategic enabler that fosters the renovation of efficient client relationship management and well-organized workflows.</p>
                                <div className='p-t-15'><a className="btn btn-prime" href='/contact-us/'>Upgrade your Salesforce Now!</a></div>
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
                                            <h4>Deep Salesforce Expertise</h4>
                                            <p>Our team is highly skilled in Salesforce CRM solutions, ensuring the best possible customization for your specific needs. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Hassle-Free Integrations</h4>
                                            <p>Break down data silos and optimize workflows by effortlessly integrating Salesforce with your current systems.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Established Track Record</h4>
                                            <p>We have worked with a variety of industries and have a proven record of delivering tangible results along with upgraded ROI.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Custom-Tailored Solutions</h4>
                                            <p>We invest the time to grasp your specific business processes and provide customized Salesforce ecosystems that seamlessly fit your needs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Strategic Approach</h4>
                                            <p>We look beyond the current project, anticipating future requirements and ensuring you can reap the maximum benefits of Salesforce customization.</p>
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
                                <h3>Don't Just Personalize, Enhance for Peak Performance!</h3>
                                <p>Get a Free Consultation for Your Salesforce Customization Needs.</p>
                                <ModelBox headerText="Schedule a Free Call" buttonText="Schedule a Free Strategy Session!" />
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
                                                <h3>What can be customized in Salesforce?</h3>
                                                <span className={`icon ${open === '1' ? 'open' : 'closed'}`}>
                                                    {open === '1' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            <p>Salesforce offers extensive customization options to tailor the platform to your business needs. These customization options allow businesses to create a Salesforce environment that is uniquely suited to their workflows, processes, and goals.</p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="2">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>Is Salesforce customization scalable and secure?</h3>
                                                <span className={`icon ${open === '2' ? 'open' : 'closed'}`}>
                                                    {open === '2' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="2">
                                            <p>Yes, this is what Salesforce is known for. As your demands change, its modular approach and cloud-based design allow for easy scalability. Moreover, it provides strong security measures with multi-factor authentication and data encryption.</p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="3">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>Do we need Salesforce customization services?</h3>
                                                <span className={`icon ${open === '3' ? 'open' : 'closed'}`}>
                                                    {open === '3' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="3">
                                            <p>Salesforce customization services are essential if your business requires specific functionality beyond standard Salesforce features. If the out-of-the-box solution does not meet your unique needs, customization ensures Salesforce works optimally for your organization.</p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="4">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>How long does it take to customize Salesforce?</h3>
                                                <span className={`icon ${open === '4' ? 'open' : 'closed'}`}>
                                                    {open === '4' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="4">
                                            <p>The time to customize Salesforce depends on the complexity and scope of the project. Factors like the number of users, complexity of requirements, and available resources can influence the timeline.</p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="5">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>What are the costs involved in Salesforce customization services?</h3>
                                                <span className={`icon ${open === '5' ? 'open' : 'closed'}`}>
                                                    {open === '5' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="5">
                                            <p>The overall cost of customization depends on various factors, such as the Salesforce product, different modules, and the complexity of your existing business workflows. </p>
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

export default CustomizationAndIntegration;
