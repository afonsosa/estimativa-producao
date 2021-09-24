import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="main-header navbar navbar-expand-md navbar-light navbar-white">
            <div className="container">
                <a href="#" className="navbar-brand">
                    <span className="brand-text font-weight-light">Estimativa de Produção</span>
                </a>
                <button className="navbar-toggler order-1 collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse order-3" id="navbarCollapse">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a id="subMenuMilho" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">Milho</a>
                            <ul aria-labelledby="subMenuMilho" className="dropdown-menu border-0 shadow" >
                                <li>
                                    <Link to="MilhoPesoMedio" className="dropdown-item">Peso médio</Link>
                                </li>
                                <li>
                                    <Link to="MilhoMediaEspigas" className="dropdown-item">Média de espigas</Link>
                                </li>
                                <li>
                                    <Link to="MilhoNumeroEspigas" className="dropdown-item">Número de espigas</Link>
                                </li>
                            </ul>
                        </li>
                        {/* <li className="nav-item d-none d-sm-inline-block">
                            <Link to="Soja" className="nav-link">Soja</Link>
                        </li> */}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;