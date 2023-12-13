import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import Strous1 from '../images4/Strous1.jpg';
import Strous2 from '../images4/Strous2.jpg';
import Strous3 from '../images4/Strous3.jpg';
import Strous4 from '../images4/Strous4.jpg';
import Strous5 from '../images4/Strous5.jpg';
import React from "react";
import videoStrous from '../video/videoStrous.mp4';

export const BajarneStroustrup = () => {
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
            <h3 className="tituloPrincipal">B J A R N E__S T R O U S T R U P</h3>
            <div className="row">
                <div className="col-md-8">
                <p style={{ textAlign: 'justify' }}>
                    Bjarne Stroustrup nació el 30 de diciembre de 1950 en Aarhus, Dinamarca. Stroustrup obtuvo su licenciatura en 
                    matemáticas y ciencias de la computación en la Universidad de Aarhus en 1975. Luego, completó su maestría en 
                    ciencias de la computación en la misma Universidad en 1977. Posteriormente, obtuvo su doctorado en ciencias 
                    de la computación en el Laboratorio de Ciencias de la Computación de la Universidad de Cambridge en 1985.
                    Un científico de la computación y programador danés.Es ampliamente reconocido como el creador del lenguaje de 
                    programación C++, uno de los lenguajes más populares y poderosos en el campo de la informática.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Stroustrup comenzó a trabajar en el desarrollo del lenguaje C++ en la década de 1970 mientras realizaba su doctorado 
                    en la Universidad de Cambridge. La intención original detrás de la creación de C++ era extender el lenguaje de 
                    programación C con características de programación orientada a objetos. Stroustrup quería combinar las características 
                    de C con las ventajas de la programación orientada a objetos para permitir un código más eficiente y modular.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    El lenguaje C++ fue influenciado por varios otros lenguajes de programación, incluidos Simula, Ada, ALGOL 68 y otros. 
                    Stroustrup publicó su libro "The C++ Programming Language" (El lenguaje de programación C++) en 1985, que se convirtió 
                    en una referencia ampliamente utilizada para los programadores de C++.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Los aportes de Stroustrup en el campo científico de la informática son significativos. El lenguaje C++ ha tenido un impacto 
                    profundo y duradero en la industria del software y en la comunidad de programadores.Bjarne Stroustrup ha escrito varios textos 
                    importantes relacionados con el lenguaje de programación C++ y la programación en general. Algunos de sus libros más conocidos son:
                </p>
                <p style={{ textAlign: 'justify', textIndent: '30px' }}>
                    - "The C++ Programming Language" (El lenguaje de programación C++): Publicado por primera vez en 1985, este 
                    libro es ampliamente considerado como una referencia autoritaria sobre el lenguaje C++. Ha sido actualizado y 
                    revisado en varias ediciones posteriores.
                </p>
                <p style={{ textAlign: 'justify', textIndent: '30px' }}>
                    - "Programming: Principles and Practice Using C++" (Programación: principios y práctica usando C++): Este 
                    libro, publicado en 2009, está dirigido a principiantes en programación y proporciona una introducción 
                    completa a los fundamentos de la programación utilizando C++ como lenguaje de enseñanza.
                </p>
                <p style={{ textAlign: 'justify', textIndent: '30px' }}>
                    - "The Design and Evolution of C++" (El diseño y la evolución de C++): Publicado en 1994, este libro describe 
                    el proceso de diseño y desarrollo del lenguaje C++ desde sus inicios hasta ese momento. Proporciona una visión 
                    detallada y perspectivas sobre las decisiones de diseño y los desafíos enfrentados durante el desarrollo de C++.
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
                    Bjarne Stroustrup ha recibido varios premios y reconocimientos por su trabajo, incluido el premio Draper en 2018 y el premio 
                    Charles Stark Draper en 2017. Su contribución con el lenguaje C++ ha sido fundamental para el avance de la informática y sigue 
                    siendo ampliamente utilizado en la actualidad.
                </p>
                </div>
                <div className="col-md-4">
                    <img src={Strous1} alt="Strous1" className="imgPrincipal" />
                </div>
                <section className="skill" id="skills">
                    <Container>
                        <Row>
                            <Col>
                                <div className="skill-bx">
                                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                        <div className="item">
                                            <img src={Strous2} alt="Strous2"/>
                                            <h5>El Lenguaje de Programacion C++</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Strous3} alt="Strous3"/>
                                            <h5>El manual de referencia de C++ comentado</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Strous4} alt="Strous4"/>
                                            <h5>El Lenguaje de Programacion C++ - 3er Edicion</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Strous5} alt="Strous5"/>
                                            <h5>Programación: Principios y Práctica usando C++</h5>
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
                                    <source src={videoStrous} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        
    )
};
  
export default BajarneStroustrup;