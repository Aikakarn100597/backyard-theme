import React, { Component } from "react";
import {
  CRow,
  CCol,
  CLabel,
  CInput,
  CButton,
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormGroup,
} from "@coreui/react";

class TokenYoutube extends Component {
  formIsValid = true;

  constructor(props) {
    super(props);
    this.state = {
      namespace: "",
      token: "",
      errors: {
        namespace: "",
        token: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleValidation = () => {
    let state = this.state;
    let errors = {};

    if (!state.namespace) {
      this.formIsValid = false;
      errors.namespace = "App Id can't be empty!";
    }

    if (!state.token) {
      this.formIsValid = false;
      errors.token = "App Secret can't be empty!";
    }

    this.setState({ errors: errors });
    return this.formIsValid;
  };

  tokenSubmit = (e) => {
    e.preventDefault();

    this.handleValidation();
  };

  render() {
    return (
      <>
        <CCard>
          <CCardHeader>Token Youtube</CCardHeader>
          <CCardBody>
            <CForm onSubmit={this.tokenSubmit}>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="namespace">Namespace</CLabel>
                    {this.formIsValid || this.state.namespace !== "" ? (
                      <>
                        <CInput
                          id="namespace"
                          name="namespace"
                          className="input-width"
                          placeholder="Namespace"
                          autoComplete="off"
                          value={this.state.namespace}
                          onChange={this.handleChange}
                        />
                      </>
                    ) : (
                      <>
                        <CInput
                          invalid
                          id="namespace"
                          name="namespace"
                          className="input-width"
                          placeholder="Namespace"
                          autoComplete="off"
                          value={this.state.namespace}
                          onChange={this.handleChange}
                        />
                        <span className="error">
                          {this.state.errors.namespace}
                        </span>
                      </>
                    )}
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="token">Token</CLabel>
                    {this.formIsValid || this.state.token !== "" ? (
                      <>
                        <CInput
                          id="token"
                          name="token"
                          className="input-width"
                          placeholder="Token"
                          autoComplete="off"
                          value={this.state.token}
                          onChange={this.handleChange}
                        />
                      </>
                    ) : (
                      <>
                        <CInput
                          invalid
                          id="token"
                          name="token"
                          className="input-width"
                          placeholder="Token"
                          autoComplete="off"
                          value={this.state.token}
                          onChange={this.handleChange}
                        />
                        <span className="error">{this.state.errors.token}</span>
                      </>
                    )}
                  </CFormGroup>
                </CCol>
              </CRow>
              <CFormGroup className="form-actions">
                <CButton type="submit" color="primary">
                  Submit
                </CButton>
              </CFormGroup>
            </CForm>
          </CCardBody>
        </CCard>
      </>
    );
  }
}

export default TokenYoutube;
