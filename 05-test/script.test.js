const rntSearch = require('./script');

dbMock = ['tablet.com', 'phone.com', 'headphone.com', 'lighting.com'];

describe('========== rntSearch ==========', () => {
  it('01 - Simple testing', () => {
    expect('rnt').toBe('rnt');
  });

  it('02 - Is searching rnt', () => {
    expect(rntSearch('testtest', dbMock)).toEqual([]);
    expect(rntSearch('phone', dbMock)).toEqual(['phone.com', 'headphone.com']);
  });

  it('03 - Work with undifined and null input ', () => {
    expect(rntSearch(undefined, dbMock)).toEqual([]);
    expect(rntSearch(null, dbMock)).toEqual([]);
  });

  it('04 - Does not return more than 3 matches', () => {
    expect(rntSearch('.com', dbMock).length).toEqual(3);
  });
});
