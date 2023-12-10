import { useState } from "react";
import CakeModel from "../../models/CakeModel";

export const EditCakeForm: React.FC<{ cake: CakeModel, onCancel: Function }> = (props) => {
    const [title, setTitle] = useState(props.cake.title);
    const [occasion, setOccasion] = useState(props.cake.occasion);
    const [description, setDescription] = useState(props.cake.description);
    const [img, setImg] = useState(props.cake.img);


    const editCake = async () => {
        const baseUrl: string = "http://localhost:8080/api/cakes";
        let url: string = `${baseUrl}/${props.cake.id}`;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, occasion, description, img })
        };
        const response = await fetch(url, requestOptions);
        const data = await response.json();


    }

    const [name, setName] = useState("");

    return (
        <div className="col-md-6">
            <div className="card-body">
                <form>
                    <div className="form-group row my-4 ">
                        <label className="col-sm-2 col-form-label col-form-label-sm">Titolo</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-sm" id="colFormLabel" defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row my-4">
                        <label className="col-sm-2 col-form-label col-form-label-sm">Occasione</label>
                        <div className="col-sm-10">
                            <select value={occasion} className="form-select form-select-sm" id="inlineFormCustomSelect" onChange={(e) => setOccasion(e.target.value)}>
                                <option value="HBD">Compleanno</option>
                                <option value="ENG">Fidanzamento</option>
                                <option value="GRAD">Laurea</option>
                                <option value="MOM">Festa della Mamma</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row my-4 ">
                        <label className="col-sm-2 col-form-label col-form-label-sm">Descrizione</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" value={description} id="exampleFormControlTextarea1" onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-2 m-2">

                            <button type="button" className="btn btn-secondary" onClick={props.onCancel()}>
                                Annulla
                            </button>

                        </div>
                        <div className="col-2 m-2">

                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#confermaModificaDialog">
                                Salva
                            </button>

                            <div className="modal fade" id="confermaModificaDialog" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="confermaModifica" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="confermaModifica">Conferma</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Le modifiche verranno salvate al click su Conferma.
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
                                            <button type="button" className="btn btn-primary" onClick={editCake}>Conferma</button>
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