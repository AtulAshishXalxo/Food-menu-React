import React from 'react'

function MenuCard({menuData}) {
    return (
        <>
        <div className="container ">
            
        <div className="row">
        {menuData.map((curElement) =>{

            const {id, name, category , price ,image, description} = curElement;

            return (
                    <div className="col-xl-4 col-lg-4 col-sm-12 col-12 d-flex justify-content-center" >
                        <div className="card item-box shadow my-3" key={id}>
                            <img className="card-img-top image-box" src={image} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <h6> ₹ {price}</h6>
                                <p className="card-text">{description}</p>
                                <a href="#" className="btn btn-success">Order Now</a>
                            </div>
                        </div>
                    </div>
               
            )
        })}
        
        </div>
            </div>
        </>
    )
}

export default MenuCard;
