import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import Bill1 from '../images9/Bill1.jpg';
import Bill2 from '../images9/Bill2.jpg';
import Bill3 from '../images9/Bill3.jpg';
import Bill4 from '../images9/Bill4.jpg';
import Bill5 from '../images9/Bill5.jpg';
import Bill6 from '../images9/Bill6.jpg';
import Bill7 from '../images9/Bill7.png';
import Bill8 from '../images9/Bill8.jpg';
import Bill9 from '../images9/Bill9.jpg';
import React from "react";
import videoBill from '../video/videoBill.mp4';

export const BillGates = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    }
    return (
        
        <div className="container my-5">
            <h3 className="tituloPrincipal">B I L L__G A T E S</h3>
            <div className="row">
                <div className="col-md-8">
                <p style={{ textAlign: 'justify' }}>
                    Bill Gates, cuyo nombre completo es William Henry Gates III, es un empresario y filántropo estadounidense. Nació el 28 
                    de octubre de 1955 en Seattle, Washington.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Gates es conocido principalmente como el co-fundador de Microsoft Corporation, una de las compañías de tecnología 
                    más grandes y exitosas del mundo. Junto con su amigo Paul Allen, Gates fundó Microsoft en 1975 con el objetivo 
                    de desarrollar software para computadoras personales.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Bajo el liderazgo de Gates, Microsoft se convirtió en un líder en la industria del software, especialmente con el 
                    éxito de su sistema operativo MS-DOS y posteriormente con Windows. Gates fue un visionario en la visión de que las 
                    computadoras personales serían una herramienta indispensable en la vida cotidiana y trabajó para hacer que el software 
                    de Microsoft fuera ampliamente accesible y utilizado.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Como resultado del éxito de Microsoft, Gates se convirtió en una de las personas más ricas del mundo. Sin embargo, 
                    a medida que avanzaba en su carrera, comenzó a dedicar más tiempo y recursos a la filantropía. En 2000, junto con 
                    su esposa Melinda Gates, fundó la Bill & Melinda Gates Foundation, una organización benéfica que se dedica a mejorar 
                    la educación y la salud en todo el mundo, y a aliviar la pobreza.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    La labor filantrópica de Gates ha tenido un impacto significativo en áreas como la erradicación de enfermedades, 
                    la mejora de la educación y el acceso a la tecnología en comunidades desfavorecidas. Aunque Gates dejó su cargo 
                    como CEO de Microsoft en 2000, sigue siendo una figura influyente en la industria de la tecnología y continúa 
                    participando en proyectos de innovación y filantropía. Su visión empresarial y su enfoque en la filantropía han 
                    dejado una marca duradera en el mundo de la tecnología y en los esfuerzos por abordar los desafíos globales.
                </p>
                </div>
                <div className="col-md-4">
                    <img src={Bill1} alt="Bill1" className="imgPrincipal" />
                </div>
                <section className="skill" id="skills">
                    <Container>
                        <Row>
                            <Col>
                                <div className="skill-bx">
                                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                        <div className="item">
                                            <img src={Bill2} alt="Bill2"/>
                                            <h5>Bill Gates antes de fundar la Empresa Microsoft</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Bill3} alt="Bill3"/>
                                            <h5>Microsoft sede central en Redmond, Washington (Estados Unidos).</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Bill4} alt="Bill4"/>
                                            <h5>Paul Allen y Bill Gates 1970, escuela Lakeside School</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Bill5} alt="Bill5"/>
                                            <h5>Windows 1.0, primera versión del sistema operativo de la línea Microsoft Windows</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Bill6} alt="Bill6"/>
                                            <h5>Caja de Windows 3.1 versión japonesa</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Bill7} alt="Bill7"/>
                                            <h5>Diferentes versiones de Windows a lo largo del tiempo</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Bill8} alt="Bill8"/>
                                            <h5>El teléfono Microsoft Lumia 650, fue el último modelo de la gama Lumia.</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Bill9} alt="Bill9"/>
                                            <h5>La Xbox Series X lanzada a finales de 2020</h5>
                                        </div>
                                    </Carousel>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <div className="video-box">
                                <video className="video-frame" controls>
                                    <source src={videoBill} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        
    )
};
  
export default BillGates;