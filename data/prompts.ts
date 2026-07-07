export type PromptCategory =
  | "Image Generation"
  | "Video & Motion"
  | "Fixing Bugs & Code"
  | "Resume & Career"
  | "Writing & Content"
  | "Product & Strategy"
  | "IPhone Wallpapers";

export interface PromptVariable {
  name: string;
  description: string;
  placeholder: string;
  type?: "text" | "textarea";
}

export interface Prompt {
  id: string;
  title: string;
  category: PromptCategory;
  platforms: string[];
  summary: string;
  promptText: string;
  variables?: PromptVariable[];
  tips?: string[];
}

export const prompts: Prompt[] = [
  {
    id: "react-perf-debug",
    title: "Advanced React Debugger & Performance Optimizer",
    category: "Fixing Bugs & Code",
    platforms: ["Claude", "ChatGPT", "Gemini"],
    summary: "Analyzes React components for memory leaks, unnecessary re-renders, and structural issues, suggesting clean refactoring options.",
    promptText: `You are an expert React and Frontend Performance Engineer. I will provide you with a React component. Your task is to:
1. Identify any potential performance bottlenecks (unnecessary re-renders, lack of memoization, suboptimal hook usage).
2. Check for common React anti-patterns or bugs (e.g., stale closures, improper key usage, memory leaks in useEffect).
3. Provide a refactored version of the component that optimizes performance and code readability.
4. Explain your changes step-by-step.

Here is the component code:
[Component Code]`,
    variables: [
      {
        name: "Component Code",
        description: "The React component code you want to optimize or debug",
        placeholder: "const MyComponent = () => { ... }",
        type: "textarea"
      }
    ],
    tips: [
      "Provide any custom hooks or context files associated with this component for better accuracy.",
      "For very large components, try dividing them into smaller subcomponents first."
    ]
  },
  {
    id: "glassmorphic-cinematic",
    title: "Cinematic Neo-Noir Glassmorphic Concept Art",
    category: "Image Generation",
    platforms: ["Midjourney", "Stable Diffusion", "DALL-E"],
    summary: "Generates high-fidelity prompts for atmospheric, neon-lit cinematic scenes with realistic glass refraction and materials.",
    promptText: `A cinematic shot of a futuristic neon-lit street in [City Name], rainy night, reflections of vibrant blue and hot pink neon lights on wet asphalt, in the foreground a delicate glass sculpture refracting the colorful city lights, steam rising from street vents, shot on 35mm lens, depth of field, hyperrealistic, octane render, 8k resolution, glassmorphism aesthetics, moody atmospheric lighting --ar 16:9 --style raw --v 6.0`,
    variables: [
      {
        name: "City Name",
        description: "The city or setting for the futuristic scene",
        placeholder: "Neo-Tokyo"
      }
    ],
    tips: [
      "Adjust the aspect ratio parameter '--ar' to fit your screen layout (e.g., --ar 9:16 for portrait, --ar 16:9 for landscape).",
      "You can swap 'glass sculpture' for other items like 'translucent sphere' or 'cyberpunk device' to alter focus."
    ]
  },
  {
    id: "fpv-drone-landscape",
    title: "Drone Tracking Shot of Ancient Coastal Landscapes",
    category: "Video & Motion",
    platforms: ["Sora", "Runway Gen-2", "Luma"],
    summary: "Creates epic drone camera paths over breathtaking natural or historic coastal landscapes with dramatic lighting.",
    promptText: `A continuous, sweeping FPV drone tracking shot gliding over the dramatic cliffs of [Coast Location], capturing ancient ruins clinging to the cliffside. The camera dips low near the crashing turquoise waves and then rises smoothly to reveal a [Lighting Type] sunset casting warm light. Cinema-grade color grading, ultra-detailed texture of stone and sea foam, slow and majestic motion, no camera shake.`,
    variables: [
      {
        name: "Coast Location",
        description: "The scenic coastal landscape or historic setting",
        placeholder: "Amalfi Coast, Italy"
      },
      {
        name: "Lighting Type",
        description: "The mood-setting time of day or light configuration",
        placeholder: "golden hour"
      }
    ],
    tips: [
      "Specifying camera paths like 'tracking shot', 'orbit', or 'crane shot' helps guide AI video engines.",
      "Mentioning details of scale (e.g., 'tiny seagulls', 'huge waves') establishes spatial depth."
    ]
  },
  {
    id: "resume-star-bullets",
    title: "Resume Accomplishment Bullet Tailoring",
    category: "Resume & Career",
    platforms: ["ChatGPT", "Gemini", "Claude"],
    summary: "Rewrites weak resume bullets into high-impact, metric-driven accomplishments using the STAR framework.",
    promptText: `You are an expert technical recruiter and resume writer. I am applying for the role of [Target Role]. Here is one of my current resume bullet points: "[Current Bullet Point]".

Please rewrite this bullet point to make it sound highly impactful, metric-driven, and focused on business value. Use the STAR (Situation, Task, Action, Result) methodology. Provide 3 different variations:
1. Action-Oriented (focusing on the technology stack and engineering actions).
2. Metric-driven (estimating realistic percentages or improvements in load times, delivery speed, or test coverage).
3. Leadership-focused (emphasizing collaboration, mentorship, or product ownership).

Target Role: [Target Role]
Current Bullet: [Current Bullet Point]`,
    variables: [
      {
        name: "Target Role",
        description: "The position you are applying for",
        placeholder: "Senior Frontend Engineer"
      },
      {
        name: "Current Bullet Point",
        description: "The raw, unoptimized resume bullet point you want to improve",
        placeholder: "Responsible for fixing bugs and maintaining the dashboard",
        type: "textarea"
      }
    ],
    tips: [
      "If you have real metrics (e.g., 'reduced load time by 300ms' or 'served 10k users'), specify them to make results highly realistic.",
      "Ensure you define the target role clearly to align the wording with current industry keyword requirements."
    ]
  },
  {
    id: "resume-recruiter-test",
    title: "Resume Recruiter Compatibility Test (The Recruiter Test)",
    category: "Resume & Career",
    platforms: ["ChatGPT", "Gemini", "Claude"],
    summary: "Assesses a resume against a target job description, generating a compatibility score, missing keywords, and hiring manager red flags.",
    promptText: `Take on the role of a lead recruiter for [Company Name]. Review my attached resume against the provided job description. Generate a compatibility score out of 100! list the 5 most critical missing keywords! and point out 3 major red flags a hiring manager would notice within the first 10 seconds.

Target Company: [Company Name]
Job Description: [Job Description]
Resume Details: [Resume Details]`,
    variables: [
      {
        name: "Company Name",
        description: "The target company you are applying to",
        placeholder: "Google"
      },
      {
        name: "Job Description",
        description: "The job posting text or description",
        placeholder: "Paste the job description here...",
        type: "textarea"
      },
      {
        name: "Resume Details",
        description: "Your current resume text",
        placeholder: "Paste your resume content here...",
        type: "textarea"
      }
    ],
    tips: [
      "Providing the specific company name helps the AI tailor keywords matching the company's engineering culture.",
      "Keep formatting plain text when pasting your resume and job description to prevent token bloat."
    ]
  },
  {
    id: "resume-google-xyz",
    title: "The Google XYZ Resume Bullet Rewrite",
    category: "Resume & Career",
    platforms: ["ChatGPT", "Gemini", "Claude"],
    summary: "Revises your work experience section using the Google XYZ framework (Accomplished X, measured by Y, by doing Z) to integrate target keywords.",
    promptText: `Now revise my work experience section to seamlessly integrate these missing keywords: [Missing Keywords] and eliminate these identified red flags: [Red Flags]. Apply the Google XYZ framework for this rewrite: achieved X! measured by Y! by doing Z.

Work Experience Section: [Work Experience]`,
    variables: [
      {
        name: "Missing Keywords",
        description: "Keywords to integrate into the bullets",
        placeholder: "Kubernetes, System Architecture, Go"
      },
      {
        name: "Red Flags",
        description: "Identified red flags to eliminate",
        placeholder: "Vague action verbs, short tenures"
      },
      {
        name: "Work Experience",
        description: "Your current work experience bullets",
        placeholder: "Paste your work experience bullets here...",
        type: "textarea"
      }
    ],
    tips: [
      "The Google XYZ framework is the gold standard for tech resumes: 'Accomplished [X] as measured by [Y], by doing [Z]'.",
      "Make sure to provide rough metrics so the AI can craft realistic Y measures."
    ]
  },
  {
    id: "resume-ats-filter",
    title: "The ATS & Scroll-Stopping Review",
    category: "Resume & Career",
    platforms: ["ChatGPT", "Gemini", "Claude"],
    summary: "Evaluates a resume from the perspective of an ATS filter and an overworked recruiter to identify ignored sections and make them scroll-stopping.",
    promptText: `Assume the persona of a strict ATS software and a tired hiring manager reviewing 200 applications at once. Evaluate my updated resume to identify any parts that would be ignored! and rewrite those specific sections to guarantee they grab attention and stop the scroll.

Resume Content: [Resume Content]`,
    variables: [
      {
        name: "Resume Content",
        description: "Your resume content",
        placeholder: "Paste your resume content here...",
        type: "textarea"
      }
    ],
    tips: [
      "Hiring managers look at resumes for an average of 6-7 seconds. This prompt helps ensure your top section has immediate impact.",
      "Check that the rewritten sections use active, high-impact verbs rather than passive duties."
    ]
  },
  {
    id: "seo-tech-blog",
    title: "SEO-Optimized Technical Blog Post Architect",
    category: "Writing & Content",
    platforms: ["Claude", "Gemini", "ChatGPT"],
    summary: "Generates complete post architectures, heading structures, keyword strategies, and meta elements for technical blogs.",
    promptText: `You are an expert technical content writer and SEO strategist. I want to write a comprehensive, engaging blog post about [Topic].

Please provide a complete SEO strategy and detailed outline including:
1. A catchy, search-optimized Title.
2. A recommended Meta Description (under 160 characters).
3. A list of primary and secondary keywords to target.
4. A complete H2/H3 heading structure with a short description of what should be covered under each section.
5. Suggestions for code blocks, interactive elements, or visual diagrams that would enhance the post.

Topic: [Topic]
Target Audience: [Target Audience]`,
    variables: [
      {
        name: "Topic",
        description: "The core concept or technical stack you want to write about",
        placeholder: "Understanding React Server Components and Server Actions"
      },
      {
        name: "Target Audience",
        description: "The primary readers you want to engage",
        placeholder: "Intermediate React Developers"
      }
    ],
    tips: [
      "Specify your preferred article length (e.g., '1500-word deep dive') to customize heading granularity.",
      "Adding context like 'include practical examples using Vite' will generate much more tailored sections."
    ]
  },
  {
    id: "feature-spec-analyzer",
    title: "AI-Powered Feature Spec & Edge-Case Discovery",
    category: "Product & Strategy",
    platforms: ["Claude", "ChatGPT", "Gemini"],
    summary: "Thoroughly analyzes a new product feature idea, detailing specifications, API requirements, and UX/system edge cases.",
    promptText: `You are a Principal Product Manager and Staff Software Engineer. I am planning to build a new feature: "[Feature Description]".

Please write a detailed technical and product specification including:
1. High-level User Stories.
2. Recommended API design outline (endpoints, payloads, database updates).
3. Security, privacy, and permission considerations.
4. UX edge cases (e.g., offline mode, high latency, empty states, race conditions).
5. Crucial telemetry and product metrics to measure success after launch.

Feature Description: [Feature Description]`,
    variables: [
      {
        name: "Feature Description",
        description: "Describe the feature you want to design",
        placeholder: "A collaborative real-time comment section for blog posts with thread support",
        type: "textarea"
      }
    ],
    tips: [
      "Mention your project's technology stack (e.g., 'PostgreSQL and WebSockets') to get custom architecture advice.",
      "Specify if there are complex role-based access rules (e.g., 'only team admins can view threads') to detail security edge cases."
    ]
  },
  {
    id: "prd-pm-expert",
    title: "Expert PM PRD Generator",
    category: "Product & Strategy",
    platforms: ["Claude", "ChatGPT", "Gemini",],
    summary: "Collaborates with you as an expert PM to clarify your app idea through targeted questions, then generates a structured, AI-ready Product Requirements Document (PRD).",
    promptText: `You are an expert Product Manager helping me write a PRD (Product Requirements Document) for a new app or software project I want to build using AI coding tools like Cursor, Lovable, Claude Code, or Bolt.

Here is my idea:

\`[Describe Your App Idea]\`

---

STEP 1 — CLARIFYING QUESTIONS (do this first, before writing anything)

Before generating the PRD, ask me up to 8 focused clarifying questions to fill in any gaps. Cover these areas only if my idea doesn't already answer them:

- Who exactly is the target user? (role, age, skill level, context)
- What is the core problem or pain point being solved?
- What platform? (web app, mobile, browser extension, desktop)
- What tech stack or AI tools should be used, if any preference?
- What does a successful v1 look like — what's the ONE thing it must do well?
- Are there any competitors or existing tools I'm inspired by or want to be different from?
- What is explicitly out of scope for the first version?
- Any monetization, auth, or third-party integrations needed? (e.g., Stripe, Google login)

Ask only the questions that are genuinely unclear from my idea. 
Keep each question short and specific. Number them.
Wait for my answers before writing the PRD.

---

STEP 2 — GENERATE THE PRD (only after I've answered your questions)

Once I respond, generate a complete PRD with these sections:

1. **Problem Statement**
   - What problem does this solve?
   - Who experiences this problem?
   - Why does this problem matter now?

2. **Target User**
   - Who is the primary user? (be specific — not just "everyone")
   - What are their goals, frustrations, and behaviors?

3. **Core Features (MVP Only)**
   - List the 3–5 must-have features for the first version
   - For each feature, describe what it does in 1–2 sentences
   - Mark anything as "Nice to Have" that is NOT needed for launch

4. **Out of Scope**
   - Explicitly list what we are NOT building in v1
   - This prevents scope creep when prompting AI tools

5. **Success Metrics**
   - How will we know this product is working?
   - Include 2–3 measurable KPIs (e.g., DAU, task completion rate, retention)

6. **Technical Assumptions**
   - Preferred tech stack (if any)
   - Platform: Web / Mobile / Both
   - Any integrations needed (e.g., Stripe, Google Auth, OpenAI API)

7. **Open Questions**
   - List 3–5 things that still need to be decided before or during development

Format the PRD cleanly with headers and bullet points so I can paste it directly into an AI coding tool as a starting prompt.`,
    variables: [
      {
        name: "Describe Your App Idea",
        description: "Your app/software project idea in 2-3 sentences",
        placeholder: "A mobile-first SaaS app that allows freelancers to track invoices and sends automated WhatsApp payment reminders.",
        type: "textarea"
      }
    ],
    tips: [
      "Keep your initial idea description concise (2-3 sentences) so the AI can ask the most relevant clarifying questions.",
      "Be as specific as possible when answering the clarifying questions in Step 1 to get a precise, actionable PRD."
    ]
  },
  {
    id: "iphone-wallpaper-girl",
    title: "IPhone Wallpaper - Cinematic Underwater (Girls)",
    category: "IPhone Wallpapers",
    platforms: ["Midjourney", "Stable Diffusion", "DALL-E"],
    summary: "Generates an ultra-realistic, cinematic portrait of a woman floating underwater with ethereal lighting and caustic reflections, optimized for 9:16 mobile screens.",
    promptText: `Prompt:
Ultra-realistic cinematic underwater portrait of a beautiful young woman floating underwater, vertical 9:16 composition, close-up centered frame, eyes closed, calm dreamy expression, soft feminine facial features, wet voluminous [Hair Color] hair floating naturally in water, [Clothing] slightly open at collar, delicate collarbones visible, realistic glowing skin texture, glossy natural lips, subtle diamond stud earrings, surrounded by tiny floating air bubbles, [Water Tone] underwater environment, dramatic underwater caustic light reflections projected across face, neck and shirt, glowing ripple patterns, ethereal feminine energy, luxury editorial photography aesthetic, hyper detailed photorealistic, cinematic color grading, shallow depth of field, ultra sharp facial details, soft volumetric underwater haze, moody highlights and shadows, premium fashion magazine look, symmetrical framing, peaceful emotional vibe, realistic underwater physics, 85mm lens, f/1.8, HDR, Unreal Engine quality, RAW photo realism, soft aqua tones with warm skin highlights, masterpiece quality, no text, no watermark

Negative Prompt:
cartoon, anime, masculine face, bad anatomy, distorted eyes, extra limbs, unrealistic body proportions, take bubbles, CGI appearance, blurry skin, overexposed highlights, messy composition, grainy image, low quality, duplicate features, heavy makeup, exaggerated smile, open eyes, low detail, swimming pool edges, fish, cluttered background`,
    variables: [
      {
        name: "Hair Color",
        description: "Color and style of the subject's hair",
        placeholder: "dark"
      },
      {
        name: "Clothing",
        description: "Outfit worn by the subject",
        placeholder: "translucent white wet shirt"
      },
      {
        name: "Water Tone",
        description: "Color tone of the underwater environment",
        placeholder: "teal-blue"
      }
    ],
    tips: [
      "Designed specifically for vertical 9:16 layouts, making it perfect for iPhone and mobile wallpapers.",
      "Use high-quality rendering options or parameters (like '--v 6.0' or '--style raw' in Midjourney) to capture the delicate air bubbles and caustic lights."
    ]
  },
  {
    id: "iphone-wallpaper-guy",
    title: "IPhone Wallpaper - Cinematic Underwater (Guys)",
    category: "IPhone Wallpapers",
    platforms: ["Midjourney", "Stable Diffusion", "DALL-E"],
    summary: "Generates an ultra-realistic, cinematic portrait of a young man floating underwater with high-contrast caustic lighting, optimized for 9:16 mobile screens.",
    promptText: `Prompt:
Ultra-realistic cinematic underwater portrait of a young man floating underwater, vertical 9:16 composition, face closeup centered in frame, open eyes, calm dreamy expression, thick messy wet [Hair Color] hair floating naturally in water, [Clothing] partially open at chest, realistic skin texture, soft jawline, subtle gloss lips, surrounded by tiny floating air bubbles, [Water Tone] underwater environment, dramatic underwater caustic light reflections projected across face, neck and shirt, glowing ripple light patterns, ethereal mood, luxury editorial photography aesthetic, hyper detailed, photorealistic, cinematic color grading, shallow depth of field, ultra sharp facial details, soft premium fashion magazine look, symight rail ul emotional vibe, realistic underwater physics, 85mm lens, f/1.8, HDR, Unreal Engine quality, RAW photo realism, soft aqua tones with warm skin highlights, high contrast, masterpiece quality, no text, no watermark

Negative Prompt:
cartoon, anime, low quality, blurry face, extra limbs, distorted eyes, deformed hands, bad anatomy, oversaturated skin, fake bubbles, CGI look, unrealistic lighting, duplicate features, grainy, noisy image, low detail, overexposed highlights, underwater mask, swimming pool edges, fish, smile, open eyes, beard, old face, female features, low resolution`,
    variables: [
      {
        name: "Hair Color",
        description: "Color and style of the subject's hair",
        placeholder: "black"
      },
      {
        name: "Clothing",
        description: "Outfit worn by the subject",
        placeholder: "translucent white wet shirt"
      },
      {
        name: "Water Tone",
        description: "Color tone of the underwater environment",
        placeholder: "teal-blue"
      }
    ],
    tips: [
      "Designed specifically for vertical 9:16 layouts, making it perfect for iPhone and mobile wallpapers.",
      "The phrase 'symight rail ul' is a stylistic seed term preserved for specific composition styles, but can be replaced or removed if desired."
    ]
  },
  {
    id: "gta-classic",
    title: "GTA VI Style - Classic",
    category: "IPhone Wallpapers",
    platforms: ["Midjourney", "Stable Diffusion", "DALL-E"],
    summary: "Transforms a photo into a premium GTA VI styled iPhone wallpaper set in Miami's neon environment.",
    promptText: `Transform this photo into a premium GTA VI inspired iPhone wallpaper. Keep the person’s face, hairstyle, skin tone, and identity perfectly recognizable. Dress them in a [Outfit] with a confident cinematic pose. Place them in a vibrant neon Vice City inspired environment with glowing pink, orange, purple, and cyan sunset lighting, palm trees, luxury cars, city skyline, reflections on wet streets, and a premium cinematic atmosphere. Add dramatic rim lighting, volumetric lighting, and realistic depth. Make it look like official AAA game promotional artwork, not a cartoon. Ultra realistic, highly detailed, vibrant colors, sharp focus, premium digital painting quality. Compose it specifically for an iPhone lock screen with extra headroom for the clock and Dynamic Island, ensuring the subject remains fully visible. Vertical 9:19.5 aspect ratio, 1290×2796 resolution, wallpaper quality, no text, no logos, no watermark, no UI elements.`,
    variables: [
      {
        name: "Outfit",
        description: "Style of clothing worn by the subject",
        placeholder: "stylish modern Miami-inspired outfit"
      }
    ],
    tips: [
      "Designed specifically for 9:19.5 aspect ratios (1290x2796 px) which corresponds exactly to modern iPhone sizes."
    ]
  },
  {
    id: "gta-helicopter",
    title: "GTA VI Style - Helicopter Scene",
    category: "IPhone Wallpapers",
    platforms: ["Midjourney", "Stable Diffusion", "DALL-E"],
    summary: "Cinematic GTA VI art of a protagonist sitting on the edge of a flying luxury helicopter door overlooking Vice City.",
    promptText: `Use ONLY the uploaded photo as the reference.
Create an ORIGINAL GTA VI inspired cinematic iPhone wallpaper.
Preserve my exact face, facial structure, hairstyle, skin tone, body proportions, expression, and identity with extremely high accuracy. My face must remain instantly recognizable. Do NOT replace me with any fictional GTA character. Do NOT change my gender, age, hairstyle, ethnicity, facial features, or body type.
Transform me into a fearless Vice City protagonist sitting inside a [Helicopter Style] with the side door completely open while flying thousands of feet above the glowing Miami skyline during sunset.
I am sitting naturally on the edge of the helicopter’s open doorway with both legs hanging outside the helicopter. My left hand is firmly gripping the inside door frame while my right hand is confidently holding a realistic modern semi-automatic handgun resting casually on my thigh, with the barrel pointed safely downward. My expression is calm, fearless, and confident, looking toward the city below.
I am wearing [Streetwear Description]. My clothes and hair are naturally blowing in the powerful wind created by the spinning helicopter blades.
The helicopter interior features black leather seats, tactical lighting, illuminated cockpit instruments, and premium cabin details. The open door reveals an incredible aerial view of Vice City below.
Far beneath the helicopter is a breathtaking Miami-inspired city filled with neon-lit skyscrapers, luxury hotels, Ocean Drive, palm-lined beaches, yachts, marinas, bridges, sports cars, glowing highways, and colorful city lights stretching into the horizon.
A second helicopter flies in the distance while police helicopters patrol far below. The ocean reflects the brilliant sunset colors, and the entire city glows with vibrant pink, orange, purple, cyan, and deep blue lighting inspired by GTA VI.
Add dramatic rim lighting, realistic volumetric clouds, atmospheric haze, soft cabin lighting, rotor motion blur, lens bloom, realistic reflections, cinematic depth of field, and ultra detailed AAA video game promotional artwork quality.
The composition should feel like the opening promotional artwork of a blockbuster open-world crime game while remaining completely original. I should occupy most of the frame, with the helicopter dominating the upper half and the glowing city creating an epic backdrop.
Ultra realistic digital painting, razor-sharp facial details, realistic anatomy, premium clothing textures, cinematic color grading, and extraordinary environmental detail.
Designed specifically as an iPhone lock screen wallpaper with extra space at the top for the clock and Dynamic Island.
Vertical 9:19.5 aspect ratio (1290 × 2796).
No text, no GTA logo, no Rockstar logo, no watermark, no UI elements, no phone frame.`,
    variables: [
      {
        name: "Helicopter Style",
        description: "Color and style of the helicopter",
        placeholder: "matte black luxury helicopter"
      },
      {
        name: "Streetwear Description",
        description: "Street clothing and accessories details",
        placeholder: "premium luxury streetwear including a fitted black bomber jacket over a white T-shirt, cargo pants, luxury sneakers, a high-end watch, subtle gold chains, and stylish sunglasses"
      }
    ],
    tips: [
      "Designed specifically for 9:19.5 aspect ratios (1290x2796 px) which corresponds exactly to modern iPhone sizes."
    ]
  },
  {
    id: "gta-gun-pose",
    title: "GTA VI Style - Gun Pose Poster",
    category: "IPhone Wallpapers",
    platforms: ["Midjourney", "Stable Diffusion", "DALL-E"],
    summary: "Presents the subject as a Vice City protagonist standing confidently in a two-handed shooting stance.",
    promptText: `Use ONLY the uploaded photo as the reference.
Create an ORIGINAL premium iPhone wallpaper inspired by the visual style of GTA VI promotional artwork.
Preserve my exact face, facial structure, hairstyle, skin tone, body proportions, expression, and identity with extremely high accuracy. My face must remain instantly recognizable. Do NOT replace me with a fictional GTA character. Do NOT change my gender, ethnicity, age, hairstyle, facial features, or body type.
Transform me into a stylish modern Vice City protagonist wearing a fashionable Miami-inspired outfit. Position me exactly like a blockbuster action game poster: standing confidently in the center of the frame, slightly angled toward the camera, with a determined expression.
Place a realistic modern semi-automatic pistol in both hands, held in a professional two-handed shooting stance with my arms extended forward toward the viewer. The firearm must look realistic and naturally fit my hands, with accurate proportions, grip, finger placement, lighting, and perspective.
Create a breathtaking neon Vice City inspired environment behind me featuring:
• Vibrant pink, orange, purple, and cyan sunset sky
• Palm trees
• Luxury yachts
• Sports cars
• Waterfront city skyline
• Neon-lit skyscrapers
• Wet reflective streets and docks
• Dramatic clouds in
• Cinematic atmosphere
Use dramatic rim lighting, volumetric lighting, realistic shadows, lens bloom, atmospheric haze, glowing reflections, and premium AAA video game key art quality.
The artwork should feel like an official modern open-world crime game promotional poster with ultra realistic digital painting quality, crisp facial details, vibrant colors, and sharp focus.
Compose the wallpaper exactly like a premium lock screen:
• Full body visible
• Subject centered and dominant
• Leave generous empty space at the top for the iPhone clock and Dynamic Island
• Clean composition with no objects covering the face
Vertical 9:19.5 aspect ratio, 1290 × 2796 resolution, ultra high resolution.
No text.
No logo.
No watermark.
No phone frame.
No UI elements.
No extra people.`,
    tips: [
      "Designed specifically for 9:19.5 aspect ratios (1290x2796 px) which corresponds exactly to modern iPhone sizes."
    ]
  },
  {
    id: "gta-couples",
    title: "GTA VI Style - Iconic Couple",
    category: "IPhone Wallpapers",
    platforms: ["Midjourney", "Stable Diffusion", "DALL-E"],
    summary: "GTA VI style key art of a couple recreating the iconic poster, with the man aiming a pistol and the woman holding a duffel bag of cash.",
    promptText: `Use ONLY the uploaded couple photo as the reference.
Create an ORIGINAL premium iPhone wallpaper inspired by the visual style of GTA VI promotional artwork.
Preserve both people's exact faces, facial structure, hairstyle, skin tone, body proportions, expressions, and identities with extremely high accuracy. Their faces must remain instantly recognizable. Do not replace them with fictional characters or alter their appearance.
Recreate the exact composition and cinematic feeling of the iconic GTA VI wallpaper:
• The male stands in the foreground, slightly right of center, aiming a pistol toward the camera with a confident expression.
• The female stands slightly behind and to his left, holding a duffel bag full of cash with a fearless expression.
• Keep both characters full body from head to toe.
• Match the same spacing, proportions, camera angle, perspective, pose, framing, and visual balance as the reference wallpaper.
Dress them in [Outfits] with subtle luxury fashion.
Background:
A breathtaking neon Vice City inspired waterfront at sunset with tall palm trees, glowing skyscrapers, luxury yachts, sports cars, colorful clouds, marina lights, wet reflective pavement, cinematic atmosphere, distant buildings, and warm tropical lighting.
Lighting:
Use the exact vibrant GTA VI color palette with glowing pink, orange, purple, cyan, and blue sunset lighting. Add dramatic rim lighting, volumetric lighting, realistic reflections, cinematic shadows, atmospheric haze, and premium AAA game lighting.
Style:
Ultra realistic digital painting.
Official AAA video game promotional key art.
Hyper detailed faces.
Keep focus sharp, with premium textures, realistic anatomy, high cinematic value, and extremely vibrant colors.
Wallpaper Composition:
Designed specifically for an iPhone lock screen with extra empty space at the top for the clock and Dynamic Island. The characters should occupy the lower two-thirds of the wallpaper, just like the reference image.
Vertical 9:19.5 aspect ratio (1290×2796).
No text.
No GTA logo.
No Rockstar logo.
No watermark.
No UI.
No phone frame.
The final result should look almost identical in composition, lighting, atmosphere, and premium quality to the famous GTA VI promotional wallpaper while using the uploaded couple as the main characters instead of the original game characters.`,
    variables: [
      {
        name: "Outfits",
        description: "Clothing style description for both subjects",
        placeholder: "stylish modern Miami-inspired outfits"
      }
    ],
    tips: [
      "Designed specifically for 9:19.5 aspect ratios (1290x2796 px) which corresponds exactly to modern iPhone sizes."
    ]
  },
  {
    id: "gta-supercar",
    title: "GTA VI Style - Sitting Inside Supercar",
    category: "IPhone Wallpapers",
    platforms: ["Midjourney", "Stable Diffusion", "DALL-E"],
    summary: "GTA VI style key art of the subject sitting sideways in a luxury supercar parked on Ocean Drive at sunset.",
    promptText: `Use ONLY the uploaded photo as the reference.
Create an ORIGINAL GTA VI inspired cinematic iPhone wallpaper.
Preserve my exact face, hairstyle, skin tone, body proportions, expression, and identity with extremely high accuracy. My face must remain instantly recognizable. Do NOT replace me with any fictional GTA character.
Transform me into a stylish Vice City protagonist sitting inside a [Supercar Model] parked on Ocean Drive at sunset. The driver's side scissor door is open. I am sitting sideways in the driver's seat with one hand resting casually on the steering wheel and the other holding a modern handgun pointed downward in a relaxed, cinematic pose. My expression is calm, fearless, and confident.
Wear [Outfit Description].
Outside the car are towering palm trees, neon hotels, glowing sports cars, motorcycles, colorful Miami nightlife, reflections on wet streets, and a breathtaking orange, pink, purple, and cyan sunset sky.
The interior glows with ambient blue and magenta lighting. Add cinematic reflections on the windshield, volumetric lighting, realistic shadows, dramatic rim lighting, lens bloom, shallow depth of field, and AAA open-world game promotional artwork quality.
Ultra realistic digital painting, premium Rockstar-inspired key art aesthetic without copying existing artwork.
Designed specifically as an iPhone wallpaper with space for the clock and Dynamic Island.
Vertical 1290×2796.
No text, logos, watermark, or UI.`,
    variables: [
      {
        name: "Supercar Model",
        description: "Make and model of the supercar",
        placeholder: "luxury Lamborghini Aventador"
      },
      {
        name: "Outfit Description",
        description: "Clothing and accessories details",
        placeholder: "a fitted designer shirt, cargo pants, luxury watch, chains, and premium sneakers"
      }
    ],
    tips: [
      "Designed specifically for 9:19.5 aspect ratios (1290x2796 px) which corresponds exactly to modern iPhone sizes."
    ]
  },
  {
    id: "gta-rooftop",
    title: "GTA VI Style - Rooftop Sniper Vibes",
    category: "IPhone Wallpapers",
    platforms: ["Midjourney", "Stable Diffusion", "DALL-E"],
    summary: "GTA VI styled key art of the subject sitting on the edge of a skyscraper rooftop overlooking the glowing Miami skyline.",
    promptText: `Use ONLY the uploaded photo as the reference.
Create an ORIGINAL GTA VI inspired cinematic wallpaper.
Preserve my exact face and identity.
Transform me into a stylish Vice City protagonist sitting on the edge of a skyscraper rooftop overlooking the glowing Miami skyline at sunset. Hold a [Weapon Type] resting casually on one knee while looking over the city with a calm, fearless expression. Palm trees, yachts, sports cars, helicopters, luxury hotels, and neon skyscrapers fill the background. Warm sunset colors blend with pink, purple, cyan, and blue city lights. Dramatic cinematic lighting, realistic reflections, atmospheric haze, AAA game promotional artwork quality.
Ultra realistic digital painting.
No text or watermark.`,
    variables: [
      {
        name: "Weapon Type",
        description: "Type of handgun or weapon held",
        placeholder: "modern handgun"
      }
    ],
    tips: [
      "Designed specifically for 9:19.5 aspect ratios (1290x2796 px) which corresponds exactly to modern iPhone sizes."
    ]
  },
  {
    id: "gta-motorcycle-chase",
    title: "GTA VI Style - Motorcycle Chase",
    category: "IPhone Wallpapers",
    platforms: ["Midjourney", "Stable Diffusion", "DALL-E"],
    summary: "Action-packed GTA VI style key art of the subject riding a superbike through wet, neon-lit Miami streets.",
    promptText: `Use ONLY the uploaded photo as the reference.
Create an ORIGINAL GTA VI inspired action wallpaper.
Preserve my exact face and identity.
Transform me into a stylish Vice City outlaw riding a [Motorcycle Model] through neon-lit Miami streets at night. Hold a handgun in one hand while confidently controlling the motorcycle. Sports cars drift behind me, police lights flash in the distance, helicopters illuminate the streets, smoke fills the air, and rain creates glowing reflections across the road. Palm trees line the boulevard beneath a colorful sunset fading into the night.
Epic AAA game key art. Ultra realistic digital painting with dramatic motion blur, cinematic lighting, and premium iPhone wallpaper composition.
No text, watermark, or logos.`,
    variables: [
      {
        name: "Motorcycle Model",
        description: "Make and model of the motorcycle",
        placeholder: "Ducati Panigale superbike"
      }
    ],
    tips: [
      "Designed specifically for 9:19.5 aspect ratios (1290x2796 px) which corresponds exactly to modern iPhone sizes."
    ]
  },
  {
    id: "gta-yacht-boss",
    title: "GTA VI Style - Luxury Yacht Boss",
    category: "IPhone Wallpapers",
    platforms: ["Midjourney", "Stable Diffusion", "DALL-E"],
    summary: "GTA VI styled key art of the subject cruising through Miami Harbor on a luxury yacht deck during sunset.",
    promptText: `Use ONLY the uploaded photo as the reference.
Create an ORIGINAL GTA VI inspired luxury wallpaper.
Preserve my exact face and identity.
Transform me into a wealthy Vice City kingpin sitting confidently on the deck of a luxury yacht cruising through Miami Harbor during sunset. One hand rests on the chair while the other casually holds a modern handgun pointed downward. [Accessories Description], distant skyline, helicopters, speedboats, and palm-lined waterfront create an elite atmosphere. Rich pink, orange, purple, and cyan sunset lighting reflects beautifully across the water.
Ultra realistic AAA promotional artwork. Cinematic lighting, premium digital painting, luxury lifestyle aesthetic.
Designed for an iPhone wallpaper.
No text, watermark, or logos.`,
    variables: [
      {
        name: "Accessories Description",
        description: "Luxury accessories surrounding the subject",
        placeholder: "Luxury watches, gold chains, designer sunglasses, champagne on the table"
      }
    ],
    tips: [
      "Designed specifically for 9:19.5 aspect ratios (1290x2796 px) which corresponds exactly to modern iPhone sizes."
    ]
  }
];
