import { useState } from "react";

const MilhoNumeroEspigas = () => {
    const [espigasEm4m2, setEspigasEm4m2] = useState('');
    const [fileirasGraos, setfileirasGraos] = useState('');
    const [graosPorFileiras, setGraosPorFileiras] = useState('');

    return(
        <>
            <div className="content-header">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Milho</h1>
                        </div>

                    </div>
                </div>
            </div>

            <div className="content">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <div className="card card-info">
                                <div className="card-header">
                                    <h3 className="card-title">Número de espigas</h3>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label >Número de espigas em 4 m²:</label>

                                            <input className="form-control" id="form-stacked-text" type="number"
                                                name="espigasEm4m2"
                                                value={espigasEm4m2}
                                                onChange={e => setEspigasEm4m2(e.target.value)} />
                                        </div>

                                        <div className="form-group">
                                            <label >Número de fileiras de grãos:</label>

                                            <input className="form-control" id="form-stacked-text" type="number"
                                                name="fileirasGraos"
                                                value={fileirasGraos}
                                                onChange={e => setfileirasGraos(e.target.value)} />
                                        </div>

                                        <div className="form-group">
                                            <label >Número de grãos por fileiras:</label>

                                            <input className="form-control" id="form-stacked-text" type="number"
                                                name="graosPorFileiras"
                                                value={graosPorFileiras}
                                                onChange={e => setGraosPorFileiras(e.target.value)} />
                                        </div>

                                        <div className="form-group">
                                            <label>Fator de correção: 0,7</label>
                                        </div>

                                    </form>

                                    <div className="info-box bg-light">
                                        <div className="info-box-content">
                                            <span className="info-box-text text-center text-muted">Produtividade</span>
                                            <span className="info-box-number text-center text-muted mb-0">
                                                {
                                                    Math.round(
                                                        Number(espigasEm4m2) *
                                                        Number(fileirasGraos) *
                                                        Number(graosPorFileiras) *
                                                        0.7)} kg/ha
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MilhoNumeroEspigas;