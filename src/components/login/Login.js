import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
// import { connect } from 'redux'

class Login extends React.Component {
  formIsValid = true;

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
        password: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });

    if (this.state.email && this.state.password) {
      this.formIsValid = true
    }
  };

  handleValidation = () => {
    let state = this.state;
    let errors = {};

    if (!state.email) {
      this.formIsValid = false;
      errors.email = "Please input Email Address!";
    }

    if (!state.password) {
      this.formIsValid = false;
      errors.password = "Please input Password!";
    }

    this.setState({ errors: errors });
    return this.formIsValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.handleValidation();

    if (this.formIsValid) {
      console.log("true");
    }
  };

  render() {
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit={this.handleSubmit}>
                      <h1 style={{ textAlign: "center" }}>Login</h1>
                      <p className="text-muted" style={{ textAlign: "center" }}>
                        Sign In to your account
                      </p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        {this.formIsValid || this.state.email !== "" ? (
                          <>
                            <CInput
                              type="text"
                              placeholder="Email Address"
                              autoComplete="email"
                              name="email"
                              value={this.state.email}
                              onChange={this.handleChange}
                            />
                          </>
                        ) : (
                          <>
                            <CInput
                              invalid
                              type="text"
                              placeholder="Email Address"
                              autoComplete="email"
                              name="email"
                              value={this.state.email}
                              onChange={this.handleChange}
                            />
                          </>
                        )}
                      </CInputGroup>

                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        {this.formIsValid || this.state.password !== "" ? (
                          <>
                            <CInput
                              type="password"
                              placeholder="Password"
                              autoComplete="current-password"
                              name="password"
                              value={this.state.password}
                              onChange={this.handleChange}
                            />
                          </>
                        ) : (
                          <>
                            <CInput
                              invalid
                              type="password"
                              placeholder="Password"
                              autoComplete="current-password"
                              name="password"
                              value={this.state.password}
                              onChange={this.handleChange}
                            />
                          </>
                        )}
                      </CInputGroup>

                      <CRow>
                        <CCol xs="12">
                          <CButton
                            color="success"
                            className="px-4"
                            style={{ textAlign: "center", width: "100%" }}
                            type="submit"
                          >
                            Login
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );
  }
}

export default Login;
