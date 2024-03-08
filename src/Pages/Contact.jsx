import React from 'react';
import { Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="contact" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg')", minHeight: '100vh', display: 'flex', justifyContent: 'right', alignItems: 'center', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Container style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '30px', borderRadius: '10px' }}>
                <h1 className="text-center mb-4">Contact Us</h1>
                <div className="row ml-10">
                    <div className="col-md-6">
                        <div className="contact-details mb-4">
                            <h2>Email:</h2>
                            <p>Send us an email at <a href="mailto:info@example.com">misba@gmail.com</a></p>
                        </div>
                        <div className="contact-details mb-4">
                            <h2>Phone:</h2>
                            <p>Give us a call at 7022926967</p>
                        </div>
                        <div className="contact-details mb-4">
                            <h2>Address:</h2>
                            <p>Visit us at 123 MG Street, Bridge Road , Bangalore</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-details mb-4">
                            <h2>Social Media:</h2>
                            <ul>
                                <li><a href="https://twitter.com/ai_company">Twitter</a></li>
                                <li><a href="https://www.linkedin.com/company/ai_company">LinkedIn</a></li>
                                <li><a href="https://www.facebook.com/ai_company">Facebook</a></li>
                            </ul>
                        </div>
                        <div className="contact-details mb-4">
                            <h2>Feedback:</h2>
                            <p>We welcome your feedback! Fill out our feedback form <a href="/feedback">here</a>.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
