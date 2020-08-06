import React from "react";
import {
  CDropdown,
  CDropdownToggle,
  CImg,
  CDropdownItem,
  CDropdownMenu,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

let profileName = "Dev Computerlogy";
let profileImg = "avatars/6.jpg";
const HeaderbarProfile = () => {
  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={profileImg}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
        <p style={{ margin: "auto", fontSize: 15, paddingLeft: 10 }}>
          {profileName}
        </p>
      </CDropdownToggle>

      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem>
          <CIcon name="cil-account-logout" className="mfe-2" />
          Log out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default HeaderbarProfile;
