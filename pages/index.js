import React, { useState,useRef } from 'react';
import ServiceBox from "@/components/ServiceBox";
import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import ModelBox from '@/components/ModelBox';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };


  return (
    <>
      <Head>
        <title>Trusted Salesforce Implementation Partner in USA | CRM Frontier</title>
        <meta name="description" content="CRM Frontier is a trusted Salesforce consulting and implementation partner in USA, offering expert solutions to optimize your business processes and drive success with Salesforce CRM. Contact us today!" />
        <link rel="canonical" href="https://www.crmfrontier.com/" />
        <meta property="og:locale" content="US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Trusted Salesforce Implementation Partner in USA | CRM Frontier" />
        <meta property="og:description" content="CRM Frontier is a trusted Salesforce consulting and implementation partner in USA, offering expert solutions to optimize your business processes and drive success with Salesforce CRM. Contact us today!" />
        <meta property="og:url" content="https://www.crmfrontier.com/" />
        <meta property="og:site_name" content="CRM Frontier " />
        <meta property="og:image" content="https://www.crmfrontier.com/img/feature/Homepage.jpg" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CrmforcePlus" />
        <meta name="twitter:title" content="Trusted Salesforce Implementation Partner in USA | CRM Frontier" />
        <meta name="twitter:description" content="CRM Frontier is a trusted Salesforce consulting and implementation partner in USA, offering expert solutions to optimize your business processes and drive success with Salesforce CRM. Contact us today!" />
        <meta name="twitter:image" content="https://www.crmfrontier.com/img/feature/Homepage.jpg" />

      </Head>
      <section className="hero">
        <div id="hero"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="hero-content">
                <h1>Boost Sales & Earn Customers for life with Leading Salesforce Partner</h1>
                <p>Salesforce CRM: Scale Faster, Grow Better</p>
                <ModelBox headerText="Get a Free Demo" buttonText="Request a Free Demo"  />
                {/* <a href="" className="btn btn-prime">Request a Free Demo</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="m-mines">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="banner-pic-flot">
                <figure className="main-pic">
                  <Image src="/img/banner/home-main-banner.png" className="pc-cenetr" alt="home-main-banner" width={995} height={522} priority />
                </figure>
                <figure className="main-pi-abso main-pic-1">
                  <Image src="/img/section/float-left-1.png" width={256} height={118} className="pc-cenetr" alt="float-left" />
                </figure>
                <figure className="main-pi-abso main-pic-2">
                  <Image src="/img/section/float-left-2.png"  width={351} height={329} className="pc-cenetr" alt="float-left" />
                </figure>
                <figure className="main-pi-abso main-pic-3">
                  <Image src="/img/section/float-left-3.png"  width={256} height={118} className="pc-cenetr" alt="float-left" />
                </figure>
                <figure className="main-pi-abso main-pic-4">
                  <Image src="/img/section/float-left-4.png"  width={256} height={118} className="pc-cenetr" alt="float-left" />
                </figure>
                <figure className="main-pi-abso main-pic-5">
                  <Image src="/img/section/float-left-5.png"  width={351} height={232} className="pc-cenetr" alt="float-left" />
                </figure>
                <figure className="main-pi-abso main-pic-6">
                  <Image src="/img/section/float-left-6.png"  width={256} height={118} className="pc-cenetr" alt="float-left" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service p-top-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-style-one">
                <span>Our Services</span>
                <h2>Supercharge your Sales <br />and Customer Service with CRM Frontier </h2>
                <p>Get comprehensive and reliable services to get your Salesforce up and running. </p>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-stretch">
            {/* <ServiceBox jsonDataUrl="datanew/ne.json" /> */}
            <div className="col-lg-3 d-flex">
              <div className="service-box-one flex-fill">
                <a href="/services/salesforce-implementation/">
                  <div className="service-box-head">
                    <figure>
                      <Image src="/img/icons/icons-1.png" alt="Salesforce Implementation" width={36} height={36} />
                    </figure>
                    <div className="service-box-title">
                      <h3>Salesforce Implementation</h3>
                    </div>
                  </div>
                  <div className="service-box-contant">
                    <p>Join hands with the leading Salesforce implementation partner for a successful and tailored implementation to experience a never-before transformation</p>
                    <span>Get Started <i className="bi bi-arrow-right-circle-fill"></i></span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 d-flex">
              <div className="service-box-one flex-fill">
                <a href="/services/customization-and-integration/">
                  <div className="service-box-head">
                    <figure>
                      <Image src="/img/icons/icons-2.png" alt="Salesforce Implementation" width={36} height={36} />
                    </figure>
                    <div className="service-box-title">
                      <h3>Customization & Integration</h3>
                    </div>
                  </div>
                  <div className="service-box-contant">
                    <p>Configure your Salesforce system with a personalized approach to meet the unique requirements of your business. Grow and scale uniformly with ease.</p>
                    <span>Get Started <i className="bi bi-arrow-right-circle-fill"></i></span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 d-flex">
              <div className="service-box-one flex-fill">
                <a href="/services/training-and-support/">
                  <div className="service-box-head">
                    <figure>
                      <Image src="/img/icons/icons-3.png" alt="Salesforce Implementation" width={36} height={36} />
                    </figure>
                    <div className="service-box-title">
                      <h3>Training & Support</h3>
                    </div>
                  </div>
                  <div className="service-box-contant">
                    <p>Empower your team with Salesforce experts to utilize powerful functionalities. Get your system back on track with 24x7 support for maximum growth.</p>
                    <span>Get Started <i className="bi bi-arrow-right-circle-fill"></i></span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 d-flex">
              <div className="service-box-one flex-fill">
                <a href="/services/salesforce-optimization/">
                  <div className="service-box-head">
                    <figure>
                      <Image src="/img/icons/icons-4.png" alt="Salesforce Implementation" width={36} height={36} />
                    </figure>
                    <div className="service-box-title">
                      <h3>Salesforce Optimization</h3>
                    </div>
                  </div>
                  <div className="service-box-contant">
                    <p>Optimize and enhance Salesforce performance to meet business requirements based on changing demands with the reliable Salesforce consulting partner.</p>
                    <span>Get Started <i className="bi bi-arrow-right-circle-fill"></i></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='bg-grey p-top-60'>
        <div className='container'>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-style-one">
                <span>Featured Products</span>
                <h2>Dive into the Powerful Salesforce Ecosystem:<br /> Solutions for All Business Needs</h2>
                <p>Explore different solutions to choose the perfect one <br /> that drives tangible results</p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center hide-m-sil'>
            <div className='col-xl-10 col-lg-12 col-md-12'>
              <div className='service-tab-style-one'>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={activeTab === '1' ? 'active' : ''}
                      onClick={() => { toggle('1'); }}
                    >
                      Sales Cloud
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === '2' ? 'active' : ''}
                      onClick={() => { toggle('2'); }}
                    >
                      Service Cloud
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === '3' ? 'active' : ''}
                      onClick={() => { toggle('3'); }}
                    >
                      Marketing Cloud
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === '4' ? 'active' : ''}
                      onClick={() => { toggle('4'); }}
                    >
                      Commerce Cloud
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/contact-us/'>
                      View all Products
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <div className='row tabs-design-one'>
                      <div className='col-lg-6 align-self-center'>
                        <div className='tabs-design-one-left'>
                          <span>Sales Cloud</span>
                          <h3>Sell Smarter and Close Deals Faster with Trusted AI</h3>
                          <p>Team up with the world's 1st AI-enabled CRM solution to streamline sales, automate workflows, and win more deals with minimum resources. Get real-time insights, personalize customer interaction, and build long-lasting relationships.</p>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='tabs-design-one-right'>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Focus on potential leads to close more deals</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Gain a 360-degree view of customer activity</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Boost collaboration and team productivity</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Simplify sales pipeline and forecast sales</p>
                          </div>
                          <a href="/solutions/sales-cloud/" className='btn btn-full btn-prime'>Get Started</a>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                    <div className='row tabs-design-one'>
                      <div className='col-lg-6 align-self-center'>
                        <div className='tabs-design-one-left'>
                          <span>Service Cloud</span>
                          <h3>Make your First-contact Perfect with the Customer </h3>
                          <p>Turn each interaction with the business into a positive response while delivering exceptional levels of customer satisfaction with Service Cloud. Empower team with omnichannel support to build loyalty and lasting relationships. </p>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='tabs-design-one-right'>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Empower agents with resources to resolve issues</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Offer a personalized experience to customers</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Understand your customers better with true insights</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Provide positive experiences throughout the sales journey</p>
                          </div>
                          <a href="/solutions/service-cloud/" className='btn btn-full btn-prime'>Get Started</a>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="3">
                    <div className='row tabs-design-one'>
                      <div className='col-lg-6 align-self-center'>
                        <div className='tabs-design-one-left'>
                          <span>Marketing Cloud</span>
                          <h3>Speak Directly to Customers with Marketing Cloud </h3>
                          <p>Understand your customers better through unified data and make smarter decisions leveraging AI to maximize conversions. Use marketing automation to connect your marketing with sales and enhance customer loyalty.</p>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='tabs-design-one-right'>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Capture relevant engagement across devices</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Utilize the full potential of your customer data</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Raise performance and optimize campaigns with AI</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Increase marketing ROI and customer engagement</p>
                          </div>
                          <a href="/solutions/marketing-cloud/" className='btn btn-full btn-prime'>Get Started</a>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="4">
                    <div className='row tabs-design-one'>
                      <div className='col-lg-6 align-self-center'>
                        <div className='tabs-design-one-left'>
                          <span>Commerce Cloud</span>
                          <h3>Increase marketing ROI and customer engagement</h3>
                          <p>Simplify your e-commerce business and increase revenue by tracking customer data across the sales journey. From storefront setup to conversions, utilize conversational AI to enhance the shopping experience.</p>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='tabs-design-one-right'>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Set up your ideal store that grows over time</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Get an AI-embedded advanced vendor dashboard</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Make two-way links between online and offline stores</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Connect your Sales, Service, and Marketing modules</p>
                          </div>
                          <a href="/solutions/commerce-cloud/" className='btn btn-full btn-prime'>Get Started</a>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  {/* <TabPane tabId="5">
                      <div className='row tabs-design-one'>
                        <div className='col-lg-6 align-self-center'>
                          <div className='tabs-design-one-left'>
                            <span>Sales Cloud</span>
                            <h3>Sell Smarter and Close Deals Faster with Trusted AI</h3>
                            <p>Team up with the world's 1st AI-enabled CRM solution to streamline sales, automate workflows, and win more deals with minimum resources. Get real-time insights, personalize customer interaction, and build long-lasting relationships.</p>
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='tabs-design-one-right'>
                            <div className='tabs-design-one-list'>
                              <i className="bi bi-check-lg"></i>
                              <p>Focus on potential leads to close more deals</p>
                            </div>
                            <div className='tabs-design-one-list'>
                              <i className="bi bi-check-lg"></i>
                              <p>Gain a 360-degree view of customer activity</p>
                            </div>
                            <div className='tabs-design-one-list'>
                              <i className="bi bi-check-lg"></i>
                              <p>Boost collaboration and team productivity</p>
                            </div>
                            <div className='tabs-design-one-list'>
                              <i className="bi bi-check-lg"></i>
                              <p>Simplify sales pipeline and forecast sales</p>
                            </div>
                            <a href="/" className='btn btn-full btn-prime'>Get Started</a>
                          </div>
                        </div>
                      </div>
                    </TabPane> */}
                </TabContent>
              </div>
            </div>
          </div>
          <div className='row desk-hide'>
            <div className='col-lg-12'>
              <Swiper
                spaceBetween={30}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                }}

                navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  }
                }}
                modules={[Autoplay , Navigation]}
                className="mySwiper"
              >
           
              <SwiperSlide>
                <div className='row tabs-design-one'>
                  <div className='col-lg-6 align-self-center'>
                    <div className='tabs-design-one-left'>
                      <span>Sales Cloud</span>
                      <h3>Sell Smarter and Close Deals Faster with Trusted AI</h3>
                      <p>Team up with the world's 1st AI-enabled CRM solution to streamline sales, automate workflows, and win more deals with minimum resources. Get real-time insights, personalize customer interaction, and build long-lasting relationships.</p>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='tabs-design-one-right'>
                      <div className='tabs-design-one-list'>
                        <i className="bi bi-check-lg"></i>
                        <p>Focus on potential leads to close more deals</p>
                      </div>
                      <div className='tabs-design-one-list'>
                        <i className="bi bi-check-lg"></i>
                        <p>Gain a 360-degree view of customer activity</p>
                      </div>
                      <div className='tabs-design-one-list'>
                        <i className="bi bi-check-lg"></i>
                        <p>Boost collaboration and team productivity</p>
                      </div>
                      <div className='tabs-design-one-list'>
                        <i className="bi bi-check-lg"></i>
                        <p>Simplify sales pipeline and forecast sales</p>
                      </div>
                      <a href="/" className='btn btn-full btn-prime'>Get Started</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='row tabs-design-one'>
                      <div className='col-lg-6 align-self-center'>
                        <div className='tabs-design-one-left'>
                          <span>Service Cloud</span>
                          <h3>Make your First-contact Perfect with the Customer </h3>
                          <p>Turn each interaction with the business into a positive response while delivering exceptional levels of customer satisfaction with Service Cloud. Empower team with omnichannel support to build loyalty and lasting relationships. </p>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='tabs-design-one-right'>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Empower agents with resources to resolve issues</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Offer a personalized experience to customers</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Understand your customers better with true insights</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Provide positive experiences throughout the sales journey</p>
                          </div>
                          <a href="/" className='btn btn-full btn-prime'>Get Started</a>
                        </div>
                      </div>
                    </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='row tabs-design-one'>
                      <div className='col-lg-6 align-self-center'>
                        <div className='tabs-design-one-left'>
                          <span>Marketing Cloud</span>
                          <h3>Speak Directly to Customers with Marketing Cloud </h3>
                          <p>Understand your customers better through unified data and make smarter decisions leveraging AI to maximize conversions. Use marketing automation to connect your marketing with sales and enhance customer loyalty.</p>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='tabs-design-one-right'>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Capture relevant engagement across devices</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Utilize the full potential of your customer data</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Raise performance and optimize campaigns with AI</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Increase marketing ROI and customer engagement</p>
                          </div>
                          <a href="/" className='btn btn-full btn-prime'>Get Started</a>
                        </div>
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='row tabs-design-one'>
                      <div className='col-lg-6 align-self-center'>
                        <div className='tabs-design-one-left'>
                          <span>Commerce Cloud</span>
                          <h3>Increase marketing ROI and customer engagement</h3>
                          <p>Simplify your e-commerce business and increase revenue by tracking customer data across the sales journey. From storefront setup to conversions, utilize conversational AI to enhance the shopping experience.</p>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='tabs-design-one-right'>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Set up your ideal store that grows over time</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Get an AI-embedded advanced vendor dashboard</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Make two-way links between online and offline stores</p>
                          </div>
                          <div className='tabs-design-one-list'>
                            <i className="bi bi-check-lg"></i>
                            <p>Connect your Sales, Service, and Marketing modules</p>
                          </div>
                          <a href="/" className='btn btn-full btn-prime'>Get Started</a>
                        </div>
                      </div>
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-secnadry cloude-bg'>
        <div className='cloud-images-1'>
          <Image src="/img/icons/cloud-top.png" width={288} height={218} alt="cloud-top" />
        </div>
        <div className='cloud-images-2'>
          <Image src="/img/icons/cloud-bottom.png" width={155} height={112} alt="cloud-bottom" />
        </div>
        <div className='container'>
          <div className='row colo-design-one'>
            <div className='col-lg-5'>
              <div className='colo-design-left'>
                <span>Industries</span>
                <h3>Power any business of any size with Salesforce</h3>
                <p>Get a perfectly tailored solution for any industry, regardless of specific needs, to support its growth in every way and make a bigger impact.</p>
                <h4>We specialize in major industries; some are listed here.</h4>
                <a href="/contact-us/" className='btn btn-prime'>Explore more Indsutries</a>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='colo-design-right'>
                    <a href="/">
                      <div className='design-list'>

                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                        >
                          <path
                            d="M7.111 25.244v1.645c0 .315-.106.579-.32.792-.212.213-.476.32-.791.32h-.889c-.315 0-.579-.107-.792-.32A1.075 1.075 0 0 1 4 26.889V16.133l2.822-8.355c.119-.34.32-.611.606-.811.285-.2.609-.3.972-.3h15.2c.363 0 .687.1.972.3.285.2.487.47.606.81L28 16.134V26.89c0 .315-.107.579-.32.792-.212.213-.476.32-.791.32h-.911c-.319 0-.58-.107-.784-.32a1.1 1.1 0 0 1-.305-.792v-1.645H7.11zM7.09 13.911H24.91L23.222 8.89H8.778l-1.69 5.022zm2.595 7.556c.53 0 .973-.182 1.333-.545a1.81 1.81 0 0 0 .539-1.322c0-.53-.182-.982-.545-1.354a1.78 1.78 0 0 0-1.322-.557c-.531 0-.982.185-1.354.556-.371.37-.557.82-.557 1.35 0 .53.185.974.556 1.333.37.36.82.539 1.35.539zm12.65 0c.53 0 .981-.182 1.353-.545.372-.363.557-.803.557-1.322 0-.53-.185-.982-.555-1.354a1.835 1.835 0 0 0-1.35-.557c-.53 0-.974.185-1.333.556-.36.37-.54.82-.54 1.35 0 .53.182.974.545 1.333.363.36.804.539 1.322.539zM6.221 23.022h19.556v-6.889H6.222v6.89z"
                            fill="#b3aba6"
                          />
                        </svg>
                        <span>Automotive</span>

                      </div>
                    </a>
                    <a href="/">
                      <div className='design-list'>

                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                        >
                          <path
                            d="M8.222 28.445c-1.639-1.63-2.863-3.477-3.673-5.542s-1.216-4.144-1.216-6.236c0-2.093.406-4.172 1.216-6.236.81-2.065 2.034-3.912 3.673-5.542l1.64 1.639a13.517 13.517 0 0 0-3.126 4.77c-.713 1.83-1.07 3.619-1.07 5.369 0 1.75.357 3.54 1.07 5.368a13.516 13.516 0 0 0 3.125 4.77l-1.639 1.64zm3.89-3.89a9.894 9.894 0 0 1-2.466-3.708c-.542-1.426-.813-2.82-.813-4.18 0-1.361.271-2.755.813-4.18a9.894 9.894 0 0 1 2.465-3.71l1.64 1.64c-.816.787-1.45 1.754-1.904 2.902-.453 1.149-.68 2.264-.68 3.348 0 .981.231 2.055.694 3.222.463 1.167 1.093 2.176 1.89 3.028l-1.64 1.639zm-.056 12.112 5.57-16.875a4.011 4.011 0 0 1-1.119-1.32c-.282-.527-.424-1.13-.424-1.805 0-1.093.38-2.019 1.14-2.778.759-.76 1.685-1.139 2.777-1.139 1.093 0 2.019.38 2.778 1.139.76.76 1.139 1.685 1.139 2.778 0 .676-.141 1.277-.424 1.805a4.012 4.012 0 0 1-1.118 1.32l5.57 16.875h-2.75l-1.167-3.611h-8.014l-1.208 3.61h-2.75zm4.847-6.39h6.194L20 20.89l-3.097 9.389zm10.986-5.721-1.639-1.64c.815-.786 1.45-1.754 1.903-2.902.454-1.148.68-2.264.68-3.347 0-.982-.231-2.056-.694-3.223-.463-1.166-1.092-2.176-1.889-3.027l1.639-1.64a9.977 9.977 0 0 1 2.43 3.71c.538 1.425.82 2.819.848 4.18 0 1.342-.276 2.731-.827 4.166a10.178 10.178 0 0 1-2.451 3.723zm3.889 3.889-1.639-1.64a13.872 13.872 0 0 0 3.111-4.77c.722-1.829 1.084-3.618 1.084-5.368 0-1.75-.362-3.54-1.084-5.368a13.873 13.873 0 0 0-3.11-4.771l1.638-1.64c1.639 1.63 2.863 3.478 3.674 5.543.81 2.064 1.215 4.143 1.215 6.236 0 2.11-.384 4.194-1.153 6.25-.769 2.055-2.014 3.898-3.736 5.527z"
                            fill="#b3aba6"
                          />
                        </svg>
                        <span>Communication</span>

                      </div>
                    </a>
                    <a href="/">
                      <div className='design-list'>

                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                        >
                          <path
                            d="M16.111 16.861 20 14.917l3.889 1.944V7.778H16.11v9.083zm-4.444 11.472V25H20v3.333h-8.333zM7.777 35c-.75 0-1.4-.276-1.95-.826C5.274 33.623 5 32.972 5 32.222V7.778c0-.75.275-1.4.826-1.952C6.377 5.276 7.028 5 7.778 5h24.444c.75 0 1.4.275 1.952.826.55.551.826 1.202.826 1.952v24.444c0 .75-.276 1.4-.826 1.952-.551.55-1.202.826-1.952.826H7.778zm0-2.778h24.445V7.778h-5.555V21.36L20 18.028l-6.667 3.333V7.778H7.778v24.444z"
                            fill="#b3aba6"
                          />
                        </svg>
                        <span>Consumer Goods</span>

                      </div>
                    </a>
                    <a href="/">
                      <div className='design-list'>

                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                        >
                          <path
                            d="M7.778 35a2.675 2.675 0 0 1-1.962-.816A2.675 2.675 0 0 1 5 32.222V7.778c0-.764.272-1.418.816-1.962A2.675 2.675 0 0 1 7.778 5h24.444c.764 0 1.418.272 1.962.816.544.544.816 1.198.816 1.962v5.11h-2.778v-5.11H7.778v24.444h24.444V27.14H35v5.083c0 .764-.272 1.418-.816 1.962a2.675 2.675 0 0 1-1.962.816H7.778zm14.389-7.028c-.871 0-1.617-.307-2.237-.922-.62-.614-.93-1.354-.93-2.217v-9.638c0-.864.31-1.603.93-2.217a3.063 3.063 0 0 1 2.237-.922h11.389c.87 0 1.616.307 2.236.922.62.614.93 1.353.93 2.216v9.64c0 .863-.31 1.602-.93 2.216a3.063 3.063 0 0 1-2.236.922h-11.39zm11.777-2.777V14.833H21.778v10.362h12.166zm-6.938-2.584c.728 0 1.344-.256 1.848-.77a2.567 2.567 0 0 0 .757-1.869c0-.717-.257-1.327-.77-1.83A2.54 2.54 0 0 0 27 17.39a2.54 2.54 0 0 0-1.84.753 2.463 2.463 0 0 0-.771 1.83c0 .733.254 1.356.763 1.87.51.513 1.127.77 1.854.77z"
                            fill="#b3aba6"
                          />
                        </svg>
                        <span>Financial Service</span>

                      </div>
                    </a>
                    <a href="/">
                      <div className='design-list'>

                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                        >
                          <path
                            d="M8.667 29.417V16.11h2.778v13.306H8.667zm10.055 0V16.11H21.5v13.306h-2.778zM3.333 34.972v-2.778h33.334v2.778H3.333zm25.223-5.555V16.11h2.777v13.306h-2.777zM3.333 13.333V10.75L20 1.64l16.667 9.111v2.583H3.333zm6.195-2.777h20.944L20 4.806l-10.472 5.75z"
                            fill="#b3aba6"
                          />
                        </svg>
                        <span>Government</span>

                      </div>
                    </a>
                    <a href="/">
                      <div className='design-list'>

                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                        >
                          <path
                            d="m13.056 37.5-2.778-2.083v-7.362H8.056c-.75 0-1.4-.275-1.952-.826-.55-.55-.826-1.201-.826-1.951V12.222H5c-.393 0-.723-.133-.99-.4a1.35 1.35 0 0 1-.399-.994c0-.394.133-.724.4-.988A1.35 1.35 0 0 1 5 9.444h5.277V6.111H9.167c-.394 0-.724-.134-.99-.4a1.351 1.351 0 0 1-.399-.994c0-.395.133-.724.4-.988a1.35 1.35 0 0 1 .989-.396h5c.393 0 .723.134.99.401.266.267.399.598.399.993s-.133.724-.4.988a1.35 1.35 0 0 1-.99.396h-1.11v3.333h5.278c.393 0 .723.134.99.401.265.267.398.598.398.993s-.133.724-.399.988a1.35 1.35 0 0 1-.99.396h-.277v13.056c0 .75-.276 1.4-.827 1.951-.55.551-1.201.826-1.951.826h-2.222V37.5zm-5-12.222h7.222v-3.056h-3.194a.933.933 0 0 1-.681-.292.933.933 0 0 1-.292-.68c0-.26.098-.486.292-.68a.932.932 0 0 1 .68-.292h3.195v-3.056h-3.194a.933.933 0 0 1-.681-.292.933.933 0 0 1-.292-.68c0-.26.098-.486.292-.68a.932.932 0 0 1 .68-.292h3.195v-3.056H8.056v13.056zM25 36.667c-.75 0-1.4-.276-1.951-.827-.551-.55-.826-1.201-.826-1.951v-11c0-.861.12-1.533.36-2.014.241-.482.533-.917.876-1.306.453-.5.777-.89.972-1.173.194-.283.291-.581.291-.896v-1.111h-.277c-.394 0-.724-.134-.99-.4a1.351 1.351 0 0 1-.4-.994c0-.395.137-.724.41-.988.274-.264.6-.396.98-.396h8.333c.394 0 .723.134.99.4.266.268.399.599.399.994s-.133.724-.4.988a1.35 1.35 0 0 1-.989.396H32.5v1.11c0 .297.116.612.347.945.232.334.58.75 1.042 1.25.343.39.613.81.813 1.264.199.454.298 1.098.298 1.93v11c0 .75-.275 1.401-.826 1.952-.551.551-1.202.827-1.952.827H25zm0-12.778h7.222v-1c0-.472-.134-.89-.402-1.25-.269-.361-.565-.74-.89-1.14a7.15 7.15 0 0 1-.888-1.374c-.213-.445-.32-.986-.32-1.625v-1.111H27.5v1.11c0 .612-.1 1.14-.298 1.584-.2.445-.489.903-.869 1.375-.323.398-.627.785-.91 1.16a2.059 2.059 0 0 0-.423 1.27v1zm0 5h7.222v-3.056H25v3.056zm0 5h7.222v-3.056H25v3.056z"
                            fill="#b3aba6"
                          />
                        </svg>
                        <span>Healthcare</span>

                      </div>
                    </a>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='colo-design-right'>
                    <a href="/">
                      <div className='design-list'>

                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                        >
                          <path
                            d="M19.972 35 8.028 28.472v-10L1.666 15 19.973 5l18.361 10v13.25h-2.778V16.583l-3.639 1.89v10L19.972 35zm0-13.167L32.528 15 19.972 8.25 7.472 15l12.5 6.833zm0 10.014 9.167-5.027v-6.765L19.972 25l-9.167-5v6.82l9.167 5.027z"
                            fill="#b3aba6"
                          />
                        </svg>
                        <span>Higher Education</span>

                      </div>
                    </a>
                    <a href="/">
                      <div className='design-list'>

                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                        >
                          <path
                            d="M3.333 36.667V16.625L15 11.667V15l8.334-3.361v5.028h13.333v20H3.333zm2.778-2.778H33.89V19.45H20.556v-3.7l-8.334 3.333v-3.277l-6.11 2.708v15.375zM18.611 30h2.778v-6.667h-2.778V30zm-6.666 0h2.777v-6.667h-2.777V30zm13.333 0h2.778v-6.667h-2.778V30zm11.389-13.333h-7.778l1.667-13.334H35l1.667 13.334z"
                            fill="#b3aba6"
                          />
                        </svg>
                        <span>Manufacturing</span>

                      </div>
                    </a>
                    <a href="/">
                      <div className='design-list'>

                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                        >
                          <path
                            d="M10.167 26.555h13.111v-5.194l6.583 5.194v-13.11l-6.583 5.194v-5.195H10.167v13.111zM6.11 33.334c-.75 0-1.4-.275-1.951-.826-.551-.551-.827-1.201-.827-1.951V9.444c0-.75.276-1.4.827-1.951.55-.55 1.201-.826 1.951-.826H33.89c.75 0 1.4.275 1.951.826.551.55.827 1.201.827 1.951v21.111c0 .75-.276 1.401-.827 1.952-.55.55-1.2.826-1.95.826H6.11zm0-2.777H33.89V9.444H6.111v21.111z"
                            fill="#b3aba6"
                          />
                        </svg>
                        <span>Media</span>

                      </div>
                    </a>
                    <a href="/">
                      <div className='design-list'>

                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                        >
                          <path
                            d="m26.833 21.222-6.861-6.694a12.46 12.46 0 0 1-2.109-2.632A6.02 6.02 0 0 1 17 8.75c0-1.49.502-2.766 1.507-3.826 1.004-1.06 2.243-1.59 3.715-1.59a5.02 5.02 0 0 1 2.556.673 7.838 7.838 0 0 1 2.055 1.715 7.837 7.837 0 0 1 2.056-1.715 5.021 5.021 0 0 1 2.555-.674c1.473 0 2.71.53 3.716 1.59 1.004 1.06 1.507 2.336 1.507 3.827 0 1.133-.288 2.18-.862 3.141a12.73 12.73 0 0 1-2.097 2.637l-6.875 6.694zm0-3.86 4.847-4.792a15.8 15.8 0 0 0 1.516-1.739 3.379 3.379 0 0 0 .693-2.081c0-.722-.232-1.343-.695-1.861a2.246 2.246 0 0 0-1.75-.778c-.5 0-.965.127-1.395.382-.431.255-.808.581-1.133.98L26.834 10 24.75 7.472a4.222 4.222 0 0 0-1.132-.979 2.695 2.695 0 0 0-1.396-.382c-.704 0-1.287.26-1.75.778-.463.518-.694 1.139-.694 1.861 0 .773.23 1.466.692 2.081.462.616.968 1.195 1.516 1.739l4.847 4.791zM10.972 31.388l12.389 3.555 10.194-3.194c-.046-.454-.257-.836-.632-1.146a1.997 1.997 0 0 0-1.312-.465H23c-.547 0-1.037-.032-1.472-.097a7.448 7.448 0 0 1-1.306-.32l-3.958-1.236.833-2.778 3.736 1.264c.361.12.755.213 1.18.278.427.065.95.102 1.57.111h1.556c0-.49-.16-.926-.48-1.305a2.835 2.835 0 0 0-1.16-.834l-9.305-3.5h-3.222v9.667zm-9.305 5.278V18.944h12.5c.163 0 .327.017.49.05.164.032.32.076.468.131l9.32 3.486c1.008.37 1.853.982 2.534 1.834a4.545 4.545 0 0 1 1.02 2.916h3.612c1.404 0 2.598.495 3.581 1.486.983.991 1.474 2.209 1.474 3.653v1.278l-13.138 4.055-12.556-3.555v2.389H1.667zm2.777-2.778h3.722V21.722H4.444V33.89z"
                            fill="#b3aba6"
                          />
                        </svg>
                        <span>NonProfit</span>

                      </div>
                    </a>
                    <a href="/">
                      <div className='design-list'>

                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                        >
                          <path
                            d="M11.855 36.639a2.982 2.982 0 0 1-2.195-.916 3.011 3.011 0 0 1-.91-2.201c0-.857.305-1.59.916-2.195a3.011 3.011 0 0 1 2.2-.91c.858 0 1.59.305 2.196.915.607.61.91 1.344.91 2.202 0 .857-.305 1.589-.915 2.195-.61.607-1.345.91-2.202.91zm16.667 0a2.982 2.982 0 0 1-2.196-.916 3.011 3.011 0 0 1-.91-2.201c0-.857.306-1.59.916-2.195a3.011 3.011 0 0 1 2.202-.91c.857 0 1.589.305 2.195.915.607.61.91 1.344.91 2.202 0 .857-.305 1.589-.916 2.195-.61.607-1.344.91-2.201.91zM9.944 9.417l4.39 9.11h11.888l5-9.11H9.944zm-1.36-2.778H33.14c.638 0 1.124.29 1.457.868.333.579.337 1.16.013 1.743l-5.722 10.306a3.58 3.58 0 0 1-1.203 1.277 2.985 2.985 0 0 1-1.63.473H13.5l-2.167 4H31.64v2.777H11.583c-1.194 0-2.07-.442-2.625-1.326-.555-.884-.56-1.831-.014-2.84l2.528-4.64L5.25 6.112H1.972V3.333h5.056L8.583 6.64z"
                            fill="#b3aba6"
                          />
                        </svg>
                        <span>Retail</span>

                      </div>
                    </a>
                    <a href="/">
                      <div className='design-list'>

                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                        >
                          <path
                            d="M10.25 35c-.398 0-.743-.123-1.035-.368a1.171 1.171 0 0 1-.437-.938v-3.472a4.48 4.48 0 0 1-1.584-1.896 6.074 6.074 0 0 1-.527-2.52V9.5c0-2.139 1.064-3.701 3.194-4.688 2.13-.986 5.518-1.479 10.167-1.479 4.666 0 8.05.486 10.152 1.459 2.102.972 3.153 2.541 3.153 4.708v16.305c0 .899-.176 1.739-.528 2.521a4.48 4.48 0 0 1-1.583 1.896v3.472c0 .38-.146.692-.438.938A1.556 1.556 0 0 1 29.75 35h-1.084c-.416 0-.77-.123-1.062-.368a1.171 1.171 0 0 1-.438-.938v-2.083H12.833v2.083c0 .38-.146.692-.437.938a1.596 1.596 0 0 1-1.063.368H10.25zm-.806-17.528h21.111V11H9.445v6.472zm4.334 9.417c.657 0 1.215-.23 1.673-.688a2.278 2.278 0 0 0 .688-1.673c0-.658-.23-1.216-.688-1.674a2.278 2.278 0 0 0-1.673-.687c-.658 0-1.216.229-1.674.687a2.278 2.278 0 0 0-.688 1.674c0 .657.23 1.215.688 1.673a2.278 2.278 0 0 0 1.674.688zm12.444 0c.657 0 1.215-.23 1.674-.688a2.278 2.278 0 0 0 .687-1.673c0-.658-.229-1.216-.687-1.674a2.278 2.278 0 0 0-1.674-.687c-.657 0-1.215.229-1.674.687a2.277 2.277 0 0 0-.687 1.674c0 .657.23 1.215.688 1.673a2.278 2.278 0 0 0 1.673.688zM9.694 8.222h20.667c-.583-.639-1.734-1.15-3.451-1.535-1.718-.384-4.003-.576-6.855-.576-3.175 0-5.576.183-7.201.549-1.625.365-2.678.886-3.16 1.562zm3.14 20.611h14.332c.954 0 1.758-.358 2.41-1.076.653-.718.98-1.553.98-2.507v-5H9.443v5c0 .954.327 1.79.98 2.507.652.717 1.455 1.076 2.41 1.076z"
                            fill="#b3aba6"
                          />
                        </svg>
                        <span>Transporataion</span>

                      </div>
                    </a>
                  </div>
                </div>
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
                <span>About CRM Frontier</span>
                <h2>CRM Frontier:<br />Your Trusted Salesforce Partner</h2>
                <p>We enable the Salesforce to work for you. Build relationships, transform the customer experience, and drive uninterrupted growth with our expert guidance.<br /><br />Don't settle for just a Salesforce partner. We deliver results. Our Salesforce experts combine experience, proven solutions, and advanced technology to harness the power of CRM and transform your business.</p>
              </div>
            </div>
          </div>

          <div
            className="row box-icon-box-wraper"
          >
            <div className="col-lg-4">
              <div className='box-icon-box'>
                <Image src="/img/icons/seamless-implementation-icon.png" alt="seamless-implementation-icon" width={64} height={64} />
                <h3>Seamless Implementation</h3>
                <p>Our experts ensure a successful and efficient Salesforce implementation to help you achieve more ROI with existing resources.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className='box-icon-box'>
              <Image src="/img/icons/proven-expertise-icon.png" alt="proven-expertise-icon" width={64} height={64} />
                <h3>Proven Expertise</h3>
                <p>With a proven track record, our certified Salesforce experts are utilizing their expertise to optimize and maximize CRM ROI.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className='box-icon-box'>
              <Image src="/img/icons/tailored-approach-icon.png" alt="tailored-approach-icon" width={64} height={64} />
                <h3>Tailored Approach</h3>
                <p>We understand the business and its unique requirements to offer you a sustainable solution for growth and continuous profitability.</p>
              </div>
            </div>
          </div>


        </div>
      </section>




    </>
  );
}
