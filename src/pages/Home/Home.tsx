import Nav from '../../components/Navigation/Nav';
import Header from '../../components/Header/Header';
import { Button } from 'react-bootstrap';
import React, { SyntheticEvent, useState } from 'react';
import axios from 'axios';

interface Props {
    // 👇️ using JSX.Element type
    comp: JSX.Element;
}

const Wrapper: React.FunctionComponent<Props> = props => {
    const { comp: Comp } = props;
    return <div>{Comp}</div>;
};

function AboutMe() {
    return (
        <div className="container-fluid">
            <div id="about" className="row about-section">
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Who am I ?</h3>
                    <span className="line mb-5"></span>
                    <h5 className="mb-3">A Software Engineer</h5>
                    <p className="mt-20">Having more than 3-year experience working in fintech corporation, well-versed in technology and writing code to create systems that are reliable and user-friendly. I am committed to striving to utilize my knowledge and expertise for optimal engineering results.</p>
                    <a className="btn btn-outline-danger" href='/files/my-cv.pdf' download="thanhhc-cv.pdf"><i className="icon-down-circled2 "></i>Download My CV</a>
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Personal Info</h3>
                    <span className="line mb-5"></span>
                    <ul className="mt40 info list-unstyled">
                        <li><span>Birthdate</span> : 13/07/1998</li>
                        <li><span>Email</span> : hcthanh137@gmail.com</li>
                        <li><span>Phone</span> : +84-704464412</li>
                        <li><span>Address</span> :  District 5, Ho Chi Minh City, Vietnam</li>
                    </ul>
                    <ul className="social-icons pt-3">
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-facebook" aria-hidden={true}></i></a></li>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-twitter" aria-hidden={true}></i></a></li>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-google" aria-hidden={true}></i></a></li>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-instagram" aria-hidden={true}></i></a></li>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-github" aria-hidden={true}></i></a></li>
                    </ul>
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">My Expertise</h3>
                    <span className="line mb-5"></span>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Backend Developer</h6>
                            <p className="subtitle">NodeJS, MongoDB, JavaScript/TypeScript</p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Frontend Developer</h6>
                            <p className="subtitle">ReactJS, NextJS, HTML5, CSS/SCSS</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Resume() {
    return (
        <section className="section" id="resume">
            <div className="container">
                <h2 className="mb-5"><span className="text-danger">My</span> Resume</h2>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="mt-2">
                                    <h4>Expertise</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">2020 - Present</h6>
                                <p>PayME Technology JSC
                                    <br />
                                    Backend Developer - Core Member
                                </p>
                                <p className="subtitle">Utilizing <span style={{ fontWeight: 'bold' }}>NodeJS</span> and <span style={{ fontWeight: 'bold' }}>MongoDB</span>, driving the seamless provision of digital payment and financial services
                                    <br />
                                    Led a small team of 3 members, providing mentorship, guidance, and technical expertise to foster growth and enhance performance.
                                    <br />
                                    Maintained clear documentation of system architecture, APIs, and processes, enhancing team productivity and facilitating knowledge sharing.
                                </p>
                                <hr />
                                <h6 className="title text-danger">2020 - Present</h6>
                                <p>PayME Technology JSC
                                    <br />
                                    Frontend Developer
                                </p>
                                <p className="subtitle">Designed and developed the <a href="https://payme.vn">PayME Website</a> using <span style={{ fontWeight: 'bold' }}>HapiJS</span>
                                    <br />
                                    Utilized <span style={{ fontWeight: 'bold' }}>NextJS</span> to develop the <a>Back-Office Website</a>
                                    <br />
                                    Developed an innovative <a href="https://vc.payme.vn/thanhhc">Online Business Card</a> using <span style={{ fontWeight: 'bold' }}>ThreeJS, HTML, CSS/SCSS</span> and <span style={{ fontWeight: 'bold' }}>VanillaJS</span>
                                </p>
                                <hr />
                                <h6 className="title text-danger">2015 - 2016</h6>
                                <p>FPT Telecom
                                    <br />
                                    Frontend Developer Internship
                                </p>
                                <p className="subtitle">Completed a dynamic internship as a Frontend Developer, contributing to the development of innovative projects
                                    at FPT Telecom.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="mt-2">
                                    <h4>Education</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">2016 - 2020</h6>
                                <p> University of Science - VNUHCM
                                    <br />
                                    B.E Computer Science</p>
                                <p className="subtitle">GPA: 3.21/4
                                    <br />
                                    English: Toefl ITP - 533/677
                                </p>
                                <hr />
                                <h6 className="title text-danger">2013 - 2016</h6>
                                <p> Luong The Vinh Highschool
                                    <br />
                                    Highschool Degree</p>
                                <p className="subtitle">
                                    Achievements:
                                    <br />
                                    2016
                                    <br />
                                    April Olympiad in Maths' Bronze Medal
                                    <br />
                                    2014
                                    <br />
                                    Young Cycling Competition's Bronze Medal
                                    <br />
                                    Young Informatics' Consolation Prize
                                    <br />
                                    2013
                                    <br />
                                    Excellent Student of Informatics' Bronze Medal

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="pull-left">
                                    <h4 className="mt-2">Skills</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body pb-2">
                                <h6>JavaScript / TypeScript</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "95%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <h6>MongoDB</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "90%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <h6>ReactJS / NextJS</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "85%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <h6>HTML5 &amp; CSS3</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "85%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <div className="pull-left">
                                    <h4 className="mt-2">Languages</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body pb-2">
                                <h6>Vietnamese</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "100%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <h6>English</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "80%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

function Portfolio() {
    const [filter, setFilter] = useState('backend');
    const Content = ({ filter }: { filter: string }) => {
        console.log('filter', filter)
        let result;
        switch (filter) {
            case 'backend':
                result =
                    <div className="portfolio-container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="portfolio-item">
                                    <img src="/images/web-1.jpg" className="img-fluid" alt="Ewallet" />
                                    <div className="content-holder">
                                        <div className="text-holder">
                                            <h6 className="title">WEB</h6>
                                            <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>;
                break;
            case 'frontend':
                result = <div className="portfolio-container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="portfolio-item">
                                <img src="/images/web-2.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                                <div className="content-holder">
                                    <a className="img-popup" href="/images/web-2.jpg"></a>
                                    <div className="text-holder">
                                        <h6 className="title">WEB</h6>
                                        <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>;
                </div>
                break;
            case 'other':
                result = <div className="portfolio-container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="portfolio-item">
                                <img src="/images/advertising-2.jpg" className="img-fluid" alt="" />
                                <div className="content-holder">
                                    <div className="text-holder">
                                        <h6 className="title">ADVERSTISING</h6>
                                        <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;
                break;
            default:
                result = <></>
                break;
        }
        console.log('result', result);
        return result
    }

    return (
        <section className="section bg-custom-gray" id="portfolio">
            <div className="container">
                <h1 className="mb-5"><span className="text-danger">My</span> Portfolio</h1>
                <div className="portfolio">
                    <div className="filters">
                        <Button onClick={e => setFilter('backend')} >
                            Backend
                        </Button>
                        <Button onClick={e => setFilter('frontend')}>
                            Frontend
                        </Button>
                        <Button onClick={e => setFilter('other')}>
                            Other
                        </Button>
                    </div>
                    <Wrapper comp={<Content filter={filter} />} />
                </div>
            </div>
        </section >
    )
}

function Blog() {
    return (
        <section className="section" id="blog">
            <div className="container">
                <h2 className="mb-5"><span className="text-danger">My</span> Blogs</h2>
                <div className="row">
                    <div className="blog-card">
                        <div className="img-holder">
                            <img src="/images/blog1.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                        </div>
                        <div className="content-holder">
                            <h6 className="title">Consectetur adipisicing elit</h6>

                            {/* <p className="post-details">
                                <a href="#">By: Admin</a>
                                <a href="#"><i className="ti-heart text-danger"></i> 234</a>
                                <a href="#"><i className="ti-comment"></i> 123</a>
                            </p> */}

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium neque numquam mollitia modi quasi distinctio.</p>

                            <p><b>Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid consequuntur repudiandae.</b></p>
                            <p>Magnam in repellat enim harum omnis aperiam! Explicabo illo, commodi, dolor blanditiis cupiditate harum nisi vero accusamus laudantium voluptatibus dolores quae obcaecati.</p>

                            <a href="#" className="read-more">Read more <i className="ti-angle-double-right"></i></a>
                        </div>
                    </div>

                    <div className="blog-card">
                        <div className="img-holder">
                            <img src="/images/blog2.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                        </div>
                        <div className="content-holder">
                            <h6 className="title">Explicabo illo</h6>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro quisquam vitae exercitationem aliquid, minus eos laborum repudiandae, cumque debitis iusto omnis praesentium? Laborum placeat sit adipisci illum tempore maxime, esse qui quae? Molestias excepturi corporis similique doloribus. Esse vitae earum architecto nulla non dolores illum at perspiciatis quod, et deleniti cupiditate reiciendis harum facere, delectus eum commodi soluta distinctio sit repudiandae possimus sunt. Ipsum, rem.</p>

                            <a href="#" className="read-more">Read more <i className="ti-angle-double-right"></i></a>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="img-holder">
                            <img src="/images/blog3.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                        </div>
                        <div className="content-holder">
                            <h4 className="title">Porro Quisqua</h4>

                            <p> consectetur adipisicing elit. Impedit excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro quisquam vitae exercitationem aliquid, minus eos laborum repudiandae, cumque debitis iusto omnis praesentium? Laborum placeat sit adipisci illum tempore maxime, esse qui quae? Molestias excepturi corporis similique doloribus. Esse vitae earum architecto nulla non dolores illum at perspiciatis quod, et deleniti cupiditate reiciendis harum facere, delectus eum commodi soluta distinctio sit repudiandae possimus sunt. Ipsum, rem.</p>

                            <a href="#" className="read-more">Read more <i className="ti-angle-double-right"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:3000/api/sendMail', {
            email,
            message,
            name
        });
    }
    return (
        <div className="section contact" id="contact">
            <div id="map" className="map"></div>
            <div className="container">
                <h2 className="mb-5"><span className="text-danger">My</span> Contact</h2>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="contact-form-card">
                            <h4 className="contact-title">Send a message</h4>
                            <form onSubmit={submit}>
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Name *" required
                                        onChange={e => setName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="email" placeholder="Email *" required
                                        onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" id="" placeholder=" Message *" rows={7} required
                                        onChange={e => setMessage(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="form-group ">
                                    <button type="submit" className="form-control btn btn-primary" >Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-info-card">
                            <h4 className="contact-title">Get in touch</h4>
                            <div className="row mb-2">
                                <div className="col-1 pt-1 mr-1">
                                    <i className="ti-mobile icon-md"></i>
                                </div>
                                <div className="col-10 ">
                                    <h6 className="d-inline">Phone : <br /> <span className="text-muted">+84-704464412</span></h6>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-1 pt-1 mr-1">
                                    <i className="ti-map-alt icon-md"></i>
                                </div>
                                <div className="col-10">
                                    <h6 className="d-inline">Address :<br /> <span className="text-muted">District 5, Ho Chi Minh City, Vietnam</span></h6>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-1 pt-1 mr-1">
                                    <i className="ti-envelope icon-md"></i>
                                </div>
                                <div className="col-10">
                                    <h6 className="d-inline">Email :<br /> <span className="text-muted">hcthanh137@gmail.com</span></h6>
                                </div>
                            </div>
                            <ul className="social-icons pt-4">
                                <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-facebook" aria-hidden={true}></i></a></li>
                                <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-twitter" aria-hidden={true}></i></a></li>
                                <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-google" aria-hidden={true}></i></a></li>
                                <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-instagram" aria-hidden={true}></i></a></li>
                                <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-github" aria-hidden={true}></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function Home() {
    return (
        <div>
            <Header />
            <Nav />
            <AboutMe />
            <Resume />
            <Portfolio />
            <Blog />
            <Contact />
        </div>
    );
}


