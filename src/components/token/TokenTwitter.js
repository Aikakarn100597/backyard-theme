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

class TokenTwitter extends Component {
  formIsValid = true;

  constructor(props) {
    super(props);
    this.state = {
      app_id: "",
      consumer_key: "",
      consumer_secret: "",
      errors: {
        app_id: "",
        consumer_key: "",
        consumer_secret: "",
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

    if (!state.consumer_key) {
      this.formIsValid = false;
      errors.consumer_key = "Consumer Key can't be empty!";
    }

    if (!state.consumer_secret) {
      this.formIsValid = false;
      errors.consumer_secret = "Consumer Secret can't be empty!";
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
          <CCardHeader>Token Twitter</CCardHeader>
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
                    <CLabel htmlFor="consumer_key">Consumer Key</CLabel>
                    {this.formIsValid || this.state.consumer_key !== "" ? (
                      <>
                        <CInput
                          id="consumer_key"
                          name="consumer_key"
                          className="input-width"
                          placeholder="Consumer Key"
                          autoComplete="off"
                          value={this.state.consumer_key}
                          onChange={this.handleChange}
                        />
                      </>
                    ) : (
                      <>
                        <CInput
                          invalid
                          id="consumer_key"
                          name="consumer_key"
                          className="input-width"
                          placeholder="Consumer Key"
                          autoComplete="off"
                          value={this.state.consumer_key}
                          onChange={this.handleChange}
                        />
                        <span className="error">
                          {this.state.errors.consumer_key}
                        </span>
                      </>
                    )}
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="consumer_secret">Consumer Secret</CLabel>
                    {this.formIsValid || this.state.consumer_secret !== "" ? (
                      <>
                        <CInput
                          id="consumer_secret"
                          name="consumer_secret"
                          className="input-width"
                          placeholder="Consumer Secret"
                          autoComplete="off"
                          value={this.state.consumer_secret}
                          onChange={this.handleChange}
                        />
                      </>
                    ) : (
                      <>
                        <CInput
                          invalid
                          id="consumer_secret"
                          name="consumer_secret"
                          className="input-width"
                          placeholder="Consumer Secret"
                          autoComplete="off"
                          value={this.state.consumer_secret}
                          onChange={this.handleChange}
                        />
                        <span className="error">
                          {this.state.errors.consumer_secret}
                        </span>
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

export default TokenTwitter;
