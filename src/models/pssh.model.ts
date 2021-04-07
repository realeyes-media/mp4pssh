import { SystemNames } from "../enums/system-names.enum";

export interface PSSH {
  version: number;
  systemId: string;
  system: SystemNames;
  dataSize: number;
  data: Uint8Array;
  keyData?: PSSHKeyData;
}
export interface PSSHKeyData {
  kidCount: number;
  kids: string[];
}
