import LogTarget from "./log-target";

export default class UiLogger extends LogTarget {
  private output = document.getElementById("output") as HTMLPreElement;

  log(message: string): void {
    this.output.innerHTML += message + "\n";
  }
}
