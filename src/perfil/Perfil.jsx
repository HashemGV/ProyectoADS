import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import classroom from '../assets/Google_Classroom_Logo.png';
import teams from '../assets/Microsoft_office_Teams.png';
import './Perfil.css';

export default function PersonalProfile() {
  return (
    <div class="contenedor-grandote">
        <div class="card">
            <img src="./src/assets/Perfil.png" />
            <div>
                <h2>Nombre xD</h2>
                <h3>Usuario:</h3>
                <div className='botones-contenedor'>
                    <a className='btn-primary' href='' role='button'>
                        Google Classroom
                    </a>
                    <a className='btn-primary' href='' role='button'>
                        Microsoft Teams
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}