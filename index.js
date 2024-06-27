import CountDownTimer from "./utils/countdownTimer.js";
import ConfigManager from "./utils/configManger.js";
import getUserInput from "./utils/inputValidation.js";

(function () {
  const config = new ConfigManager("./config.txt");
  const timer = new CountDownTimer(config.readDuration());

  let input = getUserInput(timer.getDuration(), config);

  if (input) {
    timer.setDuration(input);
  }

  timer.startTimer();
})();
