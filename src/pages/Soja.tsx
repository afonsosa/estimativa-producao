
const Soja = () => {
    return (
        <div className="uk-child-width-1-2@s uk-grid-match uk-grid">
            <div>
                <div className="uk-card uk-card-default uk-card-body uk-light">

                    <h3 className="uk-card-title">Soja</h3>

                    <form className="uk-form-stacked">

                        <div className="uk-margin">
                            <label className="uk-form-label" >Peso médio dos grãos das espigas selecionadas:</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="form-stacked-text" type="number" />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Soja;