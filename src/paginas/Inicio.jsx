import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import Imagen from '../images/portada.gif';
import Img1 from '../images10/Img1.jpg';
import Img2 from '../images10/Img2.jpg';
import Img3 from '../images10/Img3.png';
import Img4 from '../images10/Img4.jpg';
import Img5 from '../images10/Img5.png';
import Img6 from '../images10/Img6.jpg';
import Img7 from '../images10/Img7.jpg';
import Img8 from '../images10/Img8.jpg';
import Img9 from '../images10/Img9.png';
import Img10 from '../images10/Img10.jpeg';
import Img11 from '../images10/Img11.jpg';
import videoComp from '../video/videoComp.mp4';
const Inicio = () => {
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
        <div className="container">
            <h3 className="tituloPrincipal">I N F O__P R O</h3>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <div className="video-box">
                            <img src={Imagen} alt="Imagen Animada" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <p></p>
            <div>
                <p style={{ textAlign: 'justify' }}>
                    La historia de la informática está repleta de personajes que han dejado una huella indeleble en el campo y han transformado la forma en 
                    que vivimos, trabajamos y nos comunicamos en la era digital. Estos pioneros y visionarios han impulsado la innovación tecnológica y han 
                    sentado las bases para el rápido desarrollo de la industria de la informática que presenciamos hoy en día.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Desde los primeros días de la informática, figuras como Alan Turing y Grace Hopper sentaron las bases teóricas y prácticas de la 
                    computación moderna. Turing, considerado uno de los padres de la informática, desarrolló conceptos fundamentales como las máquinas 
                    de Turing y sentó las bases para la idea de la inteligencia artificial. Hopper, por su parte, fue una pionera en la programación 
                    de computadoras y desarrolló el primer compilador, sentando las bases para los lenguajes de programación modernos.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    A medida que la tecnología avanzaba, surgieron personajes icónicos que marcaron hitos significativos en la historia de la informática. 
                    Bill Gates, co-fundador de Microsoft, y Steve Jobs, co-fundador de Apple, desempeñaron roles clave en la popularización de la 
                    computadora personal y llevaron la tecnología a los hogares y a la vida cotidiana de las personas. Su visión y liderazgo llevaron 
                    a la creación de sistemas operativos intuitivos y productos innovadores que transformaron la forma en que interactuamos con la tecnología.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Otro personaje influyente es Linus Torvalds, creador del kernel de Linux. Con su enfoque en el software de código abierto, Torvalds 
                    permitió que una comunidad global de desarrolladores colaborara en el desarrollo de un sistema operativo robusto y versátil. Linux 
                    ha sido la base para la creación de numerosas distribuciones y ha impulsado el desarrollo de servidores, supercomputadoras y dispositivos móviles.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Además, Tim Berners-Lee, inventor de la World Wide Web, revolucionó la forma en que se comparte la información y se accede a través 
                    de Internet. Su visión de una web abierta y accesible sentó las bases para la expansión y democratización del conocimiento en todo el mundo.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Estos son solo algunos ejemplos destacados de personajes que han dejado una marca en la historia de la informática, pero hay muchos 
                    otros cuyas contribuciones han sido igualmente importantes. Desde Ada Lovelace, la primera programadora de la historia, hasta Mark 
                    Zuckerberg, creador de Facebook, cada uno de estos individuos ha sido un catalizador para la innovación y el avance tecnológico.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    La importancia de estos personajes radica en su capacidad para desafiar los límites y transformar la forma en que interactuamos con 
                    la tecnología. Han impulsado el desarrollo de nuevas ideas, han creado productos y servicios revolucionarios y han sentado las bases 
                    para el futuro de la informática. Su visión, creatividad e ingenio han sido la fuerza impulsora detrás de los avances tecnológicos 
                    que han dado forma a nuestra sociedad y han abierto nuevas posibilidades en campos como la inteligencia artificial, el análisis de 
                    datos, la ciberseguridad y la computación en la nube.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    En resumen, los personajes que han marcado historia en el campo de la informática han desempeñado un papel fundamental en el 
                    desarrollo y la evolución de la tecnología que nos rodea. Su legado perdura en la forma en que vivimos y trabajamos en la era 
                    digital, y su influencia continúa inspirando a las generaciones futuras de innovadores y emprendedores en el campo de la informática.
                </p>
            </div>
            <section className="skill" id="skills">
                    <Container>
                        <Row>
                            <Col>
                                <div className="skill-bx"><h3 className="tituloPrincipal">GENERACION DE LAS COMPUTADORAS</h3>
                                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                        <div className="item">
                                            <img src={Img1} alt="Img1"/>
                                            <h5>Zuse Z1 - Calculadora binaria mecanica (1936-1938)</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Img2} alt="Img2"/>
                                            <h5>ENIAC - 1ra computadora digital programable (1945-1943)</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Img3} alt="Img3"/>
                                            <h5>Jhon von Neuman y la EDVAC 1946</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Img4} alt="Img4"/>
                                            <h5>IBM 1401 - creado en 1959 para uso empresarial</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Img5} alt="Img5"/>
                                            <h5>IBM 1620 - creado en 1959 usado en universidades</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Img6} alt="Img6"/>
                                            <h5>CDC 6600 - creado en 1965</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Img7} alt="Img7"/>
                                            <h5>IBM 360 - creado en 1964</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Img8} alt="Img8"/>
                                            <h5>C4004 - 1er microprosedador de Intel (1971)</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Img9} alt="Img9"/>
                                            <h5>5ta Generacion (1ra computadora)</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Img10} alt="Img10"/>
                                            <h5>6ta Generacion</h5>
                                        </div>
                                        <div className="item">
                                            <img src={Img11} alt="Img11"/>
                                            <h5>Inteligencia Artificial</h5>
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
                                    <source src={videoComp} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Inicio;