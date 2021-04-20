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
  // TODO - Do not parse param to string and handle all types of values
  const paramHasGivenValue = paramValue === String(expectedQueryParamValue)

  return {
    pass: paramHasGivenValue,
    message: () => `${queryParamName} query param value is expected to be ${expectedQueryParamValue} but the received value is ${paramValue}`
  }
}
