import React from "react";
import "./AdmissionReport.css";
function AdmissionReport() {
  const formValues = {
    admissionId: "B101",
    photo: "#",
    name: "Mohammed",
    gender: "Male",
    class: "5",
    section: "B",
    parents: "Ahmed",
    address: "NAGAR",
    dob: "29-04-2001",
    phoneNo: "8150899321",
    doj: "19-02-2020",
  };
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
                  type="search"
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
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Admission iD: activate to sort column ascending"
                      style={{ width: "42.6667px" }}
                    >
                      Admission id
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="photo: activate to sort column ascending"
                      style={{ width: "42.6667px" }}
                    >
                      Photo
                    </th>

                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Name: activate to sort column ascending"
                      style={{ width: "81.3333px" }}
                    >
                      Name
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Gender: activate to sort column ascending"
                      style={{ width: "52px" }}
                    >
                      Gender
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="className: activate to sort column ascending"
                      style={{ width: "40px" }}
                    >
                      class
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Section: activate to sort column ascending"
                      style={{ width: "54.6667px" }}
                    >
                      Section
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Parents: activate to sort column ascending"
                      style={{ width: "96px" }}
                    >
                      Parents
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Address: activate to sort column ascending"
                      style={{ width: "134px" }}
                    >
                      Address
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Date Of Birth: activate to sort column ascending"
                      style={{ width: "92.6667px" }}
                    >
                      Date Of Birth
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Phone: activate to sort column ascending"
                      style={{ width: "100.667px" }}
                    >
                      Phone
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="E-mail: activate to sort column ascending"
                      style={{ width: "166.667px" }}
                    >
                      Date of join
                    </th>
                    <th
                      className="sorting_disabled"
                      rowSpan="1"
                      colSpan="1"
                      aria-label=""
                      style={{ width: "48px" }}
                    ></th>
                  </tr>
                </thead>

                <tbody className="text-center">
                  <tr role="row" className="odd ">
                    <td>{formValues.admissionId}</td>
                    <td className="text-center">
                      <img src={formValues.photo} alt="" />
                    </td>
                    <td>{formValues.name}</td>
                    <td>{formValues.gender}</td>
                    <td>{formValues.class}</td>
                    <td>{formValues.section}</td>
                    <td> {formValues.parents}</td>
                    <td> {formValues.address}</td>
                    <td>{formValues.dob}</td>
                    <td>{formValues.phoneNo}</td>
                    <td>{formValues.doj}</td>
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

export default AdmissionReport;
