import React from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CDataTable,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const usersData = [
  // {
  //   id: 0,
  //   first_name: "John Doe",
  //   last_name: "Guest",
  //   status: "Pending",
  // },
  // {
  //   id: 1,
  //   first_name: "Samppa Nori",
  //   last_name: "Member",
  //   status: "Active",
  // },
];

export default class UserList extends React.Component {
  fields = [
    { key: "first_name", _style: { width: "40%" } },
    { key: "last_name", _style: { width: "40%" } },
    { key: "action", _style: { width: "20%" }, sorter: false, filter: false },
  ];

  render() {
    return (
      <>
        <CCard>
          <CCardHeader>
            User List
            <CButton
              style={{ width: 100, float: 'right' }}
              color={"success"}
              size={"sm"}
            >
              <CIcon name={"cilPlus"} />
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={usersData}
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
                action: () => {
                  return (
                    <td className="py-2">
                      <CButton
                        color="primary"
                        variant="outline"
                        shape="square"
                        size="sm"
                      >
                        edit
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
