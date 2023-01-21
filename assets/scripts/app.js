class Tooltip {}

class ProjectList {
  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    console.log(prjItems);
  }
}

class ProjectItem {}

class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
  }
}

App.init();
