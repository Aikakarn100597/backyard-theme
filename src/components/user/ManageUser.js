import React from "react";
import SelectCompany from "./SelectCompany";
import UserList from "./UserList";
import {
  CCol,
  CRow,
} from  '@coreui/react'

export default class ManageUser extends React.Component {
  render() {
    return (
      <>
        <CRow>
          <CCol xs="12" sm="6" md="4" jg="4">
            <SelectCompany />
          </CCol>

          <CCol xs="12" sm="6" md="8" lg="8">
            <UserList />
          </CCol>
        </CRow>
      </>
    );
  }
}
