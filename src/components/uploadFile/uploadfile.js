import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CInputFile,
  CCol,
  CButton,
} from "@coreui/react";

export default class UploadFile extends Component {
  render() {
    return (
      <div>
        <CCard>
          <CCardHeader>
            <CCardTitle>Upload File</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CFormGroup>
                <CLabel>Folder name</CLabel>
                <CInput type="text" placeholder="Folder name" />
              </CFormGroup>
              <CFormGroup>
                  <CLabel>File</CLabel>
                <CCol xs="12" md="9">
                  <CInputFile custom id="custom-file-input" />
                  <CLabel htmlFor="custom-file-input" variant="custom-file">
                    Choose file...
                  </CLabel>
                </CCol>
              </CFormGroup>
              <CFormGroup>
                  <CButton color="primary" >SUBMIT</CButton>
              </CFormGroup>
            </CForm>
          </CCardBody>
        </CCard>
      </div>
    );
  }
}
