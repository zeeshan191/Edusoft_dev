import React, { useState } from "react";
import "./PromotionReport.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";

import TextError from "../../TextError";
import "react-datepicker/dist/react-datepicker.css";

function PromotionReport() {


  const formValues = [
    {studentId: "B101",
    name: "Mohammed",
    class: 5},
    {studentId: "B102",
    name: "Mohammed",
    class: 5}
  ];

  
  const optionClass = [
    { key: "Select Class", value: "" },
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
    { key: "6", value: "6" },
    { key: "7", value: "7" },
    { key: "8", value: "8" },
    { key: "9", value: "9" },
    { key: "10", value: "10" },
  ];

  const optionSection = [
    { key: "Select Section", value: "" },
    { key: "A", value: "A" },
    { key: "B", value: "B" },
    { key: "C", value: "C" },
    { key: "D", value: "D" },
    { key: "E", value: "E" },
  ];

  const initialValues = {
    class: "",
    section: "",
  };

  const savedValues = {
    class: "",
    section: "",
  };
  const userValidation = Yup.object({
    class: Yup.string().required("*This Field is Mandatory"),
    section: Yup.string().required("*This Field is Mandatory"),
  });

  const onSubmit = (value) => {
    console.log("Submitted Data : ", value + 1);
  };
  return (
    <>
      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3>Promotion Report</h3>
            </div>{" "}
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={userValidation}
          >
            <Form className="new-added-form-1">
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="promotion">Promotion From Standards</label>
                  <Field
                    as="select"
                    id="class"
                    name="class"
                    className="form-control"
                  >
                    {optionClass.map((optionClass) => {
                      return (
                        <option key={optionClass.key} value={optionClass.value}>
                          {optionClass.key}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage name="class" component={TextError} />
                </div>

                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Promotion From Section</label>
                  <Field
                    as="select"
                    id="section"
                    name="section"
                    className="form-control"
                  >
                    {optionSection.map((optionSection) => {
                      return (
                        <option
                          key={optionSection.key}
                          value={optionSection.value}
                        >
                          {optionSection.key}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage name="section" component={TextError} />
                </div>

                <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group-1">
                  <button
                    type="submit"
                    className="fw-btn-fill btn-gradient-yellow"
                    style={{ padding: "06px", marginTop: "32px" }}
                  >
                    {" "}
                    SEARCH
                  </button>
                </div>
              </div>
            </Form>
          </Formik>

          <div className="table-responsive">
            <div
              id="DataTables_Table_0_wrapper"
              className="dataTables_wrapper no-footer"
            >
              <table
                className="table display data-table text-nowrap dataTable no-footer"
                id="DataTables_Table_0"
                role="grid"
              >
                <thead>
                  <tr role="row">
                    <th
                      className="sorting_asc"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="student"
                      style={{ width: "200px" }}
                    >
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input checkAll"
                        />
                        <label className="form-check-label">Sudent ID</label>
                      </div>
                    </th>

                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Gender: activate to sort column ascending"
                      style={{ width: "300px" }}
                    >
                      Student name
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Class: activate to sort column ascending"
                      style={{ width: "200px" }}
                    >
                      Current Class
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" className="odd">
                    <td className="sorting_1">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">
                          {formValues.studentId}
                        </label>
                      </div>
                    </td>
                    <td>{formValues.name}</td>
                    <td>{formValues.class}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 form-group mg-t-8">
            <button
              type="submit"
              className="btn-fill-lg1 btn-gradient-yellow1 btn-hover-bluedark"
              onSubmit={onSubmit}
            >
              Promote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PromotionReport;
