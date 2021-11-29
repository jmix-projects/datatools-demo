export class RoleAssignmentEntity {
  static NAME = "sec_RoleAssignmentEntity";
  id?: string;
  version?: number | null;
  createTs?: any | null;
  createdBy?: string | null;
  updateTs?: any | null;
  updatedBy?: string | null;
  deleteTs?: any | null;
  deletedBy?: string | null;
  username?: string | null;
  roleCode?: string | null;
  roleType?: string | null;
}
export type RoleAssignmentEntityViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type RoleAssignmentEntityView<
  V extends RoleAssignmentEntityViewName
> = V extends "_base"
  ? Pick<
      RoleAssignmentEntity,
      | "id"
      | "version"
      | "createTs"
      | "createdBy"
      | "updateTs"
      | "updatedBy"
      | "deleteTs"
      | "deletedBy"
      | "username"
      | "roleCode"
      | "roleType"
    >
  : V extends "_local"
  ? Pick<
      RoleAssignmentEntity,
      | "id"
      | "version"
      | "createTs"
      | "createdBy"
      | "updateTs"
      | "updatedBy"
      | "deleteTs"
      | "deletedBy"
      | "username"
      | "roleCode"
      | "roleType"
    >
  : never;
