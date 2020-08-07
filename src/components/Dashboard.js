import React from "react";
import { CCard, CCardBody, CCardHeader, CRow, CCol } from "@coreui/react";

const Dashboard = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" sm="6" md="8" jg="8">
          <CCard>
            <CCardHeader style={{ fontSize: 50 }}>Token</CCardHeader>
            <CCardBody>
              <CRow>
                {/* <span style={{ fontSize: 90, fontWeight: 500 }}>0</span>
                <CIcon size={"6xl"} name={"cilPuzzle"} /> */}
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" sm="6" md="4" lg="4">
          <CCard>
            <CCardHeader>
              <CCol xs="4" sm="4" md="4" >
              <span style={{ fontSize: 70, fontWeight: 500 }}>#</span>
              </CCol>
            </CCardHeader>
          </CCard>
        </CCol>
      </CRow>

      <CRow>

      </CRow>
    </>
  );
};

export default Dashboard;
