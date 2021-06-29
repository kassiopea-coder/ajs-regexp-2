import phoneBeautify from '../app';

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000']])(
  ('one format phone'),
  (phone, result) => {
    expect(phoneBeautify(phone)).toBe(result);
  },
);
