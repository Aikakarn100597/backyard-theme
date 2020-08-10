import React, { Component } from "react";
import { CInputCheckbox, CLabel, CFormGroup } from "@coreui/react";
import CIcon from "@coreui/icons-react";

export default class CheckBoxSocial extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.ListSocial.map((e) => {
          return (
            <CFormGroup variant="custom-checkbox" inline>
              <CInputCheckbox
                id={`checkbox$${e}`}
                name={`checkbox$${e}`}
                value={e}
              />
              <CLabel
                className="form-check-label"
                htmlFor={`checkbox$${e}`}
                style={{ marginTop: "auto" }}
              >
                <CIcon name={`cib${e}`} />
              </CLabel>
            </CFormGroup>
          );
        })}
      </div>
    );
  }
}
