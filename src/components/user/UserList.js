import React from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CDataTable,
  CButton
} from "@coreui/react";

export default class UserList extends React.Component {
  fields = [
    { key: "First Name", _style: { width: "40%" } },
    { key: "Last Name", _style: { width: "40%" } },
    { key: "Action", _style: { width: "20%" }, sorter: false, filter: false },
  ];

  render() {
    return (
      <>
        <CCard>
          <CCardHeader>User List</CCardHeader>
          <CCardBody>
            <CDataTable
              fields={this.fields}
              columnFilter
              tableFilter
              footer
              itemsPerPageSelect
              itemsPerPage={5}
              hover
              sorter
              pagination
              scopedSlots={{
                Action: () => {
                  return (
                    <td className="py-2">
                      <CButton
                        color="primary"
                        variant="outline"
                        shape="square"
                        size="sm"
                        onClick={() => {
                          
                        }}
                      >
                      </CButton>
                    </td>
                  );
                },
              }}
            />
          </CCardBody>
        </CCard>
      </>
    );
  }
}
