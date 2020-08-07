import React, { useState } from "react";
import {
  CDataTable,
  CCardBody,
  CCard,
  CButtonGroup,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CButton,
  CRow,
  CCardHeader,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const usersData = [
  {
    id: 0,
    name: "John Doe",
    schemaName: "Guest",
    createdAt: "2018/01/01",
  },
  {
    id: 1,
    name: "John Doe",
    schemaName: "Guest",
    createdAt: "2018/01/01",
  },
  {
    id: 2,
    name: "John Doe",
    schemaName: "Guest",
    createdAt: "2018/01/01",
  },
  {
    id: 3,
    name: "John Doe",
    schemaName: "Guest",
    createdAt: "2018/01/01",
  },
  {
    id: 4,
    name: "John Doe",
    schemaName: "Guest",
    createdAt: "2018/01/01",
  },
  {
    id: 5,
    name: "John Doe",
    schemaName: "Guest",
    createdAt: "2018/01/01",
  },
  {
    id: 6,
    name: "John Doe",
    schemaName: "Guest",
    createdAt: "2018/01/01",
  },

  {
    id: 7,
    name: "John Doe",
    schemaName: "Guest",
    createdAt: "2018/01/01",
  },

  {
    id: 8,
    name: "John Doe",
    schemaName: "Guest",
    createdAt: "2018/01/01",
  },
  {
    id: 9,
    name: "John Doe",
    schemaName: "Guest",
    createdAt: "2018/01/01",
  },
];

function Company() {
  //const [details, setDetails] = useState([]);
  const [items] = useState(usersData);

  const fields = [
    { key: "name", _style: { width: "20%" } },
    { key: "schemaName", _style: { width: "25%" } },
    { key: "createdAt", _style: { width: "25%" } },
    { key: "manage", _style: { width: "15%" }, sorter: false, filter: false },
    { key: "actions", _style: { width: "5%" }, sorter: false, filter: false },
  ];

  return (
    <CCard>
      <CCardHeader>
        {" "}
        <CRow>
          <p style={{ paddingLeft: 15, marginTop: "auto" }}>
            Company ({items.length})
          </p>
          <p style={{ margin: "auto" }}></p>
          <CButton
            style={{ width: 100 }}
            color={"success"}
            size={"sm"}
            className="m-2"
          >
            <CIcon name={"cilPlus"} />
          </CButton>
          <p style={{ paddingRight: 15 }}></p>
        </CRow>
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
          scopedSlots={{
            actions: () => (
              <td>
                <CButtonGroup>
                  <button
                    style={{
                      outline: "none",
                      border: "none",
                      backgroundColor: "Transparent",
                    }}
                  >
                    <CIcon name={"cilPencil"} size="lg" />
                  </button>
                  <button
                    style={{
                      outline: "none",
                      border: "none",
                      backgroundColor: "Transparent",
                    }}
                  >
                    {" "}
                    <CIcon name={"cilTrash"} size="lg" />
                  </button>
                </CButtonGroup>
              </td>
            ),

            manage: () => (
              <td>
                <CDropdown className="mt-0">
                  <CDropdownToggle caret color="info">
                    Manage
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="/company/rewardticket">
                      <CIcon name="cilMinus" />
                      Reward Ticket
                    </CDropdownItem>
                    <CDropdownItem href="/company/ready">
                      <CIcon name="cilMinus" />
                      Ready
                    </CDropdownItem>
                    <CDropdownItem href="/company/mention">
                      <CIcon name="cilMinus" />
                      Mention
                    </CDropdownItem>
                    <CDropdownItem href="/company/tokenpantip">
                      <CIcon name="cilMinus" />
                      Token Pantip
                    </CDropdownItem>
                    <CDropdownItem href="/company/jobqueue">
                      <CIcon name="cilMinus" />
                      Job Queue
                    </CDropdownItem>
                    <CDropdownItem href="/company/triggercondition">
                      <CIcon name="cilMinus" />
                      Trigger Condition
                    </CDropdownItem>
                    <CDropdownItem href="/company/bida">
                      <CIcon name="cilMinus" />
                      Bida
                    </CDropdownItem>
                    <CDropdownItem href="/company/feedhistory">
                      <CIcon name="cilMinus" />
                      Feed History
                    </CDropdownItem>
                    <CDropdownItem href="/company/manualaddlink">
                      <CIcon name="cilMinus" />
                      Manual Add Link
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </td>
            ),
          }}
        />
      </CCardBody>
    </CCard>
  );
}

export default Company;
