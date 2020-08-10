import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CButton,
  CForm,
  CFormGroup,
  CTextarea,
} from "@coreui/react";

export default class extends Component {
  render() {
    return (
      <div>
        <CCard>
          <CCardHeader>
            <CCardTitle>Trigger Condition</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CFormGroup>
                <CTextarea />
              </CFormGroup>
              <CButton color={"info"}>SEARCH</CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </div>
    );
  }
}
