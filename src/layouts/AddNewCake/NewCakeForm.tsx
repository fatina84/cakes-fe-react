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
        <div className="container m-5">
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-5">
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <h4>Aggiungi una nuova torta</h4>
                        <form>
                            <div className="form-group row my-4">
                                <select className="form-select" id="inlineFormCustomSelect">
                                    <option selected>Category...</option>
                                    <option value="1">Compleanno</option>
                                    <option value="2">Fidanzamento</option>
                                    <option value="3">Laurea</option>
                                    <option value="4">Festa della Mamma</option>
                                </select>
                            </div>
                            <div className="form-group row my-4 ">
                                <label className="col-sm-2 col-form-label col-form-label-lg">Titolo</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control form-control-md" id="colFormLabel" />
                                </div>
                            </div>
                            <div className="form-group row my-4 ">
                                <label className="col-sm-2 col-form-label col-form-label-lg">Occasione</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control form-control-md" id="colFormLabel" />
                                </div>
                            </div>
                            <div className="form-group row my-4 ">
                                <label className="col-sm-2 col-form-label col-form-label-lg">Descrizione</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                            </div>
                            <div className="form-group row my-4 ">
                                <label className="col-sm-2 col-form-label col-form-label-lg">Peso</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                            </div>
                            <div className="form-group row my-4 ">
                                <label className="col-sm-2 col-form-label col-form-label-lg">Numero di persone</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control form-control-md" id="colFormLabel" />
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