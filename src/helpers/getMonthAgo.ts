export function getMonthAgo(): String {
  let d = new Date();
  d.setMonth(d.getMonth() - 1);
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 10);
}
