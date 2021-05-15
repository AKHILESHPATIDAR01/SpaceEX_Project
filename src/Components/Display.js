import React, { useState } from 'react'

function Display(props) {
    const { data } = props;
    const [myData , setMyData] = useState(data);

    console.log("From Display",data);

    useState(()=>{
        console.log("From Display",data);
        console.log("From Display",myData);
    },[data]);

    return ( 
        <div className="display-main">
            <div className="box-outer">
                
                {data.map((item)=>{
                    return(
                        <div className="box-inner"> 
                            <div className='box-inner-image'>
                                <img src={item.links.patch.small} />
                            </div>
                            <div className='box-inner-details'>
                                <div className='box-inner-details-heading'>
                                    {item.name} #{item.flight_number}
                                </div>
                                <div className='box-inner-details-detail'>
                                    <p>Mission Ids: <span>{item.static_fire_date_unix}</span> </p>
                                    <p>Launch Year:<span style={{ marginLeft:"5px"}}>{parseInt(item.date_local)}</span></p>
                                    <p>Successful Launch:<span style={{ marginLeft:"5px"}}>{item.success === false ? "False" : item.success === true ? "True" : "N/A"}</span></p>
                                    <p>Successful Landing:<span></span></p>
                                </div>
                            </div>
                        </div> 

                    );
                })}
                
                        
            </div>
        
        
        </div>
    )
}

export default Display
