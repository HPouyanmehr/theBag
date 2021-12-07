const calcArrayOfObj = (
  array: { [key: string]: any }[],
  propertyName: string
) => {
  let total = 0;
  array.forEach((item) => {
    if (typeof item[propertyName] === 'number') {
      total += item[propertyName];
    }
  });
  return total;
};

export default calcArrayOfObj;
