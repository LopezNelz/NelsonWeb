import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import Linux1 from '../images7/Linux1.jpg';
import Linux2 from '../images7/Linux2.jpg';
import Linux3 from '../images7/Linux3.jpeg';
import Linux4 from '../images7/Linux4.png';
import Linux5 from '../images7/Linux5.jpg';
import Linux6 from '../images7/Linux6.jpg';
import React from "react";
import videoLinux from '../video/videoLinux.mp4';

export const LinusTorvalds = () => {
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
            <h3 className="tituloPrincipal">L I N U S__T O R V A L D S</h3>
            <div className="row">
                <div className="col-md-8">
                <p style={{ textAlign: 'justify' }}>
                    Linus Torvalds es un ingeniero de software finlandés y el creador del kernel de Linux, un sistema operativo de código 
                    abierto ampliamente utilizado en todo el mundo. Nació el 28 de diciembre de 1969 en Helsinki, Finlandia.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    En 1991, mientras era estudiante de informática en la Universidad de Helsinki, Torvalds comenzó a desarrollar un sistema 
                    operativo que se basaba en el sistema operativo Unix, pero que fuera de código abierto y gratuito. Este proyecto se 
                    convirtió en el núcleo (kernel) de Linux. Torvalds publicó su código fuente en Internet, lo que permitió que otros 
                    programadores colaboraran en su desarrollo y realizaran mejoras.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    El sistema operativo Linux se ha convertido en una parte fundamental de la infraestructura de Internet y se utiliza en una 
                    amplia variedad de dispositivos, desde servidores hasta teléfonos inteligentes y electrodomésticos. La filosofía de código 
                    abierto de Linux ha fomentado una comunidad activa de desarrolladores que contribuyen al sistema y lo mantienen actualizado.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Linus Torvalds es conocido por su estilo de liderazgo abierto y directo en el desarrollo de Linux. Ha sido el mantenedor 
                    principal del kernel de Linux durante muchos años y ha supervisado su evolución. Además de su trabajo en Linux, Torvalds 
                    ha hecho contribuciones a otros proyectos de software libre y de código abierto.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Por su labor en el desarrollo de Linux, Linus Torvalds ha recibido numerosos premios y reconocimientos a lo largo de los 
                    años. Entre ellos se encuentran el Premio Millennium Technology Prize (2012), el Premio de Tecnología del Siglo XXI del Queen 
                    Elizabeth Prize for Engineering (2013) y la Medalla IEEE Masaru Ibuka (2018). Su trabajo continúa siendo una influencia 
                    significativa en el campo de la informática y el software de código abierto.
                </p>
                </div>
                <div className="col-md-4">
                    <img src={Linux3} alt="Linux3" className="imgPrincipal" />
                </div>
                <section className="skill" id="skills">
                    <Container>
                        <Row>
                            <Col>
                                <div className="skill-bx">
                                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                        <div className="item">
                                            <img src={Linux1} alt="Linux1"/>
                                            <h5>Sistema Operativo Linux</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Linux2} alt="Linux2"/>
                                            <h5>Linus Torvalds</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Linux4} alt="Linux4"/>
                                            <h5>Torvalds trabajo en Kernel</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Linux5} alt="Linux5"/>
                                            <h5>Linus Torvalds</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Linux6} alt="Linux6"/>
                                            <h5>Lugar de trabajo</h5>
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
                                    <source src={videoLinux} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        
    )
};
  
export default LinusTorvalds;