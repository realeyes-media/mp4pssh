import { SystemIds } from "../consts/system-ids.const";
import { SystemNames } from "../enums/system-names.enum";
import { PSSH, PSSHKeyData } from "../models/pssh.model";
import { base64ToArrayBuffer } from "../utils/base64";

export class PSSHParser {
  constructor() {}

  public parsePSSH(base64Pssh: string): PSSH {
    const psshBuffer = base64ToArrayBuffer(base64Pssh);

    const view = new DataView(psshBuffer);

    let offset = 8; // Box size and type length (unused)

    const version = this.parseUint8(view, offset);

    offset += 4; // Version length

    const systemId = this.parseString(view, offset);

    offset += 16; // SystemId length

    let keyData: PSSHKeyData | undefined = undefined;

    switch (systemId) {
      case SystemIds[SystemNames.WIDEVINE]:
        if (version === 1) {
          const v1KeyData = this.parseWidevineV1KeyData(view, offset);

          offset += 4 + 16 * v1KeyData.kidCount;

          keyData = v1KeyData;
        }

        break;

      case SystemIds[SystemNames.PLAYREADY]:
        break;
    }

    const dataSize = this.parseUint32(view, offset);

    offset += 4; // Data size length

    const data = this.parseUint8Array(psshBuffer, offset);

    return {
      data,
      dataSize,
      systemId,
      version,
      keyData,
    };
  }

  private parseUint8(view: DataView, offset: number): number {
    return view.getUint8(offset);
  }

  private parseUint32(view: DataView, offset: number): number {
    return view.getUint32(offset);
  }

  private parseUint8Array(buffer: ArrayBuffer, offset: number): Uint8Array {
    const dataArray = buffer.slice(offset);

    return new Uint8Array(dataArray);
  }

  private parseString(view: DataView, offset: number): string {
    let result = "";

    for (let i = 0; i < 16; i++) {
      const hex = view.getUint8(i + offset).toString(16);

      result += hex.length === 1 ? "0" + hex : hex;
    }

    return result;
  }

  // Format-specific parsers

  private parseWidevineV1KeyData(view: DataView, offset: number): PSSHKeyData {
    let kidCount = this.parseUint32(view, offset);

    let kidOffset = offset + 4; // KID count length

    let kids: string[] = [];

    for (let i = 0; i < kidCount; i++) {
      let kid = this.parseString(view, kidOffset);

      kids.push(kid);

      kidOffset += 16; // KID length
    }

    return {
      kidCount,
      kids,
    };
  }
}
