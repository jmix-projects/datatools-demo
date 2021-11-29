export class FilterValueComponent {
  static NAME = "ui_FilterValueComponent";
  componentName?: string | null;
  componentId?: string | null;
  styleName?: string | null;
  defaultValue?: string | null;
}
export type FilterValueComponentViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type FilterValueComponentView<
  V extends FilterValueComponentViewName
> = V extends "_base"
  ? Pick<FilterValueComponent, "componentName">
  : V extends "_instance_name"
  ? Pick<FilterValueComponent, "componentName">
  : never;
