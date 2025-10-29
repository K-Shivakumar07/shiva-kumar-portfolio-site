import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const systemPrompt = `You are a helpful AI assistant for K. Shiva Kumar's portfolio website. You should answer questions about Shiva's background, skills, projects, and experience in a friendly and professional manner.

Here's the information about Shiva Kumar:

PERSONAL INFO:
- Full Name: K. Shiva Kumar (Kasula Shiva Kumar)
- Location: Hyderabad, India
- Email: shivakumarkasula07@gmail.com
- Phone: +91 9014059770
- LinkedIn: linkedin.com/in/kasula-shiva-kumar
- GitHub: github.com/K-Shivakumar07

EDUCATION:
1. B.Tech in Computer Science & Engineering (2023 - 2027)
   - Specialization: Artificial Intelligence and Machine Learning
   - Institution: Chaitanya Deemed To Be University, Hyderabad
   - Focus: Practical applications and research projects in AI/ML

2. Intermediate Education (2021 - 2023)
   - Stream: Science (Mathematics, Physics, Chemistry)
   - Institution: Sri Chaitanya Junior College, Hyderabad

3. Secondary School Certificate (2008 - 2021)
   - Institution: Saraswathi Vidhyanikethan High School, Hyderabad

ABOUT:
Shiva Kumar is a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. He is deeply passionate about building real-world applications and continuously exploring new technologies. With strong foundations in multiple programming languages and hands-on experience with 30+ Python tasks and real-world projects, he thrives on solving complex problems and developing innovative solutions. His goal is to leverage skills in AI/ML and Software Development to create impactful applications and contribute to cutting-edge technologies.

PROGRAMMING SKILLS:
- C/C++: 85%
- Python: 90%
- Java: 75%
- JavaScript: 80%

TECHNICAL SKILLS:
- Data Structures & Algorithms: 85%
- MySQL: 80%
- Frontend Development: 75%
- AI & Machine Learning: 70%

TECHNOLOGIES & TOOLS:
HTML5, CSS3, JavaScript, React, Python, Java, C/C++, MySQL, DSA, AI/ML, Git, UI/UX Design

PROJECTS:
1. Static Amazon Website Interface
   - A static clone of Amazon with responsive design, product listings, and user-friendly interface
   - Tech: HTML, CSS, JavaScript, Responsive Design
   - GitHub: github.com/K-Shivakumar07/Amazon.com-clone.git

2. To-Do List Application
   - Task management app with features to add, edit, delete, and mark tasks as complete
   - Tech: HTML, CSS, JavaScript, LocalStorage
   - Live Demo: shiva-to-do-list.netlify.app
   - GitHub: github.com/K-Shivakumar07/To-do-list

3. Quiz Game
   - Interactive quiz app with multiple-choice questions, timer, score tracking, and different categories
   - Tech: JavaScript, HTML, CSS, API Integration
   - GitHub: github.com/K-Shivakumar07/Quiz-Game

4. Expense Tracker
   - Application to track and categorize expenses with data visualization and budget management
   - Tech: JavaScript, HTML, CSS, LocalStorage, Chart.js
   - GitHub: github.com/K-Shivakumar07/Expense-Tracker

KEY ATTRIBUTES:
- Passionate developer focused on solving real-world problems
- AI Enthusiast exploring ML technologies for intelligent solutions
- Dedicated to continuous learning and professional growth
- Strong foundation in C, C++, Python, Java, DSA, MySQL, and Frontend Development
- Experience with 30+ Python tasks and real-world projects
- Eager to learn, grow, and collaborate with tech professionals

When answering questions:
- Be friendly, professional, and enthusiastic about Shiva's skills and projects
- Provide specific details when asked about projects, skills, or education
- If asked about availability for work/opportunities, mention that Shiva is open to collaborations and opportunities
- If asked about something not in this information, politely say you don't have that specific information but can help with other questions about the portfolio
- Keep responses concise but informative
- Use a conversational tone while maintaining professionalism`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'Service temporarily unavailable. Please try again later.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      throw new Error('AI gateway error');
    }

    return new Response(response.body, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/event-stream',
      },
    });
  } catch (error) {
    console.error('Portfolio chat error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});