import { PSSH } from "../models/pssh.model";
import { base64ToArrayBuffer } from "../utils/base64";

export class PSSHParser {
  private offset: number = 0;
  private psshBuffer: ArrayBuffer;

  constructor(private base64Pssh: string) {}

  public parsePSSH(): PSSH {
    this.psshBuffer = base64ToArrayBuffer(this.base64Pssh);

    const view = new DataView(this.psshBuffer);

    this.offset += 8; // Box size and type length (unused)

    const version: number = this.parseVersion(view);

    const systemId: string = this.parseSystemId(view);

    const kidCount: number = this.parseKidCount(view);

    const kids: string[] = this.parseKids(view, kidCount);

    const dataSize: number = this.parseDataSize(view);

    const data: Uint8Array = this.parseData();

    return {
      data,
      dataSize,
      kidCount,
      kids,
      systemId,
      version,
    };
  }

  private parseVersion(view: DataView): number {
    const version = view.getUint8(this.offset);

    this.offset += 4; // Version length

    return version;
  }

  private parseSystemId(view: DataView): string {
    let systemId = "";

    for (let i = 0; i < 16; i++) {
      const hex = view.getUint8(i + this.offset).toString(16);

      systemId += hex.length === 1 ? "0" + hex : hex;
    }

    this.offset += 16; // SystemId length

    return systemId;
  }

  private parseKidCount(view: DataView): number {
    const kidCount = view.getUint32(this.offset);

    this.offset += 4; // KID count length

    return kidCount;
  }

  private parseKids(view: DataView, kidCount: number): string[] {
    const kids: string[] = [];

    for (let i = 0; i < kidCount; i++) {
      let kid = "";

      for (let j = 0; j < 16; j++) {
        const hex = view.getUint8(j + this.offset).toString(16);

        kid += hex.length === 1 ? "0" + hex : hex;
      }

      kids.push(kid);

      this.offset += 16; // KID length
    }

    return kids;
  }

  private parseDataSize(view: DataView): number {
    const dataSize = view.getUint32(this.offset);

    this.offset += 4; // Data size length

    return dataSize;
  }

  private parseData(): Uint8Array {
    const dataArray: ArrayBuffer = this.psshBuffer.slice(this.offset);

    return new Uint8Array(dataArray);
  }
}
