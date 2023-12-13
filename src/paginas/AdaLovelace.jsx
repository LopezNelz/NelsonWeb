import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import Ada1 from '../images/Ada1.png';
import Ada2 from '../images/Ada2.jpg';
import Ada3 from '../images/Ada3.jpg';
import Ada4 from '../images/Ada4.jpg';
import Ada5 from '../images/Ada5.jpg';
import React from 'react';
import videoAda from '../video/videoAda.mp4';

export const AdaLovelace = () => {
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
            <h3 className="tituloPrincipal">A D A__L O V E L A C E</h3>
            <div className="row">
                <div className="col-md-8">
                <p style={{ textAlign: 'justify' }}>
                    Augusta Ada King, condesa de Lovelace, nacio en Londres el 10 de Diciembre de 1815, fallecio el 27 de Noviembre de 1852, 
                    registrada al nacer como Augusta Ada Byron y conocida habitualmente como Ada Lovelace. Su padre fue el famoso poeta Lord Byron, 
                    a quien no conoció porque se separó de su madre, la poeta y matemática Anna Isabella Milbanke, al mes de nacer. Lady Byron 
                    le brindó a su hija una buena educación que abarcaba música, francés, aritmética y matemáticas entre otras disciplinas, 
                    lo que le ayudó a convertirse en la primera programadora de la historia.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Con 18 años conoce a Charles Babbage, prestigioso inventor que estaba trabajando en la Máquina Analítica 
                    (en la foto anterior junto con su creador), un antecedente del ordenador que ejecutaba cualquier tipo 
                    de cálculo matemático. Aunque nunca llegó a construirse debido a limitaciones tecnológicas que incluía 
                    dispositivo de entrada y salida, memoria y procesador.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Entre 1842 y 1843 Ada tradujo al inglés el artículo del ingeniero militar italiano Luigi 
                    Menabrea "Esquema de la Máquina Analítica" para una revista francesa, al que Lovelace añadió algunas 
                    notas personales. Las notas de Ada son consideradas el primer programa de ordenador de la historia: 
                    un algoritmo codificado para que una máquina lo procese. Explicaba cómo se podría recibir y emitir 
                    información sin la intervención humana a través de un sistema de tarjetas perforadas (sistema utilizado 
                    desde la invención del ordenador a principios del siglo XX hasta la década de los 80). Baggage quedó tan 
                    impresionado que apodó a Ada como ‘La encantadora de números’.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    “Esta máquina podría hacer todo lo que quisiéramos si supiésemos como ordenárselo”, comentó Ada acerca 
                    de la Máquina Analítica, quien tuvo que firmar sus trabajos con sus iniciales (A. A. L.) para evitar 
                    la censurara por ser mujer. Como reconocimiento a su figura el Departamento de Defensa de Estados Unidos 
                    desarrolló en 1979 un lenguaje de programación que llamó ADA.
                </p>
                </div>
                <div className="col-md-4">
                    <img src={Ada1} alt="Ada1" className="imgPrincipal" />
                </div>
                <section className="skill" id="skills">
                    <Container>
                        <Row>
                            <Col>
                                <div className="skill-bx">
                                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                        <div className="item">
                                            <img src={Ada2} alt="Ada2"/>
                                            <h5>1ra Programadora de la Historia</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Ada3} alt="Ada3"/>
                                            <h5>Libro de Ada Lovelace</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Ada4} alt="Ada4"/>
                                            <h5>Esquema de la maquina Analitica</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Ada5} alt="Ada5"/>
                                            <h5>Periodico Los Andes Argentina</h5>
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
                                    <source src={videoAda} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        
    )
};