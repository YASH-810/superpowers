interface Platform {
  title: string;
  category: 'DEV TOOLS' | 'DESIGN' | 'PRODUCTIVITY' | 'LEARNING' | 'LIFESTYLE';
  logo: string;
  description: string;
  benefits: string[];
  link: string;
}

const data: Platform[] = [
  {
    category: "DEV TOOLS",
    logo: "/logo/github.png",
    title: "GitHub",
    description: "Get free access to the best developer tools, cloud services, and resources based on Git Version Control.",
    benefits: [
      "Based on Git Version Control system",
      "Collaborate on software development projects",
      "Track and merge changes seamlessly",
      "Easily revert to earlier versions if needed"
    ],
    link: "https://education.github.com/pack"
  },
  {
    category: "DEV TOOLS",
    logo: "/logo/azure.png",
    title: "Microsoft Azure",
    description: "Invent with purpose and realize cost savings with Microsoft Azure's open and flexible cloud computing platform.",
    benefits: [
      "Free cloud compute credits for students",
      "Open and flexible cloud computing platform",
      "Access to popular developer cloud services"
    ],
    link: "https://portal.azure.com/"
  },
  {
    category: "LEARNING",
    logo: "/logo/perplexity.png",
    title: "Perplexity",
    description: "Perplexity Student Pack gives students access to Perplexity Pro and the Comet AI browser for research and study.",
    benefits: [
      "Access to Perplexity Pro & Comet AI browser",
      "Includes all premium AI models",
      "Unlimited Pro searches and file uploads",
      "Interactive study tools like flashcards and quizzes"
    ],
    link: "https://www.perplexity.ai/students"
  },
  {
    category: "DEV TOOLS",
    logo: "/logo/arduino.png",
    title: "Arduino",
    description: "Learn electronics and programming with discounted kits and educational tools ideal for STEM projects.",
    benefits: [
      "Discounted kits and educational tools",
      "Learn electronics and programming",
      "Ideal for hands-on STEM projects and prototyping"
    ],
    link: "https://www.arduino.cc/education/github-students/"
  },
  {
    category: "DESIGN",
    logo: "/logo/autocad.png",
    title: "AutoCAD",
    description: "Computer-aided design software used by engineers, architects, and construction professionals to create 2D/3D models.",
    benefits: [
      "Free educational software license",
      "Create 2D and 3D models of buildings and structures",
      "Industry-standard tools for engineers and architects"
    ],
    link: "https://www.autodesk.com/education/edu-software/overview"
  },
  {
    category: "DESIGN",
    logo: "/logo/figma.png",
    title: "Figma",
    description: "Collaborative interface design tool for creating UI/UX designs, wireframes, vector graphics, and prototypes.",
    benefits: [
      "Free Figma Pro for students & educators",
      "Real-time team collaboration on design projects",
      "Advanced interactive prototyping tools"
    ],
    link: "https://www.figma.com/education/"
  },
  {
    category: "DESIGN",
    logo: "/logo/canva.png",
    title: "Canva",
    description: "Graphic design platform for creating presentations, social media graphics, posters, and visual content easily.",
    benefits: [
      "Free Pro version for students and educators",
      "Access to millions of premium templates and assets",
      "Drag-and-drop presentation and graphic design"
    ],
    link: "https://www.canva.com/education/students/"
  },
  {
    category: "DESIGN",
    logo: "/logo/adobe.png",
    title: "Adobe",
    description: "Suite of premium apps for image editing, illustration, video editing, sound design, PDFs, and fonts.",
    benefits: [
      "Special student discount pricing",
      "Includes Photoshop, Illustrator, Premiere Pro & more",
      "Access to Adobe Fonts and cloud storage"
    ],
    link: "https://www.adobe.com/in/creativecloud/buy/students.html"
  },
  {
    category: "PRODUCTIVITY",
    logo: "/logo/microsoft365.png",
    title: "Microsoft 365",
    description: "Suite of productivity tools including Word, Excel, PowerPoint, and Teams for coursework and collaboration.",
    benefits: [
      "Free access to Office 365 web and desktop apps",
      "Real-time document collaboration",
      "Essential productivity tools for students"
    ],
    link: "https://www.microsoft.com/en-us/education/products/office"
  },
  {
    category: "PRODUCTIVITY",
    logo: "/logo/onedrive.png",
    title: "OneDrive",
    description: "Robust and simple-to-use cloud storage platform provided via Office 365 for managing and backup up files.",
    benefits: [
      "Included with student Office 365 account",
      "Secure cloud storage and file sync",
      "Free premium courses via select universities"
    ],
    link: "https://www.microsoft.com/en-in/microsoft-365/onedrive/graduation"
  },
  {
    category: "PRODUCTIVITY",
    logo: "/logo/googleone.png",
    title: "Google One",
    description: "Get access to Google's most powerful AI tools along with 2 TB of cloud storage across Google apps.",
    benefits: [
      "Gemini 2.5 Pro & Veo 3 Fast AI models",
      "Gemini built into Google Docs, Gmail, and Workspace",
      "Advanced tools like Flow AI filmmaking & NotebookLM",
      "2 TB Cloud Storage for Photos, Drive, and Gmail"
    ],
    link: "https://gemini.google/students/"
  },
  {
    category: "DEV TOOLS",
    logo: "/logo/intel.png",
    title: "Intel DevCloud",
    description: "Free access to AI/ML compute resources within Intel's cloud-based development environment.",
    benefits: [
      "Free access to AI/ML cloud compute resources",
      "Featuring high-performance CPUs, GPUs, and FPGAs",
      "Ideal for testing AI, HPC, and edge computing projects"
    ],
    link: "https://www.intel.com/content/www/us/en/developer/tools/devcloud/overview.html"
  },
  {
    category: "DEV TOOLS",
    logo: "/logo/unity.png",
    title: "Unity",
    description: "Real-time 3D development platform for building 2D/3D games, VR/AR, and interactive experiences.",
    benefits: [
      "Latest version of Unity Pro Editor",
      "20% off all assets in the Unity Asset Store",
      "Free Odin Inspector and Validator license",
      "Synty asset bundle and Unity Cloud access"
    ],
    link: "https://unity.com/products/unity-student"
  },
  {
    category: "LEARNING",
    logo: "/logo/coursera.png",
    title: "Coursera",
    description: "Access free or discounted courses from top universities and companies covering technology and business.",
    benefits: [
      "Free or discounted courses from top universities",
      "Covers Data Science, Business, and Tech",
      "Build skills and earn professional certificates"
    ],
    link: "https://www.coursera.org"
  },
  {
    category: "DEV TOOLS",
    logo: "/logo/replit.png",
    title: "Replit",
    description: "Powerful online IDE to write, run, and deploy code in the browser with no setup required.",
    benefits: [
      "Supports 50+ programming languages",
      "Real-time multiplayer coding collaboration",
      "Browser-based environment on any device"
    ],
    link: "https://replit.com/edu"
  },
  {
    category: "DEV TOOLS",
    logo: "/logo/jetbrains.png",
    title: "JetBrains",
    description: "Suite of professional integrated development environments (IDEs) including IntelliJ, PyCharm, and WebStorm.",
    benefits: [
      "Free educational pack for all JetBrains IDEs",
      "Supports Java, Python, JavaScript, C++, and more",
      "Professional coding, debugging, and testing tools"
    ],
    link: "https://www.jetbrains.com/community/education/#students"
  },
  {
    category: "PRODUCTIVITY",
    logo: "/logo/lucid.png",
    title: "Lucidchart",
    description: "Web-based diagramming software used for creating flowcharts, diagrams, and visual presentations.",
    benefits: [
      "Free education account upgrade",
      "Create flowcharts, diagrams, and wireframes",
      "Visual presentation and collaboration tools"
    ],
    link: "https://www.lucidchart.com/pages/usecase/education"
  },
  {
    category: "PRODUCTIVITY",
    logo: "/logo/notion.png",
    title: "Notion",
    description: "Organize your schoolwork, notes, tasks, and life all in one clean, customizable workspace.",
    benefits: [
      "Free Plus plan upgrade",
      "Unlimited file uploads",
      "30-day page history"
    ],
    link: "https://www.notion.so/students"
  },
  {
    category: "LEARNING",
    logo: "/logo/zotero.png",
    title: "Zotero",
    description: "Free, open-source software for collecting, organizing, annotating, citing, and sharing research sources.",
    benefits: [
      "Free open-source research manager",
      "One-click citation capture via browser extension",
      "Organize references by DOI, ISBN, or metadata"
    ],
    link: "https://www.zotero.org"
  },
  {
    category: "DEV TOOLS",
    logo: "/logo/namecheap.png",
    title: "Namecheap",
    description: "Platform to buy domains, host websites, and manage SSL, email, and security tools for web development.",
    benefits: [
      "Free domain name offer for students",
      "Free WHOIS privacy protection",
      "Budget-friendly web hosting options"
    ],
    link: "https://nc.me/"
  },
  {
    category: "LEARNING",
    logo: "/logo/overleaf.png",
    title: "Overleaf",
    description: "Collaborative online LaTeX editor for writing, editing, and publishing scientific papers and documents.",
    benefits: [
      "Free Pro features for participating universities",
      "Real-time collaborative LaTeX editing",
      "Rich template gallery for academic papers"
    ],
    link: "https://www.overleaf.com/edu"
  },
  {
    category: "PRODUCTIVITY",
    logo: "/logo/grammarly.png",
    title: "Grammarly",
    description: "AI-powered writing assistant offering real-time grammar, spelling, clarity, and tone improvements.",
    benefits: [
      "Grammarly for Education features",
      "AI-powered writing assistance",
      "Improves academic essay quality and communication"
    ],
    link: "https://www.grammarly.com/students"
  },
  {
    category: "LEARNING",
    logo: "/logo/wolframalpha.png",
    title: "Wolfram Alpha",
    description: "Computational knowledge engine providing step-by-step solutions for math, physics, and engineering.",
    benefits: [
      "Free Pro account with .edu / .ac.in email",
      "Step-by-step solutions for complex math & science",
      "Access expert algorithms and technical knowledge base"
    ],
    link: "https://www.wolframalpha.com/pro-for-students"
  },
  {
    category: "LEARNING",
    logo: "/logo/educative.png",
    title: "Educative",
    description: "Text-based interactive learning platform tailor-made for software developers and engineers.",
    benefits: [
      "Interactive text-based courses without video fluff",
      "Embedded in-browser code editors",
      "Tailor-made software engineering paths"
    ],
    link: "https://www.educative.io"
  },
  {
    category: "LEARNING",
    logo: "/logo/scrimba.png",
    title: "Scrimba",
    description: "Interactive code-learning platform featuring screencasts where you can pause and edit code directly.",
    benefits: [
      "Interactive tutorials for React, Vue, Node, and Web Dev",
      "Pause code cast and edit code in real-time",
      "Hands-on web development practice"
    ],
    link: "https://scrimba.com/github-education"
  },
  {
    category: "LEARNING",
    logo: "/logo/datacamp.png",
    title: "DataCamp",
    description: "Self-paced, in-browser learning platform for data science, Python, R, SQL, and AI skills.",
    benefits: [
      "Unlimited access to DataCamp Premium for students",
      "Interactive in-browser coding environments",
      "Self-paced courses in Data Science, Python & AI"
    ],
    link: "https://www.datacamp.com/pricing/student"
  },
  {
    category: "LIFESTYLE",
    logo: "/logo/dell.png",
    title: "Dell Student",
    description: "Exclusive student discount program on Dell laptops, desktop computers, and tech accessories.",
    benefits: [
      "Seasonal student discounts on laptops",
      "Special savings on desktops and monitors",
      "Dedicated Dell student store deals"
    ],
    link: "https://www.dell.com/en-in/lp/students"
  },
  {
    category: "LIFESTYLE",
    logo: "/logo/hp.png",
    title: "HP Student",
    description: "Dedicated education discounts on HP laptops, desktop computers, printers, and accessories.",
    benefits: [
      "Discounted student pricing on HP laptops",
      "Savings on printers and computer accessories",
      "Exclusive education store offers"
    ],
    link: "https://www.hp.com/in-en/shop/education-store"
  },
  {
    category: "LIFESTYLE",
    logo: "/logo/apple.png",
    title: "Apple Education",
    description: "Special education pricing on MacBooks, iPads, and accessories for university students.",
    benefits: [
      "Discounts on MacBooks and iPads",
      "Savings on Apple accessories",
      "Seasonal back-to-school bundle deals"
    ],
    link: "https://www.apple.com/in-edu/store"
  },
  {
    category: "PRODUCTIVITY",
    logo: "/logo/notability.png",
    title: "Notability",
    description: "Intuitive digital note-taking application for iOS featuring audio syncing, PDF annotation, and AI tools.",
    benefits: [
      "50% off via Apple Edu store",
      "Minimal, intuitive note-taking interface",
      "Powerful AI tools to enhance learning"
    ],
    link: "https://www.gingerlabs.com/"
  },
  {
    category: "PRODUCTIVITY",
    logo: "/logo/dropbox.png",
    title: "Dropbox",
    description: "Secure cloud storage, backup, and collaboration tools tailored for managing coursework efficiently.",
    benefits: [
      "Student discount via school partnerships",
      "Extra cloud storage capacity",
      "File backup and secure collaboration tools"
    ],
    link: "https://www.dropbox.com/education"
  },
  {
    category: "LIFESTYLE",
    logo: "/logo/youtube.png",
    title: "YouTube",
    description: "Ad-free YouTube experience with background playback, offline downloads, and YouTube Music.",
    benefits: [
      "1-month free trial for students",
      "Ad-free video streaming & background play",
      "Includes YouTube Music Premium",
      "Offline video downloads on mobile devices"
    ],
    link: "https://www.youtube.com/premium/student"
  },
  {
    category: "LIFESTYLE",
    logo: "/logo/amazonprime.png",
    title: "Amazon Prime",
    description: "Student membership providing fast free delivery, Prime Video, Prime Music, and Prime Reading.",
    benefits: [
      "6 months of free Amazon Prime trial",
      "Free fast shipping on eligible items",
      "Access to Prime Video, Prime Music, and Prime Reading"
    ],
    link: "https://www.amazon.com/Amazon-Student/b?ie=UTF8&node=668781011"
  },
  {
    category: "LIFESTYLE",
    logo: "/logo/spotify.png",
    title: "Spotify",
    description: "Discounted music and podcast streaming service with ad-free access and offline listening.",
    benefits: [
      "50% discount on Spotify Premium subscription",
      "Ad-free access to over 70 million songs and podcasts",
      "Personalized playlists and offline listening"
    ],
    link: "https://www.spotify.com/in-en/student/"
  },
  {
    category: "LIFESTYLE",
    logo: "/logo/imagica.png",
    title: "Imagicaa",
    description: "Theme park and water park destination in India featuring thrilling rides, attractions, and live events.",
    benefits: [
      "20% discount on Imagicaa Theme Park tickets",
      "10% discount on Imagicaa Water Park tickets",
      "Access to a range of thrilling rides and attractions"
    ],
    link: "https://www.imagicaaworld.com/offers/college-deal/"
  },
  {
    category: "LIFESTYLE",
    logo: "/logo/applemusic.png",
    title: "Apple Music",
    description: "Discounted Apple Music student subscription with ad-free listening and free Apple TV+ access.",
    benefits: [
      "Discounted student pricing for Apple Music",
      "Full access to over 100 million songs ad-free",
      "Includes limited-time free access to Apple TV+"
    ],
    link: "https://music.apple.com/in/student"
  }
];
export default data;