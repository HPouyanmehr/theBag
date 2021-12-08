const sortArrayOfObj = (
  array: { [key: string]: any }[],
  key: string,
  order: 'asc' | 'desc' = 'asc'
) => {
  if (order === 'asc') return array.sort((a, b) => (a[key] > b[key] ? 1 : -1));

  return array.sort((a, b) => (a[key] > b[key] ? -1 : 1));
};

export default sortArrayOfObj;
