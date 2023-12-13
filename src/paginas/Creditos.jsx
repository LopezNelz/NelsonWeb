import imgNelson from '../images/Nelson.jpg';
const Creditos = () =>{
    return(
        <div className="container">
            <h3 className="tituloPrincipal">C R E D I T O S</h3>
            <div className="row">
                <div className="col-md-8">
                    <h3 style={{ marginBottom: '30px' }}>NOMBRE:</h3>
                    <h3 style={{ textAlign: 'justify', textIndent: '180px', marginTop: '16px', marginBottom: '36px'}}>
                        NELSON PAUL LOPEZ GUTIERREZ
                    </h3>
                    <h3 style={{ marginBottom: '30px' }}>CARRERA:</h3>
                    <h3 style={{ textAlign: 'justify', textIndent: '180px', marginTop: '16px', marginBottom: '36px'}}>
                        INFORMATICA
                    </h3>
                    <h3 style={{ marginBottom: '30px' }}>PARALELO:</h3>
                    <h3 style={{ textAlign: 'justify', textIndent: '180px', marginTop: '16px', marginBottom: '36px'}}>
                        " D "
                    </h3>
                </div>
                <div className="col-md-4">
                    <img src={imgNelson} alt="Ada1" className="imgPrincipal" />
                </div>
            </div>
        </div>
    )
}

export default Creditos;