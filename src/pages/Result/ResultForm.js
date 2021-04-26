import React from 'react'
import { MixedCheckbox} from "@reach/checkbox";

function ResultForm() {
    const [checked, setChecked] = React.useState(true);
    return (
        <>
            <div className="card height-auto" >
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3 style={{ padding: "50px" }} >Result Form</h3>
                        </div>
                    </div>
                    <form className="mg-b-20">
                        <div className="row gutters-8">
                            <div className="col-lg-4  col-12 form-group" style={{ marginLeft: '50px' }}>
                                <label>Register Number</label>
                                <input type="text" placeholder="Search by Roll Number ..." className="form-control" />
                            </div>

                            <div className="col-lg-2 col-12 form-group">
                                <button type="submit" className="fw-btn-fill btn-gradient-yellow" style={{
                                    width: "100px", marginTop: '36px'
                                    , marginLeft: '200px'
                                }}>SEARCH</button>
                            </div> </div>

                        <div className="row">
                            <div className="col-sm-3 form-group" style={{ marginLeft: '200px' }}>
                                <label>Full Name</label>
                                <input type="text"
                                    placeholder="Name"
                                    className="form-control"
                                    id="fullName"
                                    name="fullName" />

                            </div>
                            <div className="col-sm-3 form-group">
                                <label>Class</label>
                                <input type="text"
                                    placeholder="Number"
                                    className="form-control"
                                    id="section"
                                />

                            </div>

                        </div>
                        <div >
                            <div className="row gutters-8">
                            <div className="col-lg-4  col-12 form-group" style={{marginTop: '20px',
                                marginLeft: '100px'
                            }}>
                                    <input type="text" placeholder="Subject for Calculated ..." className="form-control" />
                                </div>

                                <div className="col-lg-4 col-12 form-group" style={{marginLeft: '150px',
                                    fontSize: 'larger',
                                    fontWeight: '500',
                                    marginTop: '30px'
                                }}>


                                    <label>
                                        <MixedCheckbox
                                            value="whatever"
                                            checked={checked}
                                            onChange={(event) => {
                                                setChecked(event.target.checked);
                                            }}
                                        />
       Include IA Marks
      </label>
                                </div>

                            </div>

                        </div>
                    </form>
                    <div className="table-responsive">
                    <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper no-footer">
                <table className="table display data-table text-nowrap dataTable no-footer table-striped"  id="DataTables_Table_0" role="grid" >
                        <thead>
                            <tr role="row">
                           
                            <th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Admission iD: activate to sort column ascending" style={{width: '42.6667px'}}>Subject</th>
                            <th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="photo: activate to sort column ascending" style={{width: '42.6667px'}}>IA marks</th>
                            
                            <th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style={{width: '81.3333px'}}>External Marks</th>
                            </tr>
                                    </thead>
                        <tbody className="text-center">
                        <tr role="row" className="odd ">
                               
                                <td>
                                <select
                                  className="select2 "
                                  data-select2-id="1"
                                  tabindex="-1"
                                  aria-hidden="true"
                                >
                                  <option value="" data-select2-id="3">
                                    Select{" "}
                                  </option>
                                  <option value="1" data-select2-id="20">
                                    English
                                  </option>
                                  <option value="2" data-select2-id="21">
                                    Urdu
                                  </option>
                                  <option value="3" data-select2-id="22">
                                    Hindi
                                  </option>
                                  <option value="3" data-select2-id="22">
                                    Sanskirit
                                  </option>
                                  <option value="3" data-select2-id="22">
                                    History
                                  </option>
                                </select>
                            </td>
                               
                                <td><input type="text" placeholder="Marks ..." className="form-control"    onkeyup="filterFunction()" style={{width:'200px',marginLeft:"140px"}}/></td>
                                <td><input type="text" placeholder="Marks ..." className="form-control" style={{width:'200px',marginLeft:"140px"}}/></td>
                                
                </tr>
                
                <tr role="row" className="odd">
                        
                        <td>
                        <select
                          className="select2 "
                          data-select2-id="1"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option value="" data-select2-id="3">
                            Select{" "}
                          </option>
                          <option value="1" data-select2-id="20">
                            English
                          </option>
                          <option value="2" data-select2-id="21">
                            Urdu
                          </option>
                          <option value="3" data-select2-id="22">
                            Hindi
                          </option>
                          <option value="3" data-select2-id="22">
                            Sanskirit
                          </option>
                          <option value="3" data-select2-id="22">
                            History
                          </option>
                        </select>
                      </td>
                       
                        <td><input type="text" placeholder="Marks ..." className="form-control" style={{width:'200px',marginLeft:"140px"}}/></td>
                        <td><input type="text" placeholder="Marks ..." className="form-control" style={{width:'200px',marginLeft:"140px"}}/></td>
                        
                </tr>
                
                <tr role="row" className="odd">
                        
                        <td>
                       
                        <select
                          className="select2 "
                          data-select2-id="1"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option value="" data-select2-id="3">
                            Select{" "}
                          </option>
                          <option value="1" data-select2-id="20">
                            English
                          </option>
                          <option value="2" data-select2-id="21">
                            Urdu
                          </option>
                          <option value="3" data-select2-id="22">
                            Hindi
                          </option>
                          <option value="3" data-select2-id="22">
                            Sanskirit
                          </option>
                          <option value="3" data-select2-id="22">
                            History
                          </option>
                        </select>
                      </td>
                      
                        <td><input type="text" placeholder="Marks ..." className="form-control" style={{width:'200px',marginLeft:"140px"}}/></td>
                        <td><input type="text" placeholder="Marks ..." className="form-control" style={{width:'200px',marginLeft:"140px"}}/></td>
                       
                </tr>
                
               
                </tbody>
                </table>
                                </div> 
                </div>
                <hr style={{ width:"1028px"}}/>
                <form>
                <div className="row">
                <div className="heading-layout1">
                <div className="item-title">
                    <h3 style={{ padding: "50px" }} >Total</h3>
                
            </div>
              <div className="col-sm-3   form-group" 
              style={{marginRight: '60px' }} >
              <label>IA Total</label>
              <input type="text" 
                  placeholder="Number" 
                  className="form-control" 
                  id="totalId"
                  name="totalId"/>
                
            </div>
            <div className="col-sm-3   form-group" style={{marginRight: '60px' }} >
            <label>External Total</label>
            <input type="text" 
                placeholder="Number" 
                className="form-control" 
                id="totalId"
                name="totalId"/>
              
          </div>
            
                </div>
                </div>
                <div className="heading-layout1">
                <div className="item-title" style={{    marginLeft: '580px'
                }}>
                    <h3 >Final Total</h3>
                
            </div>
            <div className="col-sm-3   form-group" style={{marginRight: '60px' }}>
           
            <input type="text" 
                placeholder="Number" 
                className="form-control" 
                id="totalId"
                name="totalId"/>
              
          </div>
            
            
            
            </div>
            <div>
            <div className="heading-layout1">
            <div className="item-title" style={{    marginLeft: '580px'
            }}>
                <h3 >Percentage</h3>
            
        </div>
        <div className="col-sm-3   form-group" style={{marginRight: '60px' }} >
       
        <input type="text" 
            placeholder="Percentage" 
            className="form-control" 
            id="totalId"
            name="totalId"/>
          
      </div>
        
        
        
        </div>
        <div className="heading-layout1">
        <div className="item-title" style={{    marginLeft: '580px'
        }}>
            <h3  >Result</h3>
        
    </div>
    <div className="col-sm-3   form-group" style={{marginRight: '60px' }} >
   
    <input type="text" 
        placeholder="Number" 
        className="form-control" 
        id="totalId"
        name="totalId"/>
      
  </div>
    
    
  </div>
    </div>
    <div className="col-12 form-group mg-t-8">
    <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark " style={{marginLeft:"400px"}} >Submit</button>

</div>      
                </form>
                </div>   </div>
        </>
    )
}

export default ResultForm
