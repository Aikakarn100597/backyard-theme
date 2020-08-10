import React, { Component } from "react";
import {
  CFormGroup,
  CInputRadio,
  CLabel,
  CForm,
  CRow,
  CCol,
  CInput,
} from "@coreui/react";

export default class ArrInputRadio extends Component {
  isMatch;
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      selectValue: 0,
    };
  }

  setSelectValue = (e) => {
    return this.setState({ selectValue: e.target.value });
  };

  render() {
    return (
      <div>
        {this.props.InputArr.map((e, i) => {
          return (
            <CFormGroup variant="custom-radio" inline>
              <CInputRadio
                custom
                id={`inline-radio${i}`}
                name="inline-radios"
                value={e}
                onChange={this.setSelectValue}
              />
              <CLabel variant="custom-checkbox" htmlFor={`inline-radio${i}`}>
                {e}
              </CLabel>
            </CFormGroup>
          );
        })}

        {this.state.selectValue === "Define Period" ? (
          <div>
            <br />
            <CForm>
              <CRow>
                <CCol md="6">
                  <CInput type="date" />
                </CCol>

                <CCol md="6">
                  <CInput type="date" />
                </CCol>
              </CRow>
            </CForm>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    );
  }
}
