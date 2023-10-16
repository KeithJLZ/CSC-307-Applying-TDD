import Portfolio from './stock_module.js';

let p;

beforeEach(() => {
  p = new Portfolio();
});

test('Testing create stock portfolio -- success', () => {
  // No need to create p here, it's created in beforeEach
});

test('Testing empty portfolio -- success', () => {
  expect(p.isEmpty()).toBeTruthy();
});

test('Testing number of unique stocks -- success', () => {
  p.stocks = { 'GME': 5, 'RBLX': 10 };
  expect(p.uniqueStocks()).toBe(2);
});

test('Testing buying stocks -- success', () => {
  p.buy('GME', 5);
  expect(p.stocks['GME']).toBe(5);
  p.buy('GME', 10);
  expect(p.stocks['GME']).toBe(15);
});

test('Testing selling stocks -- success', () => {
  p.stocks = { 'GME': 15 };
  p.sell('GME', 5);
  expect(p.stocks['GME']).toBe(10);
});

test('Testing amt of shares for a given symbol -- success', () => {
  p.stocks = { 'GME': 15 };
  expect(p.symbolShares('GME')).toBe(15);
});

test('Testing portolfio only shows owned stocks -- success', () => {
  p.stocks = { 'GME': 15, 'RBLX': 10 };
  p.sell('GME', 15);
  expect(p.stocks).toEqual({ 'RBLX': 10 });
  p.sell('RBLX', 10);
  expect(p.isEmpty()).toBeTruthy();
});

test('Testing selling more stocks than owned -- failure', () => {
  p.stocks = { 'GME': 15 };
  expect(() => p.sell('GME', 20)).toThrow();
});
