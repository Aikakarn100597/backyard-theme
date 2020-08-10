import React, { Component } from "react";
import CompanyMedia from "./companyMedia";
import { CRow, CCol } from "@coreui/react";
import Own from "./Own";
import WidgetTable from "./WidgetTable";

export default class DataFeed extends Component {
  render() {
    return (
      <div>
        <CRow>
          <CCol sm="6">
            <CompanyMedia />
          </CCol>
          <CCol sm="6">
            <Own />
          </CCol>
        </CRow>
        <CRow>
            <WidgetTable/>
        </CRow>
      </div>
    );
  }
}
