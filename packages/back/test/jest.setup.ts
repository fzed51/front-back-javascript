expect.extend({
  toBeJson(actual) {
    if (typeof actual !== 'string') {
      throw new Error('Actual value must be a string');
    }
    let pass = true;
    try {
      JSON.parse(actual);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      pass = false;
    }
    const shortActual =
      actual.length > 20 ? actual.substring(0, 17) + '...' : actual;
    return {
      pass,
      message: pass
        ? () => `expected ${shortActual} not to be valid JSON`
        : () => `expected ${shortActual} to be valid JSON`,
    };
  },
});
