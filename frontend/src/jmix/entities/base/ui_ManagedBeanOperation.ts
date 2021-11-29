import { ManagedBeanInfo } from "./ui_ManagedBeanInfo";
import { ManagedBeanOperationParameter } from "./ui_ManagedBeanOperationParameter";
export class ManagedBeanOperation {
  static NAME = "ui_ManagedBeanOperation";
  id?: string;
  name?: string | null;
  returnType?: string | null;
  description?: string | null;
  timeout?: any | null;
  mbean?: ManagedBeanInfo | null;
  parameters?: ManagedBeanOperationParameter[] | null;
}
export type ManagedBeanOperationViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type ManagedBeanOperationView = never;
