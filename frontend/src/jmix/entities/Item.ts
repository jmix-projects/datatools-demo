export class Item {
  static NAME = "Item";
  id?: string;
  name?: string | null;
  age?: number | null;
  amount?: any | null;
  active?: boolean | null;
  deletedBy?: string | null;
  deletedDate?: any | null;
}
export type ItemViewName = "_base" | "_instance_name" | "_local";
export type ItemView<V extends ItemViewName> = V extends "_base"
  ? Pick<
      Item,
      "id" | "name" | "age" | "amount" | "active" | "deletedBy" | "deletedDate"
    >
  : V extends "_instance_name"
  ? Pick<Item, "id" | "name">
  : V extends "_local"
  ? Pick<
      Item,
      "id" | "name" | "age" | "amount" | "active" | "deletedBy" | "deletedDate"
    >
  : never;
