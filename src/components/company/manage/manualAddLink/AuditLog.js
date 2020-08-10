import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CDataTable
} from "@coreui/react";

const usersData = [
  {
    id: 0,
    chanel: "John Doe",
    dataType: "John Doe",
    isUpdate: "John Doe",
    createAt: "John Doe",
    updateAt: "John Doe",
    status: "John Doe",
  },
];

const Bida = () => {
  const [items] = useState(usersData);

  const fields = [
    { key: "id", label :"ID" , _style: { width: "15%" } },
    { key: "chanel" , label: "Chanel Content ID", _style: { width: "15%" } },
    { key: "dataType", _style: { width: "15%" } },
    { key: "isUpdate", _style: { width: "15%" } },
    { key: "createAt", _style: { width: "15%" } },
    { key: "updateAt", _style: { width: "15%" } },
    { key: "status", _style: { width: "10%" } },
  ];

  return (
    <div>
      <CCard>
        <CCardHeader>
          <CCardTitle >
            Audit Log  ({items.length})
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
            footer
            itemsPerPage={10}
            outlined
            hover
            sorter
            pagination
            addTableClasses={{}}
            scopedSlots={{
               
            }}
          />
        </CCardBody>
      </CCard>
    </div>
  );
};

export default Bida;
