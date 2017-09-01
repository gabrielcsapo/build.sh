const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;

module.exports.ms = function ms(ms) {
  if (ms >= d) {
    return `${Math.floor(ms / d)}d`;
  }
  if (ms >= h) {
    return `${Math.floor(ms / h)}h`;
  }
  if (ms >= m) {
    return `${Math.floor(ms / m)}m`;
  }
  if (ms >= s) {
    return `${Math.floor(ms / s)}s`;
  }
  return ms + 'ms';
}
