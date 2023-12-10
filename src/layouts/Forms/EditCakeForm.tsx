import { useState } from "react";
import CakeModel from "../../models/CakeModel";

export const EditCakeForm: React.FC<{ cake: CakeModel, onCancel: Function }> = (props) => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = () => {
        ;
        console.log(inputs);
    }

    const [name, setName] = useState("");

    return (
        <div className="col-md-6">
            <div className="card-body">
                <form>
                    <div className="form-group row my-4 ">
                        <label className="col-sm-2 col-form-label col-form-label-sm">Titolo</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-sm" id="colFormLabel" value={props.cake.title} />
                        </div>
                    </div>
                    <div className="form-group row my-4">
                        <label className="col-sm-2 col-form-label col-form-label-sm">Occasione</label>
                        <div className="col-sm-10">
                            <select className="form-select form-select-sm" id="inlineFormCustomSelect">
                                <option value="1">Compleanno</option>
                                <option value="2">Fidanzamento</option>
                                <option value="3">Laurea</option>
                                <option value="4">Festa della Mamma</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row my-4 ">
                        <label className="col-sm-2 col-form-label col-form-label-sm">Descrizione</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" value={props.cake.description} id="exampleFormControlTextarea1"></textarea>
                        </div>
                    </div>
                    <div className="form-group row my-4 justify-content-end">
                        <div className="col-2">

                            <button type="button" className="btn btn-secondary" onClick={props.onCancel()}>
                                Annulla
                            </button>

                        </div>
                        <div className="col-4">

                            <button type="button" className="btn btn-success ml-2" data-bs-toggle="modal" data-bs-target="#confirmAdd">
                                Salva modifiche
                            </button>
                            <div className="modal fade" id="confirmAdd" aria-labelledby="confirmAddModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="confirmAddModalLabel">Modal title</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Le modifiche verranno salvate al click su Conferma.
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
                                            <button type="button" className="btn btn-primary" onClick={() => handleSubmit()}>Conferma</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}