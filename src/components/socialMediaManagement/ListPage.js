import React, { Component } from "react";
import { CCard, CCardBody, CDataTable } from "@coreui/react";

const userData = [];

class ListPage extends Component {
  fields = [
    {
      key: "list_page",
      _style: { width: "25%" },
    },
    {
      key: "channel_content_id",
      _style: { width: "25%" },
    },
    {
      key: "last_feed",
      _style: { width: "25%" },
    },
    {
      key: "last_feed_comment",
      _style: { width: "25%" },
    },
  ];

  render() {
    return (
      <>
        <CCard>
          <CCardBody>
            <CDataTable
              items={userData}
              fields={this.fields}
              columnFilter
              footer
              hover
              sorter
              pagination
              scopedSlots={
                {
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
                }
              }
            />
          </CCardBody>
        </CCard>
      </>
    );
  }
}

export default ListPage;
