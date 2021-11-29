export class ResourcePolicyModel {
  static NAME = "sec_ResourcePolicyModel";
  id?: string;
  type?: string | null;
  resource?: string | null;
  action?: string | null;
  effect?: string | null;
  scope?: string | null;
  policyGroup?: string | null;
  customProperties?: any | null;
}
export type ResourcePolicyModelViewName = "_base" | "_instance_name" | "_local";
export type ResourcePolicyModelView = never;
