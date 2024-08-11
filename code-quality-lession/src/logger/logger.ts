import LogTarget from "./log-target";

export interface ILogger {
  log(message: string): void;
  setLogTarget(target: LogTarget): void;
}

export class Logger {
  private logTarget?: LogTarget;

  log(message: string) {
    this.logTarget?.log(message);
  }

  setLogTarget(logTarget: LogTarget) {
    this.logTarget = logTarget;
  }
}
