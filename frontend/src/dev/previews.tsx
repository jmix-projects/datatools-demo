import React from "react";
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
    </Previews>
  );
};
