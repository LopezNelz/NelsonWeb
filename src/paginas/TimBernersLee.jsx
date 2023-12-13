import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import Tim1 from '../images5/Tim1.jpg';
import Tim2 from '../images5/Tim2.jpg';
import Tim3 from '../images5/Tim3.jpeg';
import Tim4 from '../images5/Tim4.jpg';
import Tim5 from '../images5/Tim5.jpg';
import React from "react";
import videoTim from '../video/videoTim.mp4';

export const TimBernersLee = () => {
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
            <h3 className="tituloPrincipal">T I M__B E R N E R S - L E E</h3>
            <div className="row">
                <div className="col-md-8">
                <p style={{ textAlign: 'justify' }}>
                    Tim Berners-Lee es un científico de la computación británico y el inventor de la World Wide Web (WWW). Nació el 8 de 
                    junio de 1955 en Londres, Inglaterra. Su trabajo revolucionario en la creación de la WWW sentó las bases para la forma 
                    en que compartimos información y nos comunicamos en la era de Internet.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Berners-Lee desarrolló la WWW mientras trabajaba en el CERN (Organización Europea para la Investigación Nuclear) en la 
                    década de 1980. Su objetivo era crear un sistema que permitiera a los científicos compartir y acceder fácilmente a la 
                    información de manera eficiente. En 1989, propuso la idea de la WWW, que combinaba la transferencia de hipertexto (HTTP), 
                    el lenguaje de marcado de hipertexto (HTML) y el sistema de direcciones de recursos uniformes (URL) para permitir la 
                    navegación y el acceso a documentos enlazados a través de Internet.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    El 6 de agosto de 1991, Berners-Lee publicó el primer sitio web del mundo, que describía el proyecto de la WWW y 
                    proporcionaba información sobre cómo funcionaba. También desarrolló el primer navegador web, llamado "WorldWideWeb", 
                    y el primer servidor web. Con su visión y esfuerzos, sentó las bases para el crecimiento y la expansión de Internet 
                    tal como lo conocemos hoy en día.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Además de su trabajo en la creación de la WWW, Tim Berners-Lee ha hecho importantes contribuciones en la promoción 
                    de los estándares abiertos y el acceso libre a la información en la web. Es un defensor de la neutralidad de la red y 
                    ha abogado por la protección de la privacidad y la seguridad en línea.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    En reconocimiento a su trabajo, Berners-Lee ha recibido numerosos premios y honores, incluido el Premio Turing en 2016, 
                    a menudo considerado el "Nobel de la informática". Actualmente, continúa trabajando en proyectos relacionados con la 
                    web y es director de la World Wide Web Consortium (W3C), una organización que desarrolla estándares para la web y 
                    promueve su accesibilidad y usabilidad global.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Tim Berners-Lee ha recibido varios premios y reconocimientos por su contribución a la creación de la World Wide Web y 
                    su trabajo en el campo de la informática. Algunos de los premios más destacados que ha recibido son:
                </p>
                <p style={{ textAlign: 'justify', textIndent: '30px' }}>
                    - Premio Turing (2016): Considerado el premio más prestigioso en el campo de la informática, Tim Berners-Lee recibió 
                    el Premio Turing de la Association for Computing Machinery (ACM) en 2016. Este premio se otorga por logros sobresalientes 
                    en ciencias de la computación y se le concedió a Berners-Lee por su invención de la World Wide Web y su contribución 
                    a la evolución de Internet.
                </p>
                <p style={{ textAlign: 'justify', textIndent: '30px' }}>
                    - Knight Commander of the Order of the British Empire (KBE) (2004): En 2004, Berners-Lee fue nombrado Caballero 
                    Comandante de la Orden del Imperio Británico por la Reina Isabel II en reconocimiento a su trabajo pionero en la 
                    creación de la World Wide Web.
                </p>
                <p style={{ textAlign: 'justify', textIndent: '30px' }}>
                    - Premio Príncipe de Asturias de Investigación Científica y Técnica (2002): En 2002, Tim Berners-Lee recibió el 
                    prestigioso Premio Príncipe de Asturias de Investigación Científica y Técnica en España por su invención de la 
                    World Wide Web y su impacto en la sociedad y la comunicación global.
                </p>
                <p style={{ textAlign: 'justify', textIndent: '30px' }}>
                    - Premio Marconi (2002): El Premio Marconi se otorga anualmente a individuos que han hecho contribuciones 
                    destacadas en el campo de las comunicaciones y la tecnología. En 2002, Berners-Lee recibió este premio por su 
                    invención de la World Wide Web y su influencia en la forma en que nos comunicamos y compartimos información en la era digital.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Estos son solo algunos de los premios más notables que Tim Berners-Lee ha recibido a lo largo de su carrera. 
                    Su contribución a la creación de la World Wide Web ha tenido un impacto significativo en la sociedad y la 
                    forma en que interactuamos en la era de la información.
                </p>
                </div>
                <div className="col-md-4">
                    <img src={Tim1} alt="Tim1" className="imgPrincipal" />
                </div>
                <section className="skill" id="skills">
                    <Container>
                        <Row>
                            <Col>
                                <div className="skill-bx">
                                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                        <div className="item">
                                            <img src={Tim2} alt="Tim2"/>
                                            <h5>NeXTcube en el CERN, y fue el primer servidor web del mundo</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Tim3} alt="Tim3"/>
                                            <h5>El Padre de la World Wide Web</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Tim4} alt="Tim4"/>
                                            <h5>WorldWideWeb: Propuesta de Proyecto de hipertexto</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Tim5} alt="Tim5"/>
                                            <h5>Red de Informatica Mundial</h5>
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
                                    <source src={videoTim} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        
    )
};
  
export default TimBernersLee;