import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Error constants
const ERROR_MESSAGES = {
  MISSING_API_KEY: "Google API key is not configured",
  MISSING_MESSAGE: "Message is required",
  INVALID_JSON: "Invalid JSON format in request",
  INITIALIZATION_ERROR: "Failed to initialize AI model",
  CHAT_ERROR: "Failed to process chat request",
  NETWORK_ERROR: "Network error occurred",
  RATE_LIMIT: "API rate limit exceeded",
  SERVER_ERROR: "Internal server error",
  INVALID_RESPONSE: "Invalid response from AI model",
};

// Initialize Gemini API with error handling
function initializeGenAI() {
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    throw new Error(ERROR_MESSAGES.MISSING_API_KEY);
  }

  try {
    return new GoogleGenerativeAI(apiKey);
  } catch (error) {
    console.error("Initialization error:", error);
    throw new Error(ERROR_MESSAGES.INITIALIZATION_ERROR);
  }
}

// Define personal data
const personalData = {
  basic: {
    name: "Sarthak Gaikwad",
    occupation: "Full Stack Developer",
    location: "India",
    email: "gaikwadrajaram03@gmail.com",
    bio: "Full Stack Developer proficient in Next.js, React, Node.js, Express, MongoDB, and other technologies to develop scalable, efficient, and user-focused web applications.",
    hobbies: ["Chess", "Badminton", "Cricket", "Listening to Music"],
  },
  education: [
    {
      degree:
        "Bachelor of Technology in Artificial Intelligence and Data Science",
      school: "Vishwakarma Institute of Technology (VIT)",
      year: "2021–2025",
      achievements: "CGPA of 8.78/10, Expected graduation in July 2025",
    },
  ],
  experience: [
    {
      position: "Full Stack Developer",
      company: "Vishwakarma Institute of Technology",
      duration: "2021-Present",
      description:
        "Proficient in using Next.js, React, Node.js, Express, and MongoDB to develop scalable, efficient, and user-focused web applications with seamless front-end and back-end integration.",
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      achievements: [
        "Developed multiple full-stack applications with responsive design",
        "Implemented RESTful APIs and database integration",
        "Contributed to the institute's web infrastructure",
      ],
    },
  ],
  skills: {
    frontend: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    backend: ["Node.js", "Express", "MongoDB", "SQL", "FastAPI"],
    programming: ["JavaScript", "Python", "Java"],
    tools: ["Git", "GitHub", "VS Code", "MongoDB Atlas"],
  },
  projects: [
    {
      title: "Get-me-a-chai",
      description:
        "Crowdfunding platform for developers built with Next.js, React, MongoDB, and Node.js.",
      imageSrc: "/projects/image2.png",
      tech: ["Next.js", "MongoDB", "Node.js", "React"],
      github: "https://github.com/Sarthak5290/get-me-a-chai",
      link: "https://get-me-a-chai-murex.vercel.app/",
      category: "fullstack",
      features: [
        "Secure payment integration",
        "User authentication",
        "Project showcase and funding tracking",
      ],
    },
    {
      title: "ThermaCloud9",
      description:
        "A freelance project for a client in the field of Engineering. A website for their business.",
      imageSrc: "/projects/image1.png",
      github: "https://github.com/Sarthak5290/thermacloud9",
      link: "https://thermacloud9.com/",
      tech: ["React", "Node.js", "MongoDB"],
      category: "fullstack",
      clientType: "Engineering business",
    },
    {
      title: "Bitlinks",
      description:
        "Easy-to-use URL shortener with React, Node.js, and MongoDB.",
      imageSrc: "/projects/image3.png",
      link: "https://new-bitlinks.netlify.app/",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Sarthak5290/bitlinks",
      category: "frontend",
      features: ["URL shortening", "Analytics tracking", "User dashboard"],
    },
    {
      title: "Mess-Menu",
      description:
        "A streamlined application for managing and editing menus effortlessly.",
      imageSrc: "/projects/image5.png",
      tech: ["React", "Node.js", "MongoDB"],
      category: "frontend",
      github: "https://github.com/Sarthak5290/Mess-Menu",
      features: [
        "Menu editing interface",
        "Category management",
        "User-friendly admin panel",
      ],
    },
    {
      title: "Currency-Converter",
      description:
        "Real-time currency converter with React frontend, Node.js backend, and Tailwind CSS for styling.",
      imageSrc: "/projects/image4.png",
      tech: ["React", "Node.js", "Tailwind CSS"],
      category: "frontend",
      github: "https://github.com/Sarthak5290/currency-converter",
      features: [
        "Real-time conversion rates",
        "Multiple currency support",
        "Conversion history",
      ],
    },
  ],
  socialLinks: [
    {
      icon: "<FaGithub size={24} />",
      url: "https://github.com/sarthak5290",
      label: "GitHub",
    },
    {
      icon: "<FaLinkedin size={24} />",
      url: "https://www.linkedin.com/in/sarthak-gaikwad-848288529029082003",
      label: "LinkedIn",
    },
    {
      icon: "<FaTwitter size={24} />",
      url: "https://twitter.com/Sarthak27400371",
      label: "Twitter",
    },
  ],
  resumeLink: "https://drive.google.com/file/d/your-resume-link/view",
  availability: {
    freelance: true,
    fullTime: "Available after graduation (July 2025)",
    preferredRoles: [
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
    ],
  },
  languages: [
    { name: "English", proficiency: "Professional" },
    { name: "Hindi", proficiency: "Native" },
    { name: "Marathi", proficiency: "Native" },
  ],
};

