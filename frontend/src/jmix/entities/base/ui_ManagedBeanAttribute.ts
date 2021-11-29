import { ManagedBeanInfo } from "./ui_ManagedBeanInfo";
export class ManagedBeanAttribute {
  static NAME = "ui_ManagedBeanAttribute";
  id?: string;
  name?: string | null;
  description?: string | null;
  type?: string | null;
  readableWriteable?: string | null;
  readable?: boolean | null;
  writeable?: boolean | null;
  mbean?: ManagedBeanInfo | null;
  valueString?: string | null;
}
export type ManagedBeanAttributeViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type ManagedBeanAttributeView = never;
