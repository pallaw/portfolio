// Mock data for Pallaw Pathak's Portfolio

export const personalInfo = {
  name: "Pallaw Pathak",
  title: "Senior Android Engineer | Kotlin & Compose Multiplatform Expert",
  subtitle: "10+ Years Experience | Kotlin Multiplatform (KMP) & Cross-Platform Architecture Specialist",
  bio: "Senior Android Engineer with over 10 years of experience specializing in Kotlin Multiplatform (KMP) and Compose Multiplatform (CMP). Proven expertise in designing clean, scalable architecture using patterns like MVVM and MVI, and optimizing app performance across platforms.",
  profileImage: "https://customer-assets.emergentagent.com/job_3c2bde26-baa1-4dd6-a6c3-4b7f71bc0705/artifacts/zv3h7a9v_profile-pic%20%283%29.png",
  email: "pallaw.pathak@gmail.com",
  phone: "+917696487712",
  linkedin: "https://www.linkedin.com/in/pallawpathak/",
  github: "https://github.com/pallaw",
  medium: "https://medium.com/@pallawpathak",
  location: "India"
};

export const about = {
  description: "I'm a Senior Android Engineer with a passion for building scalable, cross-platform mobile applications. With over a decade of experience, I specialize in Kotlin Multiplatform and Compose Multiplatform, enabling seamless code sharing across Android and iOS. I've led the development of high-impact apps with millions of downloads, focusing on clean architecture, performance optimization, and team mentorship.",
  highlights: [
    {
      icon: "trophy",
      title: "10+ Years",
      description: "Professional Experience"
    },
    {
      icon: "users",
      title: "5M+ Downloads",
      description: "Across All Projects"
    },
    {
      icon: "award",
      title: "Hackathon Winner",
      description: "PayPay India 2025"
    },
    {
      icon: "code",
      title: "85% Code Sharing",
      description: "With Kotlin Multiplatform (KMP)"
    }
  ],
  interests: [
    { icon: "music", label: "Music & Guitar" },
    { icon: "gamepad-2", label: "Chess" },
    { icon: "pen-tool", label: "Writing" },
    { icon: "table-tennis", label: "Table Tennis" }
  ]
};

export const experience = [
  {
    id: 1,
    company: "PayPay India",
    position: "Senior Software Engineer",
    duration: "Jan 2025 - May 2025",
    location: "Gurugram",
    responsibilities: [
      "Refactored CI/CD pipelines for the PAI SDK using GitHub Actions, streamlining build and release processes",
      "Implemented Gift Voucher Grant feature to enhance in-app engagement and user satisfaction",
      "Winner of PayPay India Hackathon for creating SmaToshi, a goal-based micro-investment feature"
    ],
    technologies: ["Kotlin", "GitHub Actions", "CI/CD", "Clean Architecture", "Multi-Module Architecture"]
  },
  {
    id: 2,
    company: "PhysicsWallah",
    position: "Senior Software Engineer",
    duration: "Aug 2023 - Dec 2024",
    location: "Noida",
    responsibilities: [
      "Developed AcadFly from scratch with Kotlin Multiplatform (KMP) (85% shared code across Android & iOS); achieved 10K+ downloads, 4.0 rating",
      "Led Android development for CuriousJunior with 1M+ downloads and 4.6 rating",
      "Refactored legacy codebase using multi-module architecture, reducing build times by 30%",
      "Mentored teams in Kotlin Multiplatform development"
    ],
    technologies: ["Kotlin Multiplatform (KMP)", "Compose Multiplatform (CMP)", "MVVM", "MVI", "Multi-module Architecture", "Coroutines"]
  },
  {
    id: 3,
    company: "Shipsy",
    position: "Senior Software Engineer",
    duration: "Aug 2020 - June 2023",
    location: "Gurugram",
    responsibilities: [
      "Refactored 6-year-old legacy Rider App using MVVM and Clean Architecture",
      "Reduced crash rate by 20% and improved performance by 30%",
      "Managed HubOps with 10K+ downloads; integrated HHT barcode scanning reducing processing time by 40%",
      "Increased crash-free users from 75% to 93%"
    ],
    technologies: ["MVVM", "Clean Architecture", "Kotlin", "RxJava", "Dagger-Hilt"]
  },
  {
    id: 4,
    company: "Small World (Crafts Inc.)",
    position: "Senior Software Engineer",
    duration: "Aug 2019 - Mar 2020",
    location: "Nagoya, Japan (Remote)",
    responsibilities: [
      "Built Android app for students with job search, visa processing, and accommodation in Japan",
      "Reached 5K+ users within the first quarter"
    ],
    technologies: ["Kotlin", "MVVM", "Retrofit", "Firebase"]
  },
  {
    id: 5,
    company: "XBios",
    position: "Software Engineer",
    duration: "Sep 2017 - Jul 2019",
    location: "Gurugram",
    responsibilities: [
      "Contributed to feature development and SDK maintenance for large-scale e-commerce apps",
      "Promoted from SDE1 to SDE2 based on performance"
    ],
    technologies: ["Java", "Android", "SDK Development"]
  },
  {
    id: 6,
    company: "Recon AppMagic",
    position: "Software Engineer",
    duration: "May 2015 - Aug 2017",
    location: "Gurugram",
    responsibilities: [
      "Independently led Android projects from concept to deployment",
      "Collaborated with product teams for scalable delivery"
    ],
    technologies: ["Java", "Android", "MVP"]
  }
];

