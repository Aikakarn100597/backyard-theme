import React, { Component } from "react";
import { CRow, CCol, CImg } from "@coreui/react";

export default class DropItemAvatar extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={this.props.style}>
        <CRow style={{ marginTop: "auto" , textAlign: "auto" }}>
          <CCol sm="4">
            <CImg
              style={{ height: "100%"  , maxHeight:30 ,maxWidth:30, borderRadius: "50em" }}
              src={this.props.Img}
            />
          </CCol>
          <CCol sm="4">{this.props.name}</CCol>
        </CRow>
      </div>
    );
  }
}
