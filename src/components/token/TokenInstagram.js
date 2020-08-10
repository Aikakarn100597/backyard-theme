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

class TokenInstagram extends Component {
  formIsValid = true;

  constructor(props) {
    super(props);
    this.state = {
      app_id: "",
      app_secret: "",
      namespace: "",
      token: "",
      errors: {
        app_id: "",
        app_secret: "",
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

    if (!state.app_id) {
      this.formIsValid = false;
      errors.app_id = "App Id can't be empty!";
    }

    if (!state.app_secret) {
      this.formIsValid = false;
      errors.app_secret = "App Secret can't be empty!";
    }

    if (!state.namespace) {
      this.formIsValid = false;
      errors.namespace = "Namespace can't be empty!";
    }

    if (!state.token) {
      this.formIsValid = false;
      errors.token = "Token can't be empty!";
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
          <CCardHeader>Token Instagram</CCardHeader>
          <CCardBody>
            <CForm onSubmit={this.tokenSubmit}>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="app_id">App Id</CLabel>
                    {this.formIsValid || this.state.app_id !== "" ? (
                      <>
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
                        <span className="error">
                          {this.state.errors.app_id}
                        </span>
                      </>
                    )}
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="app_secret">App Secret</CLabel>
                    {this.formIsValid || this.state.app_secret !== "" ? (
                      <>
                        <CInput
                          id="app_secret"
                          name="app_secret"
                          className="input-width"
                          placeholder="App Secret"
                          autoComplete="off"
                          value={this.state.app_secret}
                          onChange={this.handleChange}
                        />
                      </>
                    ) : (
                      <>
                        <CInput
                          invalid
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
                      </>
                    )}
                  </CFormGroup>
                </CCol>
              </CRow>
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

export default TokenInstagram;
