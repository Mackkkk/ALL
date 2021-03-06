import { isUnitlessNumber } from './CSSProperty';

const dangerousStyleValue = (name, value, isCustomProperty) => {
  const isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) return '';

  if (
    !isCustomProperty &&
    typeof value === 'number' &&
    value !== 0 &&
    !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])
  )
    return value + 'px';

  return ('' + value).trim();
};

export { dangerousStyleValue };
