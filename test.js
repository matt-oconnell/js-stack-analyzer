const test = `function a(limit = 0) {
  if(limit < 3) {
    return a(++limit);
  }
  return true;
}

function b() {
  a();
}

b();
`;
module.exports = test;
