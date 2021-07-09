import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBuffer';

test('check buffer toString and load', () => {
  const newArray = new ArrayBufferConverter();
  newArray.load(getBuffer());
  const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(newArray.toString()).toBe(result);
});
