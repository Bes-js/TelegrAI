import chalk from "chalk";

export default class {
  constructor() {}

  /**
   * @param error - Error object
   * @function errorLogger
   * @returns {void} - Returns nothing
   */
  errorLogger(error: Error): void {
    console.log(chalk.redBright(`Error: ${error.message}`));
    process.exit(1);
  }

  /**
   * @param message - Message to log
   * @function successLogger
   * @returns {void} - Returns nothing
   */
  successLogger(message: string): void {
    console.log(chalk.greenBright("[SUCCESS] " + message));
  }

  /**
   * @param message - Message to log
   * @function warnLogger
   * @returns {void} - Returns nothing
   */
  warnLogger(message: string): void {
    console.log(chalk.yellowBright("[WARN] " + message));
  }

    /**
     * @param message - Message to log
     * @function infoLogger
     * @returns {void} - Returns nothing
     */
  infoLogger(message: string): void {
    console.log(chalk.blueBright("[INFO] " + message));
  }
}
