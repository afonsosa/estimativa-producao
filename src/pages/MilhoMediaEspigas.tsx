import { useState } from "react";

const MilhoMedioEspigas = () => {
    const [mediaEspigas, setMediaEspigas] = useState(0);
    const [pesoMedio, setPesoMedio] = useState(0);
    const [espacamento, setEspacamento] = useState(0);

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
                                        <h3 className="card-title">Média de espigas em 10m</h3>
                                    </div>

                                    <div className="card-body">
                                        <div className="form-group">
                                            <label >Número médio de espigas em 10 m:</label>

                                            <input className="form-control" id="form-stacked-text" type="number"
                                                name="mediaEspigas"
                                                value={mediaEspigas}
                                                onChange={e => setMediaEspigas(Number(e.target.value))} />
                                        </div>

                                        <div className="form-group">
                                            <label >Peso médio de grãos por espiga (15,5%) (g):</label>
                                            <input className="form-control" id="form-stacked-text" type="number"
                                                name="pesoMedio"
                                                value={pesoMedio}
                                                onChange={e => setPesoMedio(Number(e.target.value))} />
                                        </div>

                                        <div className="form-group">
                                            <label >Espaçamento entre linhas (m):</label>
                                            <input className="form-control" id="form-stacked-text" type="number"
                                                name="espacamento"
                                                value={espacamento}
                                                onChange={e => setEspacamento(Number(e.target.value))} />
                                        </div>

                                        <div className="info-box bg-light">
                                            <div className="info-box-content">
                                                <span className="info-box-text text-center text-muted">Produtividade</span>
                                                <span className="info-box-number text-center text-muted mb-0">
                                                    {
                                                        Math.round(
                                                            ( (mediaEspigas * pesoMedio) / espacamento) / 1000)
                                                    } Ton/ha
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

export default MilhoMedioEspigas;