import React from "react";
import CakeModel from "../../../models/CakeModel";

export const ReturnCake: React.FC<{ cake: CakeModel }> = (props) => {
    return (<div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
        <div className='text-center'>
            {props.cake.img ?
                <img
                    src={props.cake.img}
                    width='151'
                    height='233'
                    alt="cake" /> :
                <img
                    src={require("./Images/image01.jpg")}
                    width='151'
                    height='233'
                    alt="cake"
                />
            }

            <h6 className='mt-2'>{props.cake.title}</h6>
            <p></p>
            <a className='btn main-color text-white' href='#'>Reserve</a>
        </div>
    </div>
    )
}