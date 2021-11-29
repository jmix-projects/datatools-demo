import { BaseRoleModel } from "./sec_BaseRoleModel";
import { ResourcePolicyModel } from "./sec_ResourcePolicyModel";
export class ResourceRoleModel extends BaseRoleModel {
  static NAME = "sec_ResourceRoleModel";
  resourcePolicies?: ResourcePolicyModel[] | null;
  scopes?: string | null;
}
export type ResourceRoleModelViewName = "_base" | "_instance_name" | "_local";
export type ResourceRoleModelView<
  V extends ResourceRoleModelViewName
> = V extends "_base"
  ? Pick<ResourceRoleModel, "id" | "name">
  : V extends "_instance_name"
  ? Pick<ResourceRoleModel, "id" | "name">
  : never;
