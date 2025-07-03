import Queue from "./queue.ts";

describe("Queue", () => {
  describe("enqueue", () => {
    it("adds an element to the front of the list", () => {
      const queue = new Queue<number>();
      queue.enqueue(5);
      expect(queue.peek()).toBe(5);
    });
  });
});
