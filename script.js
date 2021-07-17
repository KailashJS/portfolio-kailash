function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "default.css";
    document.getElementById('github').style.fill="black";
    document.getElementById('codesandbox').style.fill="black";
    document.getElementById('codepen').style.fill="black";
  }

  if (mode === "blue") {
    document.getElementById("theme-style").href = "blue.css";
    document.getElementById('github').style.fill="white";
    document.getElementById('codesandbox').style.fill="white";
    document.getElementById('codepen').style.fill="white";
  }

  if (mode === "green") {
    document.getElementById("theme-style").href = "green.css";
    document.getElementById('github').style.fill="black";
    document.getElementById('codesandbox').style.fill="black";
    document.getElementById('codepen').style.fill="black";
  }

  if (mode === "purple") {
    document.getElementById("theme-style").href = "purple.css";
    document.getElementById('github').style.fill="white";
    document.getElementById('codesandbox').style.fill="black";
    document.getElementById('codepen').style.fill="white";
  }
  localStorage.setItem("theme", mode);
}

let theme = localStorage.getItem("theme");

// Fetching the theme from the local storage if available
if (theme) setTheme(theme);
else setTheme("light");

let themeDots = document.getElementsByClassName("theme-dot");

for (let theme = 0; themeDots.length > theme; theme++) {
    themeDots[theme].addEventListener("click", function () {
        let mode = this.dataset.mode;
        setTheme(mode);
    });
}

class Project {
  constructor({
                projectName,
                projectDescription,
                projectImage,
                codeLink,
                demoLink
              }) {
    this.title = this.createHeadingTag({
      headingType: "h6",
      className: "post-title",
      text: projectName
    });

    this.description = this.createParaTag({
      className: "post-intro",
      text: projectDescription
    });

    this.demo = this.createAttributeTag({
      href: demoLink,
      text: "Live Demo"
    });

    this.code = this.createAttributeTag({
      href: codeLink,
      text: "Source Code"
    });

    this.projectImage = this.createImageTag({
      className: "thumbnail",
      src: projectImage,
      alt: projectName
    });

    this.sourceCodeDiv = this.createDiv({
      className: "source-code",
      childElements: [this.demo, this.code]
    });

    this.cardHeaderDiv = this.createDiv({
      className: "post-preview",
      childElements: [this.title, this.description, this.sourceCodeDiv]
    });

    this.cardComponent = this.createDiv({
      className: "post",
      childElements: [this.projectImage, this.cardHeaderDiv]
    });
  }

  createAttributeTag({ href = "", target = "_blank", text }) {
    const tagDocument = document.createElement("a");
    tagDocument.href = href;
    tagDocument.target = target;
    const tagTextElement = document.createTextNode(text);
    tagDocument.appendChild(tagTextElement);
    return tagDocument;
  }

  createParaTag({ className = null, text = "" }) {
    const paraElement = document.createElement("p");
    if (className) paraElement.className = className;

    const paraText = document.createTextNode(text);
    paraElement.appendChild(paraText);
    return paraElement;
  }

  createDiv({ className = null, childElements = [] }) {
    const divElement = document.createElement("div");
    if (className) divElement.className = className;
    childElements.forEach(element => {
      divElement.appendChild(element);
    });
    return divElement;
  }

  createHeadingTag({ headingType = "h1", className = null, text = "" }) {
    const headingTag = document.createElement(headingType);
    if (className) headingTag.className = className;
    const headingText = document.createTextNode(text);
    headingTag.appendChild(headingText);
    return headingTag;
  }

  createImageTag({ className = null, src = "", alt = "" }) {
    const imageTag = document.createElement("img");
    if (className) imageTag.className = className;
    imageTag.src = src;
    imageTag.alt = alt;
    return imageTag;
  }

  createProjectCard() {
    return this.cardComponent;
  }
}

const projects = [
  {
    projectName: "Covid Tracker",
    projectDescription:
      "Designed & Built a website using React.js to track the overall Covid-statistics.",
    projectImage: "images/Covid-tracker.png",
    codeLink: "https://github.com/KailashJS/react-covid19-india",
    demoLink: "https://vigorous-ardinghelli-2f2e8f.netlify.app/"
  },
  {
    projectName: "The Healthy Elderly",
    projectDescription:
      "Designed & Built a website to share elderly health awareness insights, using HTML CSS and Vanilla JavaScript.",
    projectImage: "images/healthy-elderly.png",
    codeLink: "https://github.com/KailashJS/the-healthy-elderly",
    demoLink: "http://thehealthyelderly.com/"
  },
  {
    projectName: "Portfolio",
    projectDescription:
      "Designed & Built the Portfolio using HTML CSS and Vanilla JavaScript to show case the Professional Journey.",
    projectImage: "images/portfolio.png",
    codeLink: "https://github.com/KailashJS/kailash-portfolio/",
    demoLink: "http://upskilljs.com/kailash.html"
  },
  {
    projectName: "Pulse graph",
    projectDescription:
      "Developed a website using HTML CSS and Vanilla JavaScript to graphically visualize time-series real-time data.",
    projectImage: "images/pulse-graph.png",
    codeLink: "https://github.com/KailashJS/Pulse-graph",
    demoLink: "https://thirsty-nobel-45078e.netlify.app/"
  },
  {
    projectName: "Bat eye Echolocator",
    projectDescription:
      "Developed a echolocator device using Arduino t help visually impaired person get spatial awareness.",
    projectImage: "images/Echolocator.jpg",
    codeLink: "https://github.com/KailashJS/DIH_Summer",
    demoLink: "https://github.com/KailashJS/DIH_Summer"
  },
  {
    projectName: "Responsive minimalist portfolio",
    projectDescription:
      "Developed a responsive minimalist portfolio using HTML, CSS $ Vanilla Javascript.",
    projectImage: "images/minimal_portfolio.png",
    codeLink: "https://github.com/KailashJS/KailashJS.github.io",
    demoLink: "https://kailashjs.github.io/"
  },
 
];

const createCards = () => {
  projects.map(project => {
      const projectCard = new Project({
        projectName: project.projectName,
        projectDescription: project.projectDescription,
        projectImage: project.projectImage,
        codeLink: project.codeLink,
        demoLink: project.demoLink
      }).createProjectCard();
      document.getElementById("post-wrapper-id").appendChild(projectCard);
    }
  );
};
createCards();

