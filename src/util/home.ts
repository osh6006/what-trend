export function returnTopSomething(array: any[], topnumber: number) {
  return array.filter((el: any, i: number) => {
    if (i < topnumber) {
      return true;
    } else {
      return false;
    }
  });
}
