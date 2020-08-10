import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CForm,
  CLabel,
  CInput,
  CFormGroup,
  CButton,
} from "@coreui/react";

export default class TokenPantip extends Component {
  render() {
    return (
      <div>
        <CCard>
          <CCardHeader>
            <CCardTitle>Token Pantip</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CFormGroup>
                <CLabel>Reference ID</CLabel>
                <CInput placeholder="Reference id"/>
              </CFormGroup>
              <CFormGroup>
                <CLabel>Token</CLabel>
                <CInput placeholder="Token"/>
              </CFormGroup>
              <CButton color="info" >SUBMIT</CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </div>
    );
  }
}
