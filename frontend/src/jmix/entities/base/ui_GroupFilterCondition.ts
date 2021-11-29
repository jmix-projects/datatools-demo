import { LogicalFilterCondition } from "./ui_LogicalFilterCondition";
export class GroupFilterCondition extends LogicalFilterCondition {
  static NAME = "ui_GroupFilterCondition";
}
export type GroupFilterConditionViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type GroupFilterConditionView<
  V extends GroupFilterConditionViewName
> = V extends "_base"
  ? Pick<GroupFilterCondition, "operation">
  : V extends "_instance_name"
  ? Pick<GroupFilterCondition, "operation">
  : never;
