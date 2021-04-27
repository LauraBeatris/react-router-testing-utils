export interface CustomMatcherMessagePayload {
  pass: boolean;
  message: () => string
}

export class CustomMatcherMessage {
  public readonly pass: boolean;

  public readonly message: () => string;

  constructor ({ pass, message }: CustomMatcherMessagePayload) {
    this.message = message
    this.pass = pass
  }
}
