import React, { Component } from 'react'
import { CCard, CCardHeader, CCardTitle, CCardBody, CForm, CFormGroup, CInput, CButton } from '@coreui/react'

export default class Own extends Component {
    render() {
        return (
            <div>
                <CCard>
                    <CCardHeader>
                        <CCardTitle>
                            Own
                        </CCardTitle>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <CFormGroup>
                                <CInput placeholder="Search Own"/>
                            </CFormGroup>
                            <CFormGroup>
                                <CButton color="info">
                                    SUNMIT
                                </CButton>
                            </CFormGroup>
                        </CForm>
                    </CCardBody>
                </CCard>
            </div>
        )
    }
}
