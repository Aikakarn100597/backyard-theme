import React, { useState } from "react";
import {
  CDataTable,
  CCardBody,
  CCard,
  CCardHeader,
  CRow,
  CInput,
  CForm,
  CCol,
  CButton,
} from "@coreui/react";

const fields = [
  { key: "ticketId", _style: { width: "15%" } },
  { key: "steamId", label: "Steam ID & Comment ID", _style: { width: "20%" } },
  { key: "name", _style: { width: "15%" } },
  { key: "createdAt", _style: { width: "15%" } },
  { key: "createTime", _style: { width: "15%" } },
  { key: "URL", _style: { width: "15%" } },
];

const usersData = [
  {
    ticketId: 0,
    steamId: "dasdasd",
    name: "John Doe",
    createdAt: "2018/01/01",
    createTime: "Guest",
    URL: "www",
  },
];

function RewardTicket() {
  //const [details, setDetails] = useState([]);
  const [items] = useState(usersData);
  return (
    <div>
      <CCard>
        <CCardBody>
          <CForm action="" method="post">
            <CRow>
              <CCol sm="2">
                <p style={{ margin: "auto" }}>Define Period</p>
              </CCol>
              <CCol sm="4">
                <CInput type="date" />
              </CCol>
              <CCol sm="4">
                <CInput type="date" />
              </CCol>
              <CCol sm="2">
                <CButton style={{ width: "100%" }} color={"info"}>
                  Search
                </CButton>
              </CCol>
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>

      <CCard>
        <CCardHeader>
          <p style={{ paddingLeft: 15, marginTop: "auto" }}>
            Ticket ({items.length})
          </p>
        </CCardHeader>
        <CCardBody>
          <br />
          <CDataTable
            items={usersData}
            fields={fields}
            striped
            responsive
            columnFilter
            tableFilter
            footer
            itemsPerPageSelect
            itemsPerPage={10}
            outlined
            hover
            sorter
            pagination
            addTableClasses={{}}
            scopedSlots={{}}
          />
        </CCardBody>
      </CCard>

      <CCard>
        <CCardHeader>Reward Ticket</CCardHeader>
        <CCardBody>
          <CForm action="" method="post">
            <CRow>
              <CCol sm="12">
                <p>Ticket ID</p>
                <CInput type="text" placeholder="Ticket ID" />
              </CCol>
            </CRow><br/>
            <CButton color="info" >SUBMIT</CButton>
          </CForm>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default RewardTicket;
