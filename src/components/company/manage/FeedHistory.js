import React, { Component } from "react";
import {
  CCard,
  CCardHeader,
  CCardTitle,
  CCardBody,
  CForm,
  CRow,
  CCol,
  CInput,
  CButton,
  CFormGroup,
} from "@coreui/react";

export default class FeedHistory extends Component {
  render() {
    return (
      <div>
        <CCard>
          <CCardHeader>
            <CCardTitle>Feed History</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CRow>
                <CCol sm="4">
                  <CFormGroup>
                    {" "}
                    <CInput type="text" placeholder="Search Page" />{" "}
                  </CFormGroup>
                </CCol>
                <CCol sm="3">
                  <CFormGroup>
                    {" "}
                    <CInput type="date" />{" "}
                  </CFormGroup>
                </CCol>
                <CCol sm="3">
                  <CFormGroup>
                    {" "}
                    <CInput type="date" />
                  </CFormGroup>
                </CCol>
                <CCol sm="2">
                  <CFormGroup>
                    {" "}
                    <CButton style={{ width: "100%" }} color="primary">
                      EXPORT
                    </CButton>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </div>
    );
  }
}
