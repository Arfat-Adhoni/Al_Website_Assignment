import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menu from './Menu';


const Home = () => {
    const backgroundImageUrl = 'https://cdn.vectorstock.com/i/preview-1x/58/16/ai-eye-vector-29445816.jpg';

    return (
        
    <div>
      <div style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', minHeight: '100vh' }}>
        <Container fluid className="d-flex flex-column justify-content-start align-items-start" style={{ padding: '170px', color: 'white', fontFamily: '"Times New Roman", Times, serif', fontWeight: 'bold' }}>
          <h1 style={{ color: '#ffffff', fontFamily: 'Neue Haas Grostesk"', fontSize: '48px', textAlign: 'left' }}>Quantum Pulse intelligence</h1>
         <div style={{width:'60%'}}>
         <p style={{ color: '#ffffff', fontFamily: 'Source Sans Pro', fontSize: '24px', textAlign: 'left' }}>
            The industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
         </div>
          <div style={{ textAlign: 'left', marginTop:'80px' }}>
            <Link to="/ContactUs">
              <Button variant="light" size="lg" style={{ marginRight: '10px', backgroundColor: '#ff6600', color: 'white', padding: '15px', border: 'none' }}>
               Request a Demo
              </Button>
            </Link>
            <Link to="/">
              <Button variant="light" size="lg" style={{ backgroundColor: '#ff6600', padding: '15px', color: 'white', border: 'none' }}>
                See Use Cases
              </Button>
            </Link>
          </div>


          
         
        </Container>


      </div>

      <div >
          <Menu></Menu>
          </div>
    </div>
  );
}

export default Home;

