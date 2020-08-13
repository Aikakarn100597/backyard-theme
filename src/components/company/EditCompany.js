import React, { Component } from 'react'
import { CCard, CCardHeader, CCardTitle, CForm, CFormGroup, CLabel, CInput, CCardBody, CButton } from '@coreui/react'

export default class EditCompany extends Component {

    selectCompony = this.props.match.params.selectCompony;
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        
    }
    

    render() {
        return (
            <div>
                <CCard>
                    <CCardHeader>
                        <CCardTitle>
                            Edit Form
                        </CCardTitle>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <CFormGroup>
                                <CLabel>Company Name</CLabel>
                                <CInput type="Text" value= {this.selectCompony} />
                            </CFormGroup>
                            <CFormGroup inline>
                                <CButton color="primary" >submit</CButton>
                                <CButton color="secondary">back</CButton>
                            </CFormGroup>
                        </CForm>
                    </CCardBody>
                </CCard>
            </div>
        )
    }
}
