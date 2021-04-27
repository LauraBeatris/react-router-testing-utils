export const toHaveQueryParam = (
  locationSearch: Location['search'],
  queryParamName: string,
  expectedQueryParamValue?: any
) => {
  const searchParams = new URLSearchParams(locationSearch)

  const hasParam = searchParams.has(queryParamName)

  if (!expectedQueryParamValue) {
    return {
      pass: hasParam,
      message: () => `${queryParamName} wasn't found in ${locationSearch}`
    }
  }

  const paramValue = searchParams.get(queryParamName)
  const paramHasGivenValue = paramValue === String(expectedQueryParamValue)

  const formatExpectedQueryParamValue = typeof expectedQueryParamValue === 'object'
    ? JSON.stringify(expectedQueryParamValue)
    : expectedQueryParamValue

  return {
    pass: paramHasGivenValue,
    message: () => `${queryParamName} query param value is expected to be ${formatExpectedQueryParamValue} but the received value is ${paramValue}`
  }
}
