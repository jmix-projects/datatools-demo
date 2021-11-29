export class LockDescriptor {
  static NAME = "sys_LockDescriptor";
  id?: string;
  timeoutSec?: number | null;
}
export type LockDescriptorViewName = "_base" | "_instance_name" | "_local";
export type LockDescriptorView = never;
