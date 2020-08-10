import React from "react";
import {
  CCard,
  CCardBody,
  CRow,
  CCol,
  CImg,
  CCardTitle,
  CCardSubtitle,
  CCardText,
} from "@coreui/react";

const ReadyCard = (props) => {
  return (
    <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="2">
            <CImg style={{width:"100%"}}
              src={props.Img}
              className="c-avatar-img"
              alt="admin@bootstrapmaster.com"
            />
          </CCol>
          <CCol sm="10">
            <CCardTitle>{props.Title}</CCardTitle>
            <CCardSubtitle>Time</CCardSubtitle>
            <CCardText>{props.time}</CCardText>
            <CCardSubtitle>Group</CCardSubtitle>
            <CCardText>{props.group}</CCardText>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default ReadyCard;
