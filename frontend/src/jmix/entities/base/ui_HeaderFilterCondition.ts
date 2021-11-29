import { FilterCondition } from "./ui_FilterCondition";
export class HeaderFilterCondition extends FilterCondition {
  static NAME = "ui_HeaderFilterCondition";
}
export type HeaderFilterConditionViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type HeaderFilterConditionView<
  V extends HeaderFilterConditionViewName
> = V extends "_base"
  ? Pick<HeaderFilterCondition, "localizedCaption">
  : V extends "_instance_name"
  ? Pick<HeaderFilterCondition, "localizedCaption">
  : never;
