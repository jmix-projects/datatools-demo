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
      <AddonsMenu key={"addonsMenu"} />
    </VerticalMenu>
  );
};
