import React, { Component } from "react";
import {
  CRow,
  CCol,
  CLabel,
  CInput,
  CButton,
  CCard,
  CCardBody,
  CForm,
  CFormGroup,
  CInputRadio,
} from "@coreui/react";

const sortBy = [
  { id: 1, value: "All" },
  { id: 2, value: "Last Feed" },
  { id: 3, value: "Last Feed Comment" },
  { id: 4, value: "Last Feed Album" },
];

class SearchPage extends Component {
  render() {
    return (
      <>
        <CCard>
          <CCardBody>
            <CForm>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CInput
                      id="search_page"
                      name="search_page"
                      placeholder="Search Page"
                    />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel style={{ paddingRight: 20 }}>Sort By</CLabel>
                    {sortBy.map((sortBy) => {
                      return <CFormGroup variant="custom-radio" inline>
                        <CInputRadio
                          custom
                          id={sortBy.id}
                          name="inline-radios"
                          value={sortBy.value}
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor={sortBy.id}
                        >
                          {sortBy.value}
                        </CLabel>
                      </CFormGroup>;
                    })}
                  </CFormGroup>
                </CCol>
              </CRow>

              <CFormGroup className="form-actions">
                <CButton
                  type=""
                  style={{ backgroundColor: "#ff4c6a", color: "white" }}
                >
                  Search
                </CButton>
              </CFormGroup>
            </CForm>
          </CCardBody>
        </CCard>
      </>
    );
  }
}

export default SearchPage;
