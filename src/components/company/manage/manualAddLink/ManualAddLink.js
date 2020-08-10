import React, { Component } from "react";
import {
  CCard,
  CCardHeader,
  CCardTitle,
  CCardBody,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CButton,
} from "@coreui/react";
import AuditLog from "./AuditLog";

export default class ManualAddLink extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state ={
            Datatype : "Post"
        }
    }
    
  render() {
    return (
      <div>
        <CCard>
          <CCardHeader>
            <CCardTitle>Manual Add Link</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CFormGroup>
                <CLabel>Stream ID</CLabel>
                <CInput type="text" />
              </CFormGroup>

              <CFormGroup>
                <CLabel>Data Type</CLabel>
                <CDropdown className="mt-2"  style={{width:"100%"}}>
                  <CDropdownToggle style={{textAlign:"left" , width:"100%"}} variant="outline" caret color="dark">
                    {this.state.Datatype}
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem onClick={()=> this.setState({Datatype: "Post"})}  > Post</CDropdownItem>
                    <CDropdownItem onClick={()=>this.setState({Datatype: "Comment"})}>Comment</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CFormGroup>

              <CFormGroup inline>
                  <CButton color="dark" variant="outline" >RESET</CButton> 
                  <span>  </span>
                  <CButton color="info">SUBMIT</CButton>
              </CFormGroup>
            </CForm>
          </CCardBody>
        </CCard>

        <AuditLog/>
        
      </div>
    );
  }
}
