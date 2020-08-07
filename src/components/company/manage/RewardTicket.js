import React, { useState } from "react";
import { CDataTable, CCardBody, CCard, CCardHeader } from "@coreui/react";

const fields = [
  { key: "name", _style: { width: "20%" } },
  { key: "schemaName", _style: { width: "25%" } },
  { key: "createdAt", _style: { width: "25%" } },
  { key: "manage", _style: { width: "15%" }, sorter: false, filter: false },
  { key: "actions", _style: { width: "5%" }, sorter: false, filter: false },
];

const usersData = [
  {
    id: 0,
    name: "John Doe",
    schemaName: "Guest",
    createdAt: "2018/01/01",
  },
];

function RewardTicket() {
  //const [details, setDetails] = useState([]);
  const [items] = useState(usersData);
  return (
    <CCard>
      <CCardHeader>Reward Ticket ({items.length})</CCardHeader>
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
  );
}

export default RewardTicket;
