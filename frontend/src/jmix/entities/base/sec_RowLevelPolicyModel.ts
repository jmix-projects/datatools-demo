export class RowLevelPolicyModel {
  static NAME = "sec_RowLevelPolicyModel";
  id?: string;
  type?: any | null;
  action?: any | null;
  entityName?: string | null;
  whereClause?: string | null;
  joinClause?: string | null;
  script?: string | null;
  customProperties?: any | null;
}
export type RowLevelPolicyModelViewName = "_base" | "_instance_name" | "_local";
export type RowLevelPolicyModelView = never;
