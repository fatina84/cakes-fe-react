import { useState } from "react";

export const NewCakeForm = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(inputs);
    }

    const [name, setName] = useState("");

    return (
        <div className="container m-0">
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-0">
                    <div className="col-sm-8 col-md-8 col-lg-8">
                        <form>
                            <div className="form-group row my-4 ">
                                <label className="col-sm-2 col-form-label col-form-label-sm">Titolo</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control form-control-sm" id="colFormLabel" />
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
                                    <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                                </div>
                            </div>
                            <div className="form-group row my-4 justify-content-end">
                                <div className="col-2">
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
                                                    <button type="button" className="btn btn-primary" >Conferma</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row my-4 ">
                                <input type="file" className="form-control-file " id="exampleFormControlFile1" />
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}