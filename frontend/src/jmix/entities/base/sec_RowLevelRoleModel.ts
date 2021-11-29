import { BaseRoleModel } from "./sec_BaseRoleModel";
import { RowLevelPolicyModel } from "./sec_RowLevelPolicyModel";
export class RowLevelRoleModel extends BaseRoleModel {
  static NAME = "sec_RowLevelRoleModel";
  rowLevelPolicies?: RowLevelPolicyModel[] | null;
}
export type RowLevelRoleModelViewName = "_base" | "_instance_name" | "_local";
export type RowLevelRoleModelView<
  V extends RowLevelRoleModelViewName
> = V extends "_base"
  ? Pick<RowLevelRoleModel, "id" | "name">
  : V extends "_instance_name"
  ? Pick<RowLevelRoleModel, "id" | "name">
  : never;
