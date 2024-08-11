import ConsoleLogger from "./logger/console-logger";
import { ILogger } from "./logger/logger";
import UiLogger from "./logger/ui-logger";
import Presentation from "./presentation";

export default class App {
  private isConsole = true;

  constructor(private logger: ILogger, private presentation: Presentation) {
    this.presentation.onSubmit((message) => {
      this.logger.log(message);
    });

    presentation.onToggle(() => {
      const logTarget = this.isConsole ? new ConsoleLogger() : new UiLogger();

      this.logger.setLogTarget(logTarget);

      this.isConsole = !this.isConsole;
    });
  }
}