// Context prompt
const contextPrompt = `
You are an AI assistant representing ${personalData.basic.name}, a ${
  personalData.basic.occupation
} from ${personalData.basic.location}. You must respond as if you are ${
  personalData.basic.name
}'s professional representative.

## AVAILABLE INFORMATION
${JSON.stringify(personalData, null, 2)}

## RESPONSE FRAMEWORK
1. Technical Skills Questions
   - When asked about skills, mention specific technologies grouped by category (frontend, backend, etc.)
   - Example Q: "What technologies do you work with?"
   - Example A: "I primarily work with React and Next.js for frontend development, Node.js and Express for backend, and MongoDB for databases. I'm also proficient in JavaScript, Python, and Java."

2. Project Questions
   - Provide specific details including technologies, features, and links
   - Example Q: "Tell me about your projects"
   - Example A: "My portfolio includes several key projects: 'Get-me-a-chai' (a crowdfunding platform built with Next.js), 'ThermaCloud9' (a freelance project for an engineering client), 'Bitlinks' (a URL shortener), and more. Each project showcases different technical skills and is available on my GitHub."

3. Education Questions
   - Be specific about degree, timeline, and achievements
   - Example Q: "What's your educational background?"
   - Example A: "I'm pursuing a Bachelor of Technology in Artificial Intelligence and Data Science at Vishwakarma Institute of Technology (VIT), expecting to graduate in July 2025 with a current CGPA of 8.78/10."

4. Experience Questions
   - Highlight role, company, duration, and key technologies
   - Example Q: "What's your work experience?"
   - Example A: "I've been working as a Full Stack Developer at Vishwakarma Institute of Technology since 2021, developing web applications using Next.js, React, Node.js, Express, and MongoDB."

## HANDLING LIMITATIONS
- If asked about information not in the data, respond with: "I don't have that specific information in my profile. I can tell you about my education, work experience, skills, or projects instead."
- If asked about personal opinions or subjective matters, respond with: "As Sarthak's professional representative, I can only provide factual information about his background and work. For personal opinions, it would be best to contact him directly."

## PRIORITIZATION
1. Always prioritize ACCURACY over comprehensiveness
2. If multiple interpretations are possible, clarify before answering
3. When discussing skills, emphasize those with practical project experience
4. Keep responses concise and focused on the specific question

Remember: You represent ${
  personalData.basic.name
} professionally. Be helpful, accurate, and respectful.
`;

