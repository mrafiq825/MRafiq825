import type { BlogPost } from "./blog-types";

export interface AeoPostMetadata {
  quickAnswer: string;
  tldr: {
    build: string;
    technologies: string[];
    learnings: string[];
    readTime?: string;
  };
  faqs: { question: string; answer: string; }[];
  references: { title: string; url: string; }[];
  cta?: {
    title: string;
    description: string;
    linkText: string;
    linkUrl: string;
  };
  topicCluster?: string;
  lastUpdated?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const blogAeoData: Record<string, Partial<AeoPostMetadata>> = {
  "how-i-built-an-ai-resume-analyzer-nextjs-gemini": {
    topicCluster: "AI Development",
    lastUpdated: "June 28, 2026",
    githubUrl: "https://github.com/Rafiqdevhub/ai-resume-analyzer",
    demoUrl: "https://ai-resume-analyzer.rafiq.dev",
    quickAnswer: "An AI Resume Analyzer is a web application that evaluates candidate resumes against job descriptions using generative AI to produce ATS match scoring, structured skill summaries, and interview recommendation insights. In this case study, it is built as a Next.js serverless application leveraging pdf-parse for text extraction, Google Gemini 1.5 Pro with structured JSON schemas for analysis, and Tailwind CSS for responsive formatting.",
    tldr: {
      build: "A production-ready candidate resume parser and evaluation system with ATS scoring, skill matching, and recruiter insights.",
      technologies: ["Next.js 16", "React 19", "Google Gemini API", "FastAPI", "PostgreSQL", "Tailwind CSS"],
      learnings: [
        "How to parse text from unstructured PDFs without corrupting layout layouts.",
        "How to enforce 100% JSON compliant outputs from Google Gemini using structured schemas.",
        "How to build serverless API endpoints that process resume grading in under 2.5 seconds.",
        "How to construct recruiter-centric metrics such as alignment ratios and skill gap analyses."
      ],
      readTime: "8 min read"
    },
    references: [
      { title: "Next.js App Router Documentation", url: "https://nextjs.org/docs" },
      { title: "Google Gemini API Developer Portal", url: "https://ai.google.dev/gemini-api/docs" },
      { title: "FastAPI Production Guide", url: "https://fastapi.tiangolo.com/" },
      { title: "PostgreSQL Database Engine", url: "https://www.postgresql.org/" }
    ],
    faqs: [
      {
        question: "How does the AI Resume Analyzer parse unstructured PDF files?",
        answer: "The analyzer processes uploaded PDF documents using pdf-parse or PyMuPDF, extracting the raw text blocks based on visual coordinates. This text layout is then formatted into clean strings before being sent to the AI processing engine."
      },
      {
        question: "How do you guarantee that Gemini outputs valid JSON for application parsing?",
        answer: "We configure the Gemini 1.5 Pro model using the Google Generative AI SDK's generationConfig. By setting responseMimeType to 'application/json' and passing a strict responseSchema definition using the SDK's Type properties, we enforce 100% JSON compliance at the model level."
      },
      {
        question: "What is the typical processing latency of the AI parser?",
        answer: "Using Next.js Serverless routes optimized with edge configurations, the parsing, layout conversion, LLM analysis, and score compilation complete in under 2.5 seconds."
      },
      {
        question: "How is candidate matching calculated?",
        answer: "The candidate matching is calculated by matching candidate skills, experience levels, and certifications against a job description. Gemini calculates a weighted ATS match score based on mandatory and preferred keywords, project history relevance, and education credentials."
      },
      {
        question: "Can this system handle table layouts inside resume PDFs?",
        answer: "Yes, by moving to layout-aware PDF parsers like PyMuPDF, the text extraction maintains spatial coordinates, preventing table content from merging into illegible paragraphs before AI scanning."
      }
    ],
    cta: {
      title: "Ready to automate your hiring process?",
      description: "Explore the live demo or inspect the open-source code on GitHub to deploy your own instance of the AI Resume Analyzer.",
      linkText: "Launch Live Demo",
      linkUrl: "https://ai-resume-analyzer.rafiq.dev"
    }
  },
  "what-is-rag-and-how-does-it-work": {
    topicCluster: "AI Architecture",
    lastUpdated: "June 25, 2026",
    quickAnswer: "RAG (Retrieval-Augmented Generation) is an AI architecture that enhances Large Language Models (LLMs) by retrieving context from external verified document stores before generating a response. RAG splits documents into chunks, embeds them into high-dimensional vectors, indexes them in vector databases, performs semantic similarity searches on queries, and passes the matching context to the LLM to eliminate hallucinations and reference real-time or private information.",
    tldr: {
      build: "A Retrieval-Augmented Generation (RAG) orchestration pipeline for semantic query answering over custom document stores.",
      technologies: ["Python", "Sentence Transformers", "Pinecone Vector DB", "OpenAI API", "LangGraph"],
      learnings: [
        "Understand the difference between parametric and non-parametric memory in LLMs.",
        "Implement chunking strategies (e.g., recursive character splitter with overlap) for optimal context resolution.",
        "Compute vector embeddings and execute similarity searches using Pinecone indexes.",
        "Orchestrate LLM prompt contexts to prevent model hallucination and enforce strict truthfulness."
      ],
      readTime: "8 min read"
    },
    references: [
      { title: "Sentence Transformers on Hugging Face", url: "https://huggingface.co/sentence-transformers" },
      { title: "Pinecone Vector Database Guides", url: "https://docs.pinecone.io/" },
      { title: "OpenAI Platform Documentation", url: "https://platform.openai.com/" },
      { title: "LangGraph Agent Orchestration", url: "https://langchain-ai.github.io/langgraph/" }
    ],
    faqs: [
      {
        question: "What is Retrieval-Augmented Generation (RAG)?",
        answer: "RAG is an AI pattern that retrieves relevant, fact-based context from an external data source and appends it to the user's prompt before sending it to a Large Language Model. This ensures the output is grounded in official documentation rather than model parameters."
      },
      {
        question: "How does RAG solve LLM hallucinations?",
        answer: "By grounding the LLM's answers in specific retrieved document contexts. Instead of relying on its pre-trained knowledge base, the model is instructed to answer questions solely using the provided reference documents, reducing incorrect claims."
      },
      {
        question: "What is a vector database in a RAG pipeline?",
        answer: "A vector database indexes high-dimensional vector representations of text chunks (embeddings). It allows the system to run ultra-fast mathematical similarity calculations (such as Cosine Similarity) to find semantic matches for a user's query."
      },
      {
        question: "Why should we use chunking with overlapping text segments?",
        answer: "Chunking splits large documents into smaller pieces that fit within the model's context window. Overlapping (e.g. 100 characters) ensures that context spanning across split boundaries is not lost, maintaining coherence."
      },
      {
        question: "How do fine-tuning and RAG compare for custom knowledge integration?",
        answer: "Fine-tuning updates a model's internal weights to learn styles or domains, which is expensive and doesn't support easy dynamic updates. RAG queries live databases, allowing real-time edits, permission-based access, and direct sources citations without training."
      }
    ],
    cta: {
      title: "Build your own RAG Knowledge Base",
      description: "Dive into the repository to deploy a localized RAG system utilizing Pinecone and Claude for your company's internal documentation.",
      linkText: "Read Project Case Study",
      linkUrl: "/blog/creating-a-university-chatbot-using-rag-case"
    }
  },
  "building-intelligent-web-apps-gemini-react": {
    topicCluster: "Full Stack AI",
    lastUpdated: "June 20, 2026",
    quickAnswer: "Building intelligent React applications involves connecting frontend interfaces to generative AI models like Google Gemini 1.5 Pro via secure server endpoints. By utilizing server-sent events or readable streams, developers can deliver real-time, streaming textual updates to the client interface. This eliminates loading pauses and provides micro-animations, yielding perceived system response latencies as low as 120ms compared to 4.2 seconds for full blocking payloads.",
    tldr: {
      build: "A streaming conversational UI in React connected to a Next.js API endpoint proxying the Google Generative AI SDK.",
      technologies: ["React 19", "Next.js", "Google Generative AI SDK", "TypeScript", "Tailwind CSS"],
      learnings: [
        "Initialize models and load environmental keys strictly on the server to prevent exposure.",
        "Implement readable streams on the backend and read chunk responses on the React client.",
        "Manage streaming state transitions, loading indicators, and markdown formatting in React.",
        "Design polished user interfaces with responsive status indicators and text streaming animations."
      ],
      readTime: "5 min read"
    },
    references: [
      { title: "React 19 Hooks and Features Reference", url: "https://react.dev/reference/react" },
      { title: "Google Generative AI SDK on GitHub", url: "https://github.com/google/generative-ai-js" },
      { title: "Next.js API Routes Documentation", url: "https://nextjs.org/docs/app/building-your-application/routing/route-handlers" }
    ],
    faqs: [
      {
        question: "Why should we avoid calling the Gemini API directly from React client components?",
        answer: "Calling the API directly from the client exposes your secret GEMINI_API_KEY in the browser bundle, enabling malicious entities to hijack your credentials. All AI calls must be proxied through secure server-side routes."
      },
      {
        question: "How do you stream LLM completions to a React interface?",
        answer: "The server sets up a ReadableStream from the Gemini SDK generateContentStream. On the client, a fetch query resolves the reader body and reads chunks using a TextDecoder, updating the state in a while loop until the stream concludes."
      },
      {
        question: "What is the difference between perceived latency and absolute latency?",
        answer: "Absolute latency is the total time to compile a full answer (e.g. 4 seconds). Perceived latency is the time before the user sees the first token (e.g. 120ms with streaming). Stream configurations optimize perceived latency."
      },
      {
        question: "How do you format raw Markdown text from the stream safely in React?",
        answer: "Streaming chunks can be compiled into a markdown state and rendered using safe, optimized React markdown parsers like react-markdown or structured paragraph splits, ensuring code snippets utilize syntax highlights."
      },
      {
        question: "How do you handle connection drops during streaming?",
        answer: "We implement standard try-catch headers in the stream loop. If the reader errors out before concluding, we flag a connection warning, retain the parsed text, and expose a retry trigger."
      }
    ],
    cta: {
      title: "Explore AI Chatbot Integration",
      description: "Learn how the portfolio's integrated Gemini Assistant is built, and inspect its server-side routing logic.",
      linkText: "Inspect Portfolio Chatbot",
      linkUrl: "https://github.com/Rafiqdevhub/Personal-Portfolio"
    }
  },
  "the-prompt-is-the-new-programming-language": {
    topicCluster: "Prompt Engineering",
    lastUpdated: "July 18, 2026",
    quickAnswer: "Prompt engineering is the new programming language of the generative AI era. It is the skill of translating human ideas into clear, structured instructions (including roles, objectives, context, constraints, output structure, and quality standards) that AI models like Claude or Gemini can interpret and execute. Elevating prompt quality directly determines output quality, reducing generic assumptions and eliminating ambiguity.",
    tldr: {
      build: "A framework guide to prompt architecture, defining role behaviors, enforcing constraints, and prompt development.",
      technologies: ["Prompt Engineering", "LLMs", "Claude", "Gemini"],
      learnings: [
        "Define detailed role personas and specific objective success criteria.",
        "Provide contextual environment variables and enforce strict constraints.",
        "Specify output formats and set step-by-step thinking quality standards.",
        "Iterate and refine prompts based on output evaluations."
      ],
      readTime: "6 min read"
    },
    references: [
      { title: "Google Gemini Prompting Guide", url: "https://ai.google.dev/gemini-api/docs/prompting" },
      { title: "Anthropic Prompt Engineering Library", url: "https://docs.anthropic.com/en/docs/about-claude/use-cases/prompt-engineering" }
    ],
    faqs: [
      {
        question: "Why do simple prompts produce average or generic AI responses?",
        answer: "Simple prompts lack detailed goals, contexts, and constraints. Without these bounds, the AI must fill the gaps with general assumptions, leading to standard or average results."
      },
      {
        question: "What is the anatomy of a great prompt?",
        answer: "A great prompt defines the role, explains the objective, provides context, sets constraints, specifies the desired output format, and dictates quality standards like step-by-step reasoning."
      },
      {
        question: "How do you enforce code safety or prevent UI layout breaks using prompts?",
        answer: "By setting strict constraints in the prompt context (e.g., instructing the model never to break layouts, specify type-safety rules, return strict format wrappers, and self-review before output)."
      },
      {
        question: "What is the role of iteration in prompt engineering?",
        answer: "Iteration is the process of reviewing the model output, identifying gaps, and refining prompt specifications. It aligns human intent with AI interpretation over successive runs."
      }
    ],
    cta: {
      title: "Unlock the power of Agentic Workflows",
      description: "Ready to build systems that automate real work? Check out my guide on building autonomous AI agents.",
      linkText: "Read AI Agents Guide",
      linkUrl: "/blog/what-are-ai-agents"
    }
  }
};

// Generates high-quality fallback AEO data for posts not explicitly configured
export function getAeoEnrichedPost(post: BlogPost): BlogPost & AeoPostMetadata {
  const customAeo = blogAeoData[post.slug] || {};

  const quickAnswer = customAeo.quickAnswer || 
    `${post.title} is an engineering deep-dive on ${post.category}. ${post.excerpt} This guide details the core principles, architecture setups, practical implementations, and technical solutions for optimizing this workload in production environments.`;

  const cleanTags = post.tags && post.tags.length > 0 ? post.tags : ["Engineering", "Web Dev"];
  const tldr = customAeo.tldr || {
    build: `A technical project demonstrating modern implementation practices for ${post.title}.`,
    technologies: cleanTags.slice(0, 4),
    learnings: [
      `Understand fundamental design constraints and architectural principles of ${post.category}.`,
      "Implement step-by-step hands-on configurations and structured source code patterns.",
      "Identify common implementation mistakes, deployment challenges, and production resolutions."
    ],
    readTime: post.readTime
  };

  const defaultFaqs = [
    {
      question: `What is the primary topic of ${post.title}?`,
      answer: `This publication focuses on ${post.category}, specifically detailing ${post.excerpt.replace(/\.$/, "")} with production-grade setups.`
    },
    {
      question: `What technologies are discussed in this article?`,
      answer: `The implementation leverages ${cleanTags.join(", ")}, illustrating best practices for configuration, containerization, and layout routing.`
    },
    {
      question: `What are the typical deployment challenges encountered in this space?`,
      answer: `Developers frequently face difficulties around state management, configuration separation, environment variables scaling, and runtime performance constraints.`
    },
    {
      question: `How does the suggested architecture resolve these issues?`,
      answer: `The proposed architecture separates data schemas, implements modular service layers, isolates build contexts using multi-stage scripts, and integrates error fallbacks.`
    },
    {
      question: `Where can I learn more about these concepts?`,
      answer: `Refer to the references section at the bottom of the article for official links to framework documentations, design patterns libraries, and code templates.`
    }
  ];
  const faqs = customAeo.faqs || defaultFaqs;

  const defaultReferences = [
    { title: "React Documentation", url: "https://react.dev" },
    { title: "MDN Web Docs", url: "https://developer.mozilla.org" }
  ];
  const references = customAeo.references || defaultReferences;

  const cta = customAeo.cta || {
    title: "Have questions about this architecture?",
    description: "Connect with me to discuss design patterns, full stack setups, or technical opportunities for your system.",
    linkText: "Get in Touch",
    linkUrl: "/#contact"
  };

  return {
    ...post,
    quickAnswer,
    tldr,
    faqs,
    references,
    cta,
    topicCluster: customAeo.topicCluster || "Technical Insights",
    lastUpdated: customAeo.lastUpdated || post.publishedAt,
    githubUrl: customAeo.githubUrl || "https://github.com/Rafiqdevhub",
    demoUrl: customAeo.demoUrl || "https://rafiq.dev"
  };
}
