import { base64ToArrayBuffer } from "./base64";

const base64String =
  "AAAAuXBzc2gBAAAA7e+LqXnWSs6jyCfc1R0h7QAAAAEjSPvsvS9AVHzgqr0AAALUAAAAhRIQI0j77L0vQFR84Kq9AAAC1BoNaXN0cmVhbXBsYW5ldCJcTWpZellqWTFaRGt0TUdNeFppMDBNalEyTFRsaU0yWXRNR0kxTURCbFpEaGpOemswT3pVMU1rRkNPRFE1UXpNd1JEUXpSREJDT0Rnd05FWkNNa1F6T1VWRk4wVkJI88aJmwY=";

test("Converts base64 string to ArrayBuffer", () => {
  const arrayBuffer = base64ToArrayBuffer(base64String);
  expect(arrayBuffer).toBeInstanceOf(ArrayBuffer);
});

test("Creates ArrayBuffer with correct length", () => {
  const arrayBuffer = base64ToArrayBuffer(base64String);
  expect(arrayBuffer.byteLength).toBe(185);
});
