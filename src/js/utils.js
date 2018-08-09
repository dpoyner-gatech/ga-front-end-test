import run from "gen-run";

function sleep(ms) {
  return function(callback) {
    setTimeout(callback, ms);
  };
}

export const animationPhases = (context, phases) => {
  run(function*() {
    for (let i = 0, len = phases.length; i < len; i++) {
      yield sleep(phases[i].delay);
      context.setState({ phase: phases[i].phase });
    }
  });
};
