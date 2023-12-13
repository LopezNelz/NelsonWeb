import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import Alan1 from '../images6/Alan1.gif';
import Alan2 from '../images6/Alan2.png';
import Alan3 from '../images6/Alan3.jpg';
import Alan4 from '../images6/Alan4.jpg';
import React from "react";
import videoAlan from '../video/videoAlan.mp4';

export const AlanCooper = () => {
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
            <h3 className="tituloPrincipal">A L A N__C O O P E R</h3>
            <div className="row">
                <div className="col-md-8">
                <p style={{ textAlign: 'justify' }}>
                    Alan Cooper es un diseñador de interacción y pionero en el campo de la experiencia de usuario (UX). Nació el 3 de 
                    junio de 1952 en Los Ángeles, California, Estados Unidos. Es reconocido por su enfoque centrado en el usuario y su 
                    contribución al diseño de software.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Cooper es conocido por acuñar el término "personas" en el contexto del diseño de interacción. En su libro "The Inmates 
                    Are Running the Asylum" (1999), introdujo el concepto de crear personajes ficticios que representan a los usuarios 
                    objetivo para comprender mejor sus necesidades, comportamientos y metas. Estas personas se utilizan para informar 
                    y guiar el proceso de diseño y desarrollo de productos, centrándose en las necesidades reales de los usuarios.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Además de su trabajo en el desarrollo de metodologías de diseño centradas en el usuario, Cooper también es el creador 
                    de Visual Basic, un popular lenguaje de programación utilizado para desarrollar aplicaciones de Windows. Cooper fundó 
                    la empresa de diseño de software Cooper Interaction Design en 1992, que se dedica a la creación de experiencias de 
                    usuario intuitivas y efectivas.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    A lo largo de su carrera, Cooper ha promovido la idea de que los diseñadores deben abogar por los usuarios y trabajar 
                    para resolver los problemas reales que enfrentan en lugar de simplemente enfocarse en la tecnología. Ha sido un 
                    defensor del diseño centrado en el usuario y ha influenciado a muchos profesionales en el campo de la experiencia de usuario.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Alan Cooper ha escrito varios libros, entre ellos:
                </p>
                <p style={{ textAlign: 'justify', textIndent: '30px' }}>
                    - "The Inmates Are Running the Asylum: Why High-Tech Products Drive Us Crazy and How to Restore the Sanity" (1999): 
                    En este libro, Cooper argumenta que los problemas en el diseño de software se deben a la falta de enfoque en las 
                    necesidades de los usuarios y propone un enfoque centrado en el usuario para mejorar la calidad de los productos tecnológicos.
                </p>
                <p style={{ textAlign: 'justify', textIndent: '30px' }}>
                    - "About Face: The Essentials of Interaction Design" (2003): En esta obra, Cooper y su equipo presentan principios y prácticas 
                    fundamentales para el diseño de interacción efectivo, centrándose en la creación de interfaces intuitivas y agradables para los usuarios.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Alan Cooper ha dejado una marca significativa en el campo del diseño de interacción y la experiencia de usuario, y su enfoque 
                    centrado en el usuario ha influido en la forma en que se diseñan y desarrollan productos digitales en la actualidad.
                </p>
                </div>
                <div className="col-md-4">
                    <img src={Alan1} alt="Alan1" className="imgPrincipal" />
                </div>
                <section className="skill" id="skills">
                    <Container>
                        <Row>
                            <Col>
                                <div className="skill-bx">
                                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                        <div className="item">
                                            <img src={Alan2} alt="Alan2"/>
                                            <h5>pionero en el campo de la experiencia de usuario (Diseño UX)</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Alan3} alt="Alan3"/>
                                            <h5>"Acerca de la cara: los fundamentos del diseño de interacción" (2003)</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Alan4} alt="Alan4"/>
                                            <h5>Lenguaje de programacion Visual Basic</h5>
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
                                    <source src={videoAlan} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        
    )
};
  
export default AlanCooper;