import React from 'react'

function Filters({ years , setSelectedYear , setIsLanded , setIsLaunched }){

    const handleClicked = (e)=>{
        setSelectedYear(e);
    }

    const handleClickedLaunced = (e)=>{
        setIsLaunched(e);
    }

    const handleClickedLanded = (e)=>{
        setIsLanded(e);
    }

    return (
        <div className="filter-main">
            <div className="filter-main-heading">Filters</div>
            <div>
                <p className="inner-heading">Launch Year</p>
                <div className="yearsBox"> 
                    { years.map((item)=>{
                        return(
                            <div className="years" onClick={()=> handleClicked(item)}>{item}</div>
                        );
                    }) }
                </div>
            </div>
            <div style={{marginTop:"15px"}}>
                <p className="inner-heading">Successful Launch</p>
                <div className="yearsBox">
                    <div className="years" onClick={()=> handleClickedLaunced(true)}>True</div>
                    <div className="years" onClick={()=> handleClickedLaunced(false)}>False</div>
                </div>
            </div>
            <div style={{marginTop:"15px"}}>
                <p className="inner-heading">Successful Laniding</p>
                <div className="yearsBox">
                    <div className="years" onClick={()=> handleClickedLanded(true)}>True</div>
                    <div className="years" onClick={()=> handleClickedLanded(false)}>False</div>
                </div>
            </div>

        </div>
    )
}

export default Filters
