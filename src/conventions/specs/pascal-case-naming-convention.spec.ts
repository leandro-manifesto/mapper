import { PascalCaseNamingConvention } from '../pascal-case-naming-convention';

describe('PascalCaseNamingConvention', () => {
  const one = ['address'];
  const two = ['address', 'Street'];
  const three = ['formatted', 'Address', 'Street'];
  const snakedOne = ['address'];
  const snakedTwo = ['address', 'street'];
  const snakedThree = ['formatted', 'address', 'street'];
  const toSplit = 'FormattedAddressStreet';
  const namingConvention = new PascalCaseNamingConvention();

  it('should instantiate', () => {
    const convention = new PascalCaseNamingConvention();
    expect(convention).toBeTruthy();
    expect(convention).toBeInstanceOf(PascalCaseNamingConvention);
  });

  it('should split correctly', () => {
    const splitted = toSplit
      .split(namingConvention.splittingExpression)
      .filter(Boolean);
    expect(splitted).toEqual(['Formatted', 'Address', 'Street']);
  });

  it('should convert camelCase to PascalCase', () => {
    const convertedOne = namingConvention.transformPropertyName(one);
    const convertedTwo = namingConvention.transformPropertyName(two);
    const convertedThree = namingConvention.transformPropertyName(three);
    expect(convertedOne).toEqual('Address');
    expect(convertedTwo).toEqual('AddressStreet');
    expect(convertedThree).toEqual(toSplit);
  });

  it('should convert lowercase (snake_case) to PascalCase', () => {
    const convertedOne = namingConvention.transformPropertyName(snakedOne);
    const convertedTwo = namingConvention.transformPropertyName(snakedTwo);
    const convertedThree = namingConvention.transformPropertyName(snakedThree);
    expect(convertedOne).toEqual('Address');
    expect(convertedTwo).toEqual('AddressStreet');
    expect(convertedThree).toEqual(toSplit);
  });
});
