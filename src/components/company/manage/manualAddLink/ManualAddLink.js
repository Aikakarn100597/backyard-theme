import React, { Component } from "react";
import {
  CCard,
  CCardHeader,
  CCardTitle,
  CCardBody,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CButton,
  CSelect,
} from "@coreui/react";
import AuditLog from "./AuditLog";

export default class ManualAddLink extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CCard>
          <CCardHeader>
            <CCardTitle>Manual Add Link</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CFormGroup>
                <CLabel>Stream ID</CLabel>
                <CInput type="text" />
              </CFormGroup>

              <CFormGroup>
                <CLabel>Data Type</CLabel>
                <CSelect>
                  <option value="Post">Post</option>
                  <option value="Comment">Comment</option>
                </CSelect>
              </CFormGroup>

              <CFormGroup inline>
                <CButton color="dark" variant="outline">
                  RESET
                </CButton>
                <span> </span>
                <CButton color="info">SUBMIT</CButton>
              </CFormGroup>
            </CForm>
          </CCardBody>
        </CCard>

        <AuditLog />
      </div>
    );
  }
}
