import React from "react";
import UserEditor from "./UserEditor";
import UserList from "./UserList";
import { MasterDetailManager } from "@haulmont/jmix-react-antd";
import { registerEntityList } from "@haulmont/jmix-react-web";
import { observer } from "mobx-react";

const ENTITY_NAME = "User";
const ROUTING_PATH = "/userMasterDetail";

const UserMasterDetail = observer(() => {
  return <MasterDetailManager editor={<UserEditor />} browser={<UserList />} />;
});

registerEntityList({
  component: UserMasterDetail,
  caption: "screen.UserMasterDetail",
  screenId: "UserMasterDetail",
  entityName: ENTITY_NAME,
  menuOptions: {
    pathPattern: `${ROUTING_PATH}/:entityId?`,
    menuLink: ROUTING_PATH
  }
});

export default UserMasterDetail;
