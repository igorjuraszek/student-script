function strangeSum(a, b) {
  if (!Number(a) || !Number(b) || !Number.isInteger(a) || !Number.isInteger(b)){
    return null;
  }

  if (a === b) {
    return (a+b)*3;
  }
  else{
  return a+b;
  }
}
