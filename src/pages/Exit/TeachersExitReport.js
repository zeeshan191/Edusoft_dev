import React from "react";
import "../Student/AdmissionReport.css";

function TeachersExitReport() {
  return (
    <>
      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3 style={{ padding: "50px" }}>Teachers Exit Report</h3>
            </div>
          </div>
          <form className="mg-b-20">
    <div className="row gutters-8">
        <div className="col-lg-4  col-12 form-group">
            <input type="text" placeholder="Search by Teacher ID ..." className="form-control"/>
        </div>
        <div className="col-lg-4 col-12 form-group">
            <input type="text" placeholder="Search by Teacher Name ..." className="form-control"/>
        </div>
        <div className="col-lg-2 col-12 form-group">
            <button type="submit" className="fw-btn-fill btn-gradient-yellow" style={{ width:"100px"}}>SEARCH</button>
        </div>
    </div>
</form>
          <div className="table-responsive">
            <div
              id="DataTables_Table_0_wrapper"
              className="dataTables_wrapper no-footer"
            >
              <table
                className="table display data-table text-nowrap dataTable no-footer table-striped"
                id="DataTables_Table_0"
                role="grid"
              >
                <thead>
                  <tr role="row">
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Admission iD: activate to sort column ascending"
                      style={{ width: "42.6667px" }}
                    >
                      ID
                    </th>

                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Name: activate to sort column ascending"
                      style={{ width: "81.3333px" }}
                    >
                      Name
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Gender: activate to sort column ascending"
                      style={{ width: "52px" }}
                    >
                      Date of Joining
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="className: activate to sort column ascending"
                      style={{ width: "40px" }}
                    >
                      Date of Exit
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Section: activate to sort column ascending"
                      style={{ width: "54.6667px" }}
                    >
                      Reason For Leaving
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr role="row" className="odd ">
                    <td>001</td>
                    <td>syed tousif</td>
                    <td>20/05/2018</td>
                    <td>20/05/2021</td>
                    <td>Change of Job</td>
                  </tr>

                  <tr role="row" className="odd ">
                    <td>001</td>
                    <td>syed tousif</td>
                    <td>20/05/2018</td>
                    <td>20/05/2021</td>
                    <td>Change of Job</td>
                  </tr>

                  <tr role="row" className="odd ">
                    <td>001</td>
                    <td>syed tousif</td>
                    <td>20/05/2018</td>
                    <td>20/05/2021</td>
                    <td>Change of Job</td>
                  </tr>

                  <tr role="row" className="odd ">
                    <td>001</td>
                    <td>syed tousif</td>
                    <td>20/05/2018</td>
                    <td>20/05/2021</td>
                    <td>Change of Job</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeachersExitReport;
