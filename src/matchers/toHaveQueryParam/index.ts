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
 * @example
 * "https://mywebsite.com/home?page=1"
 *
 * expect(location.search).toHaveQueryParam({ name: page, value: 1, type: NumberParam })
 *
 * @see
 * [react-router-testing-utils#tohavequeryparam](https://github.com/LauraBeatris/react-router-testing-utils#tohavequeryparam)
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
