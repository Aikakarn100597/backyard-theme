import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CDataTable,
  CLink
} from "@coreui/react";

const usersData = [
  {
    id: 0,
    name: "filetest",
    link: "https://www.google.com",
  },
];

const ListFileTable = () => {
  const [items] = useState(usersData);

  const fields = [
    { key: "name" ,label:"File name", _style: { width: "50%" } },
    { key: "link" , _style: { width: "50%" } }
  ];

  return (
    <div>
      <CCard>
        <CCardHeader>
          <CCardTitle >
            List File  ({items.length})
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
               link : (item) => (
                   <td>
                       <CLink href={item.link}>{item.link}</CLink>
                   </td>
               ),
            }}
          />
        </CCardBody>
      </CCard>
    </div>
  );
};

export default ListFileTable;
