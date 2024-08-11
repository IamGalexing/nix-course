import App from "./app";
import { Logger } from "./logger/logger";
import UiLogger from "./logger/ui-logger";
import Presentation from "./presentation";

const logTarget = new UiLogger();
const logger = new Logger();

logger.setLogTarget(logTarget);

const presentation = new Presentation();

const app = new App(logger, presentation);
