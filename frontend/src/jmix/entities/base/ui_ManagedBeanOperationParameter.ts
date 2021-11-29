import { ManagedBeanOperation } from "./ui_ManagedBeanOperation";
export class ManagedBeanOperationParameter {
  static NAME = "ui_ManagedBeanOperationParameter";
  id?: string;
  name?: string | null;
  description?: string | null;
  type?: string | null;
  javaType?: string | null;
  operation?: ManagedBeanOperation | null;
}
export type ManagedBeanOperationParameterViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type ManagedBeanOperationParameterView = never;
