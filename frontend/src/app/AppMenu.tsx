import { MenuProps } from "antd";
import React from "react";
import { VerticalMenu, MenuItem, AddonsMenu } from "@haulmont/jmix-react-antd";
import { BarsOutlined, HomeOutlined } from "@ant-design/icons";

export interface AppMenuProps extends MenuProps {}

export const AppMenu = (props: AppMenuProps) => {
  return (
    <VerticalMenu {...props}>
      <MenuItem
        screenId="HomePage"
        icon={<HomeOutlined />}
        caption={"screen.home"}
        key={"home"}
      />
      <MenuItem
        screenId={"ItemList"}
        icon={<BarsOutlined />}
        caption={"screen.ItemList"}
        key={"bd4e8ead-e47a-45e9-9d40-970dda7c68ce"}
      />
      <MenuItem
        screenId={"UserMasterDetail"}
        icon={<BarsOutlined />}
        caption={"screen.UserMasterDetail"}
        key={"0d1bcc74-b93a-46a4-8bb8-63f60fc62f1c"}
      />
      <AddonsMenu key={"addonsMenu"} />
    </VerticalMenu>
  );
};
