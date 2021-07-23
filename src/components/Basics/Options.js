import React from 'react'

const Options = ({filterItem, menuList}) => {
    return (
        <>
            <div className="my-5 d-flex justify-content-center">
            <div class="btn-group" role="group" aria-label="Basic example">
                
                {
                    menuList.map((curElement) => {
                        return (
                            <button type="button" class="btn btn-success" onClick={() => filterItem(curElement)}>{curElement}</button>

                        );
                        
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Options
