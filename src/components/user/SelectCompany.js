import React from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CSelect,
} from '@coreui/react'

export default class SelectCompany extends React.Component {
  render() {
    return (
      <>
        <CCard>
          <CCardHeader>Select Company</CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CSelect custom name="company" id="company">
                <option value="computerlogy">computerlogy</option>
              </CSelect>
            </CFormGroup>
          </CCardBody>
        </CCard>
      </>
    );
  }
}
