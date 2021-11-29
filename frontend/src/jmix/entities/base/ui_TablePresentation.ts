export class UiTablePresentation {
  static NAME = "ui_TablePresentation";
  id?: string;
  createTs?: any | null;
  createdBy?: string | null;
  componentId?: string | null;
  name?: string | null;
  settings?: string | null;
  username?: string | null;
  autoSave?: boolean | null;
  isDefault?: boolean | null;
  updateTs?: any | null;
  updatedBy?: string | null;
  sysTenantId?: string | null;
}
export type UiTablePresentationViewName =
  | "_base"
  | "_instance_name"
  | "_local"
  | "app";
export type UiTablePresentationView<
  V extends UiTablePresentationViewName
> = V extends "_base"
  ? Pick<
      UiTablePresentation,
      | "id"
      | "createTs"
      | "createdBy"
      | "componentId"
      | "name"
      | "settings"
      | "username"
      | "autoSave"
      | "isDefault"
      | "updateTs"
      | "updatedBy"
      | "sysTenantId"
    >
  : V extends "_local"
  ? Pick<
      UiTablePresentation,
      | "id"
      | "createTs"
      | "createdBy"
      | "componentId"
      | "name"
      | "settings"
      | "username"
      | "autoSave"
      | "isDefault"
      | "updateTs"
      | "updatedBy"
      | "sysTenantId"
    >
  : V extends "app"
  ? Pick<
      UiTablePresentation,
      | "id"
      | "componentId"
      | "name"
      | "settings"
      | "username"
      | "autoSave"
      | "isDefault"
    >
  : never;
