export function debounce(f, t) {
  let calls = {
    lastCallTimer: null,
  };
  return function (args) {
    if (calls.lastCallTimer !== null) {
      clearTimeout(calls.lastCallTimer);
    }
    calls.lastCallTimer = setTimeout(() => f(args), t);
  };
}
