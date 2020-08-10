import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardHeader,
  CForm,
  CLabel,
  CInput,
  CRow,
  CCol,
  CFormGroup,
  CButton,
} from "@coreui/react";
import ArrInputRadio from "./InputRadio";
import MentionCount from "./MentionCount";
import CheckBoxSocial from "./CheckBoxSocial";

export default class Mention extends Component {
  render() {
    var SocialList = ["Facebook","Instagram","Twitter","Youtube","Pinterest","Tiktok"];
    var InputRadioArr = ["Most recent", "Today","Yesterday","Last 7 days","this month","Last month","Define Period"];

    return (
      <div>
        <CRow>
          <CCol sm="9">
            <CCard>
              <CCardTitle>
                <CCardHeader>Select</CCardHeader>
              </CCardTitle>
              <CCardBody>
                <CForm>
                  <CFormGroup>
                    <CLabel htmlFor="nf-email">
                      <h5>Owned</h5>
                    </CLabel>
                    <CInput type="text" placeholder="Search Own" />
                  </CFormGroup>

                  <CFormGroup>
                    <CLabel htmlFor="nf-email">
                      <h5>Earned</h5>
                    </CLabel>
                    <br/>
                    <CFormGroup variant="custom-checkbox" inline>
                    <p>Socail media :    </p>
                    <CheckBoxSocial ListSocial={SocialList} />
                    </CFormGroup>
                    <CInput type="text" placeholder="Search Earn" />
                  </CFormGroup>

                  <CFormGroup>
                    <CLabel htmlFor="nf-email">
                      <h5>Watch</h5>
                    </CLabel>
                    <CInput type="text" placeholder="Search Watch" />
                  </CFormGroup>

                  <CFormGroup>
                    <CLabel>
                      <h5>Time</h5>
                    </CLabel>
                    <br />
                    
                    <ArrInputRadio InputArr={InputRadioArr} />

                  </CFormGroup>
                  <CButton color="info" >SEARCH</CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm="3">
            <MentionCount />
          </CCol>
        </CRow>
      </div>
    );
  }
}
