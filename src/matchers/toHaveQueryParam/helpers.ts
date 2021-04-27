import { decodeQueryParams, encodeQueryParams, QueryParamConfig } from 'serialize-query-params'
import { parse } from 'query-string'
import isEqual from 'lodash.isequal'

import { CustomMatcherMessage } from '../message'

export interface ExpectedQueryParam {
  name: string;
  type: QueryParamConfig<any, any>
  value: any;
}

type EncodedValue = string | string[] | null | (string | null)[] | undefined

export const validateArguments = ({
  name,
  type,
  locationSearch,
  encodedReceivedValue
}: Pick<ExpectedQueryParam, 'type' | 'name'> & {
  locationSearch: Location['search'],
  encodedReceivedValue: EncodedValue,
}) => {
  if (!type) {
    throw new CustomMatcherMessage({
      pass: false,
      message: () => 'Please, make sure to provide a type argument in order to serialize a query param value'
    })
  }

  if (!encodedReceivedValue) {
    throw new CustomMatcherMessage({
      pass: false,
      message: () => `${name} wasn't found in ${locationSearch}`
    })
  }
}

export const encodeValues = ({
  type,
  name,
  value,
  locationSearch
}: ExpectedQueryParam & {
  locationSearch: Location['search'],
}) => {
  const encodedReceivedValue = parse(locationSearch)[name]

  return {
    encodedExpectedValue: encodeQueryParams(
      { [name]: type },
      { [name]: value }
    )[name],
    encodedReceivedValue,
    decodedReceivedValue: decodeQueryParams(
      { [name]: type },
      { [name]: encodedReceivedValue }
    )[name]
  }
}

export const validateResult = ({
  name,
  value,
  encodedExpectedValue,
  encodedReceivedValue,
  decodedReceivedValue
}: Pick<ExpectedQueryParam, 'name' | 'value'> & {
  encodedReceivedValue: EncodedValue,
  encodedExpectedValue: EncodedValue,
  decodedReceivedValue: EncodedValue
}) => {
  throw new CustomMatcherMessage({
    pass: isEqual(decodedReceivedValue, value),
    message: () => `${name} query param is expected to be ${encodedExpectedValue} but the received value is ${encodedReceivedValue}`
  })
}
