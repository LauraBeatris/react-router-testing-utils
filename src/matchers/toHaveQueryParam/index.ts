import {
  encodeValues,
  validateValues,
  validateArguments,
  ExpectedQueryParam
} from './helpers'

/**
 * @description
 * This allows you to check if a location search has a certain query param value.
 *
 * A query param is contained in a location search if **all** the following conditions are met:
 * * It's name is contained in the location search
 * * It's value is contained in the location search
 * * It's given type corresponds to it's decoded value
 */
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
