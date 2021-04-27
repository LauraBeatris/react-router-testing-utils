import {
  encodeValues,
  validateValues,
  validateArguments,
  ExpectedQueryParam
} from './helpers'

export const toHaveQueryParam = (
  locationSearch: Location['search'],
  {
    name,
    type,
    value
  }: ExpectedQueryParam
) => {
  try {
    const {
      encodedExpectedValue,
      encodedReceivedValue,
      decodedReceivedValue
    } = encodeValues({
      name,
      value,
      type,
      locationSearch
    })

    validateArguments({
      type,
      name,
      locationSearch,
      encodedReceivedValue
    })

    validateValues({
      name,
      value,
      encodedExpectedValue,
      encodedReceivedValue,
      decodedReceivedValue
    })
  } catch (message) {
    return message
  }
}
