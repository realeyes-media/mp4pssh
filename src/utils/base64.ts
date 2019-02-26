/**
 * Decodes base64 string and returns an ArrayBuffer
 * @param base64 string
 */
export function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const str = atob(base64);
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);

  str
    .split("")
    .map(char => char.charCodeAt(0))
    .forEach((code, idx) => (bufView[idx] = code));

  return buf;
}
