import LogTarget from "./log-target";

export default class ConsoleLogger extends LogTarget {
  log(message: string): void {
    console.log(message);
  }
}
