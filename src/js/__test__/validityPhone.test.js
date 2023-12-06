import validity from "../validity";

test("correct phone", () => {
  const received = validity("8 (927) 000-00-00");
  expect(received).toBe("+79270000000");
});

test("correct phone", () => {
  const received = validity("+7 960 000 00 00");
  expect(received).toBe("+79600000000");
});

test("correct phone", () => {
  const received = validity("+86 000 000 0000");
  expect(received).toBe("+860000000000");
});

// Вариация
test.each([
  ["8 (927) 000-00-00", "+79270000000"],
  ["+7 960 000 00 00", "+79600000000"],
  ["+86 000 000 0000", "+860000000000"],
])("%p", (phone, expected) => {
  expect(validity(phone)).toEqual(expected);
});
