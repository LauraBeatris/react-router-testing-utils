export interface CustomMatcherMessagePayload {
  pass: boolean;
  message: () => string
}

export class CustomMatcherMessage {
  public readonly pass: CustomMatcherMessagePayload['pass'];

  public readonly message: CustomMatcherMessagePayload['message'];

  constructor ({ pass, message }: CustomMatcherMessagePayload) {
    this.message = message
    this.pass = pass
  }
}
