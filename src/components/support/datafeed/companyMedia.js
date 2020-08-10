import React, { Component } from "react";
import {
  CCard,
  CCardHeader,
  CCardTitle,
  CCardBody,
  CForm,
  CFormGroup,
  CLabel,
  CButtonGroup,
  CButton,
  CInputRadio,
  CSelect,
} from "@coreui/react";

export default class CompanyMedia extends Component {
  render() {
    return (
      <div>
        <CCard>
          <CCardHeader>
            <CCardTitle>Company and Media Type</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CFormGroup>
                <CLabel>Company *</CLabel>
                <CSelect>
                  <option value="Computerlogy">Computerlogy</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </CSelect>
              </CFormGroup>
              <CFormGroup>
                <CButtonGroup style={{ width: "100%" }}>
                  <CButton variant="outline" color="info" htmlFor="Company-own">
                    <CInputRadio
                      id="Company-own"
                      name="companymeadiatype"
                      value="own"
                    />
                    <CLabel htmlFor="Company-own">OWN</CLabel>
                  </CButton>
                  <CButton
                    variant="outline"
                    color="success"
                    htmlFor="Company-watch"
                  >
                    <CInputRadio
                      id="Company-watch"
                      name="companymeadiatype"
                      value="own"
                    />
                    <CLabel htmlFor="Company-watch">WATCH</CLabel>
                  </CButton>
                  <CButton
                    variant="outline"
                    color="danger"
                    htmlFor="Company-earn"
                  >
                    <CInputRadio
                      id="Company-earn"
                      name="companymeadiatype"
                      value="own"
                    />
                    <CLabel htmlFor="Company-earn">EARN</CLabel>
                  </CButton>
                </CButtonGroup>
              </CFormGroup>
            </CForm>
          </CCardBody>
        </CCard>
      </div>
    );
  }
}
