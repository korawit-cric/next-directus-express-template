import { describe, it, expect, vi } from "vitest";
import { log } from "..";

// Mock `console.log`
vi.spyOn(global.console, "log");

describe("@repo/logger", () => {
  it("prints a message", () => {
    log("hello");
    // Assert the mocked `console.log` is called with expected arguments
    expect(console.log).toBeCalledWith("LOGGER: ", "hello");
  });
});
