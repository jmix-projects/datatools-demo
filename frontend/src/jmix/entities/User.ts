export class User {
  static NAME = "User";
  id?: string;
  version?: number | null;
  username?: string | null;
  password?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  active?: boolean | null;
  timeZoneId?: string | null;
}
export type UserViewName = "_base" | "_instance_name" | "_local";
export type UserView<V extends UserViewName> = V extends "_base"
  ? Pick<
      User,
      | "id"
      | "firstName"
      | "lastName"
      | "username"
      | "version"
      | "password"
      | "email"
      | "active"
      | "timeZoneId"
    >
  : V extends "_instance_name"
  ? Pick<User, "id" | "firstName" | "lastName" | "username">
  : V extends "_local"
  ? Pick<
      User,
      | "id"
      | "version"
      | "username"
      | "password"
      | "firstName"
      | "lastName"
      | "email"
      | "active"
      | "timeZoneId"
    >
  : never;
