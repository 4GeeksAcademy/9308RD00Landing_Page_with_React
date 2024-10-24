import React from "react";


export const Boxs = ({name, image, description}) =>{
    return(
        <div className="m-3">
            <img class="card-img-top" src={image} style={{width: "20vw"}}/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{description}</p>
                <a href="https://www.ipic.com/" target="_blank" class="btn btn-primary">Buy Tickets</a>
            </div>
        </div>






        

    )
}    