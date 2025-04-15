import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
const AboutUs = () => {
    return (
        <>
            <Head>
                <title>About CRM Frontier: Salesforce Partner</title>
                <meta
                    name="description"
                    content="CRM Frontier is a trusted Salesforce partner, delivering tailored CRM solutions to optimize business growth and streamline processes."
                />
                <link rel="canonical" href="https://www.crmfrontier.com/about-us/" />
                <meta property="og:locale" content="US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="About CRM Frontier: Salesforce Partner" />
                <meta property="og:description" content="CRM Frontier is a trusted Salesforce partner, delivering tailored CRM solutions to optimize business growth and streamline processes." />
                <meta property="og:url" content="https://www.crmfrontier.com/about-us/" />
                <meta property="og:site_name" content="CRM Frontier " />
                <meta property="og:image" content="https://www.crmfrontier.com/img/feature/about.jpg" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="og:image:type" content="image/jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@CrmforcePlus" />
                <meta name="twitter:title" content="About CRM Frontier: Salesforce Partner" />
                <meta name="twitter:description" content="CRM Frontier is a trusted Salesforce partner, delivering tailored CRM solutions to optimize business growth and streamline processes." />
                <meta name="twitter:image" content="https://www.crmfrontier.com/img/feature/about.jpg" />
            </Head>
            <section className="hero-bg-one">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="hero-ui-one">
                                <div className="absolut-img-one">
                                    <Image src="/img/icons/cloud-hero-big.png" alt="cloud-hero-big" width={462} height={431} priority />
                                </div>
                                <h1>Drive Digital Transformation Through Intelligent CRM Solutions</h1>
                                <p>Your Trusted Salesforce Partner: 10+ Years of Expertise in CRM Market <br />
                                    Navigate Success with Powerful Tech & Proven Guidance.
                                </p>
                                <div className="absolut-img-two">
                                    <Image src="/img/icons/cloud-hero-small.png" alt="cloud-hero-small" width={115} height={104} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-top-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                <span>About Company</span>
                                <h2>CRMForce Plus - Salesforce Powerhouse for your Success</h2>
                                <p>We are more than a Salesforce partner; we are your strategic growth engine that can power your entire business. We don't believe in a one-size-fits-all strategy, as we understand the uniqueness of the business and what it needs to drive consistent growth. We will ensure that your sales skyrocket and keep your customers engaged.</p>
                                <p>We have certified Salesforce consultants who are passionate about eliminating redundancies from the business to help you achieve maximum potential. From implementation to optimizing the existing solution, CRMForce Plus is always available by your side to empower your Salesforce journey.</p>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5 align-self-center">
                            <div className="text-center">
                                <Image src="/img/icons/crmfoecrplus-icon.png" alt="crmfoecrplus-icon" width={372} height={269} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/mission-icon.png" alt="mission-icon" width={65} height={65} />
                                <h3>Our Mission</h3>
                                <p>Our mission at CRMFORCEPLUS is to empower businesses of all sizes to harness the full potential of Salesforce solutions. We strive to provide tailored, scalable, and efficient CRM solutions that streamline processes, enhance customer engagement, and maximize ROI.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/vision-icon.png" alt="vision-icon" width={65} height={65} />
                                <h3>Our Vision</h3>
                                <p>We have a united mission: to empower businesses to achieve remarkable growth and success using Salesforce. This is something you can achieve by partnering with us and utilizing the years of knowledge and technical expertise of our Salesforce consultants.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 first-column">
                            <div className="heading-style-two pd-r-30">
                                <span>Our Values</span>
                                <h2>Values That Drive Us to the Top</h2>
                                <p>CRMForce Plus stands on its strong ethics and values, which make us stand out from the crowd. Our obsession with offering an optimum customer experience can empower you to achieve high business goals and stay ahead of the curve. We can revolutionize your business to help you deliver measurable results.</p>
                            </div>
                        </div>
                        <div className="col-lg-7 mob-m-30">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="service-box-two">
                                        <div className="service-box-two-inner">
                                            <div><Image src="/img/icons/Accountability-icon.png" width={65} height={65} alt="Accountability-icon" /></div>
                                            <div className="box-content">
                                                <span>Accountability</span>
                                                <p>We take ownership so that you can totally rely on us while keeping you updated about each activity.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="service-box-two">
                                        <div className="service-box-two-inner">
                                            <div><Image src="/img/icons/Integrity-icon.png" width={65} height={65} alt="Integrity-icon" /></div>
                                            <div className="box-content">
                                                <span>Integrity</span>
                                                <p>We ensure complete transparency while dealing with any Salesforce issues to give you the best value.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="service-box-two">
                                        <div className="service-box-two-inner">
                                            <div><Image src="/img/icons/Adaptability-icon.png" width={65} height={65} alt="Adaptability-icon" /></div>
                                            <div className="box-content">
                                                <span>Adaptability</span>
                                                <p>We align with the latest changes in software as well as business requirements to align with growing needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-top-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="heading-style-one">
                                <span>Transformation with Us</span>
                                <h2>Beyond Ordinary: The CRMForce+ Difference</h2>
                                <p>CRMForce Plus is the difference-maker that you have been searching for. We deliver a solution that perfectly aligns with your company's DNA, eliminates unique challenges, and boosts you towards your goal. With a customized Salesforce implementation strategy, you can go beyond your limits. Partner with us and experience Salesforce like never before.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="img-about-bg">
                    <div className="pic-bottom">
                        <Image src="/img/banner/bottom-bg.png" alt="bottom-bg" width={1920} height={525} /></div>
                </div>
            </section>

            <section className="m-top-m-180">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="heading-style-two">
                                <span>Our Team</span>
                                <h2>The Salesforce Certified Experts: Your Secret Weapon</h2>
                                <p>We are a people's organization that consists of certified Salesforce professionals with years of knowledge and expertise. All our experts are the perfect blend of technical expertise, effective communication skills, and the ability to think outside the box. They make sure to not just implement Salesforce, but tailor it to your specific business needs.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pd-l-r-80">
                                <Image src="/img/section/about-teampic.png" alt="about-teampic" width={466} height={527} />
                                {/* <div className="col-lg-5">
                                    <div className="user-box-card m-t-20">
                                        <div className="center-image">
                                            <Image src="/img/icons/certtifed-icons.png" alt="certtifed-icons" width={144} height={144} />
                                        </div>
                                        <div className="user-box-card-info">
                                            <Image src="/img/icons/avtar-1.png" alt="avtar-1" width={65} height={65} />
                                            <div className="user-card-in">
                                                <p>Our Team</p>
                                                <span>Designation</span>
                                            </div>
                                        </div> 
                                        <div className="user-box-card-info">
                                            <Image src="/img/icons/avtar-2.png" alt="avtar-2" width={65} height={65} />
                                            <div className="user-card-in">
                                                <p>Our Team</p>
                                                <span>Designation</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-5">
                                    <div className="user-box-card">
                                        <div className="user-box-card-info">
                                            <Image src="/img/icons/avtar-3.png" alt="avtar-3" width={65} height={65} />
                                            <div className="user-card-in">
                                                <p>Our Team</p>
                                                <span>Designation</span>
                                            </div>
                                        </div>
                                        <div className="user-box-card-info">
                                            <Image src="/img/icons/avtar-4.png" alt="avtar-4" width={65} height={65} />
                                            <div className="user-card-in">
                                                <p>Our Team</p>
                                                <span>Designation</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-top-600">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="heading-style-one">
                                <span>CRM Frontier </span>
                                <h2>Unlock the Power of Salesforce with Us - Your Trusted Salesforce Partner in Growth.</h2>
                                <p>Achieve exceptional results, offer a great customer experience, and gain access to a pool of CRM professionals that goes beyond implementation. With trust and transparency, we can make your business a hero.</p>
                                <div className="call-to-act">
                                    <a href="/contact-us/" className="btn btn-prime">Schedule a Free Call Now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-center-two">
                    <Image src="/img/banner/hero-shape.png" alt="hero-shape" width={1919} height={625} />
                </div>
            </section>


        </>
    );
}

export default AboutUs;
