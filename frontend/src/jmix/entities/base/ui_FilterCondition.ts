export class FilterCondition {
  static NAME = "ui_FilterCondition";
  componentId?: string | null;
  visible?: boolean | null;
  enabled?: boolean | null;
  caption?: string | null;
  localizedCaption?: string | null;
  styleName?: string | null;
  parent?: FilterCondition | null;
}
export type FilterConditionViewName = "_base" | "_instance_name" | "_local";
export type FilterConditionView<
  V extends FilterConditionViewName
> = V extends "_base"
  ? Pick<FilterCondition, "localizedCaption">
  : V extends "_instance_name"
  ? Pick<FilterCondition, "localizedCaption">
  : never;
