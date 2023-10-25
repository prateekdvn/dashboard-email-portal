import React, { useState } from "react";
import {Button, Form, Container, Row, Col} from 'react-bootstrap'

export default function EmailRegistration({updateFormData}) {
      
      const [data,setData] = useState({email:'',
                    srnumber:'',
                    name:'',
                     iserv:false,
                    dash1:false,
                    dash2:false,
                     dash3:false,
                    dash4:false,

                    dashboards:[],
                    createdon:''})


    //   const [totaldata,setTotaldata] = useState([])


       const handleChange=(e)=>{
        const {name,value,type,checked} = e.target;
        // console.log("e.target = ",e.target)
        var date = new Date()
        var date2 = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
        
        setData({
            ...data,[name]:type ==='checkbox' ?checked:value,createdon:{date2}
            
        });

       };

        const handleSubmit =(e)=>{
            
         e.preventDefault();
         
         const newData1 = {
           data
         };
         updateFormData(newData1);
         setData({email:'',
         name:'',
         srnumber:'',
          iserv:false,
         dash1:false,
         dash2:false,
          dash3:false,
         dash4:false,
        dashboards:[],
         createdon:''
         })

        }
         
      

        const checking =(e) =>{
           console.log(e.target)
        }
        // const checking2 =(e) =>{
        //     console.log(e.target.name)
        //     setCheck2(prev => !prev)
        //     console.log(check1,check2,check3,check4)

        // }
        // const checking3 =(e) =>{
        //     console.log(e.target.name)
        //     setCheck3(prev => !prev)
        //     console.log(check1,check2,check3,check4)

        // }
        // const checking4 =(e) =>{
        //     console.log(e.target.name)
        //     setCheck4(prev => !prev)
        //     console.log(check1,check2,check3,check4)
        // }
      
    return <>
    <div className="">
        <div className="Ediv1">
            
            <div className="container">
            <div className="row mt-5"> <p className="EP1">Email Registration</p></div>
               
                <div className="row mt-5 ">
                    <div className="col-6 ">

                        
                    <Row  className="mt-0">
            <Col className="col offset">
            <br />
                 <Form className='login-form'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="EE1">Enter Email </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email"  onChange={handleChange} />
                       
                    </Form.Group>
                     <Form.Group  className="mb-3" controlId="formBasicCheckbox">
                         
                         {/* <input 
                            type="checkbox"
                          onChange={(e) => console.log(e.target.checked)}
                       /> <Form.Label>iServe Submitted</Form.Label> */}
                       <Form.Check type="checkbox" label=" iServe Submitted" style={{color: 'darkblue'}}
                       onChange={(e)=>setData({...data,iserv:e.target.checked})}/>
                         
                     </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Enter SR Number</Form.Label>
                        <Form.Control type="Number" placeholder="SR Number" name="srnumber" onChange={handleChange} />
                       
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me on this device" />
                    </Form.Group> */}
                </Form>
            
            </Col>
        </Row>
        <Row>
            {/* <Col className="text-center col-md-4 offset-md-4">
                    <Button variant="primary" onClick={e => {if ( document.querySelector('#formBasicPassword').value === 'HukumMereData') {setAuthStatusParent(true)}}}
                    >
                        Submit
                    </Button>
                    &nbsp;&nbsp;&nbsp; 
                    <Button variant="secondary" disabled>Create an Account*</Button>
                    <p><small className="text-body-tertiary">*Currently available in a limited preview.</small></p>
            </Col>   */}
        </Row>
                    </div>
                    <div className="col-6">


                          <div className="row mt-4">
                            <p  className="EE1" > Select Dashboard</p>
                          </div>
                          <div className="row">
                            <div className="col-3"><Form.Group  className="v1">
                                <Form.Check type="checkbox" onChange={(e)=>setData({...data,dash1:e.target.checked})} label='Dashboard-v1' name="v1"/>
                             </Form.Group></div>
                             <div className="col-3"><Form.Group  className="v2">
                                <Form.Check type="checkbox" onChange={(e)=>setData({...data,dash2:e.target.checked})} label='Dashboard-v2' name="v2"/>
                             </Form.Group></div>
                             <div className="col-3"><Form.Group  className="v3">
                                <Form.Check type="checkbox" onChange={(e)=>setData({...data,dash3:e.target.checked})} label='Dashboard-v3' name="v3"/>
                             </Form.Group></div>
                             <div className="col-3"><Form.Group  className="v4">
                                <Form.Check type="checkbox" onChange={(e)=>setData({...data,dash4:e.target.checked})} label='Dashboard-v4' name="v4"/>
                             </Form.Group></div>
                             


                          </div>
                          <div className="row  mt-5">
                             <div className="col-6">
                                {/* <Form.Group  className="">
                                <Form.Check type="checkbox" onChange={(e)=>setData({...data,dash5:e.target.checked})} label='Approved-by' name="v5"/>
                             </Form.Group> */}

                       <Form.Group className="mt-2" controlId="formBasicEmail">
                        <Form.Label className="EE1">Enter Approver Name </Form.Label>
                        <Form.Control type="email" placeholder="Enter name" name="name"  onChange={handleChange} />
                       
                    </Form.Group>
                             
                             </div>
                             </div>


                         

                    </div>
                    <Row style={{display:'flex',justifyContent:'flex-end',alignItems:'flex-end', height: '12vh',marginBottom:'5px'}}>
                        <Col className="text-center col-md-2 offset-md-4">
                            {/* <Button variant="primary" style={{ width:'201px',height:'35px',background:'#012386',borderRadius:'3px',marginBottom:'10px'}}    >
                            <p style={{color:'#FFF',fontSize:'14.4px',fontWeight:'600',fontFamily:'Roboto',marginTop:''}} onClick={(e)=>{ handleSubmit(e); }}>  Submit Request</p> 
                            </Button>  */}
                            <div className="button-container">
                                <button className="button" onClick={(e)=>{ handleSubmit(e); }}> 
                                    <span className='button_text'>Submit Request</span>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </div>

                
            </div>



        </div>

    </div>
    
    </>


}