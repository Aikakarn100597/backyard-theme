import React from "react";
// import { useHistory } from 'react-router-dom'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CSelect,
} from '@coreui/react'

function SelectCompany() {
  // render() {
    return (
      <>
        <CCard>
          <CCardHeader>Select Company</CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CSelect custom name="company" id="company">
                <option value="computerlogy">computerlogy</option>
              </CSelect>
            </CFormGroup>

            {/* <CDropdown className="m-1">
              <CDropdownToggle>
                Dropdown button
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#/dashboard">Header</CDropdownItem>
                <CDropdownItem>Action Disabled</CDropdownItem>
                <CDropdownItem href="#/user/user-online">Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown> */}
          </CCardBody>
        </CCard>
      </>
    );
  // }
}

export default SelectCompany
