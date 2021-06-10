function repeater(count) {
  return memoize(() => {
    return ''.padStart(count, 'A');
  });
}

const A10 = repeater(10);

A10();
A10();

// .load memoize.js