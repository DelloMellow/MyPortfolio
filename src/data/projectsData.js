import DelloPort from "./../assets/portfolioImages/delloport.png"
import SmartCut from "./../assets/portfolioImages/smartcut.png"
import GitHubUser from "./../assets/portfolioImages/githubuser.png"
import UserStory from "./../assets/portfolioImages/userstory.png"

const ProjectsData = [
  {
    id: "delloport",
    img: DelloPort,
    name: "Receiving, LiftOff, and Release Container App",
    stack: ["< Flutter />", "< Firebase />"],
    live: "https://www.figma.com/design/oXGweUjVDuvdXAO6BNEpfH/Dello-Port-%5BMobile-Application%5D?node-id=0-1&t=mbuLhBh31boJ7xKu-1",
    source: "https://github.com/DelloMellow/Dello-Port",
    description:
      "The mobile application used at the port for container Receiving, LiftOff, and Release purposes on ships. This app developed using Flutter and Firebase.",
  },
  {
    id: "smartcut",
    img: SmartCut,
    name: "SmartCut",
    stack: ["< Kotlin />", "< RESTful API />"],
    live: "https://www.figma.com/design/GLFByGq7IhBmjVrC0WU4MU/Capstone?node-id=16-215&t=evF2rss8sOH3kyzi-1",
    source: "https://github.com/DelloMellow/SmartCut",
    description:
      "The mobile application created for a capstone project, equipped with a machine learning model to predict compatibility between men’s facial shapes and various hairstyles. This application was developed using Kotlin and a RESTful API.",
  },
  {
    id: "githubuser",
    img: GitHubUser,
    name: "GitHub User App",
    stack: ["< Kotlin />", "< RESTful API />"],
    live: "https://github.com/DelloMellow/GitHubUser",
    source: "https://github.com/DelloMellow/GitHubUser",
    description:
      "The first mobile application I created while participating in Bangkit Academy, using Kotlin and a RESTful API. This app will display GitHub user data, such as their followers and those they follow.",
  },

  {
    id: "userstory",
    img: UserStory,
    name: "User Story App",
    stack: ["< Kotlin />", "< RESTfulAPI />"],
    live: "https://github.com/DelloMellow/UserStory",
    source: "https://github.com/DelloMellow/UserStory",
    description:
      "The application that i developed using Kotlin and a RESTful API, displays stories captured from users through the phone camera, along with their location.",

  },

];

export default { ProjectsData };