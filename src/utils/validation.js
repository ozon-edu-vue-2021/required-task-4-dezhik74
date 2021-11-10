export function validateActualDate(context) {
  return new Date(context.value) < new Date();
}
