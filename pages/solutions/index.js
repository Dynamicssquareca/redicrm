import Head from 'next/head';
import React from 'react';
import Image from 'next/image';

const Index = () => {
  return (

    <>
      <Head>
        <title>Salesforce Cloud Solutions | CRM Frontier</title>
        <link rel="canonical" href="https://www.crmforceplus.com/solutions/" />
        <meta
          name="description"
          content="Salesforce Solutions streamline business operations, enhancing sales, service, and marketing with AI-driven automation, real-time insights, and seamless customer engagement."
        />
        <meta property="og:locale" content="US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Salesforce Cloud Solutions | CRM Frontier" />
        <meta property="og:description" content="Salesforce Solutions streamline business operations, enhancing sales, service, and marketing with AI-driven automation, real-time insights, and seamless customer engagement." />
        <meta property="og:url" content="https://www.crmforceplus.com/solutions/" />
        <meta property="og:site_name" content="CRM Frontier " />
        <meta property="og:image" content="https://www.crmforceplus.com/img/feature/Homepage.jpg" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CrmforcePlus" />
        <meta name="twitter:title" content="Salesforce Cloud Solutions | CRM Frontier" />
        <meta name="twitter:description" content="Salesforce Solutions streamline business operations, enhancing sales, service, and marketing with AI-driven automation, real-time insights, and seamless customer engagement." />
        <meta name="twitter:image" content="https://www.crmforceplus.com/img/feature/Homepage.jpg" />
      </Head>
      <section className="hero-bg-one">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="hero-ui-one">
                <div className="absolut-img-one">
                  <Image src="/img/icons/cloud-hero-big.png" alt="cloud-hero-big" width={462} height={431} priority />
                </div>
                <h1>Solutions</h1>
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
      <section className="service p-top-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-style-one">
                <span>Our Solutions</span>
                <h2>Supercharge your Sales <br />and Customer Service with CRMForce Plus</h2>
                <p>Get comprehensive and reliable services to get your Salesforce up and running. </p>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-stretch">
            {/* <ServiceBox jsonDataUrl="datanew/ne.json" /> */}
            <div className="col-lg-3 d-flex">
              <div className="service-box-one flex-fill">
                <a href="/solutions/small-business/">
                  <div className="service-box-head">
                    <figure>
                      <img src="/img/icons/icons-1.png" alt="Salesforce Implementation" width={36} height={36} />
                    </figure>
                    <div className="service-box-title">
                      <h3>Small Business</h3>
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
                <a href="/solutions/sales-cloud/">
                  <div className="service-box-head">
                    <figure>
                      <img src="/img/icons/icons-2.png" alt="Salesforce Implementation" width={36} height={36} />
                    </figure>
                    <div className="service-box-title">
                      <h3>Sales Cloud</h3>
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
                <a href="/solutions/service-cloud/">
                  <div className="service-box-head">
                    <figure>
                      <img src="/img/icons/icons-3.png" alt="Salesforce Implementation" width={36} height={36} />
                    </figure>
                    <div className="service-box-title">
                      <h3>Service Cloud</h3>
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
                <a href="/solutions/marketing-cloud/">
                  <div className="service-box-head">
                    <figure>
                      <img src="/img/icons/icons-4.png" alt="Salesforce Implementation" width={36} height={36} />
                    </figure>
                    <div className="service-box-title">
                      <h3>Marketing Cloud</h3>
                    </div>
                  </div>
                  <div className="service-box-contant">
                    <p>Optimize and enhance Salesforce performance to meet business requirements based on changing demands with the reliable Salesforce consulting partner.</p>
                    <span>Get Started <i className="bi bi-arrow-right-circle-fill"></i></span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 d-flex" style={{ marginTop: '20px' }}>
              <div className="service-box-one flex-fill">
                <a href="/solutions/commerce-cloud/">
                  <div className="service-box-head">
                    <figure>
                      <img src="/img/icons/icons-4.png" alt="Salesforce Implementation" width={36} height={36} />
                    </figure>
                    <div className="service-box-title">
                      <h3>Commerce Cloud</h3>
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
    </>

  );
}

export default Index;
