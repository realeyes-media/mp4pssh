export interface PSSH {
  version: number;
  systemId: string;
  dataSize: number;
  data: Uint8Array;
  keyData?: PSSHKeyData;
}
export interface PSSHKeyData {
  kidCount: number;
  kids: string[];
}
