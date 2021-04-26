import React from 'react'

function TadmissionForm() {
    return (
        <>
        <div className="card height-auto" >
        <div className="card-body">
        <div className="heading-layout1">
    <div className="item-title">
    <h3 style={{padding:"50px"}} >Teacher Admission Form </h3>
            </div>
        </div>
        <form className="new-added-form" >
        <div className="row">
        <div className="col-sm-3   form-group" >
        <label> ID</label>
        <input type="text" placeholder="" className="form-control" />
      </div>
      <div className="col-sm-3 form-group">
        <label> Name </label>
        <input type="text" placeholder="" className="form-control"  />
      </div>
      <div className="col-md-3  form-group">
      <label>Gender </label>
      <select className="select2">
        <option value="" data-select2-id="3"> Select Gender </option>
        <option value="1">Male</option>
        <option value="2">Female</option>

      </select>

    </div>
      <div className="col-xl-3 col-lg-6 col-12 form-group" >
      <label>Date of Birth</label>
      <input type="text" placeholder="dd/mm/yyyy" className="form-control air-datepicker" data-position="bottom right" />
     </div>
     <div className="col-xl-3 col-lg-6 col-12 form-group">
     <label>Phone No </label>
     <input type="text" placeholder="" className="form-control"/>
</div>
<div className="col-lg-3 col-12 form-group mg-t-30">
                  <label className="text-dark-medium">Upload Student Photo</label>
                  <input type="file" className="form-control-file"/>
  


  </div>
<div className="col-lg-6 col-12 form-group" style={{height:"100px"}}>
    <label>Address</label>
    <textarea className="textarea form-control" name="message" id="form-message" cols="10" rows="3"></textarea>
</div>

<hr style={{ width:"1028px"}}/>
<div className="heading-layout1">

<div className="item-title">

  <h3 style={{padding:"50px"}}>Education Details</h3>

  </div>
 
</div>

<div className="col-xl-3 col-lg-6 col-12 form-group" >
      <label>Date of Join</label>
      <input type="text" placeholder="dd/mm/yyyy" className="form-control air-datepicker" data-position="bottom right" />
     </div>

     <div className="col-sm-3 form-group">
        <label>Years of Experience</label>
        <input type="number" placeholder="Year" className="form-control"  />
      </div>
        </div>

        <div className="col-lg-6 col-12 form-group" style={{height:"100px"}}>
    <label>Previous University/School</label>
    <textarea className="textarea form-control" name="message" id="form-message" cols="10" rows="3"></textarea>
</div>
<div className="col-12 form-group mg-t-8">
<button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark" style={{marginTop:'40px'}}>Save</button>

</div>   
</form>
        </div>
        </div>
        </>
    )
}


export default TadmissionForm
