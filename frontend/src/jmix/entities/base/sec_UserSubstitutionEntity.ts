export class UserSubstitutionEntity {
  static NAME = "sec_UserSubstitutionEntity";
  id?: string;
  version?: number | null;
  createTs?: any | null;
  createdBy?: string | null;
  updateTs?: any | null;
  updatedBy?: string | null;
  deleteTs?: any | null;
  deletedBy?: string | null;
  username?: string | null;
  substitutedUsername?: string | null;
  startDate?: any | null;
  endDate?: any | null;
}
export type UserSubstitutionEntityViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type UserSubstitutionEntityView<
  V extends UserSubstitutionEntityViewName
> = V extends "_base"
  ? Pick<
      UserSubstitutionEntity,
      | "id"
      | "version"
      | "createTs"
      | "createdBy"
      | "updateTs"
      | "updatedBy"
      | "deleteTs"
      | "deletedBy"
      | "username"
      | "substitutedUsername"
      | "startDate"
      | "endDate"
    >
  : V extends "_local"
  ? Pick<
      UserSubstitutionEntity,
      | "id"
      | "version"
      | "createTs"
      | "createdBy"
      | "updateTs"
      | "updatedBy"
      | "deleteTs"
      | "deletedBy"
      | "username"
      | "substitutedUsername"
      | "startDate"
      | "endDate"
    >
  : never;
