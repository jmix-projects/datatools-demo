import { ResourcePolicyEntity } from "./sec_ResourcePolicyEntity";
export class ResourceRoleEntity {
  static NAME = "sec_ResourceRoleEntity";
  id?: string;
  version?: number | null;
  createTs?: any | null;
  createdBy?: string | null;
  updateTs?: any | null;
  updatedBy?: string | null;
  deleteTs?: any | null;
  deletedBy?: string | null;
  name?: string | null;
  code?: string | null;
  description?: string | null;
  resourcePolicies?: ResourcePolicyEntity[] | null;
  childRoles?: string | null;
  scopes?: string | null;
  sysTenantId?: string | null;
}
export type ResourceRoleEntityViewName = "_base" | "_instance_name" | "_local";
export type ResourceRoleEntityView<
  V extends ResourceRoleEntityViewName
> = V extends "_base"
  ? Pick<
      ResourceRoleEntity,
      | "id"
      | "name"
      | "version"
      | "createTs"
      | "createdBy"
      | "updateTs"
      | "updatedBy"
      | "deleteTs"
      | "deletedBy"
      | "code"
      | "description"
      | "childRoles"
      | "scopes"
      | "sysTenantId"
    >
  : V extends "_instance_name"
  ? Pick<ResourceRoleEntity, "id" | "name">
  : V extends "_local"
  ? Pick<
      ResourceRoleEntity,
      | "id"
      | "version"
      | "createTs"
      | "createdBy"
      | "updateTs"
      | "updatedBy"
      | "deleteTs"
      | "deletedBy"
      | "name"
      | "code"
      | "description"
      | "childRoles"
      | "scopes"
      | "sysTenantId"
    >
  : never;
