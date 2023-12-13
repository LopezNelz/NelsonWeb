import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import Alan1 from '../images2/Alan1.jpg';
import Alan2 from '../images2/Alan2.jpg';
import Alan3 from '../images2/Alan3.jpg';
import Alan4 from '../images2/Alan4.jpeg';
import Alan5 from '../images2/Alan5.jpg';
import Alan6 from '../images2/Alan6.jpg';
import Alan7 from '../images2/Alan7.jpg';
import Alan8 from '../images2/Alan8.jpg';
import React from "react";
import videoTuring from '../video/videoTuring.mp4';
export const AlanTuring = () => {
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
            <h3 className="tituloPrincipal">A L A N__T U R I N G</h3>
            <div className="row">
                <div className="col-md-8">
                <p style={{ textAlign: 'justify' }}>
                    Británico, 1912–1954. Es considerado uno de los padres de la computación moderna y de la Inteligencia Artificial. 
                    Siendo joven destacó por su afición a los deportes, pues participaba en maratones y recorría más de 100 km en 
                    bicicleta. En 1936 describió la ‘Máquina de Turing’ en la revista Proceedings of the London Mathematical Society, 
                    un dispositivo hipotético que representa una máquina automática de computación, capaz de resolver cualquier 
                    problema matemático que pudiera representarse mediante un algoritmo. La máquina de Turing simula la lógica de 
                    cualquier algoritmo de computador y es particularmente útil en la explicación de las funciones de una CPU dentro de un computador.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Durante la Segunda Guerra Mundial ayudó a descifrar los códigos nazis de la máquina Enigma que se cambiaban cada día, 
                    usados por la Marina alemana para enviar instrucciones a los submarinos. Para conseguirlo Turing intuyó que en los 
                    mensajes cifrados había palabras que se repetían sistemáticamente, como "Wetter" (tiempo en alemán), y al saberlo 
                    podía descifrar el mensaje entero, para lo cual diseñó la Bombe (imagen derecha), una máquina electromecánica 
                    considerada una de las primeras computadoras.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    En su ensayo "Computing Machinery and Intelligence" de 1950 concibió el Test de Turing, una prueba que permite identificar 
                    si se está hablando con una persona o una máquina. Consiste en que un humano haga preguntas escritas mediante un terminal 
                    a dos sujetos que no ve: otro humano y una máquina. Si el evaluador no puede distinguir cuál de los dos es la máquina a 
                    partir de las respuestas obtenidas, esa Inteligencia Artificial habrá superado la prueba. Hoy en día vemos que aún no se 
                    ha superado el reto, ya que cuando nos conectamos a un chat notamos si nos está respondiendo una persona o un robot (chatbot).
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
                                            <h5>Maquina Enigma</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Alan3} alt="Alan3"/>
                                            <h5>Placa conmemorativa</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Alan4} alt="Alan4"/>
                                            <h5>Estatua del Turing y su retrato</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Alan5} alt="Alan5"/>
                                            <h5>Monumento a Alan Turing - Reino Unido</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Alan6} alt="Alan6"/>
                                            <h5>Placa conmemorativa</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Alan7} alt="Alan7"/>
                                            <h5>Estadua de Turing - Universidad de Surrey</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Alan8} alt="Alan8"/>
                                            <h5>Universidad de Cambridge</h5>
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
                                    <source src={videoTuring} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        
    )
};
  
export default AlanTuring;