import { NamingConvention } from '../types';

/**
 * camelCase naming convention
 */
export class CamelCaseNamingConvention implements NamingConvention {
  public separatorCharacter = '';
  splittingExpression: RegExp = /(^[a-z]+(?=$|[A-Z]{1}[a-z0-9]+)|[A-Z]?[a-z0-9]+)/;

  public transformPropertyName(sourceNameParts: string[]): string {
    let result = '';

    for (let i = 0, len = sourceNameParts.length; i < len; i++) {
      if (i === 0) {
        result +=
          sourceNameParts[i].charAt(0).toLowerCase() +
          sourceNameParts[i].substr(1);
      } else {
        result +=
          sourceNameParts[i].charAt(0).toUpperCase() +
          sourceNameParts[i].substr(1);
      }
    }

    return result;
  }
}