export const createConstants = <T>(
  constants: readonly any[],
  constantType: string
): T =>
  constants.reduce((acc, constant: string) => {
    const prefix = constantType ? `${constantType}/` : '';
    acc[constant] = `${prefix}${constant}`;
    return acc;
  }, {});

export const sortByField = <T>(
  array: T[],
  fieldName: string,
  order?: string
): T[] => {
  return array.sort((a: any, b: any) => {
    const sign = order === 'asc' ? 1 : -1;
    let prev = a[fieldName];
    let next = b[fieldName];

    if (!prev && prev !== 0) {
      prev = 0;
    }

    if (!next && next !== 0) {
      next = 0;
    }

    return prev > next ? sign : next > prev ? -1 * sign : 0;
  });
};

export const sortByFieldExists = <T>(
  array: T[],
  fieldName: string,
  order?: string
): T[] => {
  return array.sort((a: any, b: any) => {
    const sign = order === 'asc' ? 1 : -1;
    const prev = a[fieldName];
    const next = b[fieldName];

    return !!next ? (!!prev ? 0 : sign) : 1;
  });
};
