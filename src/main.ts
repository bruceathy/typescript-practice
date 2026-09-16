function getSecond<ArrayType>(array: ArrayType[]) {
  return array[1];
}

const a = [1, 2, 3];
const b = ["a", "b", "c"];

const retA = getSecond(a);
const retB = getSecond(b);
