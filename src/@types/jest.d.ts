namespace jest {
  interface Matchers<R> {
    toHaveQueryParam(
      expectedQueryParam: {
        name: string;
        value: any;
        type: import('serialize-query-params').QueryParamConfig<any, any>
      }
    ): CustomMatcherResult;
  }
}
