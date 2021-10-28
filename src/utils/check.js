export function checkInputBlank(input) {
  if (input.includes(" ")) {
    return true;
  }
  return false;
}

export function checkEmpty(input) {
  if (input === "") {
    return true;
  }
  return false;
}
