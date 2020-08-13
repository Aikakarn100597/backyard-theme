import React, { Component } from "react";
import {
  CCard,
  CCardHeader,
  CCardTitle,
  CCardBody,
  CForm,
  CFormGroup,
  CButton,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import DropItemAvatar from "./DropItemAvatar";

export default class Own extends Component {
  UserList = [
    { id: 0, Img: "../avatars/1.jpg", name: "Tester" },
    { id: 0, Img: "../avatars/2.jpg", name: "Tester" },
    { id: 0, Img: "../avatars/3.jpg", name: "Tester" },
  ];

  constructor(props) {
    super(props);
    this.state = {
      AvatarIndex: -1,
    };
  }

  render() {
    return (
      <div>
        <CCard>
          <CCardHeader>
            <CCardTitle>Own</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CFormGroup>
                <CDropdown >
                  <CDropdownToggle color="secondary" style={{ textAlign: "left", width: "100%" , height : 50}}>
                    {this.state.AvatarIndex >= 0 ? (
                      <DropItemAvatar   style={{height:50}}
                        Id={this.UserList[this.state.AvatarIndex].id}
                        Img={this.UserList[this.state.AvatarIndex].Img}
                        name={this.UserList[this.state.AvatarIndex].name}
                      />
                    ) : (
                      "Choose Something"
                    )}
                  </CDropdownToggle>
                  <CDropdownMenu style={{ width: "100%" }}>
                    {this.UserList.map((item, index) => {
                      return (
                        <CDropdownItem  style={{height:50}}
                          onClick={() => this.setState({ AvatarIndex: index })}
                          value={item.Id}
                        >
                          <DropItemAvatar
                            Id={item.id}
                            Img={item.Img}
                            name={item.name}
                          />
                        </CDropdownItem>
                      );
                    })}
                  </CDropdownMenu>
                </CDropdown>
              </CFormGroup>
              <CFormGroup>
                <CButton color="primary">Submit</CButton>
              </CFormGroup>
            </CForm>
          </CCardBody>
        </CCard>
      </div>
    );
  }
}
