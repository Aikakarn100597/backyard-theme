import React, { Component } from "react";
import {
  CCard,
  CCardHeader,
  CCardTitle,
  CCardBody,
  CRow,
  CForm,
  CFormGroup,
  CSelect,
  CCol,
  CButton,
  CInput,
} from "@coreui/react";
import KeywordTable from "./KeywordTable";

export default class index extends Component {
  render() {
    var OptionFilter = ["SupportTest", "BackEnd", "BotTest","TesterCG",];
    return (
      <div>
        <CCard>
          <CCardHeader>
            <CCardTitle>Filter</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CRow>
                <CCol sm="5" >
                  <CFormGroup>
                    <CSelect>
                      {OptionFilter.map((item) => {
                        return <option value={item}>{item}</option>;
                      })}
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol sm="5" >
                  <CFormGroup>
                    <CInput type="date"/>
                  </CFormGroup>
                </CCol>
                <CCol sm="2" >
                  <CFormGroup>
                      <CButton color="info" style={{width:"100%"}} >SUBMIT</CButton>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>

        <KeywordTable />
      </div>
    );
  }
}
