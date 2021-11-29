import { RowLevelRoleEntity } from "./sec_RowLevelRoleEntity";
export class RowLevelPolicyEntity {
  static NAME = "sec_RowLevelPolicyEntity";
  id?: string;
  version?: number | null;
  createTs?: any | null;
  createdBy?: string | null;
  updateTs?: any | null;
  updatedBy?: string | null;
  deleteTs?: any | null;
  deletedBy?: string | null;
  type?: any | null;
  entityName?: string | null;
  action?: any | null;
  whereClause?: string | null;
  joinClause?: string | null;
  script?: string | null;
  role?: RowLevelRoleEntity | null;
}
export type RowLevelPolicyEntityViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type RowLevelPolicyEntityView<
  V extends RowLevelPolicyEntityViewName
> = V extends "_base"
  ? Pick<
      RowLevelPolicyEntity,
      | "id"
      | "version"
      | "createTs"
      | "createdBy"
      | "updateTs"
      | "updatedBy"
      | "deleteTs"
      | "deletedBy"
      | "type"
      | "entityName"
      | "action"
      | "whereClause"
      | "joinClause"
      | "script"
    >
  : V extends "_local"
  ? Pick<
      RowLevelPolicyEntity,
      | "id"
      | "version"
      | "createTs"
      | "createdBy"
      | "updateTs"
      | "updatedBy"
      | "deleteTs"
      | "deletedBy"
      | "type"
      | "entityName"
      | "action"
      | "whereClause"
      | "joinClause"
      | "script"
    >
  : never;
