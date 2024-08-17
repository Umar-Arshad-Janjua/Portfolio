/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Umar Janjua",
  title: "Hi, I'm Umar",
  subTitle: emoji(
    "A passionate Full Stack web Developer 🚀 with an experience of building Web applications with JavaScript / Reactjs / Nodejs and other modern JavaScript libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Umar-Arshad-Janjua",
  linkedin: "https://www.linkedin.com/in/uajanjua/",
  gmail: "arshadumar71@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WITH PASSION TO LEARN MORE",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Integrating backend to your web applications using Node.js and Express"
    ),
    emoji(
      "⚡ Integrating SQL or NO-SQL databases to your web applications"
    ),
   
    emoji(
      "⚡ Integration of third party services such as Firebase/ AppWrite / AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "expressjs",
      fontAwesomeClassname: "fab fa-node-js"
    },
    
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Brandenburgische Technische Universität",
      logo: require("./assets/images/btu.png"),
      subHeader: "Master of Science in Artificial Intelligence",
      duration: "October 2023 - Present",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Focus on Machine Learning, Python, Data Science and Computer Vision",
       
      ]
    },
    {
      schoolName: "COMSATS University",
      logo: require("./assets/images/comsats.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "February 2019 - February 2023",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Focus on Data Structures, Web Technologies, Software Engineering, Database Systems, OOP Systems"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "ML/AI",
      progressPercentage: "40%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "Sysreforms International",
      companylogo: require("./assets/images/sysreforms.png"),
      companyUrl: "https://www.sysreforms.com/",
      date: "February 2023 – October 2023",
      desc: "Further Development in an online learning platform application",
      descBullets: [
        "Built a chat system for users to communicate.",
        "Integrated file upload and download system for users.",
        "Developed dual lingual system."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Fast Solutions",
      companylogo: require("./assets/images/fast.png"),
      companyUrl: "https://www.fastservices.pk/",
      date: "August 2022 – February 2023",
      descBullets: ["Developed an entire lifecycle of e-commerce web applications including interface, backend, and database management",
        " Ensured user authentication by integrating login/signup functionality using JWT and password protection"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Brandpa",
      companylogo: require("./assets/images/brandpa.png"),
      companyUrl: "https://yourbrandpa.com/",
      date: "May 2021 – Sep 2021",
      descBullets: ["Translated designs and ideas into pixel perfect websites using HTML, CSS and  JavaScript",
      "Implemented responsiveness of pages and components across various devices using CSS media queries",
      "Refactored and cleaned up JavaScript code to reduce latency rate by 40% in  web applications"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some Projects that I have built during studies for final year project or for semester.",
  projects: [
    {
      image: require("./assets/images/DLR.png"),
      projectName: "Deep learning approach for cotton plant counting using drone images",
      projectDesc: "Trained a YoloV5 model using custom dataset of cotton fields and then integrated that model into react.js application",
      footerLink: [
        {
          name: "Link",
          url: "http://github.com/Umar-Arshad-Janjua/Yolov5-in-react"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mern.png"),
      projectName: "E-commerce store in MERN stack",
      projectDesc: "Built this full stack e-commerce store for a semester project. This includes backend, database and user authentication",
      footerLink: [
        {
          name: "Link",
          url: "http://13.60.23.75/"
        }
      ]
    },
    {
      image: require("./assets/images/crimson.png"),
      projectName: "Restaurant Reservation Website",
      projectDesc: "Developed a platform for a restaturant using MERN Stack which provides customers an option for reservations.",
      footerLink: [
        {
          name: "Link",
          url: "http://crimsonplate.vercel.app"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Course completion certificates",

  achievementsCards: [
    {
      title: "React.js Essential Training Certificate",
      subtitle:
        "Learned about how React.js works and DOM manipulation",
      image: require("./assets/images/essential.png"),
      imageAlt: "LinkedIn",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/6b50873155e28cb5baa4102a61b8b00a6db42985e50fe755744c6e7df094401c"
        },
      ]
    },
    {
      title: "React.js Design Patterns",
      subtitle:
        "Learned about React.js design patterns and components lifecycle",
      image: require("./assets/images/design.png"),
      imageAlt: "LinkedIn",
      footerLink: [
        {
          name: "Certification",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Building a website with Node.JS and Express.JS",
      subtitle: "Learned about how to conncet client side to a server side using Node and Express",
      image: require("./assets/images/express.png"),
      imageAlt: "LinkedIn",
      footerLink: [
        {name: "Certification", url: "https://www.linkedin.com/learning/certificates/82b42e5fd11112dd4984e063b19d8edd01f5f02d2b831f1243197bb0fc3cce50"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Contact me now to discuss my portfolio in details",
  number: "+4917655441260",
  email_address: "arshadumar71@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
