import { useState } from "react";

const MilhoPesoMedio = () => {
    const [pesoMedioGraos, setPesoMedioGraos] = useState('');
    const [qtdEspigas, setQtdEspigas] = useState('');

    return (
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
                                    <h3 className="card-title">Peso médio</h3>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label >Peso médio dos grãos das espigas selecionadas:</label>

                                            <input className="form-control" id="form-stacked-text" type="number"
                                                name="pesoMedioGraos"
                                                value={pesoMedioGraos}
                                                onChange={e => setPesoMedioGraos(e.target.value)} />
                                        </div>

                                        <div className="form-group">
                                            <label >Número de espigas por ha:</label>

                                            <input className="form-control" id="form-stacked-text" type="number"
                                                name="quantidadeEspigas"
                                                value={qtdEspigas}
                                                onChange={e => setQtdEspigas(e.target.value)} />
                                        </div>

                                    </form>

                                    <div className="info-box bg-light">
                                        <div className="info-box-content">
                                            <span className="info-box-text text-center text-muted">Produtividade</span>
                                            <span className="info-box-number text-center text-muted mb-0">
                                                {Number(pesoMedioGraos) * Number(qtdEspigas) / 1000} Kg/ha
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

export default MilhoPesoMedio;