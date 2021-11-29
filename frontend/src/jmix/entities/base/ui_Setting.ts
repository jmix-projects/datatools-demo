export class UiSetting {
  static NAME = "ui_Setting";
  id?: string;
  createTs?: any | null;
  createdBy?: string | null;
  username?: string | null;
  name?: string | null;
  value?: string | null;
}
export type UiSettingViewName = "_base" | "_instance_name" | "_local";
export type UiSettingView<V extends UiSettingViewName> = V extends "_base"
  ? Pick<
      UiSetting,
      "id" | "createTs" | "createdBy" | "username" | "name" | "value"
    >
  : V extends "_local"
  ? Pick<
      UiSetting,
      "id" | "createTs" | "createdBy" | "username" | "name" | "value"
    >
  : never;
