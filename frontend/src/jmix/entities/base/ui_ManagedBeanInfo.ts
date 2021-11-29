import { ManagedBeanAttribute } from "./ui_ManagedBeanAttribute";
import { ManagedBeanOperation } from "./ui_ManagedBeanOperation";
export class ManagedBeanInfo {
  static NAME = "ui_ManagedBeanInfo";
  id?: string;
  className?: string | null;
  description?: string | null;
  objectName?: string | null;
  domain?: string | null;
  propertyList?: string | null;
  attributes?: ManagedBeanAttribute[] | null;
  operations?: ManagedBeanOperation[] | null;
}
export type ManagedBeanInfoViewName = "_base" | "_instance_name" | "_local";
export type ManagedBeanInfoView = never;
