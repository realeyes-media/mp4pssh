export interface PSSH {
    version: number;
    systemId: string;
    kidCount: number;
    kids: string[];
    dataSize: number;
    data: Uint8Array;
}
