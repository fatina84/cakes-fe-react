import { useState } from "react";

export const NewCakeForm = () => {
    const [title, setTitle] = useState('');
    const [occasion, setSelectedOccasion] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('');


    const handleSubmit = (event: React.ChangeEvent<any>) => {
        event.preventDefault();
        const newCake = { title, occasion, description }
        addCake(newCake);

    }
    const addCake = async (newCake: { title: string; occasion: string; description: string; }) => {
        const baseUrl: string = "http://localhost:8080/api/cakes";
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, occasion, description, img })
        };
        const response = await fetch(baseUrl, requestOptions);
        const data = await response.json();
        console.log(data)
    }

    const convertBase64 = (file: File) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    const handleFileRead = async (event: React.ChangeEvent<any>) => {
        const file = event.target.files[0]
        const base64Img = await convertBase64(file)
        setImg(base64Img as string)
    }



    return (
        <div className="container m-0">
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-0 justify-content-center align-items-center">
                    <div className="col-sm-8 col-md-8 col-lg-8">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group row my-4 ">
                                <label className="col-sm-2 col-form-label col-form-label-sm">Titolo</label>
                                <div className="col-sm-10">
                                    <input type="text" value={title} className="form-control form-control-sm" onChange={(e) => setTitle(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group row my-4">
                                <label className="col-sm-2 col-form-label col-form-label-sm">Occasione</label>
                                <div className="col-sm-10">
                                    <select className="form-select form-select-sm" value={occasion} onChange={(e) => setSelectedOccasion(e.target.value)}>
                                        <option value="0">Seleziona...</option>
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
                                    <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>
                            </div>
                            <div className="form-group row my-4 ">
                                <input type="file" className="form-control-file " onChange={e => handleFileRead(e)} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Conferma</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}


