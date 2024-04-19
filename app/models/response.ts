export default class Response {
  STATUS: string;
  DATA: object;
  ERRORS: string | object;

  constructor({STATUS = '', DATA = {}, ERRORS = ''} : { STATUS: string, DATA: object, ERRORS: string | object }) {
    this.STATUS = STATUS;
    this.DATA = DATA;
    this.ERRORS = ERRORS;
  }
}
