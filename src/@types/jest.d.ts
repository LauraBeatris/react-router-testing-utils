
declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveQueryParam(
        queryParamName: string,
        expectedQueryParamValue?: unknown
      ): CustomMatcherResult;
    }
  }
}
