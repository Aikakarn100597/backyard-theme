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
    name: "",
    chanelType: "John Doe",
    type: "Doe",
    message: "John Doe",
    createAt: "18/08/2018",
    createTime: "18/08/2018",
    chanelContent: "John Doe",
  },
];

const WidgetTable = () => {
  const [items] = useState(usersData);

  const fields = [
    { key: "name" , _style: { width: "15%" } },
    { key: "chanelType" , _style: { width: "15%" } },
    { key: "type", _style: { width: "15%" } },
    { key: "message", _style: { width: "15%" } },
    { key: "createAt", _style: { width: "15%" } },
    { key: "createTime", _style: { width: "15%" } },
    { key: "chanelContent", _style: { width: "10%" } , filter:false },
    { key: "id", label:"ID",_style: { width: "10%" } },
  ];

  return (
    <div>
      <CCard>
        <CCardHeader>
          <CCardTitle >
            Widget  ({items.length})
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

export default WidgetTable;
