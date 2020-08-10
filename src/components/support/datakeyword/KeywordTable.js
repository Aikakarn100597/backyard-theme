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
    topic: "John Doe",
    name: "d",
    mention: "Doe",
    message: "John Doe",
    createAt: "18/08/2018",
    updateAt: "18/08/2018",
  },
];

const KeywordTable = () => {
  const [items] = useState(usersData);

  const fields = [
    { key: "id", label:"ID",_style: { width: "10%" } },
    { key: "topic",_style: { width: "15%" } },
    { key: "name" , _style: { width: "15%" } },
    { key: "mention" , _style: { width: "10%" } , filter:false },
    { key: "createAt", _style: { width: "15%" } },
    { key: "updateAt", _style: { width: "15%" } },
  ];

  return (
    <div>
      <CCard>
        <CCardHeader>
          <CCardTitle >
            Keyword  ({items.length})
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

export default KeywordTable;
