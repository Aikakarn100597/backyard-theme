import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CDataTable,
  CBadge,
} from "@coreui/react";

const usersData = [
  {
    id: 0,
    name: "John Doe",
    mail: "John.Doe@hotmail.com",
    createdBy: "2018/01/01",
    createdAt: "2018/01/01",
    transfertype: "CSV",
    status: "Success",
  },
];

const JobQueue = () => {
  const [items] = useState(usersData);

  const fields = [
    { key: "name", label: "Flie Name", _style: { width: "15%" } },
    { key: "mail", label: "Mail to", _style: { width: "25%" } },
    { key: "createdBy", label: "Created by", _style: { width: "15%" } },
    { key: "createdAt", _style: { width: "15%" } },
    { key: "transfertype", label: "Transfer type", _style: { width: "15%" } },
    { key: "status", _style: { width: "15%" } },
  ];

  return (
    <div>
      <CCard>
        <CCardHeader>
          <CCardTitle>Job Queue ({items.length})</CCardTitle>
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
              status: (item) => (
                <td>
                  <CBadge color={ item.status === "Success" ? "success":"danger" }>{item.status}</CBadge>
                </td>
              ),
            }}
          />
        </CCardBody>
      </CCard>
    </div>
  );
};

export default JobQueue;
