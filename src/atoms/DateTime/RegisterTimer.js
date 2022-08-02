class RegisterTimer {
  components = []

  constructor() {
    this.timer = setInterval(this.run, 1000);
  }

  register(component, timeout = 1000) {
    this.components.push({ lastRun: 0, timeout, component });
  }

  unregister(component) {
    const index = this.components.findIndex(({ component: c }) => c === component);

    if (index !== -1) {
      this.components.splice(index, 1);
    }
  }

  run = () => {
    this.components.forEach(({ lastRun, timeout, component }, i, arr) => {
      if (lastRun + timeout < +new Date()) {
        arr[i].lastRun = +new Date();
        component.setState({
          _update: +new Date(),
        });
      }
    });
  }
}

export default new RegisterTimer();
