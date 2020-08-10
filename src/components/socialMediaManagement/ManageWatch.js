import React, { Component } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CDataTable,
} from "@coreui/react";

const userData = []

class ManageWatch extends Component {
  fields = [
    { key: "icon", label: '', _style: { width: "10%" }, sorter: false, filter: false },
    { key: "image", label: '', _style: { width: "10%" }, sorter: false, filter: false },
    { key: "page", _style: { width: "40%" } },
    { key: "create_at", _style: { width: "40%" } },
  ];

  render() {
    return (
      <>
        <CCard>
          <CCardHeader>Watch</CCardHeader>
          <CCardBody>
            <CDataTable
              items={userData}
              fields={this.fields}
              columnFilter
              footer
              hover
              sorter
              pagination
              scopedSlots={{
                // action: () => {
                //   return (
                //     <td className="py-2">
                //       <CButton
                //         color="primary"
                //         variant="outline"
                //         shape="square"
                //         size="sm"
                //       >
                //         edit
                //       </CButton>
                //     </td>
                //   );
                // },
              }}
            />
          </CCardBody>
        </CCard>
      </>
    );
  }
}

export default ManageWatch;
