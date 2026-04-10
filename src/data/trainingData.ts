export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index
  type: "mcq" | "true-false";
}

export interface DayContent {
  day: number;
  title: string;
  status: "completed" | "in-progress" | "locked";
  readingContent: string; // markdown-like formatted text
  codeSnippets?: { language: string; code: string; description: string }[];
  handsOn?: { title: string; description: string; link?: string };
  miniProject?: { title: string; description: string };
  quiz: QuizQuestion[];
}

export interface WeekModule {
  week: number;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "locked";
  days: DayContent[];
}

export interface TrainingTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: "primary" | "secondary" | "accent";
  weeks: WeekModule[];
}

// --- WEEK DATA ---

const fundamentalsWeeks: WeekModule[] = [
  {
    week: 1,
    title: "Foundations – HTML & Basic CSS",
    description: "Learn the building blocks of the web: HTML elements, structure, and basic CSS styling.",
    status: "completed",
    days: [
      {
        day: 1,
        title: "Introduction to HTML",
        status: "completed",
        readingContent: `HTML (HyperText Markup Language) is the standard language for creating web pages. Every web page you visit is built on HTML.\n\n**Key Concepts:**\n- HTML documents have a tree-like structure\n- Elements are defined by tags: opening <tag> and closing </tag>\n- The basic structure includes <!DOCTYPE html>, <html>, <head>, and <body>\n- Semantic HTML improves accessibility and SEO`,
        codeSnippets: [
          {
            language: "html",
            code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n  <p>This is my first web page.</p>\n</body>\n</html>`,
            description: "Basic HTML document structure",
          },
        ],
        handsOn: { title: "Create Your First HTML Page", description: "Create an HTML file with a heading, paragraph, image, and a list of your hobbies." },
        quiz: [
          { id: "w1d1q1", question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], correctAnswer: 0, type: "mcq" },
          { id: "w1d1q2", question: "Which tag is used for the largest heading?", options: ["<heading>", "<h6>", "<h1>", "<head>"], correctAnswer: 2, type: "mcq" },
          { id: "w1d1q3", question: "HTML is a programming language.", options: ["True", "False"], correctAnswer: 1, type: "true-false" },
          { id: "w1d1q4", question: "Which element contains metadata about the document?", options: ["<body>", "<head>", "<meta>", "<title>"], correctAnswer: 1, type: "mcq" },
          { id: "w1d1q5", question: "The <br> tag requires a closing tag.", options: ["True", "False"], correctAnswer: 1, type: "true-false" },
        ],
      },
      {
        day: 2,
        title: "HTML Elements & Forms",
        status: "completed",
        readingContent: `Forms are essential for user interaction on the web. They allow users to input data that can be sent to a server.\n\n**Common Form Elements:**\n- <input> for text, email, password, number\n- <textarea> for multi-line text\n- <select> and <option> for dropdowns\n- <button> for form submission\n- <label> for accessibility`,
        codeSnippets: [
          {
            language: "html",
            code: `<form action="/submit" method="POST">\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name" required>\n\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email" required>\n\n  <button type="submit">Submit</button>\n</form>`,
            description: "A simple contact form",
          },
        ],
        handsOn: { title: "Build a Registration Form", description: "Create a registration form with fields for name, email, password, and a submit button." },
        quiz: [
          { id: "w1d2q1", question: "Which input type is used for email addresses?", options: ["text", "email", "mail", "address"], correctAnswer: 1, type: "mcq" },
          { id: "w1d2q2", question: "The <label> tag improves form accessibility.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
          { id: "w1d2q3", question: "Which attribute makes an input field mandatory?", options: ["mandatory", "required", "needed", "validate"], correctAnswer: 1, type: "mcq" },
          { id: "w1d2q4", question: "Which element is used for multi-line text input?", options: ["<input>", "<text>", "<textarea>", "<multiline>"], correctAnswer: 2, type: "mcq" },
          { id: "w1d2q5", question: "Forms can only use the GET method.", options: ["True", "False"], correctAnswer: 1, type: "true-false" },
        ],
      },
      {
        day: 3,
        title: "Introduction to CSS",
        status: "completed",
        readingContent: `CSS (Cascading Style Sheets) controls the visual presentation of HTML elements.\n\n**CSS Basics:**\n- Selectors target HTML elements\n- Properties define what to style (color, font-size, margin)\n- Values set the specific style\n- CSS can be inline, internal (<style>), or external (.css file)\n- The cascade determines which styles take priority`,
        codeSnippets: [
          {
            language: "css",
            code: `/* Element selector */\nh1 {\n  color: #2563eb;\n  font-size: 2rem;\n}\n\n/* Class selector */\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}`,
            description: "Basic CSS selectors and properties",
          },
        ],
        handsOn: { title: "Style Your HTML Page", description: "Add CSS to your Day 1 HTML page: change colors, fonts, add padding and margins." },
        quiz: [
          { id: "w1d3q1", question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Coded Style Sheets"], correctAnswer: 0, type: "mcq" },
          { id: "w1d3q2", question: "Which property changes text color?", options: ["text-color", "font-color", "color", "text-style"], correctAnswer: 2, type: "mcq" },
          { id: "w1d3q3", question: "Inline CSS has the highest specificity.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
          { id: "w1d3q4", question: "Which selector targets elements with class 'btn'?", options: ["#btn", ".btn", "btn", "*btn"], correctAnswer: 1, type: "mcq" },
          { id: "w1d3q5", question: "External CSS is linked using the <style> tag.", options: ["True", "False"], correctAnswer: 1, type: "true-false" },
        ],
      },
      {
        day: 4,
        title: "CSS Box Model & Layout",
        status: "completed",
        readingContent: `The CSS Box Model is fundamental to understanding layout. Every element is a rectangular box with content, padding, border, and margin.\n\n**Box Model Components:**\n- Content: The actual content area\n- Padding: Space between content and border\n- Border: The border around padding\n- Margin: Space outside the border\n\n**Display Properties:**\n- block: Takes full width\n- inline: Takes only needed width\n- flex: Flexible container layout\n- grid: Grid-based layout`,
        codeSnippets: [
          {
            language: "css",
            code: `.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}\n\n.box {\n  width: 200px;\n  padding: 20px;\n  margin: 10px;\n  border: 2px solid #e5e7eb;\n  box-sizing: border-box;\n}`,
            description: "Flexbox layout with box model",
          },
        ],
        handsOn: { title: "Create a Card Layout", description: "Build a card-based layout with 3 cards using flexbox, proper padding, margins, and borders." },
        quiz: [
          { id: "w1d4q1", question: "Which CSS property adds space inside an element's border?", options: ["margin", "padding", "spacing", "gap"], correctAnswer: 1, type: "mcq" },
          { id: "w1d4q2", question: "The box-sizing: border-box includes padding in the width.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
          { id: "w1d4q3", question: "Which display value creates a flexible container?", options: ["block", "inline", "flex", "table"], correctAnswer: 2, type: "mcq" },
          { id: "w1d4q4", question: "Margin creates space inside an element.", options: ["True", "False"], correctAnswer: 1, type: "true-false" },
          { id: "w1d4q5", question: "What property aligns flex items vertically?", options: ["justify-content", "align-items", "flex-direction", "text-align"], correctAnswer: 1, type: "mcq" },
        ],
      },
      {
        day: 5,
        title: "Mini Project – Personal Portfolio Page",
        status: "completed",
        readingContent: `Today you'll combine everything from this week to build a personal portfolio page.\n\n**Requirements:**\n- A header with your name and navigation\n- An "About Me" section\n- A "Skills" section with styled list\n- A contact form\n- Clean, responsive styling using CSS\n\nFocus on semantic HTML, clean CSS, and good visual hierarchy.`,
        miniProject: { title: "Personal Portfolio Page", description: "Build a complete personal portfolio page using HTML & CSS. Include a header, about section, skills, and contact form. Submit your work for review." },
        quiz: [
          { id: "w1d5q1", question: "Which HTML element is best for navigation links?", options: ["<div>", "<nav>", "<menu>", "<ul>"], correctAnswer: 1, type: "mcq" },
          { id: "w1d5q2", question: "Semantic HTML helps with SEO and accessibility.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
          { id: "w1d5q3", question: "Which CSS property creates rounded corners?", options: ["corner-radius", "border-radius", "radius", "round"], correctAnswer: 1, type: "mcq" },
          { id: "w1d5q4", question: "A portfolio should prioritize visual hierarchy.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
          { id: "w1d5q5", question: "Which approach is best for a multi-column layout?", options: ["Float everything", "Use tables", "CSS Grid or Flexbox", "Absolute positioning"], correctAnswer: 2, type: "mcq" },
        ],
      },
    ],
  },
  {
    week: 2,
    title: "Advanced CSS & Responsive Design",
    description: "Master responsive layouts, media queries, CSS Grid, and modern CSS techniques.",
    status: "in-progress",
    days: [
      {
        day: 1,
        title: "CSS Grid Fundamentals",
        status: "completed",
        readingContent: `CSS Grid is a powerful two-dimensional layout system. Unlike Flexbox (one-dimensional), Grid handles both rows and columns simultaneously.\n\n**Key Concepts:**\n- grid-template-columns and grid-template-rows define the grid structure\n- fr unit represents a fraction of available space\n- gap sets spacing between grid items\n- Items can span multiple rows/columns`,
        codeSnippets: [
          {
            language: "css",
            code: `.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.featured {\n  grid-column: span 2;\n}`,
            description: "CSS Grid with spanning columns",
          },
        ],
        quiz: [
          { id: "w2d1q1", question: "CSS Grid is a one-dimensional layout system.", options: ["True", "False"], correctAnswer: 1, type: "true-false" },
          { id: "w2d1q2", question: "What does 'fr' stand for in CSS Grid?", options: ["Frame", "Fraction", "Free", "Flex-ratio"], correctAnswer: 1, type: "mcq" },
          { id: "w2d1q3", question: "Which property sets spacing between grid items?", options: ["margin", "spacing", "gap", "gutter"], correctAnswer: 2, type: "mcq" },
          { id: "w2d1q4", question: "repeat(3, 1fr) creates 3 equal columns.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
          { id: "w2d1q5", question: "Which property makes an item span 2 columns?", options: ["grid-span: 2", "column-span: 2", "grid-column: span 2", "span: 2"], correctAnswer: 2, type: "mcq" },
        ],
      },
      {
        day: 2,
        title: "Media Queries & Responsive Design",
        status: "in-progress",
        readingContent: `Responsive design ensures your website works well on all screen sizes. Media queries allow you to apply CSS rules conditionally based on viewport dimensions.\n\n**Mobile-First Approach:**\n- Start with mobile styles as the default\n- Use min-width media queries to add styles for larger screens\n- Common breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)`,
        codeSnippets: [
          {
            language: "css",
            code: `/* Mobile first */\n.container {\n  padding: 16px;\n}\n\n/* Tablet */\n@media (min-width: 768px) {\n  .container {\n    padding: 32px;\n    max-width: 720px;\n    margin: 0 auto;\n  }\n}\n\n/* Desktop */\n@media (min-width: 1024px) {\n  .container {\n    max-width: 960px;\n  }\n}`,
            description: "Mobile-first responsive design",
          },
        ],
        quiz: [
          { id: "w2d2q1", question: "Mobile-first design starts with desktop styles.", options: ["True", "False"], correctAnswer: 1, type: "true-false" },
          { id: "w2d2q2", question: "Which media query targets screens 768px and wider?", options: ["@media (max-width: 768px)", "@media (min-width: 768px)", "@media (width: 768px)", "@media (screen: 768px)"], correctAnswer: 1, type: "mcq" },
          { id: "w2d2q3", question: "Responsive design works on all screen sizes.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
          { id: "w2d2q4", question: "Which meta tag is required for responsive design?", options: ["<meta charset>", "<meta viewport>", "<meta responsive>", "<meta device>"], correctAnswer: 1, type: "mcq" },
          { id: "w2d2q5", question: "Common mobile breakpoint is:", options: ["320px", "640px", "1024px", "1920px"], correctAnswer: 1, type: "mcq" },
        ],
      },
      {
        day: 3,
        title: "CSS Animations & Transitions",
        status: "locked",
        readingContent: `CSS animations bring your interface to life. Transitions handle simple state changes, while keyframe animations enable complex sequences.\n\n**Transitions:** Smooth changes between two states\n**Animations:** Multi-step sequences using @keyframes`,
        codeSnippets: [
          {
            language: "css",
            code: `/* Transition */\n.btn {\n  transition: all 0.3s ease;\n}\n.btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n}\n\n/* Keyframe animation */\n@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(10px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n.card { animation: fadeIn 0.5s ease-out; }`,
            description: "CSS transitions and keyframe animations",
          },
        ],
        quiz: [
          { id: "w2d3q1", question: "Transitions require @keyframes.", options: ["True", "False"], correctAnswer: 1, type: "true-false" },
          { id: "w2d3q2", question: "Which property creates a smooth hover effect?", options: ["animation", "transition", "transform", "keyframe"], correctAnswer: 1, type: "mcq" },
          { id: "w2d3q3", question: "What does 'ease' refer to in transitions?", options: ["Speed", "Timing function", "Duration", "Delay"], correctAnswer: 1, type: "mcq" },
          { id: "w2d3q4", question: "@keyframes defines multi-step animations.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
          { id: "w2d3q5", question: "Which property moves an element?", options: ["position", "transform", "translate", "move"], correctAnswer: 1, type: "mcq" },
        ],
      },
      {
        day: 4,
        title: "CSS Variables & Modern Techniques",
        status: "locked",
        readingContent: `CSS Custom Properties (variables) make your stylesheets maintainable and themeable.\n\n**Benefits:**\n- Single source of truth for values\n- Easy theme switching\n- Dynamic updates with JavaScript\n- Scoped to selectors`,
        codeSnippets: [
          {
            language: "css",
            code: `:root {\n  --primary: #2563eb;\n  --radius: 8px;\n  --shadow: 0 2px 8px rgba(0,0,0,0.1);\n}\n\n.card {\n  background: var(--primary);\n  border-radius: var(--radius);\n  box-shadow: var(--shadow);\n}`,
            description: "CSS custom properties",
          },
        ],
        quiz: [
          { id: "w2d4q1", question: "CSS variables are defined with -- prefix.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
          { id: "w2d4q2", question: "How do you use a CSS variable?", options: ["$(--var)", "var(--var)", "use(--var)", "@var"], correctAnswer: 1, type: "mcq" },
          { id: "w2d4q3", question: "CSS variables can be scoped to specific selectors.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
          { id: "w2d4q4", question: ":root targets which element?", options: ["<body>", "<html>", "<head>", "<main>"], correctAnswer: 1, type: "mcq" },
          { id: "w2d4q5", question: "CSS variables can be changed with JavaScript.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        ],
      },
      {
        day: 5,
        title: "Mini Project – Responsive Landing Page",
        status: "locked",
        readingContent: `Build a complete responsive landing page incorporating all techniques from this week: Grid, Flexbox, media queries, animations, and CSS variables.\n\n**Requirements:**\n- Responsive navigation bar\n- Hero section with animation\n- Feature cards using CSS Grid\n- Works on mobile, tablet, and desktop`,
        miniProject: { title: "Responsive Landing Page", description: "Create a fully responsive landing page with hero section, features grid, testimonials, and footer. Must work across mobile, tablet, and desktop." },
        quiz: [
          { id: "w2d5q1", question: "A responsive site adapts to screen sizes.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
          { id: "w2d5q2", question: "Which layout system is best for a card grid?", options: ["Float", "Table", "CSS Grid", "Position"], correctAnswer: 2, type: "mcq" },
          { id: "w2d5q3", question: "A hero section is typically the first visible area.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
          { id: "w2d5q4", question: "Which approach builds mobile styles first?", options: ["Desktop-first", "Mobile-first", "Tablet-first", "Universal"], correctAnswer: 1, type: "mcq" },
          { id: "w2d5q5", question: "CSS Grid and Flexbox cannot be used together.", options: ["True", "False"], correctAnswer: 1, type: "true-false" },
        ],
      },
    ],
  },
  {
    week: 3,
    title: "JavaScript Fundamentals",
    description: "Learn core JavaScript: variables, functions, DOM manipulation, and event handling.",
    status: "locked",
    days: [
      { day: 1, title: "Variables, Data Types & Operators", status: "locked", readingContent: "Learn about let, const, var, primitive types, and operators in JavaScript.", quiz: [
        { id: "w3d1q1", question: "Which keyword declares a constant?", options: ["var", "let", "const", "define"], correctAnswer: 2, type: "mcq" },
        { id: "w3d1q2", question: "JavaScript is a statically typed language.", options: ["True", "False"], correctAnswer: 1, type: "true-false" },
        { id: "w3d1q3", question: "typeof null returns 'object'.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        { id: "w3d1q4", question: "Which operator checks both value and type?", options: ["==", "===", "!=", "="], correctAnswer: 1, type: "mcq" },
        { id: "w3d1q5", question: "'let' allows reassignment.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
      ] },
      { day: 2, title: "Functions & Scope", status: "locked", readingContent: "Understand function declarations, expressions, arrow functions, and scope.", quiz: [
        { id: "w3d2q1", question: "Arrow functions have their own 'this' context.", options: ["True", "False"], correctAnswer: 1, type: "true-false" },
        { id: "w3d2q2", question: "Which creates a function expression?", options: ["function name()", "const name = () =>", "def name()", "func name()"], correctAnswer: 1, type: "mcq" },
        { id: "w3d2q3", question: "Closures allow inner functions to access outer variables.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        { id: "w3d2q4", question: "Block scope is created by:", options: ["function", "{}", "var", "global"], correctAnswer: 1, type: "mcq" },
        { id: "w3d2q5", question: "Hoisting applies to function declarations.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
      ] },
      { day: 3, title: "Arrays & Objects", status: "locked", readingContent: "Work with arrays and objects: methods, iteration, and destructuring.", quiz: [
        { id: "w3d3q1", question: "Array.map() modifies the original array.", options: ["True", "False"], correctAnswer: 1, type: "true-false" },
        { id: "w3d3q2", question: "Which method adds to end of array?", options: ["push()", "pop()", "shift()", "unshift()"], correctAnswer: 0, type: "mcq" },
        { id: "w3d3q3", question: "Object destructuring extracts properties.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        { id: "w3d3q4", question: "Array.filter() returns a new array.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        { id: "w3d3q5", question: "Which accesses object property?", options: ["obj->key", "obj.key", "obj::key", "obj=>key"], correctAnswer: 1, type: "mcq" },
      ] },
      { day: 4, title: "DOM Manipulation & Events", status: "locked", readingContent: "Select elements, modify content, and handle user events with JavaScript.", quiz: [
        { id: "w3d4q1", question: "document.getElementById() returns a single element.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        { id: "w3d4q2", question: "Which method adds an event listener?", options: ["onClick()", "addEventListener()", "onEvent()", "bindEvent()"], correctAnswer: 1, type: "mcq" },
        { id: "w3d4q3", question: "innerHTML sets the HTML content of an element.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        { id: "w3d4q4", question: "querySelector() uses CSS selectors.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        { id: "w3d4q5", question: "Which event fires on form submission?", options: ["click", "change", "submit", "input"], correctAnswer: 2, type: "mcq" },
      ] },
      { day: 5, title: "Mini Project – Interactive To-Do App", status: "locked", readingContent: "Build an interactive to-do app using vanilla JavaScript with DOM manipulation and event handling.", miniProject: { title: "Interactive To-Do App", description: "Build a functional to-do application with add, delete, and complete functionality using vanilla JavaScript." }, quiz: [
        { id: "w3d5q1", question: "localStorage persists data across sessions.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        { id: "w3d5q2", question: "Which method converts object to JSON string?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.encode()"], correctAnswer: 1, type: "mcq" },
        { id: "w3d5q3", question: "Event delegation uses a parent listener.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        { id: "w3d5q4", question: "Which method removes an element?", options: ["delete()", "remove()", "destroy()", "erase()"], correctAnswer: 1, type: "mcq" },
        { id: "w3d5q5", question: "createElement() creates a new DOM node.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
      ] },
    ],
  },
  {
    week: 4,
    title: "React Fundamentals",
    description: "Introduction to React: components, JSX, props, state, and hooks.",
    status: "locked",
    days: [
      { day: 1, title: "Introduction to React & JSX", status: "locked", readingContent: "Understand React's component model, JSX syntax, and how React renders UI.", quiz: [
        { id: "w4d1q1", question: "React uses a virtual DOM.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        { id: "w4d1q2", question: "JSX stands for:", options: ["JavaScript XML", "Java Syntax Extension", "JSON Extended", "JavaScript Extra"], correctAnswer: 0, type: "mcq" },
        { id: "w4d1q3", question: "Components must return a single root element.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        { id: "w4d1q4", question: "Which creates a React app?", options: ["npx create-react-app", "npm init react", "react new app", "create react"], correctAnswer: 0, type: "mcq" },
        { id: "w4d1q5", question: "React is a framework, not a library.", options: ["True", "False"], correctAnswer: 1, type: "true-false" },
      ] },
      { day: 2, title: "Components & Props", status: "locked", readingContent: "Create reusable components and pass data between them using props.", quiz: [
        { id: "w4d2q1", question: "Props are read-only in child components.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        { id: "w4d2q2", question: "Which is a valid component?", options: ["function app()", "function App()", "class app", "def App()"], correctAnswer: 1, type: "mcq" },
        { id: "w4d2q3", question: "Props can be any data type.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        { id: "w4d2q4", question: "Children prop contains nested content.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        { id: "w4d2q5", question: "Default props can be set with:", options: ["defaultProps", "initialProps", "baseProps", "startProps"], correctAnswer: 0, type: "mcq" },
      ] },
      { day: 3, title: "State & useState Hook", status: "locked", readingContent: "Manage component state with the useState hook and understand re-rendering.", quiz: [
        { id: "w4d3q1", question: "useState returns an array with 2 elements.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        { id: "w4d3q2", question: "State updates are:", options: ["Synchronous", "Asynchronous", "Blocking", "Instant"], correctAnswer: 1, type: "mcq" },
        { id: "w4d3q3", question: "Hooks can be called inside loops.", options: ["True", "False"], correctAnswer: 1, type: "true-false" },
        { id: "w4d3q4", question: "Which hook manages state?", options: ["useEffect", "useState", "useRef", "useMemo"], correctAnswer: 1, type: "mcq" },
        { id: "w4d3q5", question: "Changing state triggers a re-render.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
      ] },
      { day: 4, title: "useEffect & Lifecycle", status: "locked", readingContent: "Handle side effects like data fetching, subscriptions, and DOM updates.", quiz: [
        { id: "w4d4q1", question: "useEffect runs after render by default.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        { id: "w4d4q2", question: "Empty dependency array means:", options: ["Run every render", "Run once on mount", "Never run", "Run on unmount"], correctAnswer: 1, type: "mcq" },
        { id: "w4d4q3", question: "useEffect can return a cleanup function.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        { id: "w4d4q4", question: "Which hook replaces componentDidMount?", options: ["useState", "useEffect", "useRef", "useCallback"], correctAnswer: 1, type: "mcq" },
        { id: "w4d4q5", question: "Dependencies control when effect re-runs.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
      ] },
      { day: 5, title: "Mini Project – React Task Manager", status: "locked", readingContent: "Build a task manager with React: component composition, state management, and effects.", miniProject: { title: "React Task Manager", description: "Create a task manager app with React featuring add/edit/delete tasks, filtering, and local state management." }, quiz: [
        { id: "w4d5q1", question: "Lifting state up shares data between siblings.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        { id: "w4d5q2", question: "Which pattern passes data down?", options: ["Props drilling", "Context", "Redux", "All of the above"], correctAnswer: 3, type: "mcq" },
        { id: "w4d5q3", question: "key prop helps React identify list items.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
        { id: "w4d5q4", question: "Controlled components store value in:", options: ["DOM", "State", "Props", "Refs"], correctAnswer: 1, type: "mcq" },
        { id: "w4d5q5", question: "React.Fragment avoids extra DOM nodes.", options: ["True", "False"], correctAnswer: 0, type: "true-false" },
      ] },
    ],
  },
];

export const trainingTopics: TrainingTopic[] = [
  {
    id: "web-development",
    title: "Web Development Bootcamp",
    description: "Complete web development training from HTML basics to React, with hands-on projects each week.",
    icon: "Code2",
    color: "primary",
    weeks: fundamentalsWeeks,
  },
];
