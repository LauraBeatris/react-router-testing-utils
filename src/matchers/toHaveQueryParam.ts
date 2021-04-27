import { decodeQueryParams, QueryParamConfig } from 'serialize-query-params'
import { parse } from 'query-string'
import isEqual from 'lodash.isequal'

export interface ExpectedQueryParam {
  name: string;
  type: QueryParamConfig<any, any>
  value: any;
}

export const toHaveQueryParam = (
  locationSearch: Location['search'],
  { name, value, type }: ExpectedQueryParam
) => {
  const encodedValue = parse(locationSearch)[name]

  if (!encodedValue) {
    return {
      pass: false,
      message: () => `${name} wasn't found in ${locationSearch}`
    }
  }

  const decodedValue = decodeQueryParams(
    { [name]: type },
    { [name]: encodedValue }
  )[name]

  const formatExpectedQueryParamValue = typeof value === 'object'
    ? JSON.stringify(value)
    : value
  const formatReceivedQueryParamValue = typeof decodedValue === 'object'
    ? JSON.stringify(decodedValue)
    : decodedValue

  return {
    pass: isEqual(decodedValue, value),
    message: () => `${name} query param value is expected to be ${formatExpectedQueryParamValue} but the received value is ${formatReceivedQueryParamValue}`
  }
}
