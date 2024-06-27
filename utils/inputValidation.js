import pkg from "prompt-sync";
const prompt = pkg();

function getUserInput(cachedDuration, config) {
  let message =
    cachedDuration > 0
      ? `Enter timer duration, or leave blank to repeat ${cachedDuration} second timer: `
      : "Enter timer duration: ";

    const userInput = prompt(message);

  if (userInput) {
    config.writeDuration(`savedTime=${userInput}`);
  }

  return +userInput;
}

export default getUserInput;
