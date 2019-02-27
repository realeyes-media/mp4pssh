import { PSSHParser } from "./index";

test("Exports PSSHParser", () => {
  const psshParser = new PSSHParser("");

  expect(psshParser).toBeInstanceOf(PSSHParser);
});
