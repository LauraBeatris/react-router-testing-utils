export const toHaveQueryParam = (
  locationSearch: Location['search'],
  queryParamName: string,
  expectedQueryParamValue: any
) => {
  const searchParams = new URLSearchParams(locationSearch)

  const hasParam = searchParams.has(queryParamName)
  const paramValue = searchParams.get(queryParamName)
  const paramHasGivenValue = paramValue === expectedQueryParamValue

  const pass = hasParam && paramHasGivenValue
  const message = () => hasParam
    ? `${queryParamName} wasn't found in ${locationSearch}`
    : `${queryParamName} query param value is expected to be ${expectedQueryParamValue} but the received value is ${paramValue}`

  return {
    pass,
    message
  }
}
