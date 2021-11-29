import { ResourceRoleEntity } from "./sec_ResourceRoleEntity";
export class ResourcePolicyEntity {
  static NAME = "sec_ResourcePolicyEntity";
  id?: string;
  version?: number | null;
  createTs?: any | null;
  createdBy?: string | null;
  updateTs?: any | null;
  updatedBy?: string | null;
  deleteTs?: any | null;
  deletedBy?: string | null;
  type?: string | null;
  resource?: string | null;
  action?: string | null;
  effect?: string | null;
  policyGroup?: string | null;
  role?: ResourceRoleEntity | null;
}
export type ResourcePolicyEntityViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type ResourcePolicyEntityView<
  V extends ResourcePolicyEntityViewName
> = V extends "_base"
  ? Pick<
      ResourcePolicyEntity,
      | "id"
      | "version"
      | "createTs"
      | "createdBy"
      | "updateTs"
      | "updatedBy"
      | "deleteTs"
      | "deletedBy"
      | "type"
      | "resource"
      | "action"
      | "effect"
      | "policyGroup"
    >
  : V extends "_local"
  ? Pick<
      ResourcePolicyEntity,
      | "id"
      | "version"
      | "createTs"
      | "createdBy"
      | "updateTs"
      | "updatedBy"
      | "deleteTs"
      | "deletedBy"
      | "type"
      | "resource"
      | "action"
      | "effect"
      | "policyGroup"
    >
  : never;
