export class AttributeResourceModel {
  static NAME = "sec_AttributeResourceModel";
  id?: string;
  name?: string | null;
  caption?: string | null;
  view?: boolean | null;
  modify?: boolean | null;
}
export type AttributeResourceModelViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type AttributeResourceModelView = never;
