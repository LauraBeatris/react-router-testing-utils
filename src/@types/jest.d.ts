namespace jest {
  import { QueryParamConfig } from 'serialize-query-params'

  interface Matchers<R> {
    toHaveQueryParam(
      expectedQueryParam: {
        name: string;
        value: any;
        type: QueryParamConfig<any, any>
      }
    ): CustomMatcherResult;
  }
}
