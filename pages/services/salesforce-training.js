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



const Training = () => {

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
                <title>Salesforce CRM Training | CRM Frontier</title>
                <meta
                    name="description"
                    content="CRM Frontier provides Salesforce training for clients. Learn strategies to improve sales, optimize processes, and grow your business efficiently."
                />
                <link rel="canonical" href="https://www.crmforceplus.com/services/salesforce-training/" />
                <meta property="og:locale" content="US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Salesforce CRM Training | CRM Frontier" />
                <meta property="og:description" content="CRM Frontier provides Salesforce training for clients. Learn strategies to improve sales, optimize processes, and grow your business efficiently." />
                <meta property="og:url" content="https://www.crmforceplus.com/services/salesforce-training/" />
                <meta property="og:site_name" content="CRM Frontier " />
                <meta property="og:image" content="https://www.crmforceplus.com/img/feature/Training.jpg" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="og:image:type" content="image/jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@CrmforcePlus" />
                <meta name="twitter:title" content="Salesforce CRM Training | CRM Frontier" />
                <meta name="twitter:description" content="CRM Frontier provides Salesforce training for clients. Learn strategies to improve sales, optimize processes, and grow your business efficiently." />
                <meta name="twitter:image" content="https://www.crmforceplus.com/img/feature/Training.jpg" />
            </Head>
            <div className='hero-banner-two height-auto'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Empower Your Team: Get Comprehensive Salesforce CRM Training </h1>
                                <p>Ensure employee productivity, make the most of your Salesforce ecosystem, and accomplish enhanced ROI with our end-to-end Salesforce training programs.</p>
                                <ModelBox headerText="Get a Free Demo" buttonText="Request Consultation!" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className="elementor-background-default">
                        <Image src="/img/banner/training-salesforce.png" className='bg-defult' alt="training-salesforce" width={2010} height={315} priority />
                    </div>
                </div>
            </div>

            <section className='bg-wss'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                {/* <span>Features of Salesforce Sales Cloud</span> */}
                                <h2>Unparalleled Training: Maximize Your Salesforce Investment</h2>
                                <p>Maximize the value of your Salesforce investment with CRMForce+ all-inclusive training services. Our diverse Salesforce training programs are tailored to empower your users with the expertise needed to make the most of Salesforce's capabilities. </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/proven-expertise-icon.png" alt="proven-expertise-icon" width={65} height={65} />
                                <h3>Tailored Training Programs</h3>
                                <p>We develop a Salesforce training program tailored to the requirements of your business, helping you get the most out of the Salesforce ecosystem.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/Custom-Fit-Approach-icon.png" alt="Custom-Fit-Approach-icon" width={65} height={65} />
                                <h3>Certified & Experienced Trainers</h3>
                                <p>We made Salesforce training a breeze with our Salesforce reports training. Our trained experts are well-versed in understanding the specific needs of employees.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/Seamless-Integrations-icon.png" alt="Seamless-Integrations-icon" width={65} height={65} />
                                <h3>User Adoption & Proficiency Focus</h3>
                                <p>We drive user adoption by comprehensive Salesforce CRM training & ensure that users equip themselves well with Salesforce.</p>
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
                                <h2>Specific Salesforce Product Training We Offer</h2>
                                <p>We equip your team with the knowledge and skills to master the platform, maximizing user adoption and driving success.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-stretch">
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Sales Cloud Training Services</h3>
                                <p>Provide your sales team with top-tier Salesforce CPQ training to enhance lead generation and increase deal closures.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Service Cloud Training Services</h3>
                                <p>Enable unparalleled customer service with our customized Salesforce CRM training for your Service Cloud solution.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Personalized Marketing Cloud Training Services</h3>
                                <p>Master the art of marketing automation with the best Salesforce Marketing Cloud training, driving personalized customer journeys.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Efficient Commerce Cloud Training Services</h3>
                                <p>Enhance your online store with top-notch Salesforce training and consulting for Commerce Cloud, delivering a smooth and efficient shopping experience.</p>
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
                                <h2>Discover Why CRMForce+ is Your Go-To for Salesforce Training</h2>
                                <p>CRMForce+ goes beyond generic training modules. We offer a personalized approach, ensuring your team receives the knowledge and skills they need to thrive on the platform</p>
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
                                            <h4>Customized Training Programs</h4>
                                            <p>We do not preach one size suitable for all. Our personalized Salesforce training program is designed to cater to specific user roles.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Certified Salesforce Trainers</h4>
                                            <p>Our experienced Salesforce training consultant delivers top-grade training and end-to-end support.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Focus on User Adoption & Proficiency</h4>
                                            <p>Our aim is to accelerate user adoption and help your team master Salesforce to use it efficiently.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Flexible Learning Options</h4>
                                            <p>We offer a range of learning opportunities, from Salesforce admin training to Salesforce administrator training, to cater to the team's preferences.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Varied Salesforce Training Portfolio</h4>
                                            <p>We offer leading Salesforce training programs for end-users, administrators, admins, and managers, as well as a variety of Salesforce products.   </p>
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
                                <p>Get Started with CRMForce+ Training Today!</p>
                                <ModelBox headerText="Schedule a Free Call" buttonText="Get Started with CRMForce+ Training Today!" />
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
                                                <h3>How much does Salesforce training cost?</h3>
                                                <span className={`icon ${open === '1' ? 'open' : 'closed'}`}>
                                                    {open === '1' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            <p>The overall cost of Salesforce training depends on the specific needs of your business, such as number of employees, company size, and kind of training. By investing in our training programs, you can enhance user adoption and drive success in certain periods of time.</p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="2">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>Are your Salesforce training programs beneficial for my business?</h3>
                                                <span className={`icon ${open === '2' ? 'open' : 'closed'}`}>
                                                    {open === '2' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="2">
                                            <p>Yes, our training courses are aimed at providing your staff with the required Salesforce ecosystem knowledge. We offer individualized instruction that fits your company's vision and goals.</p>
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

export default Training;
