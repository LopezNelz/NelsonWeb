import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import Ritchie1 from '../images3/Ritchie1.jpg';
import Ritchie2 from '../images3/Ritchie2.jpg';
import Ritchie3 from '../images3/Ritchie3.jpg';
import Ritchie4 from '../images3/Ritchie4.jpg';
import Ritchie5 from '../images3/Ritchie5.jpg';
import Ritchie6 from '../images3/Ritchie6.jpg';
import Ritchie7 from '../images3/Ritchie7.jpg';
import React from "react";
import videoRitchie from '../video/videoRitchie.mp4';
export const DennisRitchie = () => {
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
            <h3 className="tituloPrincipal">D E N N I S__R I T C H I E</h3>
            <div className="row">
                <div className="col-md-8">
                <p style={{ textAlign: 'justify' }}>
                    Estadounidense (1941-2011). Colaboró en el diseño y desarrollo del sistema operativo Unix en 1969 junto con Ken 
                    Thompson y Douglas McIlroy, un SO portable, multitarea y multiusuario, que ha sentado las bases de los sistemas 
                    operativos modernos, como GNU/Linux y Mac OS X.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Posteriormente creó C en 1972, un lenguaje de programación orientado a la implementación de Sistemas Operativos 
                    (concretamente Unix), y junto con Brian Kernighan elaboró el manual ‘El lenguaje de programación C’, donde se puso
                     el famoso “Hello World!” como ejemplo básico de un lenguaje de programación. Prácticamente todo en la Web utiliza 
                     C y UNIX:
                </p>
                <p style={{ textAlign: 'justify', textIndent: '30px' }}>
                    - Los navegadores están escritos en C.
                </p>
                <p style={{ textAlign: 'justify', textIndent: '30px' }}>
                    - Internet corre casi en totalidad sobre el kernel de UNIX (también está escrito en C).
                </p>
                <p style={{ textAlign: 'justify', textIndent: '30px' }}>
                    - Java o C++ son derivados de C.
                </p>
                <p style={{ textAlign: 'justify', textIndent: '30px' }}>
                    - Python y Ruby se implementan en C.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Entre sus galardones destaca el Premio Turing de 1983 por su desarrollo de la teoría de sistemas operativos genéricos 
                    y su implementación en la forma del sistema Unix, y la Medalla Nacional de Tecnología de EE. UU. entregada por Bill Clinton 
                    en 1998 a él y a Ken Thompson, por los avances que lograron en el hardware, el software y redes de sistemas.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Ritchie es conocido también en varios grupos de noticias de Usenet como «dmr» (su email en Bell Labs) y una de sus 
                    frases destacadas es: “UNIX es muy simple, sólo se necesita de un genio para entender su simplicidad”.
                </p>
                </div>
                <div className="col-md-4">
                    <img src={Ritchie1} alt="Ritchie1" className="imgPrincipal" />
                </div>
                <section className="skill" id="skills">
                    <Container>
                        <Row>
                            <Col>
                                <div className="skill-bx">
                                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                        <div className="item">
                                            <img src={Ritchie2} alt="Ritchie2"/>
                                            <h5>Libro sobre el Lenguaje C</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Ritchie3} alt="Ritchie3"/>
                                            <h5>Reconocimiento por Bill Clinton 1998</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Ritchie4} alt="Ritchie4"/>
                                            <h5>Creadores de UNIX</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Ritchie5} alt="Ritchie5"/>
                                            <h5>Mejor Programador</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Ritchie6} alt="Ritchie6"/>
                                            <h5>Creador del Lenguaje C</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Ritchie7} alt="Ritchie7"/>
                                            <h5>Importancia del Lenguaje C</h5>
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
                                    <source src={videoRitchie} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        
    )
};
  
export default DennisRitchie;