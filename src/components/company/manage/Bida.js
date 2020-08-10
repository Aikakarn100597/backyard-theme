import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CDataTable,
  CButton,
  CRow,
  CButtonGroup,
  CInput,
  CLink,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const usersData = [
  {
    id: 0,
    name: "John Doe",
    link: "https://www.google.com",
    priority: 1,
  },
];

const Bida = () => {
  const [items] = useState(usersData);

  const fields = [
    { key: "name", _style: { width: "35%" } },
    { key: "link", _style: { width: "35%" } },
    { key: "priority", _style: { width: "15%" } },
    { key: "actions", _style: { width: "15%" } },
  ];

  return (
    <div>
      <CCard>
        <CCardHeader>
          <CCardTitle>
              <CRow>
            <h4 style={{ paddingLeft: 15, marginTop: "auto" }}>
              Job Queue ({items.length})
            </h4>
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
          </CCardTitle>
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

                  priority : (item)=> (
                      <td>
                        <CInput type="integer" value={item.priority} />
                      </td>
                  ),

                  link : (item) => (
                      <td>
                          <CLink href={item.link} >{item.link}</CLink>
                      </td>
                  )
            }}
          />
        </CCardBody>
      </CCard>
    </div>
  );
};

export default Bida;