export const skills = {
  languages: [
    { name: "Kotlin", years: 10 },
    { name: "Java", years: 10 }
  ],
  frameworks: [
    "Kotlin Multiplatform (KMP)",
    "Compose Multiplatform (CMP)",
    "Jetpack Compose",
    "Coroutines",
    "Flow",
    "RxJava"
  ],
  architecture: [
    "MVVM",
    "MVI",
    "Clean Architecture",
    "Multi-module Architecture",
    "Modular Architecture"
  ],
  libraries: [
    "Retrofit",
    "Ktor",
    "Room",
    "Dagger-Hilt",
    "Koin"
  ],
  tools: [
    "GitHub Actions",
    "CI/CD",
    "Git",
    "Figma",
    "Firebase",
    "Crashlytics",
    "JUnit",
    "MockK"
  ],
  practices: [
    "Mobile DevOps",
    "Agile",
    "Code Review",
    "Mentorship"
  ]
};

export const projects = [
  {
    id: 1,
    name: "PayPay",
    description: "Japan's leading mobile payment platform. Contributed to SDK development, implemented Gift Voucher Grant feature, and won PayPay India Hackathon for SmaToshi - a goal-based micro-investment feature.",
    image: "https://play-lh.googleusercontent.com/AieC1ypSSh_2rctvrNtVggyFRP9cNtvnEIPkVmzZGFlhN8bNdHCl3GZbxK7O8vCe7A=w240-h480-rw",
    technologies: ["Kotlin", "GitHub Actions", "CI/CD", "Android SDK"],
    metrics: {
      downloads: "10M+",
      rating: "4.5"
    },
    links: {
      playStore: "https://play.google.com/store/apps/details?id=jp.ne.paypay.android.app&hl=en_IN"
    },
    company: "PayPay India"
  },
  {
    id: 2,
    name: "AcadFly",
    description: "Study Abroad Platform built from scratch with Kotlin Multiplatform. Achieved 85% code sharing between Android and iOS, resulting in faster development and consistent UX.",
    image: "https://play-lh.googleusercontent.com/UTBbl7ZiI-gXLtij7LqzFVk1R6HhwI9dqT9IYUt7fyjoz3eFfxxjhrTFmQ6y-p2cgrk=w240-h480-rw",
    technologies: ["Kotlin Multiplatform (KMP)", "Compose Multiplatform (CMP)", "Ktor", "Koin", "MVVM"],
    metrics: {
      downloads: "10K+",
      rating: "4.0"
    },
    links: {
      playStore: "https://play.google.com/store/apps/details?id=xyz.penpencil.unigo&hl=en_IN",
      appStore: "https://apps.apple.com/in/app/acadfly-study-abroad/id6737373703"
    },
    company: "PhysicsWallah"
  },
  {
    id: 3,
    name: "PhysicsWallah",
    description: "Core contributor to India's leading EdTech platform. Worked on critical features, performance optimization, and architecture improvements for the main application.",
    image: "https://play-lh.googleusercontent.com/x5_bJXO_-4zH95U6-GSmZPHWX7iFe1JPmfGe26kV2fVrZS5Ebi7L_VFIOopAQ3XBDg=w240-h480-rw",
    technologies: ["Kotlin", "Jetpack Compose", "Multi-module", "Coroutines", "Clean Architecture"],
    metrics: {
      downloads: "1M+",
      rating: "4.6",
      crashFree: "96%"
    },
    links: {
      playStore: "https://play.google.com/store/apps/details?id=xyz.penpencil.physicswala&hl=en_IN"
    },
    company: "PhysicsWallah"
  },
  {
    id: 4,
    name: "HubOps by Shipsy",
    description: "Middle-mile logistics management app. Integrated HHT barcode scanning, reducing processing time by 40%. Improved crash-free users from 75% to 93%.",
    image: "https://play-lh.googleusercontent.com/aWtMNzMSzvjr-tfORscKwHHPoJfkea-LbnxxKvyosudp7Bj0dIKSbBldpjMSFjo76w4=w240-h480-rw",
    technologies: ["Kotlin", "MVVM", "Barcode Scanning", "Dagger-Hilt", "Retrofit"],
    metrics: {
      downloads: "10K+",
      rating: "4.3",
      crashFree: "93%"
    },
    links: {
      playStore: "https://play.google.com/store/apps/details?id=in.shipsy.riderapp.hubOps&hl=en_IN"
    },
    company: "Shipsy"
  },
  {
    id: 5,
    name: "FieldOps by Shipsy",
    description: "Field operations management solution for logistics teams. Built with scalable architecture and real-time tracking capabilities.",
    image: "https://play-lh.googleusercontent.com/8cbfbn7OYCyDl3jcJm34iuh0qIsGkpqZ92TRCS2tNpJJLaOimgRBmvzlPiPMMMJwQ9ef=w240-h480-rw",
    technologies: ["Kotlin", "MVVM", "Google Maps", "Firebase", "Room"],
    metrics: {
      downloads: "5K+",
      rating: "4.2"
    },
    links: {
      playStore: "https://play.google.com/store/apps/details?id=io.shipsy.fieldops&hl=en_IN"
    },
    company: "Shipsy"
  },
  {
    id: 6,
    name: "TMS Rider by Shipsy",
    description: "Transportation Management System for delivery partners. Focused on performance optimization and reliability for mission-critical operations.",
    image: "https://play-lh.googleusercontent.com/qjq2WeZkN57elgL1jbzTxc7BJgtj205hKyrzfIg8dEwtrQjCEEzsBOfqCrzfVFE-hg=w240-h480-rw",
    technologies: ["Kotlin", "Clean Architecture", "Coroutines", "Retrofit"],
    metrics: {
      downloads: "5K+",
      rating: "4.1"
    },
    links: {
      playStore: "https://play.google.com/store/apps/details?id=in.shipsy.riderapp.tms&hl=en_IN"
    },
    company: "Shipsy"
  },
  {
    id: 7,
    name: "OnDemand by Shipsy",
    description: "On-demand delivery management platform. Implemented real-time order tracking and optimized routing algorithms.",
    image: "https://play-lh.googleusercontent.com/iByeglWn9_Q6upqvHjBJ_IAj3fVAQ5amPmkeaAy5JLyXzE9OvyWa7xyPYhCit9vsiQ=w240-h480-rw",
    technologies: ["Kotlin", "MVVM", "Firebase", "Google Maps API"],
    metrics: {
      downloads: "3K+",
      rating: "4.0"
    },
    links: {
      playStore: "https://play.google.com/store/apps/details?id=in.shipsy.riderapp.ondemand.generic&hl=en_IN"
    },
    company: "Shipsy"
  }
];

