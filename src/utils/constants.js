import SiteMarkLogo from "../assets/images/sitemark.webp";
import GreenishLogo from "../assets/images/greenish.webp";
import LuminousLogo from "../assets/images/luminous.webp";
import NetworkLogo from "../assets/images/network.webp";
import UmbrellaLogo from "../assets/images/umbrella.webp";
import FeatureOne from "../assets/icons/featureone.svg";
import FeatureTwo from "../assets/icons/featuretwo.svg";
import FeatureThree from "../assets/icons/featurethree.svg";
import FeatureFour from "../assets/icons/featurefour.svg";
import FeatureOrangeOne from "../assets/icons/featureorangeone.svg";
import FeatureOrangeTwo from "../assets/icons/featureorangetwo.svg";
import FeatureOrangeThree from "../assets/icons/featureorange3.svg";
import FeatureOrangeFour from "../assets/icons/featureiconorange4.svg";
import FeatureBlackFive from "../assets/icons/service-icon-black-5.svg";
import FeatureOrangeFive from "../assets/icons/service-icon-orange-5.svg";
import FeatureBlackSix from "../assets/icons/service-icon-black-6.svg";
import FeatureOrangeSix from "../assets/icons/service-icon-orange-6.svg";
import ManOne from "../assets/images/manone.webp";
import ManTwo from "../assets/images/man2.jpg";
import ManThree from "../assets/images/man3.webp";
import ManFour from "../assets/images/man4.webp";
import ManFive from "../assets/images/man5.webp";
import ManSix from "../assets/images/man6.webp";
import CoreValueIcon1 from "../assets/icons/core-value-icon-1.svg";
import CoreValueIcon2 from "../assets/icons/core-value-icon-2.svg";
import CoreValueIcon3 from "../assets/icons/core-value-icon-3.svg";
import CoreValueIcon4 from "../assets/icons/core-value-icon-4.svg";
import Member1 from "../assets/images/team-member-img-1.jpg";
import Member2 from "../assets/images/team-member-img-2.jpg";
import Member3 from "../assets/images/team-member-img-3.jpg";
import Member4 from "../assets/images/team-member-img-4.jpg";
import Member5 from "../assets/images/team-member-img-5.jpg";
import Member6 from "../assets/images/team-member-img-6.jpg";
import FacebookIconWhite from "../assets/icons/facebook-icon-white.svg";
import FacebookIconBlack from "../assets/icons/facebook-icon-black.svg";
import InstagramIconWhite from "../assets/icons/instagram-icon-white.svg";
import InstagramIconBlack from "../assets/icons/instagram-icon-black.svg";
import TwitterIconWhite from "../assets/icons/twitter-icon-white.svg";
import TwitterIconBlack from "../assets/icons/twitter-icon-black.svg";
import LinkdienIconWhite from "../assets/icons/linkedin-icon-white.svg";
import LinkdienIconBlack from "../assets/icons/linkedin-icon-black.svg";
import Blog1 from "../assets/images/blog1.jpg";
import Blog2 from "../assets/images/blog2.jpg";
import Blog3 from "../assets/images/blog3.jpg";
import Blog4 from "../assets/images/blog4.webp";
import Blog5 from "../assets/images/blog5.webp";
import Blog6 from "../assets/images/blog6.webp";
import RecentBlogOne from "../assets/images/blog-recent1.jpg";
import RecentBlogTwo from "../assets/images/blog-recent-img2.jpg";
import BlogInnerImage from "../assets/images/blog-inner-image.jpg";
import RecentBlogThree from "../assets/images/blog-recent-img3.jpg";
import PortfolioImage1 from "../assets/images/portfolio-img-1.jpg";
import PortfolioImage2 from "../assets/images/portfolio-img-2.jpg";
import PortfolioImage3 from "../assets/images/portfolio-img-3.jpg";
import PortfolioImage4 from "../assets/images/portfolio-img-4.jpg";
import PortfolioImage5 from "../assets/images/portfolio-img-5.jpg";
import PortfolioImage6 from "../assets/images/portfolio-img-6.jpg";
import PorfolioDetails1Image from "../assets/images/portfolio-img-details1.jpg";
import PorfolioDetails2Image from "../assets/images/portfolio-img-details2.jpg";

