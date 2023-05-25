import { Stack } from "@mui/material";
import { grey, indigo } from "@mui/material/colors";
import { ButtonFilled, ButtonTabFilledSecondary } from "components/Button";
import { Content } from "components/Content";
import React from "react";
import { PageContentMenu, SubMenu, SubMenuItem } from "./Wrapper";

const PageMenu = (props) => {
  const { tabList, setPageSetting, location, endElement } = props;
  // console.log('location pagemenu.js', location)
  return (
    <PageContentMenu
      noGap
      btnBGColor={"white"}
      btnColor={grey[600]}
      activeBtnBGColor={"var(--nav-active-background-color)"}
      activeBtnColor={"var(--nav-active-text-color)"}
      weight={600}
    >
      <div className="menu-item-container">
        <div className="menu-item-wrapper">
          {tabList.map((menu) => (
            // console.log('menu', menu)
            <div
              key={menu.href}
              data={menu.href}
              className={`menu-item ${location.split("/")[2] == menu.href.split("/")[2] ? "active" : ""
                }`}
              text={menu.text}
              onClick={setPageSetting}
              id={menu.id}
            >
              {menu.text}
              {/* loop sub Menu */}
              {menu?.subMenu && (
                <SubMenu className="sub-menu">
                  {menu?.subMenu?.map((sub_menu) => (
                    <SubMenuItem key={sub_menu?.href}>
                      <a
                        text={sub_menu?.text}
                        data={sub_menu?.href}
                        onClick={setPageSetting}
                        className={`sub-menu-link ${location.split("/")[3] == sub_menu?.href?.split("/")[3]
                            ? "active"
                            : ""
                          }`}
                      >
                        {sub_menu.text}
                      </a>
                    </SubMenuItem>
                  ))}
                </SubMenu>
              )}
            </div>
          ))}
        </div>
      </div>
      {endElement && endElement}
    </PageContentMenu>
  );
};

export default PageMenu;
