import { LogicalFilterCondition } from "./ui_LogicalFilterCondition";
export class FilterConfiguration {
  static NAME = "ui_FilterConfiguration";
  id?: string;
  componentId?: string | null;
  configurationId?: string | null;
  name?: string | null;
  username?: string | null;
  defaultForAll?: boolean | null;
  rootCondition?: LogicalFilterCondition | null;
  sysTenantId?: string | null;
  defaultForMe?: boolean | null;
}
export type FilterConfigurationViewName = "_base" | "_instance_name" | "_local";
export type FilterConfigurationView<
  V extends FilterConfigurationViewName
> = V extends "_base"
  ? Pick<
      FilterConfiguration,
      | "id"
      | "name"
      | "componentId"
      | "configurationId"
      | "username"
      | "defaultForAll"
      | "sysTenantId"
    >
  : V extends "_instance_name"
  ? Pick<FilterConfiguration, "id" | "name">
  : V extends "_local"
  ? Pick<
      FilterConfiguration,
      | "id"
      | "componentId"
      | "configurationId"
      | "name"
      | "username"
      | "defaultForAll"
      | "sysTenantId"
    >
  : never;
