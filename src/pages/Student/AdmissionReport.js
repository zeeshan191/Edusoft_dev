import React, { useState, useEffect } from "react";
import "./AdmissionReport.css";
import Axios from "axios";

function AdmissionReport() {
  const [data, setData] = useState([]);

  useEffect(() => {
    alert("on call");
    // Update the document title using the browser API
    Axios.post("http://localhost:3004/getStudentDetails", {
      student_id: "",
    }).then((res) => {
      setData(res.data);
      //   setDupData(res.data);
      console.log("Success in effect", data);
      console.log("result set in effect: ", res.data);
    });
  }, []);

  return (
    <>
      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3 style={{ padding: "50px" }}>Admission Report</h3>
            </div>
          </div>
          <form className="mg-b-20">
            <div className="row gutters-8">
              <div className="col-lg-4  col-12 form-group">
                <input
                  type="text"
                  placeholder="Search by Student ID ..."
                  className="form-control"
                />
              </div>
              <div className="col-lg-4 col-12 form-group">
                <input
                  type="text"
                  placeholder="Search by Studend Name ..."
                  className="form-control"
                />
              </div>
              <div className="col-lg-2 col-12 form-group">
                <button
                  type="submit"
                  className="fw-btn-fill btn-gradient-yellow"
                  style={{ width: "100px" }}
                >
                  SEARCH
                </button>
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
                      Admission id
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="photo: activate to sort column ascending"
                      style={{ width: "42.6667px" }}
                    >
                      Photo
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
                      Gender
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
                      class
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
                      Section
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Parents: activate to sort column ascending"
                      style={{ width: "96px" }}
                    >
                      Parents
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Address: activate to sort column ascending"
                      style={{ width: "134px" }}
                    >
                      Address
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Date Of Birth: activate to sort column ascending"
                      style={{ width: "92.6667px" }}
                    >
                      Date Of Birth
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Phone: activate to sort column ascending"
                      style={{ width: "100.667px" }}
                    >
                      Phone
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="E-mail: activate to sort column ascending"
                      style={{ width: "166.667px" }}
                    >
                      Date of join
                    </th>
                    <th
                      className="sorting_disabled"
                      rowspan="1"
                      colspan="1"
                      aria-label=""
                      style={{ width: "48px" }}
                    ></th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {data.map((item) => (
                    <tr key={item.STUDENT_ID} role="row" className="odd ">
                      <td>{item.STUDENT_ID}</td>
                      {/* <td style={styleback}>{item.stich_name}</td> */}
                      <td>Photo Ni hai</td>
                      <td>{item.STD_NAME}</td>
                      <td>{item.STD_GENDER}</td>
                      <td>{item.STD_CLASS}</td>
                      <td>{item.STD_SECTION}</td>
                      <td>{item.STD_PAR_GARD}</td>
                      <td>{item.STD_ADDRESS}</td>
                      <td>{item.STD_DOB}</td>
                      <td>{item.STD_PHONE}</td>
                      <td>{item.STD_DOJ}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdmissionReport;
