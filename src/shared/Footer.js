import React from 'react'
import { Row, Col } from './layout';
import ContactForm from './ContactForm';

const Footer = () => {
    return (<footer className="page-footer">
          <div className="container">
            <Row>
              <Col size="col l6 s12">
                <ContactForm />
              </Col>
            </Row>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Leon Watson
            </div>
          </div>
        </footer>)
}

export default Footer