export const articles = [
  {
    id: 1,
    title: "Unified UI with Compose Multiplatform (CMP): Getting Started with Compose Multiplatform 'Hello World'",
    excerpt: "Ready to build one app that works on Android, iOS, and desktop? Compose Multiplatform lets you share UI code across platforms.",
    date: "Oct 11, 2024",
    readTime: "5 min read",
    image: "https://miro.medium.com/v2/resize:fill:224:150/1*nqHTiq4bEZ4EHKJtbDn66g.jpeg",
    link: "https://medium.com/@pallawpathak/unified-ui-with-cmp-getting-started-with-compose-multiplatform-hello-world-8c5e62cdce0e"
  },
  {
    id: 2,
    title: "Version Catalog: Pivot Your Android Dependency Management to a Smoother Setup",
    excerpt: "Learn how Version Catalogs can streamline your Android project's dependency management for better maintainability.",
    date: "Aug 14, 2024",
    readTime: "4 min read",
    image: "https://miro.medium.com/v2/resize:fill:224:150/1*XWcW4tZGgECWRdm2MxPvvQ.jpeg",
    link: "https://medium.com/@pallawpathak/version-catalog-pivot-your-android-dependency-management-to-a-smoother-setup-0f506452b26f"
  },
  {
    id: 3,
    title: "Unlocking the Joy of Learning Kotlin: A Fun Journey with IntelliJ IDEA",
    excerpt: "Kotlin Beyond Android: Embracing the Multiplatform Revolution with IntelliJ IDEA and JetBrains Academy.",
    date: "Apr 26, 2024",
    readTime: "6 min read",
    image: "https://miro.medium.com/v2/resize:fill:224:150/1*b3wX5xfc4rEm8vjGrSIKlA.png",
    link: "https://medium.com/@pallawpathak/unlocking-the-joy-of-learning-kotlin-a-fun-journey-with-intellij-idea-and-jetbrains-academy-1be138692db6"
  },
  {
    id: 4,
    title: "Why You Should Never Use LiveData in UseCase or Repository Classes",
    excerpt: "Understanding the proper boundaries of LiveData and why it should stay in the presentation layer.",
    date: "Jul 21, 2023",
    readTime: "5 min read",
    image: "https://miro.medium.com/v2/resize:fill:224:150/1*LVGqlzns4Wo57quwi3cHCA.png",
    link: "https://medium.com/@pallawpathak/why-you-should-never-use-livedata-in-usecase-or-repository-classes-8814d6d5d542"
  },
  {
    id: 5,
    title: "Android CustomView: The Amazing Life Cycle of a View Class",
    excerpt: "Dive deep into the lifecycle of Android CustomViews and understand how to build performant custom UI components.",
    date: "May 24, 2023",
    readTime: "7 min read",
    image: "https://miro.medium.com/v2/resize:fill:224:150/1*_D6lZPWxR93buFev2_r2sg.png",
    link: "https://medium.com/@pallawpathak/android-customview-the-amazing-life-cycle-of-a-view-class-3946386bf6ea"
  },
  {
    id: 6,
    title: "Access Multiple Github Accounts Through SSH Key Pair",
    excerpt: "Learn how to manage multiple GitHub accounts seamlessly using SSH key pairs for efficient development workflow.",
    date: "Apr 12, 2023",
    readTime: "4 min read",
    image: "https://miro.medium.com/v2/resize:fill:224:150/1*BpOLBGVYE_AI2XwQxXUj0w.png",
    link: "https://medium.com/@pallawpathak/access-multiple-github-accounts-through-ssh-key-pair-dd3503040cba"
  }
];