export async function POST(req) {
  try {
    // Parse request body with error handling
    let body;
    try {
      body = await req.json();
    } catch (error) {
      console.error("JSON parsing error:", error);
      return NextResponse.json(
        { error: ERROR_MESSAGES.INVALID_JSON },
        { status: 400 }
      );
    }

    // Validate message
    const { message } = body;
    if (!message || typeof message !== "string" || message.trim() === "") {
      return NextResponse.json(
        { error: ERROR_MESSAGES.MISSING_MESSAGE },
        { status: 400 }
      );
    }

    // Initialize Gemini API
    let genAI;
    try {
      genAI = initializeGenAI();
    } catch (error) {
      console.error("Failed to initialize GenAI:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Get model with error handling
    let model;
    try {
      model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash-001",
      });
    } catch (error) {
      console.error("Model initialization error:", error);

      // Check for specific error types
      if (error.message?.includes("rate limit")) {
        return NextResponse.json(
          { error: ERROR_MESSAGES.RATE_LIMIT },
          { status: 429 }
        );
      }

      return NextResponse.json(
        { error: ERROR_MESSAGES.INITIALIZATION_ERROR },
        { status: 500 }
      );
    }

    // Start chat with error handling
    let chat;
    try {
      chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: "Initialize with Sarthak Gaikwad's profile" }],
          },
          {
            role: "model",
            parts: [
              {
                text: "I'm initialized as Sarthak Gaikwad's professional AI representative. How can I help you learn about his skills, experience, education, or projects?",
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.2,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 1024,
        },
      });
    } catch (error) {
      console.error("Chat initialization error:", error);
      return NextResponse.json(
        { error: ERROR_MESSAGES.CHAT_ERROR },
        { status: 500 }
      );
    }

    // Format and send the user question
    const formatted = `
${contextPrompt}

User Question: ${message}

Please provide a helpful, accurate response based ONLY on the information in my profile.
`;

    // Send message with timeout
    let result;
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      result = await chat.sendMessage(formatted);
      clearTimeout(timeoutId);
    } catch (error) {
      console.error("Message sending error:", error);

      if (error.name === "AbortError") {
        return NextResponse.json(
          { error: "Request timed out" },
          { status: 504 }
        );
      }

      return NextResponse.json(
        { error: ERROR_MESSAGES.CHAT_ERROR },
        { status: 500 }
      );
    }

    // Get response with error handling
    let response;
    try {
      response = await result.response;
      if (!response || !response.text) {
        throw new Error("Invalid response structure");
      }
    } catch (error) {
      console.error("Response processing error:", error);
      return NextResponse.json(
        { error: ERROR_MESSAGES.INVALID_RESPONSE },
        { status: 500 }
      );
    }

    // Extract and validate text
    let responseText;
    try {
      responseText = response.text();
      if (!responseText || typeof responseText !== "string") {
        throw new Error("Invalid response text");
      }
    } catch (error) {
      console.error("Text extraction error:", error);
      return NextResponse.json(
        { error: ERROR_MESSAGES.INVALID_RESPONSE },
        { status: 500 }
      );
    }

    // Return successful response
    return NextResponse.json({ reply: responseText });
  } catch (error) {
    // Global error handler
    console.error("Unexpected error:", error);

    // Check for specific error types
    if (error.message?.includes("network")) {
      return NextResponse.json(
        { error: ERROR_MESSAGES.NETWORK_ERROR },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        error: ERROR_MESSAGES.SERVER_ERROR,
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

// Add a GET handler for proper endpoint behavior
export async function GET() {
  return NextResponse.json(
    {
      message:
        "This is a POST endpoint. Send a message in the request body to chat.",
      version: "1.0.0",
    },
    { status: 200 }
  );
}
