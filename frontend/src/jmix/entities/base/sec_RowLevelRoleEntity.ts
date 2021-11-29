import { RowLevelPolicyEntity } from "./sec_RowLevelPolicyEntity";
export class RowLevelRoleEntity {
  static NAME = "sec_RowLevelRoleEntity";
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
  rowLevelPolicies?: RowLevelPolicyEntity[] | null;
  childRoles?: string | null;
  sysTenantId?: string | null;
}
export type RowLevelRoleEntityViewName = "_base" | "_instance_name" | "_local";
export type RowLevelRoleEntityView<
  V extends RowLevelRoleEntityViewName
> = V extends "_base"
  ? Pick<
      RowLevelRoleEntity,
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
      | "sysTenantId"
    >
  : V extends "_instance_name"
  ? Pick<RowLevelRoleEntity, "id" | "name">
  : V extends "_local"
  ? Pick<
      RowLevelRoleEntity,
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
      | "sysTenantId"
    >
  : never;