export const Menus = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    subMenu: [
      {
        name: "Services",
        path: "/services",
      },
      {
        name: "Service Details",
        path: "/servicedetails",
      },
    ],
    gridCols: 1,
  },
  {
    name: "Pages",
    subMenu: [
      {
        name: "Blogs",
        path: "/blogs",
        subMenu: [
          {
            name: "Blog",
            path: "/blogs",
          },
          {
            name: "Blog Details",
            path: "/blog/blog1",
          },
        ],
      },
      {
        name: "Team",
        path: "/",
        subMenu: [
          {
            name: "Team",
            path: "/",
          },
          {
            name: "Team Details",
            path: "/",
          },
        ],
      },
      {
        name: "FAQ",
        path: "/faq",
        subMenu: [
          {
            name: "FAQ-1",
            path: "/faq-1",
          },
          {
            name: "FAQ-2",
            path: "/faq-2",
          },
        ],
      },
      {
        name: "Portfolio",
        path: "/portfolio",
        subMenu: [
          {
            name: "Portfolio",
            path: "/portfolio",
          },
          {
            name: "Portfolio Details",
            path: "/portfolio/nlp-model",
          },
        ],
      },

      {
        name: "Pricing",
        path: "/pricing",
      },
      {
        name: "Utilities",
        path: "/utiilities",
        subMenu: [
          {
            name: "Error 404",
            path: "/error",
          },
          {
            name: "Login",
            path: "/login",
          },
          {
            name: "Signup",
            path: "/signup",
          },
          {
            name: "Reset Password",
            path: "/reset",
          },
        ],
      },
      // ...other items
    ],
    gridCols: 2,
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const LogoTickerItems = [
  SiteMarkLogo,
  GreenishLogo,
  LuminousLogo,
  NetworkLogo,
  UmbrellaLogo,
];
export const FeaturesItems = [
  {
    title: "Resource Flexibility",
    desc: "AI Integration: We offer smart, secure, and transparent solutions for authority and efficiency.",
    icon: FeatureOne,
    orangeicon: FeatureOrangeOne,
  },
  {
    title: "Managed Services",
    desc: "Social Ecosystem: It establishes a decentralised social environment that assures privacy and control.",
    icon: FeatureTwo,
    orangeicon: FeatureOrangeTwo,
  },
  {
    title: "Web-Based Access",
    desc: "Reward-Driven: Users are incentivized through a well established rewards system, encouraging their active participation",
    icon: FeatureThree,
    orangeicon: FeatureOrangeThree,
  },
  {
    title: "Resource Flexibility",
    desc: "Scalable Capability: Its architecture supports evolving technologies and expanding communities to the fullest",
    icon: FeatureFour,
    orangeicon: FeatureOrangeFour,
  },
];

export const testimonials = [
  {
    image: ManOne,
    name: "Max Weber",
    desc: "“This AI SaaS tool has revolutionized the way we process and analyze data. This is a game-changer for our business.”",
    speaclist: "HR Manager",
  },

  {
    image: ManTwo,
    name: "Douglas Smith",
    desc: "“It answers immediately, and we've seen a significant reduction in response time. Our customers love it and so do we!”",
    speaclist: "Businessman",
  },
  {
    image: ManThree,
    name: "Abraham Maslo",
    desc: "“It is accurate, fast and supports multiple languages support. It is a must for any international business success.”",
    speaclist: "Founder @ Marketing Company",
  },
  {
    image: ManFour,
    name: "Jack Fayol",
    desc: "“Security is a top concern for us, and AI SaaS takes it seriously. It's a reassuring layer of protection for our organization.”",
    speaclist: "HR Manager",
  },
  {
    image: ManFive,
    name: "Max Weber",
    desc: "“We were concerned about integrating their APIs were well documented, and their support team was super cool.”",
    speaclist: "Software Engineer",
  },
  {
    image: ManSix,
    name: "Henry Ochi",
    desc: "“The return on investment has exceeded our expectations. it's an investment in the future of our business.”",
    speaclist: "Bank Manager",
  },
];
export const footerPrimaryPages = [
 
  {
    page: "Harvest Hub",
    path: "/about",
  },
  {
    page: "Harvest Chain",
    path: "/services",
  },
  {
    page: "HVT Coin",
    path: "/pricing",
  },
  {
    page: "Bridge",
    path: "/contact",
  },
];

// legal
export const footerUtilitiesPages = [
  {
    page: "Whitepaper",
    path: "/signup",
  },
  {
    page: "Tokenomics",
    path: "/login",
  },
  {
    page: "Developer Docs / API",
    path: "/notfound",
  },
  {
    page: "FAQs",
    path: "/reset",
  },
];




export const footerLegalPages = [
  {
    page: "Terms of Use",
    path: "/terms",
  },
  {
    page: "Privacy Policy",
    path: "/privacy",
  },
  {
    page: "Disclaimer",
    path: "/disclaimer",
  },
  {
    page: "Cookie Policy",
    path: "/cookie",
  },
];


// Get Involved 
export const footerGetInvolvedPages = [
  {
    page: "Join the Community (Discord, Telegram, X/Twitter)",
    path: "#",
  },
  {
    page: "Become a Creator",
    path: "/Become-a-Creator",
  },
  
  {
    page: "Contact Us",
    path: "/contact",
  },
];


export const coreValues = [
  {
    icon: CoreValueIcon1,
    title: "Innovation",
    description: "User Ownership & Control We empower users to fully own and control their content and data without intermediaries or centralized authority",
  },
  {
    icon: CoreValueIcon2,
    title: "Excellence",
    description: "Transparency & Trust Our platform operates on an open, secure blockchain ensuring every interaction and reward to be transparent and verifiable",
  },
  {
    icon: CoreValueIcon3,
    title: "Collaboration",
    description: "Fairness & Reward Creators are directly and fairly compensated through our native token, fostering an equitable and sustainable digital economy",
  },
  {
    icon: CoreValueIcon4,
    title: "Integrity",
    description:
      "Innovation & Intelligence We fuse advanced AI with blockchain technology to deliver smart content discovery, dynamic personalization, and continuous ecosystem evolution.",
  },
];
export const teamMembers = [
  {
    name: "Mr. Abraham Maslo",
    designation: "Chief AI Officer",
    image: Member1,
    socials: [
      {
        name: "facebook",
        link: "http://www.facebook.com",
        iconWhite: FacebookIconWhite,
        iconBlack: FacebookIconBlack,
      },
      {
        name: "twitter",
        link: "http://www.twitter.com",
        iconWhite: TwitterIconWhite,
        iconBlack: TwitterIconBlack,
      },
      {
        name: "linkedin",
        link: "http://www.linkedin.com",
        iconWhite: LinkdienIconWhite,
        iconBlack: LinkdienIconBlack,
      },
      {
        name: "instagram",
        link: "http://www.instagram.com",
        iconWhite: InstagramIconWhite,
        iconBlack: InstagramIconBlack,
      },
    ],
  },
  {
    name: "Willium Robert",
    designation: "Data Engineer",
    image: Member2,
    socials: [
      {
        name: "facebook",
        link: "http://www.facebook.com",
        iconWhite: FacebookIconWhite,
        iconBlack: FacebookIconBlack,
      },
      {
        name: "twitter",
        link: "http://www.twitter.com",
        iconWhite: TwitterIconWhite,
        iconBlack: TwitterIconBlack,
      },
      {
        name: "linkedin",
        link: "http://www.linkedin.com",
        iconWhite: LinkdienIconWhite,
        iconBlack: LinkdienIconBlack,
      },
      {
        name: "instagram",
        link: "http://www.instagram.com",
        iconWhite: InstagramIconWhite,
        iconBlack: InstagramIconBlack,
      },
    ],
  },
  {
    name: "Mr. Max D. Nikolas",
    designation: "CEO, Co-founder",
    image: Member3,
    socials: [
      {
        name: "facebook",
        link: "http://www.facebook.com",
        iconWhite: FacebookIconWhite,
        iconBlack: FacebookIconBlack,
      },
      {
        name: "twitter",
        link: "http://www.twitter.com",
        iconWhite: TwitterIconWhite,
        iconBlack: TwitterIconBlack,
      },
      {
        name: "linkedin",
        link: "http://www.linkedin.com",
        iconWhite: LinkdienIconWhite,
        iconBlack: LinkdienIconBlack,
      },
      {
        name: "instagram",
        link: "http://www.instagram.com",
        iconWhite: InstagramIconWhite,
        iconBlack: InstagramIconBlack,
      },
    ],
  },
  {
    name: "Henry Fayol",
    designation: "AI Researchers",
    image: Member4,
    socials: [
      {
        name: "facebook",
        link: "http://www.facebook.com",
        iconWhite: FacebookIconWhite,
        iconBlack: FacebookIconBlack,
      },
      {
        name: "twitter",
        link: "http://www.twitter.com",
        iconWhite: TwitterIconWhite,
        iconBlack: TwitterIconBlack,
      },
      {
        name: "linkedin",
        link: "http://www.linkedin.com",
        iconWhite: LinkdienIconWhite,
        iconBlack: LinkdienIconBlack,
      },
      {
        name: "instagram",
        link: "http://www.instagram.com",
        iconWhite: InstagramIconWhite,
        iconBlack: InstagramIconBlack,
      },
    ],
  },
  {
    name: "Jack Fox",
    designation: "NLP Expert",
    image: Member5,
    socials: [
      {
        name: "facebook",
        link: "http://www.facebook.com",
        iconWhite: FacebookIconWhite,
        iconBlack: FacebookIconBlack,
      },
      {
        name: "twitter",
        link: "http://www.twitter.com",
        iconWhite: TwitterIconWhite,
        iconBlack: TwitterIconBlack,
      },
      {
        name: "linkedin",
        link: "http://www.linkedin.com",
        iconWhite: LinkdienIconWhite,
        iconBlack: LinkdienIconBlack,
      },
      {
        name: "instagram",
        link: "http://www.instagram.com",
        iconWhite: InstagramIconWhite,
        iconBlack: InstagramIconBlack,
      },
    ],
  },
  {
    name: "Adam Smith",
    designation: "Project Manager",
    image: Member6,
    socials: [
      {
        name: "facebook",
        link: "http://www.facebook.com",
        iconWhite: FacebookIconWhite,
        iconBlack: FacebookIconBlack,
      },
      {
        name: "twitter",
        link: "http://www.twitter.com",
        iconWhite: TwitterIconWhite,
        iconBlack: TwitterIconBlack,
      },
      {
        name: "linkedin",
        link: "http://www.linkedin.com",
        iconWhite: LinkdienIconWhite,
        iconBlack: LinkdienIconBlack,
      },
      {
        name: "instagram",
        link: "http://www.instagram.com",
        iconWhite: InstagramIconWhite,
        iconBlack: InstagramIconBlack,
      },
    ],
  },
];
export const services = [
  {
    title: "Resource Flexibility",
    desc: "This is an excellent option for people & small businesses who are starting out.",
    icon: FeatureOne,
    orangeicon: FeatureOrangeOne,
  },
  {
    title: "Managed Services",
    desc: "This is an excellent option for people & small businesses who are starting out.",
    icon: FeatureTwo,
    orangeicon: FeatureOrangeTwo,
  },
  {
    title: "Web-Based Access",
    desc: "This is an excellent option for people &amp; small businesses who are starting out.",
    icon: FeatureThree,
    orangeicon: FeatureOrangeThree,
  },
  {
    title: "Resource Flexibility",
    desc: "This is an excellent option for people &amp; small businesses who are starting out.",
    icon: FeatureFour,
    orangeicon: FeatureOrangeFour,
  },
  {
    title: "Anomaly Detection",
    desc: "AI SaaS can analyze IoT sensor data to detect predict equipment failures.",
    icon: FeatureBlackFive,
    orangeicon: FeatureOrangeFive,
  },
  {
    title: "Predictive Analytics",
    desc: "Solutions that use AI to predict future trends and outcomes, such as demand forecastin.",
    icon: FeatureBlackSix,
    orangeicon: FeatureOrangeSix,
  },
  {
    title: "Speech Recognition",
    desc: "Speech recognition services convert spoken language into text and accessibility.",
    icon: FeatureBlackSix,
    orangeicon: FeatureOrangeSix,
  },
  {
    title: "Computer Vision",
    desc: "Computer vision services use AI to interpret and process visual information.",
    icon: FeatureBlackSix,
    orangeicon: FeatureOrangeSix,
  },
];
export const servicesFaqs = [
  {
    question: "How do I start AI SaaS?",
    answer:
      "Go to our official website and create an account. You'll need to provide some basic information and agree to our terms and conditions.",
  },
  {
    question: "Can I customize AI SaaS solutions?",
    answer:
      "Yes, customization is possible through our dashboard. You can integrate APIs and tweak the settings as per your business needs.",
  },
  {
    question: "How can AI benefit my business?",
    answer:
      "AI helps automate tasks, reduce human error, enhance customer experience, and increase operational efficiency.",
  },
];
export const contactLinks = [
  {
    icon: FacebookIconWhite,
    path: "www.facebook.com",
  },
  {
    icon: TwitterIconWhite,
    path: "www.x.com",
  },
  {
    icon: LinkdienIconWhite,
    path: "www.linkdien.com",
  },
  {
    icon: InstagramIconWhite,
    path: "www.instagram.com",
  },
];
export const locations = [
  {
    name: "Toronto, Canada",
    position: "sm:top-[10%] sm:left-[13%]",
  },
  {
    name: "Sao Paulo, Brazil",
    position: "sm:top-[65%] sm:left-[18%]",
  },
  {
    name: "Bamako, Mali",
    position: "sm:top-[38%] sm:left-[38%]",
  },
  {
    name: "Noril'sk, Russia",
    position: "sm:top-[5%] sm:left-[61%]",
  },
  {
    name: "Lake Eyre, Australia",
    position: "sm:top-[72%] sm:left-[88%]",
  },
];
export const blogs = [
  {
    id: "blog1",
    image: Blog1,
    category: "Business",
    date: "June 12, 2024",
    views: 250,
    comments: 15,
    innerImage: BlogInnerImage,
    likes: 200,
    title: "10 ways to supercharge startup with AI integration",
    footerContent:
      "The key to startup success is focusing AI efforts on the applications that will differentiate your business and have the biggest impact at each stage of growth. With the right strategy, AI can unlock transformation opportunities and exponential value creation.",
    excerpt:
      "The rapid advancements in AI have paved the way for startups to revolutionize their businesses. This article explores 10 key ways AI can be integrated into startups and provides real-world examples of its tangible impact across industries.",
    link: "/blog-details",

    content: {
      aiPoints: [
        {
          title: "1. AI-Powered Customer Support",
          desc: "AI chatbots and virtual assistants can handle routine queries, troubleshoot issues, and guide users, improving response times. This frees up human agents to tackle complex tasks, enhancing user experience.",
        },
        {
          title: "2. Predictive Maintenance",
          desc: "By analyzing usage patterns, ML algorithms can predict failures, enabling proactive maintenance and minimizing downtime.",
        },
        {
          title: "3. Enhanced Cybersecurity",
          desc: "AI anomaly detection, behavior analysis, and intrusion prevention boost security and data protection. This safeguards infrastructure and builds user trust.",
        },
        {
          isImage: true,
          imageSrc: BlogInnerImage,
          alt: "blog-inner-image",
        },
        {
          title: "4. Personalized User Experiences",
          desc: "By analyzing behavior and preferences, AI tailors interfaces and features. This improves satisfaction and encourages retention.",
        },
        {
          title: "5. Automated Workflows",
          desc: "Automating tasks like software updates and license management with AI reduces manual efforts and minimizes errors.",
        },
      ],

      keyTakeaways: [
        "Start with chatbot, workflow automation, and basic analytics.",
        "Gradually scale AI adoption as the business matures.",
        "Identify the right AI use cases to solve pressing needs.",
        "Integrate AI into workflows and processes seamlessly.",
        "Get creative — leverage partnerships and talent from outside.",
      ],
    },
  },

  {
    id: "blog2",
    image: Blog2,
    innerImage: BlogInnerImage,
    category: "Startup",
    date: "May 30, 2024",
    views: 200,
    comments: 20,
    likes: 250,
    title: "5 essential tools for early-stage founders",
    footerContent:
      "The key to startup success is focusing AI efforts on the applications that will differentiate your business and have the biggest impact at each stage of growth. With the right strategy, AI can unlock transformation opportunities and exponential value creation.",
    excerpt:
      "The rapid advancements in AI have paved the way for startups to revolutionize their businesses. This article explores 10 key ways AI can be integrated into startups and provides real-world examples of its tangible impact across industries.",
    link: "/blog-details",
    content: {
      aiPoints: [
        {
          title: "1. AI-Powered Customer Support",
          desc: "AI chatbots and virtual assistants can handle routine queries, troubleshoot issues, and guide users, improving response times. This frees up human agents to tackle complex tasks, enhancing user experience.",
        },
        {
          title: "2. Predictive Maintenance",
          desc: "By analyzing usage patterns, ML algorithms can predict failures, enabling proactive maintenance and minimizing downtime.",
        },
        {
          title: "3. Enhanced Cybersecurity",
          desc: "AI anomaly detection, behavior analysis, and intrusion prevention boost security and data protection. This safeguards infrastructure and builds user trust.",
        },
        {
          isImage: true,
          imageSrc: BlogInnerImage,
          alt: "blog-inner-image",
        },
        {
          title: "4. Personalized User Experiences",
          desc: "By analyzing behavior and preferences, AI tailors interfaces and features. This improves satisfaction and encourages retention.",
        },
        {
          title: "5. Automated Workflows",
          desc: "Automating tasks like software updates and license management with AI reduces manual efforts and minimizes errors.",
        },
      ],

      keyTakeaways: [
        "Start with chatbot, workflow automation, and basic analytics.",
        "Gradually scale AI adoption as the business matures.",
        "Identify the right AI use cases to solve pressing needs.",
        "Integrate AI into workflows and processes seamlessly.",
        "Get creative — leverage partnerships and talent from outside.",
      ],
    },
  },
  {
    id: "blog3",
    image: Blog3,
    innerImage: BlogInnerImage,
    category: "Technology",
    date: "May 20, 2024",
    views: 350,
    comments: 15,
    likes: 100,
    title: "The rise of AI: Opportunities and Challenges",
    footerContent:
      "The key to startup success is focusing AI efforts on the applications that will differentiate your business and have the biggest impact at each stage of growth. With the right strategy, AI can unlock transformation opportunities and exponential value creation.",
    excerpt:
      "The rapid advancements in AI have paved the way for startups to revolutionize their businesses. This article explores 10 key ways AI can be integrated into startups and provides real-world examples of its tangible impact across industries.",
    link: "/blog-details",
    content: {
      aiPoints: [
        {
          title: "1. AI-Powered Customer Support",
          desc: "AI chatbots and virtual assistants can handle routine queries, troubleshoot issues, and guide users, improving response times. This frees up human agents to tackle complex tasks, enhancing user experience.",
        },
        {
          title: "2. Predictive Maintenance",
          desc: "By analyzing usage patterns, ML algorithms can predict failures, enabling proactive maintenance and minimizing downtime.",
        },
        {
          title: "3. Enhanced Cybersecurity",
          desc: "AI anomaly detection, behavior analysis, and intrusion prevention boost security and data protection. This safeguards infrastructure and builds user trust.",
        },
        {
          isImage: true,
          imageSrc: BlogInnerImage,
          alt: "blog-inner-image",
        },
        {
          title: "4. Personalized User Experiences",
          desc: "By analyzing behavior and preferences, AI tailors interfaces and features. This improves satisfaction and encourages retention.",
        },
        {
          title: "5. Automated Workflows",
          desc: "Automating tasks like software updates and license management with AI reduces manual efforts and minimizes errors.",
        },
      ],

      keyTakeaways: [
        "Start with chatbot, workflow automation, and basic analytics.",
        "Gradually scale AI adoption as the business matures.",
        "Identify the right AI use cases to solve pressing needs.",
        "Integrate AI into workflows and processes seamlessly.",
        "Get creative — leverage partnerships and talent from outside.",
      ],
    },
  },
  {
    id: "blog4",
    image: Blog4,
    innerImage: BlogInnerImage,
    category: "Marketing",
    date: "May 15, 2024",
    views: 500,
    comments: 50,
    likes: 500,
    title: "How to create viral marketing campaigns using data",
    footerContent:
      "The key to startup success is focusing AI efforts on the applications that will differentiate your business and have the biggest impact at each stage of growth. With the right strategy, AI can unlock transformation opportunities and exponential value creation.",
    excerpt:
      "The rapid advancements in AI have paved the way for startups to revolutionize their businesses. This article explores 10 key ways AI can be integrated into startups and provides real-world examples of its tangible impact across industries.",
    link: "/blog-details",
    content: {
      aiPoints: [
        {
          title: "1. AI-Powered Customer Support",
          desc: "AI chatbots and virtual assistants can handle routine queries, troubleshoot issues, and guide users, improving response times. This frees up human agents to tackle complex tasks, enhancing user experience.",
        },
        {
          title: "2. Predictive Maintenance",
          desc: "By analyzing usage patterns, ML algorithms can predict failures, enabling proactive maintenance and minimizing downtime.",
        },
        {
          title: "3. Enhanced Cybersecurity",
          desc: "AI anomaly detection, behavior analysis, and intrusion prevention boost security and data protection. This safeguards infrastructure and builds user trust.",
        },
        {
          isImage: true,
          imageSrc: BlogInnerImage,
          alt: "blog-inner-image",
        },
        {
          title: "4. Personalized User Experiences",
          desc: "By analyzing behavior and preferences, AI tailors interfaces and features. This improves satisfaction and encourages retention.",
        },
        {
          title: "5. Automated Workflows",
          desc: "Automating tasks like software updates and license management with AI reduces manual efforts and minimizes errors.",
        },
      ],

      keyTakeaways: [
        "Start with chatbot, workflow automation, and basic analytics.",
        "Gradually scale AI adoption as the business matures.",
        "Identify the right AI use cases to solve pressing needs.",
        "Integrate AI into workflows and processes seamlessly.",
        "Get creative — leverage partnerships and talent from outside.",
      ],
    },
  },
  {
    id: "blog5",
    image: Blog5,
    innerImage: BlogInnerImage,
    category: "Design",
    date: "April 29, 2024",
    views: 200,
    comments: 50,
    likes: 230,
    title: "Designing for humans: The psychology of UI/UX",
    footerContent:
      "The key to startup success is focusing AI efforts on the applications that will differentiate your business and have the biggest impact at each stage of growth. With the right strategy, AI can unlock transformation opportunities and exponential value creation.",
    excerpt:
      "The rapid advancements in AI have paved the way for startups to revolutionize their businesses. This article explores 10 key ways AI can be integrated into startups and provides real-world examples of its tangible impact across industries.",
    link: "/blog-details",
    content: {
      aiPoints: [
        {
          title: "1. AI-Powered Customer Support",
          desc: "AI chatbots and virtual assistants can handle routine queries, troubleshoot issues, and guide users, improving response times. This frees up human agents to tackle complex tasks, enhancing user experience.",
        },
        {
          title: "2. Predictive Maintenance",
          desc: "By analyzing usage patterns, ML algorithms can predict failures, enabling proactive maintenance and minimizing downtime.",
        },
        {
          title: "3. Enhanced Cybersecurity",
          desc: "AI anomaly detection, behavior analysis, and intrusion prevention boost security and data protection. This safeguards infrastructure and builds user trust.",
        },
        {
          isImage: true,
          imageSrc: BlogInnerImage,
          alt: "blog-inner-image",
        },
        {
          title: "4. Personalized User Experiences",
          desc: "By analyzing behavior and preferences, AI tailors interfaces and features. This improves satisfaction and encourages retention.",
        },
        {
          title: "5. Automated Workflows",
          desc: "Automating tasks like software updates and license management with AI reduces manual efforts and minimizes errors.",
        },
      ],

      keyTakeaways: [
        "Start with chatbot, workflow automation, and basic analytics.",
        "Gradually scale AI adoption as the business matures.",
        "Identify the right AI use cases to solve pressing needs.",
        "Integrate AI into workflows and processes seamlessly.",
        "Get creative — leverage partnerships and talent from outside.",
      ],
    },
  },
  {
    id: "blog6",
    image: Blog6,
    innerImage: BlogInnerImage,
    category: "Growth",
    date: "April 15, 2024",
    views: 100,
    comments: 20,
    likes: 400,
    title: "Scaling your product without breaking things",
    footerContent:
      "The key to startup success is focusing AI efforts on the applications that will differentiate your business and have the biggest impact at each stage of growth. With the right strategy, AI can unlock transformation opportunities and exponential value creation.",
    excerpt:
      "The rapid advancements in AI have paved the way for startups to revolutionize their businesses. This article explores 10 key ways AI can be integrated into startups and provides real-world examples of its tangible impact across industries.",
    link: "/blog-details",
    content: {
      aiPoints: [
        {
          title: "1. AI-Powered Customer Support",
          desc: "AI chatbots and virtual assistants can handle routine queries, troubleshoot issues, and guide users, improving response times. This frees up human agents to tackle complex tasks, enhancing user experience.",
        },
        {
          title: "2. Predictive Maintenance",
          desc: "By analyzing usage patterns, ML algorithms can predict failures, enabling proactive maintenance and minimizing downtime.",
        },
        {
          title: "3. Enhanced Cybersecurity",
          desc: "AI anomaly detection, behavior analysis, and intrusion prevention boost security and data protection. This safeguards infrastructure and builds user trust.",
        },
        {
          isImage: true,
          imageSrc: BlogInnerImage,
          alt: "blog-inner-image",
        },
        {
          title: "4. Personalized User Experiences",
          desc: "By analyzing behavior and preferences, AI tailors interfaces and features. This improves satisfaction and encourages retention.",
        },
        {
          title: "5. Automated Workflows",
          desc: "Automating tasks like software updates and license management with AI reduces manual efforts and minimizes errors.",
        },
      ],

      keyTakeaways: [
        "Start with chatbot, workflow automation, and basic analytics.",
        "Gradually scale AI adoption as the business matures.",
        "Identify the right AI use cases to solve pressing needs.",
        "Integrate AI into workflows and processes seamlessly.",
        "Get creative — leverage partnerships and talent from outside.",
      ],
    },
  },
];
export const categories = [
  { name: "Business & Marketing", count: 18, href: "/blog-details" },
  { name: "Technology", count: 5, href: "/blog-details" },
  { name: "Art & Beauty", count: 23, href: "/blog-details" },
  { name: "Digital Agency", count: 10, href: "/blog-details" },
];

export const recentPosts = [
  {
    id: 1,
    title: "6 profitable AI tech businesses to start",
    image: RecentBlogOne,
    href: "/blog-details",
    date: "June 12, 2024",
  },
  {
    id: 2,
    title: "Why i decided to sell my B2B SaaS AI business",
    image: RecentBlogTwo,
    href: "/blog-details",
    date: "June 13, 2024",
  },
  {
    id: 3,
    title: "8 AI tools that will your streamline workflows",
    image: RecentBlogThree,
    href: "/blog-details",
    date: "June 7, 2024",
  },
];
export const tags = ["Article", "Business", "Digital", "Technology", "UI/UX"];
export const faqsData = [
  {
    question: "What is Artificial Intelligence (AI)?",
    answer:
      "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
  },
  {
    question: "What are the different types of AI?",
    answer:
      "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
  },
  {
    question: "What are some practical applications of AI?",
    answer:
      "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
  },
  {
    question: "What is the difference between AI and machine learning?",
    answer:
      "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
  },
  {
    question: "How can businesses use AI for competitive advantage?",
    answer:
      "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
  },
  {
    question: "Can AI replace humans in the workforce?",
    answer:
      "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
  },
  {
    question: "Is AI safe?",
    answer:
      "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
  },
  {
    question: "What is the future of AI?",
    answer:
      "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
  },
];
export const faqData2 = {
  "general-questions": [
    {
      question: "What is Artificial Intelligence (AI)?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What are the different types of AI?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What are some practical applications of AI?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What is the difference between AI and machine learning?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "How can businesses use AI for competitive advantage?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "Can AI replace humans in the workforce?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "Is AI safe?",
      answer:
        "AI safety depends on how it's designed and regulated. Ethical AI practices are essential to prevent misuse.",
    },
    {
      question: "What is the future of AI?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
  ],
  "about-the-company": [
    {
      question: "How can businesses AI for competitive advantage?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "Can AI replace humans in the workforce?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "Is AI safe?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What is the future of AI?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What is Artificial Intelligence (AI)?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What are the different types of AI?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What are some practical applications of AI?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What is the difference between AI and machine learning?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
  ],
  "about-artificial-intelligence": [
    {
      question: "What is Artificial Intelligence (AI)?",
      answer:
        "AI powers virtual assistants, recommendation systems, smart home devices, and much more in everyday life.",
    },
    {
      question: "What are the different types of AI?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What is the difference between AI and machine learning?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "How can businesses AI for competitive advantage?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "Can AI replace humans in the workforce?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "Is AI safe?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
    {
      question: "What is the future of AI?",
      answer:
        "AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
    },
  ],
  "about-the-team": [
    {
      question: "How can businesses AI for competitive advantage?",
      answer:
        "Our team includes AI researchers, full-stack developers, UX designers, and business strategists with years of industry experience.",
    },
    {
      question: "Can AI replace humans in the workforce?",
      answer:
        "Our team holds degrees in Computer Science, Data Science, and AI, and have worked on high-impact projects across the globe.",
    },
    {
      question: "Is AI safe?",
      answer:
        "You can reach out to us via our contact form, and the relevant team member will follow up shortly.",
    },
    {
      question: "What is the future of AI?",
      answer:
        "Yes, our team operates in a remote-first model, allowing us to collaborate across different time zones and countries.",
    },
    {
      question: "What is Artificial Intelligence (AI)?",
      answer:
        "Yes, our team operates in a remote-first model, allowing us to collaborate across different time zones and countries.",
    },
    {
      question: "What are the different types of AI?",
      answer:
        "Yes, our team operates in a remote-first model, allowing us to collaborate across different time zones and countries.",
    },
    {
      question: "What are some practical applications of AI?",
      answer:
        "Yes, our team operates in a remote-first model, allowing us to collaborate across different time zones and countries.",
    },
    {
      question: "What is the future of AI?",
      answer: "What is the difference between AI and machine learning?",
    },
  ],
};
export const monthlyPlans = [
  {
    title: "Beginner",
    members: "Up to 10 members",
    price: 25,
    period: "month",
    description:
      "This is an excellent option for people & small businesses who are starting out.",
  },
  {
    title: "Starter",
    members: "Up to 50 members",
    price: 89,
    period: "month",
    description:
      "This plan is suitable for e-commerce stores as well as professional blogs.",
  },
  {
    title: "Pro",
    members: "Up to 100 members",
    price: 199,
    period: "month",
    description:
      "Ideal for handling complicated projects, enterprise-level projects, and websites.",
  },
];

export const annuallyPlans = [
  {
    title: "Beginner",
    members: "Up to 10 members",
    price: 240,
    period: "year",
    description:
      "This is an excellent option for people & small businesses who are starting out.",
  },
  {
    title: "Starter",
    members: "Up to 50 members",
    price: 960,
    period: "year",
    description:
      "This plan is suitable for e-commerce stores as well as professional blogs.",
  },
  {
    title: "Pro",
    members: "Up to 100 members",
    price: 1800,
    period: "year",
    description:
      "Ideal for handling complicated projects enterprise-level projects, and websites.",
  },
];
export const PricingmonthlyPlans = [
  {
    title: "Free",
    members: "1 member",
    price: 0,
    period: "per month",
    description:
      "Ideal for individuals person and small businesses just getting started.",
    features: ["AI-Ready Data Prep", "Feature Engineering"],
  },
  {
    title: "Beginner",
    members: "Up to 10 members",
    price: 25,
    period: "per month",
    description:
      "This is an excellent option for people & small businesses who are starting out.",
    features: [
      "AI-Ready Data Prep",
      "Feature Engineering",
      "Classification Models",
      "Regression Models",
    ],
  },
  {
    title: "Starter",
    members: "Up to 50 members",
    price: 89,
    period: "per month",
    description:
      "This plan is suitable for e-commerce stores as well as professional blogs.",
    features: [
      "AI-Ready Data Prep",
      "Feature Engineering",
      "Classification Models",
      "Regression Models",
      "Time Series Models",
    ],
  },
  {
    title: "Pro",
    members: "Up to 100 members",
    price: 199,
    period: "per month",
    description:
      "Ideal for handling complicated projects, enterprise-level projects, and websites.",
    features: [
      "AI-Ready Data Prep",
      "Feature Engineering",
      "Classification Models",
      "Regression Models",
      "Time Series Models",
      "Clustering models",
    ],
  },
];

export const PricingannuallyPlans = [
  {
    title: "Free",
    members: "1 member",
    price: 0,
    period: "Annual",
    description:
      "Ideal for individuals person and small businesses just getting started.",
    features: [
      "AI-Ready Data Prep",
      "Feature Engineering",
      "Classification Models",
    ],
  },
  {
    title: "Beginner",
    members: "Up to 10 members",
    price: 240,
    period: "Annual",
    description:
      "This is an excellent option for people & small businesses who are starting out.",
    features: [
      "AI-Ready Data Prep",
      "Feature Engineering",
      "Classification Models",
      "Regression Models",
    ],
  },
  {
    title: "Starter",
    members: "Up to 50 members",
    price: 960,
    period: "Annual",
    description:
      "This plan is suitable for e-commerce stores as well as professional blogs.",
    features: [
      "AI-Ready Data Prep",
      "Feature Engineering",
      "Classification Models",
      "Regression Models",
      "Time Series Models",
    ],
  },
  {
    title: "Pro",
    members: "Up to 100 members",
    price: 1800,
    period: "Annual",
    description:
      "Ideal for handling complicated projects enterprise-level projects, and websites.",
    features: [
      "AI-Ready Data Prep",
      "Feature Engineering",
      "Classification Models",
      "Regression Models",
      "Time Series Models",
      "Clustering models",
    ],
  },
];

export const portfolioItems = [
  {
    id: "nlp-model",
    img: PortfolioImage1,
    title: "Natural language processing models",
    client: "XYZ Company",
    services: "Web Design",
    duration: "2 Weeks",
    website: "https://example.com/nlp-model",
    overviewTitle: "Machine Learning and Predictive Analytics:",
    overviewPoints: [
      "Demand Forecasting: AI SaaS helps businesses predict demand for products and services, optimizing inventory management and supply chain operations.",
      "Customer Churn Prediction: It's used to identify customers at risk of leaving a service or product, allowing proactive retention efforts.",
    ],
    resultTitle: "Natural Language Processing (NLP):",
    resultPoints: [
      "Text Analysis: AI SaaS can be used to analyze text data for sentiment analysis, entity recognition, language translation, and text summarization.",
      "Chatbots and Virtual Assistants: Businesses use AI SaaS to build chatbots and virtual assistants for customer support, improving response times and efficiency.",
    ],
    img1: PorfolioDetails1Image,
    img2: PorfolioDetails2Image,
  },
  {
    id: "ai-edu-platform",
    img: PortfolioImage2,
    title: "Create a modern AI-powered educational platform",
    client: "Smart Learn",
    services: "AI Integration, Platform Development",
    duration: "1 Month",
    website: "https://example.com/edu-platform",
    overviewTitle: "Overview",
    overviewPoints: [
      "Developed personalized learning experience using GPT-based AI.",
      "Added real-time quiz and evaluation system with ML analytics.",
    ],
    resultTitle: "Results",
    resultPoints: [
      "Student engagement increased by 60%.",
      "Reduced drop-out rate by 30% in pilot schools.",
    ],
    img1: PorfolioDetails1Image,
    img2: PorfolioDetails2Image,
  },
  {
    id: "ai-content-gen",
    img: PortfolioImage3,
    title: "Develop a content generation system that uses AI system",
    client: "ContentGen AI",
    services: "Custom AI System",
    duration: "3 Weeks",
    website: "https://example.com/content-ai",
    overviewTitle: "Overview",
    overviewPoints: [
      "Integrated OpenAI API for dynamic content creation.",
      "Built UI for clients to customize tone, length, and target audience.",
    ],
    resultTitle: "Results",
    resultPoints: [
      "Generated 10x more content in half the time.",
      "Client engagement increased by 50%.",
    ],
    img1: PorfolioDetails1Image,
    img2: PorfolioDetails2Image,
  },
  {
    id: "predictive-maintenance",
    img: PortfolioImage4,
    title: "Implement a predictive maintenance system with AI",
    client: "MechaTech",
    services: "AI + IoT",
    duration: "5 Weeks",
    website: "https://example.com/predictive-ai",
    overviewTitle: "Overview",
    overviewPoints: [
      "Used sensor data to train models for equipment failure prediction.",
      "Integrated dashboards for real-time alerts and reports.",
    ],
    resultTitle: "Results",
    resultPoints: [
      "Reduced machine downtime by 40%.",
      "Saved approx $200K/year in maintenance costs.",
    ],
    img1: PorfolioDetails1Image,
    img2: PorfolioDetails2Image,
  },
  {
    id: "precision-agriculture",
    img: PortfolioImage5,
    title: "Build an AI solution for precision agriculture",
    client: "AgroAI",
    services: "AI for Agriculture",
    duration: "6 Weeks",
    website: "https://example.com/agro-ai",
    overviewTitle: "Overview",
    overviewPoints: [
      "Developed AI model for crop disease detection using drone imagery.",
      "Built dashboard for farmers to monitor field health.",
    ],
    resultTitle: "Results",
    resultPoints: [
      "Increased crop yield by 20%.",
      "Early disease detection reduced losses by 35%.",
    ],
    img1: PorfolioDetails1Image,
    img2: PorfolioDetails2Image,
  },
  {
    id: "ai-enterprise",
    img: PortfolioImage6,
    title: "AI for large corporations and businesses across industries",
    client: "GlobalTech Enterprises",
    services: "Enterprise AI Solutions",
    duration: "2 Months",
    website: "https://example.com/enterprise-ai",
    overviewTitle: "Overview",
    overviewPoints: [
      "Developed scalable AI systems for enterprise automation.",
      "Included document analysis, smart assistants, and data prediction models.",
    ],
    resultTitle: "Results",
    resultPoints: [
      "Automated 50% of manual processes.",
      "Improved operational efficiency by 45%.",
    ],
    img1: PorfolioDetails1Image,
    img2: PorfolioDetails2Image,
  },
];

//animation

// fadeUpVariant.js
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};
