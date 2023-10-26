import React,{useState} from 'react'

const DataTable=  ( {formData} ) =>{
    const [currentPage, setCurrentPage]=useState(1);
    const entriesperPage = 6;

    const startIndex = (currentPage -1)*entriesperPage;
    const endIndex = startIndex +entriesperPage;


    const currentData = formData.slice(startIndex,endIndex);
    // console.log("currentData",currentData);
    currentData.map(item=>{
        console.log("item",item)
    })

    const handlePageChange = (newPage) =>{
        setCurrentPage(newPage);
    };

    return(
        <div style={{color:'black',backgroundColor:'rgba(255, 255, 255, 0.00)'}}>
            <table className="table-bordered table-hover table-light" style={{fontSize:'15px',color:'black',width:'100%',height:'100%'}}>

                <thead className='' style={{color:'white'}}>
                    <tr style={{color:'white',backgroundColor:'#171C8F'}}>

                        <th style={{padding:'20px',textAlign:'start'}}>Email ID</th>
                        <th style={{padding:'20px',textAlign:'start'}}>Dashboard Name</th>
                        <th style={{padding:'20px',textAlign:'start'}}>Created On</th>
                        <th style={{padding:'20px',textAlign:'start'}}>Approved By</th>
                        <th style={{padding:'20px',textAlign:'start'}}>Action</th>
                        {/* <th style={{padding:'20px',textAlign:'start'}}>dashboard2</th>
                        <th style={{padding:'20px',textAlign:'start'}}>dashboard3</th>
                        <th style={{padding:'20px',textAlign:'start'}}>dashboard4</th> */}
                    </tr>
                </thead>

                <tbody style={{color:'grey'}}>
                    {currentData.map(item => (

                        item?.data.email.split(',').map(item2=>(
                            
                            <tr key={item2}>
                                <td style={{backgroundColor:'rgba(255, 255, 255, 0.10)',padding:'20px'}}>{item2}</td>
                                <td>{item?.data.srnumber}</td>
                                <td>{(item?.data.iserv) ? "True":"false"}</td>
                                <td>{(item?.data.dash1) ? "True":"false"}</td>
                                <td>
                                    <ion-icon name="trash-bin-outline"></ion-icon>
                                </td>
                                {/* <td>{(item?.data.dash2) ? "True":"false"}</td>
                                <td>{(item?.data.dash3) ? "True":"false"}</td>
                                <td>{(item?.data.dash4) ? "True":"false"}</td> */}
                            </tr>

                        ))
                        // <tr key={item?.data.srnumber}>  
                        //     <td style={{backgroundColor:'rgba(255, 255, 255, 0.10)',padding:'20px'}}>{item?.data.email}</td>
                        //     <td>{item?.data.srnumber}</td>
                        //     <td>{(item?.data.iserv) ? "True":"false"}</td>
                        //     <td>{(item?.data.dash1) ? "True":"false"}</td>
                        //     <td>{(item?.data.dash2) ? "True":"false"}</td>
                        //     <td>{(item?.data.dash3) ? "True":"false"}</td>
                        //     <td>{(item?.data.dash4) ? "True":"false"}</td>
                        // </tr>
                    ) )}

                    {/* <tr>
                        <td colSpan={7} style={{padding:'17px'}}> 
                            <div className='' style={{display:'flex', justifyContent:'space-between'}}>
                                <button onClick={()=> handlePageChange(currentPage-1)} disabled={currentPage === 1}>
                                    previous
                                </button>
                                <span> page {currentPage}</span>
                                <button  onClick={()=> handlePageChange(currentPage+1)} disabled = {endIndex>=formData.length}>
                                    Next
                                </button>
                            </div>
                        </td>
                    </tr>  */}
                </tbody>
            </table>

            <div className='page-container'>
                <div className='pagination'>
                    <button className='btn1' onClick={()=> handlePageChange(currentPage-1)} disabled={currentPage === 1}> <img src='arrow.png'></img> Prev</button>
                        <ul>
                            <li className='link active' value='1' onClick={()=> handlePageChange(1)} disabled={currentPage === 1}>1</li>
                            <li className='link' value='2' onClick={()=> handlePageChange(2)} disabled={currentPage === 2}>2</li>
                            <li className='link' value='3' onClick={()=> handlePageChange(3)} disabled={currentPage === 3}>3</li>
                            <li className='link' value='4' onClick={()=> handlePageChange(4)} disabled={currentPage === 4}>4</li>
                            <li className='link' value='6' onClick={()=> handlePageChange(5)} disabled={currentPage === 5}>5</li>
                        </ul>
                    <button className='btn2' onClick={()=> handlePageChange(currentPage+1)} disabled = {endIndex>=formData.length}> <img src='arrow.png'></img>Next </button>
                </div>
            </div>
        
        </div>
    )
}
export default DataTable;