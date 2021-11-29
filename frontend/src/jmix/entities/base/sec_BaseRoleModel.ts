export class BaseRoleModel {
  static NAME = "sec_BaseRoleModel";
  id?: string;
  code?: string | null;
  name?: string | null;
  description?: string | null;
  source?: string | null;
  customProperties?: any | null;
  childRoles?: string | null;
  tenantId?: string | null;
}
export type BaseRoleModelViewName = "_base" | "_instance_name" | "_local";
export type BaseRoleModelView<
  V extends BaseRoleModelViewName
> = V extends "_base"
  ? Pick<BaseRoleModel, "id" | "name">
  : V extends "_instance_name"
  ? Pick<BaseRoleModel, "id" | "name">
  : never;
