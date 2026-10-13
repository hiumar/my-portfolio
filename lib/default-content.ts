import type { PortfolioContent } from './content-schema';
export const defaultContent:PortfolioContent = {
  "skills": [
    {
      "name": "C#",
      "group": "Backend"
    },
    {
      "name": "ASP.NET MVC 5",
      "group": "Backend"
    },
    {
      "name": ".NET Core / .NET 5\u20138",
      "group": "Backend"
    },
    {
      "name": "Web API / REST",
      "group": "Backend"
    },
    {
      "name": "SOAP / WCF",
      "group": "Backend"
    },
    {
      "name": "Entity Framework",
      "group": "Backend"
    },
    {
      "name": "ADO.NET / Dapper",
      "group": "Backend"
    },
    {
      "name": "Microservices",
      "group": "Backend"
    },
    {
      "name": "Clean & layered architecture",
      "group": "Backend"
    },
    {
      "name": "JWT / Identity Server",
      "group": "Backend"
    },
    {
      "name": "Unit of Work",
      "group": "Backend"
    },
    {
      "name": "Fluent Validation",
      "group": "Backend"
    },
    {
      "name": "Ocelot API Gateway",
      "group": "Backend"
    },
    {
      "name": "SignalR",
      "group": "Backend"
    },
    {
      "name": "SOLID / design patterns",
      "group": "Backend"
    },
    {
      "name": "HTML5 / CSS3",
      "group": "Frontend"
    },
    {
      "name": "JavaScript / jQuery",
      "group": "Frontend"
    },
    {
      "name": "TypeScript",
      "group": "Frontend"
    },
    {
      "name": "React / Next.js",
      "group": "Frontend"
    },
    {
      "name": "Angular",
      "group": "Frontend"
    },
    {
      "name": "Blazor",
      "group": "Frontend"
    },
    {
      "name": "Redux",
      "group": "Frontend"
    },
    {
      "name": "Tailwind CSS",
      "group": "Frontend"
    },
    {
      "name": "Bootstrap",
      "group": "Frontend"
    },
    {
      "name": "Kendo UI",
      "group": "Frontend"
    },
    {
      "name": "SQL Server",
      "group": "Databases"
    },
    {
      "name": "Oracle",
      "group": "Databases"
    },
    {
      "name": "PostgreSQL",
      "group": "Databases"
    },
    {
      "name": "MariaDB",
      "group": "Databases"
    },
    {
      "name": "MongoDB",
      "group": "Databases"
    },
    {
      "name": "Stored procedures",
      "group": "Databases"
    },
    {
      "name": "Query optimization",
      "group": "Databases"
    },
    {
      "name": "Azure",
      "group": "Cloud & tools"
    },
    {
      "name": "Azure DevOps / CI/CD",
      "group": "Cloud & tools"
    },
    {
      "name": "Azure Service Bus",
      "group": "Cloud & tools"
    },
    {
      "name": "Azure Logic Apps",
      "group": "Cloud & tools"
    },
    {
      "name": "Docker",
      "group": "Cloud & tools"
    },
    {
      "name": "Redis",
      "group": "Cloud & tools"
    },
    {
      "name": "RabbitMQ",
      "group": "Cloud & tools"
    },
    {
      "name": "Git / TFS",
      "group": "Cloud & tools"
    },
    {
      "name": "Postman / Swagger",
      "group": "Cloud & tools"
    },
    {
      "name": "Fiddler",
      "group": "Cloud & tools"
    },
    {
      "name": "SSRS",
      "group": "Cloud & tools"
    },
    {
      "name": "MySQL Workbench",
      "group": "Cloud & tools"
    },
    {
      "name": "Python",
      "group": "AI & automation"
    },
    {
      "name": "Agentic AI",
      "group": "AI & automation"
    }
  ],
  "projects": [
    {
      "title": "DLD tax & property systems",
      "type": "GOVERNMENT \u00b7 REAL ESTATE",
      "tags": [
        ".NET 8",
        "Oracle 19",
        "ASP.NET"
      ],
      "kind": "dashboard",
      "description": "Tax calculation for off-plan and on-plan projects, RT support, and long-standing data anomaly resolution.",
      "details": "At Dubai Land Department, I led work on the tax calculation module for off-plan and on-plan projects and provided RT support. I migrated the application from ASP.NET to .NET 8 and the database from Oracle 11 to Oracle 19. My work spans Tabu, RT, and root cause analysis, addressing historical data anomalies through targeted data corrections and code fixes. I also translate Figma designs into responsive interfaces and collaborate on SPA performance improvements."
    },
    {
      "title": "Daman insurance finance",
      "type": "HEALTH INSURANCE \u00b7 FINANCE",
      "tags": [
        ".NET 8",
        "Blazor",
        "Figma"
      ],
      "kind": "dashboard",
      "description": "A finance module for Daman\u2019s new health insurance system, with responsive interfaces and faster financial workflows.",
      "details": "At Daman \u2013 National Health Insurance Company, I directed development of the finance module using .NET 8 and Blazor. I worked with business analysts and UX designers to convert Figma designs into responsive interfaces, and partnered with database specialists to improve SPA loading performance and financial transaction workflows."
    },
    {
      "title": "MOHRE service workflows",
      "type": "GOVERNMENT \u00b7 DIGITAL SERVICES",
      "tags": [
        "Dapper",
        "Unit of Work",
        "Fluent Validation"
      ],
      "kind": "portal",
      "description": "Complaint categories and visa cancellation workflows supporting more reliable, efficient public services.",
      "details": "At the Ministry of Human Resources and Emiratization, I enhanced Domestic Agency, Freezone, and Violation complaint categories, plus Visa Cancellation Tickets. I integrated Dapper, Unit of Work, and Fluent Validation, optimized queries and stored procedures, and created three additional complaint categories to support fines collection and expand service coverage."
    },
    {
      "title": "Commerce & supplier platforms",
      "type": "E-COMMERCE \u00b7 MICROSERVICES",
      "tags": [
        "Microservices",
        "Ocelot",
        "Azure"
      ],
      "kind": "dashboard",
      "description": "E-commerce services, supplier management, and NopCommerce storefront development.",
      "details": "At Nityo InfoTech, I developed e-commerce services using a microservices architecture, Ocelot, Azure Service Bus, and Identity Server, alongside a supplier management application built with .NET Core 3.1 and ADO.NET. I also worked on Azure deployment. Earlier at Geeks Valley, I contributed to a NopCommerce store and ASP.NET MVC applications, improving page speed and cross-device responsiveness."
    },
    {
      "title": "CRM & banking integrations",
      "type": "CRM \u00b7 FINTECH",
      "tags": [
        "Dynamics 365",
        "REST / SOAP",
        "RabbitMQ"
      ],
      "kind": "agent",
      "description": "Sales CRM for Dubai World Trade Center and financial integrations for trading and banking systems.",
      "details": "At Development Systems Limited, I led a Dynamics 365 Sales CRM project for Dubai World Trade Center, built REST services and CRM plugins, and collaborated on code integration and virtual machine deployments. I integrated SOAP APIs with Pakistan State Bank for a trading portal and applied layered architecture and ADO.NET to the VLR PNC Bank project."
    },
    {
      "title": "EMR & patient appointments",
      "type": "HEALTHCARE \u00b7 CLINICAL SYSTEMS",
      "tags": [
        "ASP.NET",
        "Patient APIs",
        "EMR"
      ],
      "kind": "portal",
      "description": "An EMR web portal, patient APIs, and appointment modules supported by hospital training and integration work.",
      "details": "At Techmedo, I improved the EMR portal experience and managed development and integration work. I designed patient-related APIs and appointment modules using .NET technologies. I also visited hospitals, ran daily coordination meetings, and delivered training for more than 50 hospital staff to support adoption."
    },
    {
      "title": "AI Data Analysis Agent",
      "type": "AGENTIC AI \u00b7 DATA ANALYSIS",
      "tags": [
        "Agentic AI",
        "Data analysis"
      ],
      "kind": "ai",
      "description": "My first AI data analysis agent, bringing agent-based AI into the process of exploring and understanding data.",
      "details": "I developed an AI Data Analysis Agent as my first project in AI-powered data analysis. This project extends my full stack development experience into building agents that support data exploration and understanding.",
      "steps": [
        "Data",
        "Analysis",
        "Insights"
      ]
    },
    {
      "title": "YouTube Transcript Q&A Agent",
      "type": "AGENTIC AI \u00b7 KNOWLEDGE TOOLS",
      "tags": [
        "Agentic AI",
        "Transcripts",
        "Q&A"
      ],
      "kind": "ai",
      "description": "An AI agent for asking questions about YouTube video transcripts and exploring their content through Q&A.",
      "details": "I developed a YouTube Video Transcript Q&A Agent that uses video transcript content for question answering. The project applies conversational AI to help users explore information within a video transcript.",
      "steps": [
        "Transcript",
        "Questions",
        "Answers"
      ]
    },
    {
      "title": "AI Nutrition Coach",
      "type": "AGENTIC AI \u00b7 WELLNESS",
      "tags": [
        "Agentic AI",
        "Nutrition",
        "Coaching"
      ],
      "kind": "ai",
      "description": "An AI nutrition coaching project that brings conversational AI into the everyday wellness domain.",
      "details": "I developed an AI Nutrition Coach, applying AI to a nutrition-focused coaching experience. This project expands my work into conversational tools for everyday wellness.",
      "steps": [
        "Nutrition",
        "Conversation",
        "Coaching"
      ]
    },
    {
      "title": "NopCommerce B2B & B2C E-commerce",
      "type": "E-COMMERCE \u00b7 B2B & B2C",
      "tags": [
        "NopCommerce",
        "ASP.NET",
        "C#"
      ],
      "kind": "portal",
      "description": "A NopCommerce-based e-commerce project serving both business customers (B2B) and individual consumers (B2C).",
      "details": "I developed a B2B and B2C e-commerce project using NopCommerce. The project brings business-to-business and business-to-consumer commerce into my enterprise web development portfolio."
    }
  ],
  "experience": [
    [
      "Feb 2025 \u2013 Present",
      "Sr. .NET Full Stack Developer",
      "Dubai Land Department \u00b7 Dubai",
      "Tax calculation, Tabu off-plan and on-plan systems, RT support, historical data correction, and .NET 8 / Oracle migration."
    ],
    [
      "Sep 2024 \u2013 Feb 2025",
      "Sr. .NET Full Stack Developer",
      "Daman \u2013 National Health Insurance Company \u00b7 Abu Dhabi",
      "Finance module development with .NET 8 and Blazor, responsive Figma implementation, and SPA performance optimization."
    ],
    [
      "Sep 2023 \u2013 Sep 2024",
      ".NET Full Stack Developer",
      "Ministry of Human Resources and Emiratization \u00b7 Dubai",
      "Complaint management and visa cancellation modules, data validation, query optimization, and new complaint categories."
    ],
    [
      "Apr 2023 \u2013 Aug 2023",
      "Software Engineer",
      "Nityo InfoTech \u00b7 Remote, Dubai",
      "E-commerce microservices, supplier management, API gateway integration, identity services, and Azure deployment."
    ],
    [
      "Jan 2022 \u2013 Apr 2023",
      ".NET Full Stack Developer",
      "Development Systems Limited",
      "Dynamics 365 Sales CRM, CRM plugins, REST and SOAP integrations, and banking application development."
    ],
    [
      "Jan 2020 \u2013 Jan 2022",
      ".NET Full Stack Developer",
      "Techmedo",
      "EMR development and integration, patient appointment APIs, hospital coordination, and staff training."
    ],
    [
      "Jan 2018 \u2013 Jan 2020",
      "Associate Software Engineer",
      "Geeks Valley",
      "ASP.NET MVC and NopCommerce development, page speed optimization, and responsive web interfaces."
    ],
    [
      "Jan 2016 \u2013 Dec 2017",
      "Intern",
      "Pakistan Telecommunication Company Limited",
      "Attendance portal and IVR application support, digitized attendance workflows, and automated employee shift rosters."
    ]
  ],
  "name": "Umar Faraz",
  "role": "ASP.NET Full Stack Developer",
  "email": "umarfaraz005@gmail.com",
  "linkedin": "https://www.linkedin.com/in/umar-dotnetdeveloper/",
  "location": "Dubai, UAE",
  "introduction": "I\u2019m Umar Faraz, a .NET full stack developer with 8+ years of experience building enterprise applications for government, healthcare, and fintech \u2014 alongside AI agents for data analysis, video Q&A, and nutrition coaching.",
  "about": "I design and develop enterprise web applications and services with C#, ASP.NET, and Azure. My work connects reliable backend systems with responsive interfaces built using React, Next.js, TypeScript, Angular, and Blazor.",
  "domains": "My experience spans government property and public-service platforms, health insurance finance, healthcare EMR and appointments, e-commerce, Dynamics 365 CRM, and banking integrations. I focus on API integration, data integrity, application modernization, and performance \u2014 building with Python and agentic AI. I\u2019ve also developed an AI Data Analysis Agent, a YouTube Transcript Q&A Agent, and an AI Nutrition Coach.",
  "approach": "Agile delivery \u00b7 Test-driven development \u00b7 Team leadership \u00b7 Project management \u00b7 Customer focus \u00b7 Technical documentation \u00b7 SDLC \u00b7 Performance optimization"
};
