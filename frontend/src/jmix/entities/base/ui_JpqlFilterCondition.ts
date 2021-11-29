import { AbstractSingleFilterCondition } from "./ui_AbstractSingleFilterCondition";
export class JpqlFilterCondition extends AbstractSingleFilterCondition {
  static NAME = "ui_JpqlFilterCondition";
  parameterName?: string | null;
  parameterClass?: string | null;
  where?: string | null;
  join?: string | null;
  hasInExpression?: boolean | null;
}
export type JpqlFilterConditionViewName = "_base" | "_instance_name" | "_local";
export type JpqlFilterConditionView<
  V extends JpqlFilterConditionViewName
> = V extends "_base"
  ? Pick<JpqlFilterCondition, "localizedCaption">
  : V extends "_instance_name"
  ? Pick<JpqlFilterCondition, "localizedCaption">
  : never;
