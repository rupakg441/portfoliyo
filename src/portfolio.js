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
  username: "Rupak Giri",
  title: "Hi all, I'm Rupak",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Laravel and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rupakg441",
  linkedin: "https://www.linkedin.com/in/rupak-giri-48a291198",
  gmail: "rupakg441@gmail.com",
  gitlab: "https://gitlab.com/rupakg441",
  instagram:"https://www.instagram.com/rupak_giri_001/",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/",
  // stackoverflow: "https://stackoverflow.com/users/10422806/",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
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
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indira Gandhi National Open University (IGNOU), Delhi",
      logo: require("./assets/images/Ignou_All_1692295773.webp"),
      subHeader: "Bachelor of Computer Applications (BCA)",
      duration: "June 2017 - June 2020",
      desc: "Studied computer science with emphasis on web development, data structures, and databases.",
      descBullets: [
        "Built projects using Laravel, React.js, and MySQL",
        "Strong foundation in OOP, DBMS, and system design"
      ]
    },
    {
      schoolName: "Bihar School Examination Board (BSEB), Patna",
      logo: require("./assets/images/unnamed.jpg"), // Add an appropriate logo if available
      subHeader: "Intermediate of Science (I.Sc)",
      duration: "June 2014 – June 2016",
      desc: "Focused on core science subjects with specialization in Mathematics and Computer Science.",
      descBullets: [
        "Completed foundational coursework in Physics, Chemistry, and Mathematics",
        "Introduced to basic computer programming and logical reasoning"
      ]
    }
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "PHP Developer (Laravel, React.js, WordPress)",
      company: "Rigic Global Solutions Pvt Ltd",
      companylogo: require("./assets/images/logo-landcape.png"), // Replace with actual logo if available
      date: "Jan 2024 – Present",
      desc: "Working as a full-stack developer specializing in Laravel, React.js, and WordPress. Contributed to building scalable web applications and improving frontend user experience.",
      descBullets: [
        "Developed secure and efficient REST APIs using Laravel and Sanctum for authentication",
        "Led frontend development with React.js to build responsive and user-friendly UIs",
        "Designed and delivered WordPress sites using Elementor, ensuring performance and visual appeal"
      ]
    },
    {
  role: "PHP (Laravel) Developer & Team Leader",
  company: "InfyOm Technologies",
  companylogo: require("./assets/images/a93174cb2f2d96ed4fedf53cd2ef1dc3-100.webp"), // Replace with actual logo if available
  date: "Sep 2021 – Dec 2023",
  desc: "Led a team of developers in building and maintaining Laravel-based applications. Managed project workflows, feature planning, and customer support activities.",
  descBullets: [
    "Started each day with Envato support ticket review and responded to customer queries",
    "Resolved client issues via cPanel access and provided step-by-step custom integration guidance",
    "Assigned tasks to team members, explained requirements, and guided them technically",
    "Reviewed pull requests, merged code, and handled deployments to staging and production",
    "Managed release cycles and fixed production issues promptly"
  ]
},
{
  role: "Web Developer (Trainee)",
  company: "Bridge Technosoft",
  companylogo: require("./assets/images/Bridge_Final_LOGO-Register.png"), // Replace with actual logo if available
  date: "Mar 2019 – Oct 2019",
  desc: "Completed an intensive web development training program focused on core technologies like HTML, CSS, JavaScript, and PHP.",
  descBullets: [
    "Gained hands-on experience in front-end and back-end development fundamentals",
    "Assisted senior developers with coding, debugging, and testing web applications",
    "Contributed to project delivery by learning and applying modern web development practices",
    "Developed problem-solving and troubleshooting skills under mentorship"
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logodasdsadasdas.png"),
      projectName: "Restaurant Management (SaaS)",
      projectDesc: "Ready-made on-demand food delivery solution for restaurant and food outlets. Kick-start your food delivery business with our 100% white-labelled food delivery solutions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://restaurant-management.infyom.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/a93174cb2f2d96ed4fedf53cd2ef1dc3-100.webp"),
      projectName: "vCard Builder(SaaS)",
      projectDesc: "Digital business card builder",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://vcards.infyom.com/"
        }
      ]
    },
    {
      image: require("./assets/images/infyCare-logo.png"),
      projectName: "InfyCare",
      projectDesc: "Custom Doctor Appointment Booking Software",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://infycare.infyom.com/"
        }
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
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
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
      url: "https://medium.com/@Rupakpasta/why-react-is-the-best-5a97563f423e",
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
      slides_url: "https://bit.ly/Rupakpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Rupak-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
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
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7217600465",
  email_address: "rupakg441@gmail.com"
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
