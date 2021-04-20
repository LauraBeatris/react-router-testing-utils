declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveQueryParam(
        queryParamName: string,
        expectedQueryParamValue?: any
      ): R
    }
  }
}

export {}
