import React from "react";
import UserMasterDetail from "../app/user/UserMasterDetail";
import ItemList from "../app/item/ItemList";
import ItemEditor from "../app/item/ItemEditor";
import { Previews, ComponentPreview } from "@haulmont/react-ide-toolbox";

export const ComponentPreviews = () => {
  return (
    <Previews>
      <ComponentPreview path="/ItemEditor">
        <ItemEditor />
      </ComponentPreview>
      <ComponentPreview path="/ItemList">
        <ItemList />
      </ComponentPreview>
      <ComponentPreview path="/UserMasterDetail">
        <UserMasterDetail />
      </ComponentPreview>
    </Previews>
  );
};
