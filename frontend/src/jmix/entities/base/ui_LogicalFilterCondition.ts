import { FilterCondition } from "./ui_FilterCondition";
export class LogicalFilterCondition extends FilterCondition {
  static NAME = "ui_LogicalFilterCondition";
  operation?: any | null;
  operationCaptionVisible?: boolean | null;
  ownFilterConditions?: FilterCondition[] | null;
}
export type LogicalFilterConditionViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type LogicalFilterConditionView<
  V extends LogicalFilterConditionViewName
> = V extends "_base"
  ? Pick<LogicalFilterCondition, "operation">
  : V extends "_instance_name"
  ? Pick<LogicalFilterCondition, "operation">
  : never;
