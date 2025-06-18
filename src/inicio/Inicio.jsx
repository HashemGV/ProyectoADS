import React from 'react';
import './Inicio.css';
import logo from '../assets/logos.png'; 
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                  Perfil
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Opciones</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <div className='p-5 text-center bg-light'>
        <img src={logo} alt="CrosStudy Logo" style={{ width: '250px', height: '250px' }} />
        <h4 className='mb-3'>Conecta tus cuentas:</h4>
      </div>
      <div className='botones-contenedor'>
        <a className='btn-primary' href='' role='button'>
          Google Classroom
        </a>
        <a className='btn-primary' href='' role='button'>
          Microsoft Teams
        </a>
      </div>
    </header>
  );
}