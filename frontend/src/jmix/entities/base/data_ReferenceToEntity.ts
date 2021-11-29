export class ReferenceToEntity {
  static NAME = "data_ReferenceToEntity";
  entityId?: any | null;
  stringEntityId?: string | null;
  intEntityId?: number | null;
  longEntityId?: any | null;
}
export type ReferenceToEntityViewName = "_base" | "_instance_name" | "_local";
export type ReferenceToEntityView<
  V extends ReferenceToEntityViewName
> = V extends "_base"
  ? Pick<
      ReferenceToEntity,
      "entityId" | "stringEntityId" | "intEntityId" | "longEntityId"
    >
  : V extends "_local"
  ? Pick<
      ReferenceToEntity,
      "entityId" | "stringEntityId" | "intEntityId" | "longEntityId"
    >
  : never;
