const rntSearch = require('./script');

dbMock = ['tablet.com', 'phone.com', 'headphone.com', 'lighting.com'];

it('Simple testing', () => {
  expect('rnt').toBe('rnt');
});

it('is searching rnt', () => {
  expect(rntSearch('testtest', dbMock)).toEqual([])
  expect(rntSearch('phone', dbMock)).toEqual([
    'phone.com',
    'headphone.com'
  ]);
});
