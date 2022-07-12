const rntDatabase = [
  'rnt-tech.com',
  'rnt-video.com',
  'rnt-design.com',
  'rnt-gogreen.com',
  'rnt-industries.com',
  'rnt-skateboard.com',
];

const rntSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });

  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(rntSearch('i', rntDatabase));

module.exports = rntSearch;
