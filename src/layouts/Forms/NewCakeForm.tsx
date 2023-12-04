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
                        <h4>Aggiungi una nuova torta</h4>
                        <form>
                            <div className="form-group row my-4">
                                <select className="form-select form-select-sm" id="inlineFormCustomSelect">
                                    <option selected>Category...</option>
                                    <option value="1">Compleanno</option>
                                    <option value="2">Fidanzamento</option>
                                    <option value="3">Laurea</option>
                                    <option value="4">Festa della Mamma</option>
                                </select>
                            </div>
                            <div className="form-group row my-4 ">
                                <label className="col-sm-2 col-form-label col-form-label-sm">Titolo</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control form-control-sm" id="colFormLabel" />
                                </div>
                            </div>
                            <div className="form-group row my-4 ">
                                <label className="col-sm-2 col-form-label col-form-label-sm">Occasione</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control form-control-sm" id="colFormLabel" />
                                </div>
                            </div>
                            <div className="form-group row my-4 ">
                                <label className="col-sm-2 col-form-label col-form-label-sm">Descrizione</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                            </div>
                            <div className="form-group row my-4 ">
                                <label className="col-sm-2 col-form-label col-form-label-sm">Peso</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control form-control-sm" id="colFormLabel" />
                                </div>
                            </div>
                            <div className="form-group row my-4 ">
                                <label className="col-sm-2 col-form-label col-form-label-sm">Numero di persone</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control form-control-sm" id="colFormLabel" />
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