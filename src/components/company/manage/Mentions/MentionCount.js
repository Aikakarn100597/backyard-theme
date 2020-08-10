import React, { Component } from "react";
import { CCard, CCardHeader, CCardTitle, CCardBody } from "@coreui/react";

export default class MentionCount extends Component {
  render() {
    return (
      <div>
        <CCard>
          <CCardHeader>
            <CCardTitle>Mentions</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <h1>{0}</h1>
          </CCardBody>
        </CCard>
      </div>
    );
  }
}
