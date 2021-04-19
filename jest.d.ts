declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveQueryParam(
        queryParamName: string,
        queryParamValue: any
      ): R
    }
  }
}

export {}
