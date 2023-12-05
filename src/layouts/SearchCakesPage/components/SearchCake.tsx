import { useState } from "react";
import CakeModel from "../../../models/CakeModel";
import { NewCakeForm } from "../../Forms/NewCakeForm";
import { EditCakeForm } from "../../Forms/EditCakeForm";

export const SearchCake: React.FC<{ cake: CakeModel }> = (props) => {

    const [isEditMode, setIsEditMode] = useState(false);

    const deleteCake = () => {
        console.log(props.cake.id);
        fetch(`http://localhost:8080/api/cakes/${props.cake.id}`, {
            method: "DELETE",
        })
            .then(response => response.json())

    }



    function editCake() {
        setIsEditMode(true);
    }

    function cancelEdit() {
        setIsEditMode(false);
    }

    return (
        <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
            <div className="row g-0">
                <div className="col-md-2">
                    <div className="d-none d-lg-block">
                        {props.cake.img ?
                            <img src={props.cake.img}
                                width='123'
                                height='196'
                                alt="Cake"
                            /> :
                            <img src="../../../Images/image01.png"
                                width='123'
                                height='196'
                                alt="Cake"
                            />}
                    </div>
                    <div className="d-lg-none d-flex justify-content-center align-items-center">
                        {props.cake.img ?
                            <img src={props.cake.img}
                                width='123'
                                height='196'
                                alt="Cake"
                            /> :
                            <img src="../../../Images/image01.png"
                                width='123'
                                height='196'
                                alt="Cake"
                            />}
                    </div>
                </div>
                {!isEditMode ?
                    <div className="col-md-6">
                        <div className="card-body">
                            <h4 className="card-title">
                                {props.cake.title}
                            </h4>
                            <h6 className="card-text">
                                Occasione: {props.cake.occasion}
                            </h6>
                            <p>
                                {props.cake.description}
                            </p>
                        </div>
                    </div> :
                    <EditCakeForm cake={props.cake} onCancel={() => cancelEdit} />
                }
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    {!isEditMode &&
                        <div className="row g-0">
                            <button className="btn btn-md main-color text-white mt-2" onClick={() => editCake()}>
                                Modifica
                            </button>
                            <button className="btn btn-md btn-danger text-white mt-2" onClick={() => deleteCake()}>
                                Cancella
                            </button>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}