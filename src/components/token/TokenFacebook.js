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
  // CInvalidFeedback,
  // CValidFeedback,
} from "@coreui/react";

class TokenFacebook extends Component {
  // formIsValid = true

  constructor(props) {
    super(props);
    this.state = {
      app_id: "",
      app_secret: "",
      errors: {
        app_id: "",
        app_secret: "",
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
    this.formIsValid = true;

    if (!state.app_id) {
      this.formIsValid = false;
      errors.app_id = "App Id can't be empty!";
    }

    if (!state.app_secret) {
      this.formIsValid = false;
      errors.app_secret = "App Secret can't be empty!";
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
          <CCardHeader>Token Facebook</CCardHeader>
          <CCardBody>
            <CForm onSubmit={this.tokenSubmit}>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    {this.formIsValid ? (
                      <>
                        <CLabel htmlFor="app_id">App Id</CLabel>
                        <CInput
                          id="app_id"
                          name="app_id"
                          className="input-width"
                          placeholder="App Id"
                          autoComplete="off"
                          value={this.state.app_id}
                          onChange={this.handleChange}
                        />
                      </>
                    ) : (
                      <>
                        <CLabel htmlFor="app_id">App Id</CLabel>
                        <CInput
                          invalid
                          id="app_id"
                          name="app_id"
                          className="input-width"
                          placeholder="App Id"
                          autoComplete="off"
                          value={this.state.app_id}
                          onChange={this.handleChange}
                        />
                        <span className="error">{this.state.errors.app_id}</span>
                      </>
                    )}
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="app_secret">App Secret</CLabel>
                    <CInput
                      id="app_secret"
                      name="app_secret"
                      className="input-width"
                      placeholder="App Secret"
                      autoComplete="off"
                      value={this.state.app_secret}
                      onChange={this.handleChange}
                    />
                    <span className="error">
                      {this.state.errors.app_secret}
                    </span>
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

export default TokenFacebook;
