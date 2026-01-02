// ============================================
// FILE: lib/dummyData.ts
// Dummy data for development until backend is ready
// ============================================

import { Project, Skill, BlogPost } from "./types";

// ============================================
// PROJECTS DUMMY DATA
// ============================================

export const dummyProjects: Project[] = [
  {
    _id: "1",
    title: "E-Commerce Platform",
    category: "Web App",
    description:
      "A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built with microservices architecture for scalability.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
  },
  {
    _id: "2",
    title: "AI-Powered Task Manager",
    category: "Web App",
    description:
      "Smart task management app with AI-driven priority suggestions, natural language processing for task creation, and predictive analytics for deadline estimation.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    technologies: ["React", "Python", "FastAPI", "TensorFlow", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/ai-task-manager",
    liveUrl: "https://taskmanager-ai.netlify.app",
    featured: true,
    createdAt: "2024-02-10T10:00:00Z",
    updatedAt: "2024-02-10T10:00:00Z",
  },
  {
    _id: "3",
    title: "Real-Time Collaboration Tool",
    category: "Web App",
    description:
      "WebSocket-based collaboration platform for teams with live cursors, real-time document editing, video conferencing, and project management features.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    technologies: ["Vue.js", "Socket.io", "Express", "WebRTC", "Docker"],
    githubUrl: "https://github.com/yourusername/collab-tool",
    liveUrl: "https://collab-demo.com",
    featured: true,
    createdAt: "2024-03-05T10:00:00Z",
    updatedAt: "2024-03-05T10:00:00Z",
  },
  {
    _id: "4",
    title: "Social Media Analytics Dashboard",
    category: "Web App",
    description:
      "Comprehensive analytics dashboard for tracking social media metrics across multiple platforms with data visualization and automated reporting.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: ["React", "D3.js", "Node.js", "GraphQL", "MongoDB"],
    githubUrl: "https://github.com/yourusername/social-analytics",
    featured: false,
    createdAt: "2024-04-20T10:00:00Z",
    updatedAt: "2024-04-20T10:00:00Z",
  },
  {
    _id: "5",
    title: "Fitness Tracking Mobile App",
    category: "Web App",
    description:
      "Cross-platform mobile app for workout tracking, meal planning, and progress visualization with integration to wearable devices.",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    technologies: ["React Native", "Firebase", "Redux", "Node.js", "Express"],
    githubUrl: "https://github.com/yourusername/fitness-tracker",
    liveUrl: "https://apps.apple.com/fitness-tracker",
    featured: false,
    createdAt: "2024-05-12T10:00:00Z",
    updatedAt: "2024-05-12T10:00:00Z",
  },
  {
    _id: "6",
    title: "Video Streaming Platform",
    category: "Web App",
    description:
      "Netflix-style video streaming service with content recommendation engine, user profiles, and adaptive bitrate streaming.",
    image:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80",
    technologies: ["Next.js", "AWS S3", "CloudFront", "MongoDB", "FFmpeg"],
    githubUrl: "https://github.com/yourusername/video-platform",
    liveUrl: "https://streamflix-demo.com",
    featured: false,
    createdAt: "2024-06-08T10:00:00Z",
    updatedAt: "2024-06-08T10:00:00Z",
  },
];

// ============================================
// SKILLS DUMMY DATA
// ============================================

export const dummySkills: Skill[] = [
  // Frontend
  {
    _id: "s1",
    name: "React",
    category: "Frontend",
    proficiency: 95,
    icon: "⚛️",
    order: 1,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
  },
  {
    _id: "s2",
    name: "Next.js",
    category: "Frontend",
    proficiency: 90,
    icon: "▲",
    order: 2,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
  },
  {
    _id: "s3",
    name: "TypeScript",
    category: "Frontend",
    proficiency: 92,
    icon: "📘",
    order: 3,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
  },
  {
    _id: "s4",
    name: "Vue.js",
    category: "Frontend",
    proficiency: 85,
    icon: "🟢",
    order: 4,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
  },
  {
    _id: "s5",
    name: "Tailwind CSS",
    category: "Frontend",
    proficiency: 88,
    icon: "🎨",
    order: 5,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
  },
  {
    _id: "s6",
    name: "Three.js",
    category: "Frontend",
    proficiency: 75,
    icon: "🎮",
    order: 6,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
  },

  // Backend
  {
    _id: "s7",
    name: "Node.js",
    category: "Backend",
    proficiency: 93,
    icon: "🟩",
    order: 7,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
  },
  {
    _id: "s8",
    name: "Express",
    category: "Backend",
    proficiency: 90,
    icon: "🚂",
    order: 8,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
  },
  {
    _id: "s9",
    name: "Python",
    category: "Backend",
    proficiency: 87,
    icon: "🐍",
    order: 9,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
  },
  {
    _id: "s10",
    name: "MongoDB",
    category: "Backend",
    proficiency: 89,
    icon: "🍃",
    order: 10,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
  },
  {
    _id: "s11",
    name: "PostgreSQL",
    category: "Backend",
    proficiency: 85,
    icon: "🐘",
    order: 11,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
  },
  {
    _id: "s12",
    name: "GraphQL",
    category: "Backend",
    proficiency: 82,
    icon: "◈",
    order: 12,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
  },

  // DevOps
  {
    _id: "s13",
    name: "Docker",
    category: "DevOps",
    proficiency: 88,
    icon: "🐳",
    order: 13,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
  },
  {
    _id: "s14",
    name: "AWS",
    category: "DevOps",
    proficiency: 86,
    icon: "☁️",
    order: 14,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
  },
  {
    _id: "s15",
    name: "CI/CD",
    category: "DevOps",
    proficiency: 84,
    icon: "🔄",
    order: 15,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
  },
  {
    _id: "s16",
    name: "Kubernetes",
    category: "DevOps",
    proficiency: 78,
    icon: "⎈",
    order: 16,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
  },
  {
    _id: "s17",
    name: "GitHub Actions",
    category: "DevOps",
    proficiency: 85,
    icon: "⚙️",
    order: 17,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
  },
  {
    _id: "s18",
    name: "Nginx",
    category: "DevOps",
    proficiency: 80,
    icon: "🌐",
    order: 18,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
  },
];

// ============================================
// BLOG POSTS DUMMY DATA
// ============================================

export const dummyBlogPosts: BlogPost[] = [
  {
    _id: "b1",
    title: "Building Scalable Microservices with Node.js",
    slug: "building-scalable-microservices-nodejs",
    excerpt:
      "Learn how to architect and build microservices that can handle millions of requests using Node.js, Docker, and Kubernetes.",
    content: `
      <h2>Introduction</h2>
      <p>Microservices architecture has become the go-to pattern for building scalable applications. In this comprehensive guide, we'll explore how to build production-ready microservices using Node.js.</p>
      
      <h2>Why Microservices?</h2>
      <p>Microservices offer several advantages over monolithic architecture:</p>
      <ul>
        <li>Independent deployment and scaling</li>
        <li>Technology diversity</li>
        <li>Fault isolation</li>
        <li>Easier to understand and maintain</li>
      </ul>

      <h2>Core Principles</h2>
      <p>When building microservices, keep these principles in mind:</p>
      <ol>
        <li><strong>Single Responsibility</strong>: Each service should do one thing well</li>
        <li><strong>Loose Coupling</strong>: Services should be independent</li>
        <li><strong>High Cohesion</strong>: Related functionality should be together</li>
      </ol>

      <h2>Implementation with Node.js</h2>
      <p>Let's build a simple user service:</p>
      <pre><code>
const express = require('express');
const app = express();

app.get('/users/:id', async (req, res) => {
  const user = await getUserFromDB(req.params.id);
  res.json(user);
});

app.listen(3000);
      </code></pre>

      <h2>Containerization with Docker</h2>
      <p>Docker allows us to package our services consistently:</p>
      <pre><code>
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
CMD ["node", "server.js"]
      </code></pre>

      <h2>Orchestration with Kubernetes</h2>
      <p>Kubernetes helps manage our containerized services at scale. Here's a basic deployment:</p>
      <pre><code>
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
      - name: user-service
        image: user-service:latest
        ports:
        - containerPort: 3000
      </code></pre>

      <h2>Best Practices</h2>
      <ul>
        <li>Implement health checks for monitoring</li>
        <li>Use API gateways for routing</li>
        <li>Implement circuit breakers for fault tolerance</li>
        <li>Use message queues for async communication</li>
        <li>Monitor everything with proper logging</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Microservices architecture is powerful but comes with complexity. Start small, measure everything, and scale gradually. With Node.js, Docker, and Kubernetes, you have all the tools needed to build world-class microservices.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80",
    tags: ["Node.js", "Microservices", "Docker", "Kubernetes", "Architecture"],
    published: true,
    publishedAt: "2024-11-15T10:00:00Z",
    createdAt: "2024-11-14T10:00:00Z",
    updatedAt: "2024-11-15T10:00:00Z",
  },
  {
    _id: "b2",
    title: "Mastering React Hooks: Advanced Patterns",
    slug: "mastering-react-hooks-advanced-patterns",
    excerpt:
      "Dive deep into advanced React Hooks patterns including custom hooks, useReducer, and performance optimization techniques.",
    content: `
      <h2>Beyond useState and useEffect</h2>
      <p>While useState and useEffect are the most commonly used hooks, React offers a rich ecosystem of hooks for advanced use cases.</p>

      <h2>Custom Hooks: Reusable Logic</h2>
      <p>Custom hooks allow you to extract component logic into reusable functions:</p>
      <pre><code>
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
      </code></pre>

      <h2>useReducer: Complex State Management</h2>
      <p>For complex state logic, useReducer is often preferable to useState:</p>
      <pre><code>
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
      </code></pre>

      <h2>Performance Optimization</h2>
      <p>Use useMemo and useCallback to optimize expensive computations and prevent unnecessary re-renders:</p>
      <pre><code>
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
      </code></pre>

      <h2>useContext: Avoid Prop Drilling</h2>
      <p>Context provides a way to pass data through the component tree without prop drilling:</p>
      <pre><code>
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Toolbar</div>;
}
      </code></pre>

      <h2>Conclusion</h2>
      <p>React Hooks provide a powerful way to manage state and side effects. Master these patterns to write cleaner, more maintainable React code.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80",
    tags: ["React", "Hooks", "JavaScript", "Performance", "Frontend"],
    published: true,
    publishedAt: "2024-11-20T10:00:00Z",
    createdAt: "2024-11-19T10:00:00Z",
    updatedAt: "2024-11-20T10:00:00Z",
  },
  {
    _id: "b3",
    title: "Database Design Best Practices for Modern Applications",
    slug: "database-design-best-practices",
    excerpt:
      "Essential database design principles for building scalable, maintainable applications with SQL and NoSQL databases.",
    content: `
      <h2>The Foundation of Great Applications</h2>
      <p>A well-designed database is crucial for application performance, scalability, and maintainability.</p>

      <h2>Normalization vs Denormalization</h2>
      <p><strong>Normalization</strong> reduces data redundancy but can impact performance. <strong>Denormalization</strong> trades storage for query speed.</p>

      <h3>When to Normalize:</h3>
      <ul>
        <li>Data changes frequently</li>
        <li>Storage is expensive</li>
        <li>Data integrity is critical</li>
      </ul>

      <h3>When to Denormalize:</h3>
      <ul>
        <li>Read performance is critical</li>
        <li>Data rarely changes</li>
        <li>Complex joins are expensive</li>
      </ul>

      <h2>Indexing Strategies</h2>
      <p>Proper indexing can dramatically improve query performance:</p>
      <pre><code>
-- Create index on frequently queried columns
CREATE INDEX idx_user_email ON users(email);

-- Composite index for multi-column queries
CREATE INDEX idx_order_user_date ON orders(user_id, created_at);

-- Partial index for specific conditions
CREATE INDEX idx_active_users ON users(email) WHERE active = true;
      </code></pre>

      <h2>SQL vs NoSQL: Choosing the Right Database</h2>
      <p><strong>Use SQL when:</strong></p>
      <ul>
        <li>You need ACID transactions</li>
        <li>Data structure is well-defined</li>
        <li>Complex queries and joins are common</li>
      </ul>

      <p><strong>Use NoSQL when:</strong></p>
      <ul>
        <li>Schema is flexible or evolving</li>
        <li>Horizontal scaling is required</li>
        <li>Working with unstructured data</li>
      </ul>

      <h2>MongoDB Schema Design</h2>
      <pre><code>
// Embedded documents for one-to-few relationships
{
  _id: ObjectId("..."),
  name: "John Doe",
  addresses: [
    { street: "123 Main St", city: "NYC" },
    { street: "456 Oak Ave", city: "LA" }
  ]
}

// References for one-to-many relationships
{
  _id: ObjectId("..."),
  name: "John Doe",
  orderIds: [ObjectId("..."), ObjectId("...")]
}
      </code></pre>

      <h2>Performance Tips</h2>
      <ol>
        <li>Use appropriate data types</li>
        <li>Avoid SELECT * in production</li>
        <li>Implement pagination for large datasets</li>
        <li>Use connection pooling</li>
        <li>Monitor slow queries</li>
        <li>Consider caching strategies</li>
      </ol>

      <h2>Conclusion</h2>
      <p>Good database design requires understanding your application's access patterns, scaling needs, and data relationships. Choose the right tool for the job and optimize iteratively.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&q=80",
    tags: ["Database", "SQL", "MongoDB", "Architecture", "Performance"],
    published: true,
    publishedAt: "2024-12-01T10:00:00Z",
    createdAt: "2024-11-30T10:00:00Z",
    updatedAt: "2024-12-01T10:00:00Z",
  },
  {
    _id: "b4",
    title: "Deploying Next.js Apps to AWS: Complete Guide",
    slug: "deploying-nextjs-aws-complete-guide",
    excerpt:
      "Step-by-step guide to deploying Next.js applications on AWS using EC2, S3, CloudFront, and Lambda.",
    content: `
      <h2>AWS Deployment Options for Next.js</h2>
      <p>AWS offers multiple ways to deploy Next.js applications, each with different trade-offs.</p>

      <h2>Option 1: Vercel (Easiest)</h2>
      <p>While not AWS, Vercel is the simplest deployment option for Next.js:</p>
      <pre><code>
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
      </code></pre>

      <h2>Option 2: AWS Amplify</h2>
      <p>AWS Amplify provides similar simplicity with AWS integration:</p>
      <pre><code>
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
      </code></pre>

      <h2>Option 3: EC2 + PM2 (Full Control)</h2>
      <p>For maximum control, deploy to EC2 with PM2 process manager:</p>
      <pre><code>
# On EC2 instance
npm run build
pm2 start npm --name "nextjs-app" -- start
pm2 startup
pm2 save
      </code></pre>

      <h2>Option 4: Lambda + API Gateway (Serverless)</h2>
      <p>Use Serverless Framework for Lambda deployment:</p>
      <pre><code>
# serverless.yml
service: nextjs-app

provider:
  name: aws
  runtime: nodejs18.x

functions:
  app:
    handler: lambda.handler
    events:
      - http: ANY /
      - http: ANY /{proxy+}
      </code></pre>

      <h2>Setting Up CloudFront CDN</h2>
      <p>CloudFront dramatically improves global performance:</p>
      <ol>
        <li>Create CloudFront distribution</li>
        <li>Point origin to your deployment</li>
        <li>Configure caching behaviors</li>
        <li>Add custom domain and SSL certificate</li>
      </ol>

      <h2>CI/CD with GitHub Actions</h2>
      <pre><code>
name: Deploy to AWS

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to AWS
        run: |
          npm ci
          npm run build
          aws s3 sync ./out s3://my-bucket
      </code></pre>

      <h2>Monitoring and Logging</h2>
      <p>Use CloudWatch for monitoring:</p>
      <ul>
        <li>Set up CloudWatch Logs</li>
        <li>Configure CloudWatch Alarms</li>
        <li>Monitor Lambda metrics</li>
        <li>Track error rates</li>
      </ul>

      <h2>Conclusion</h2>
      <p>AWS provides flexible deployment options for Next.js. Choose based on your scaling needs, budget, and technical requirements.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    tags: ["Next.js", "AWS", "Deployment", "DevOps", "Cloud"],
    published: true,
    publishedAt: "2024-12-10T10:00:00Z",
    createdAt: "2024-12-09T10:00:00Z",
    updatedAt: "2024-12-10T10:00:00Z",
  },
  {
    _id: "b5",
    title: "TypeScript Advanced Types and Patterns",
    slug: "typescript-advanced-types-patterns",
    excerpt:
      "Master advanced TypeScript features including generics, conditional types, mapped types, and type guards.",
    content: `
      <h2>Beyond Basic Types</h2>
      <p>TypeScript's type system is incredibly powerful. Let's explore advanced features that make your code more robust.</p>

      <h2>Generics: Type-Safe Reusability</h2>
      <pre><code>
function identity<T>(arg: T): T {
  return arg;
}

// Generic constraints
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// Generic interfaces
interface Repository<T> {
  find(id: string): Promise<T>;
  save(item: T): Promise<T>;
  delete(id: string): Promise<void>;
}
      </code></pre>

      <h2>Utility Types</h2>
      <p>TypeScript provides built-in utility types:</p>
      <pre><code>
// Partial - makes all properties optional
type PartialUser = Partial<User>;

// Required - makes all properties required
type RequiredUser = Required<User>;

// Pick - select specific properties
type UserPreview = Pick<User, 'id' | 'name'>;

// Omit - exclude specific properties
type UserWithoutPassword = Omit<User, 'password'>;

// Record - create object type with specific keys
type RolePermissions = Record<'admin' | 'user', string[]>;
      </code></pre>

      <h2>Conditional Types</h2>
      <pre><code>
type IsString<T> = T extends string ? true : false;

// Practical example
type Flatten<T> = T extends Array<infer U> ? U : T;

type Num = Flatten<number[]>; // number
type Str = Flatten<string>;   // string
      </code></pre>

      <h2>Mapped Types</h2>
      <pre><code>
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

// Usage
type User = {
  id: string;
  name: string;
};

type ReadonlyUser = Readonly<User>;
type NullableUser = Nullable<User>;
      </code></pre>

      <h2>Type Guards</h2>
      <pre><code>
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function processValue(value: string | number) {
  if (isString(value)) {
    // TypeScript knows value is string here
    return value.toUpperCase();
  } else {
    // TypeScript knows value is number here
    return value.toFixed(2);
  }
}
      </code></pre>

      <h2>Discriminated Unions</h2>
      <pre><code>
type Success = {
  type: 'success';
  data: any;
};

type Error = {
  type: 'error';
  message: string;
};

type Result = Success | Error;

function handleResult(result: Result) {
  switch (result.type) {
    case 'success':
      console.log(result.data);
      break;
    case 'error':
      console.error(result.message);
      break;
  }
}
      </code></pre>

      <h2>Template Literal Types</h2>
      <p>Create dynamic string literal types:</p>
      <pre><code>
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type ApiEndpoint = \`/api/\${string}\`;

type HttpRequest = \`\${HttpMethod} \${ApiEndpoint}\`;

// Example usage
const request: HttpRequest = 'GET /api/users';
const request2: HttpRequest = 'POST /api/posts';
      </code></pre>

      <h2>Branded Types for Nominal Typing</h2>
      <pre><code>
// TypeScript is structurally typed, but you can simulate nominal typing
type UserId = string & { readonly brand: unique symbol };
type PostId = string & { readonly brand: unique symbol };

function createUserId(id: string): UserId {
  return id as UserId;
}

function createPostId(id: string): PostId {
  return id as PostId;
}

// Now TypeScript prevents mixing UserId and PostId
const userId: UserId = createUserId('123');
const postId: PostId = createPostId('456');
// userId = postId; // Error: Type mismatch
      </code></pre>

      <h2>Advanced Generic Patterns</h2>
      <pre><code>
// Default generic parameters
interface PaginatedResponse<T = any> {
  data: T[];
  page: number;
  total: number;
}

// Conditional generic constraints
type ExtractArrayType<T> = T extends (infer U)[] ? U : never;

// Recursive types
type Json =
  | string
  | number
  | boolean
  | null
  | Json[]
  | { [key: string]: Json };

// Conditional return types
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
      </code></pre>

      <h2>Type-Safe Event Emitters</h2>
      <pre><code>
type EventMap = {
  userCreated: { id: string; name: string };
  postPublished: { postId: string; authorId: string };
  error: { message: string; code: number };
};

class EventEmitter<T extends EventMap> {
  private listeners: {
    [K in keyof T]?: Array<(data: T[K]) => void>
  } = {};

  on<K extends keyof T>(event: K, listener: (data: T[K]) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]!.push(listener);
  }

  emit<K extends keyof T>(event: K, data: T[K]) {
    this.listeners[event]?.forEach(listener => listener(data));
  }
}
      </code></pre>

      <h2>Real-World Example: API Client</h2>
      <pre><code>
interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
}

class ApiClient {
  async get<T>(url: string): Promise<ApiResponse<T>> {
    const response = await fetch(url);
    return response.json();
  }

  async post<T, D>(url: string, data: D): Promise<ApiResponse<T>> {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
}

// Usage with type safety
const client = new ApiClient();
const userResponse = await client.get<User>('/api/users/123');
const createPost = await client.post<Post, Omit<Post, 'id'>>(
  '/api/posts',
  { title: 'Hello', content: 'World' }
);
      </code></pre>

      <h2>Testing Advanced Types</h2>
      <p>Use type-level testing with tools like tsd or expect-type:</p>
      <pre><code>
// Using expect-type
import { expectTypeOf } from 'expect-type';

describe('Type tests', () => {
  it('should infer correct types', () => {
    type User = { id: string; name: string };
    type PartialUser = Partial<User>;
    
    expectTypeOf<PartialUser>().toEqualTypeOf<{
      id?: string;
      name?: string;
    }>();
  });
});
      </code></pre>

      <h2>Performance Considerations</h2>
      <ul>
        <li>Deeply nested conditional types can slow down compilation</li>
        <li>Use <code>interface</code> for performance with large object types</li>
        <li>Complex mapped types increase memory usage</li>
        <li>Consider using <code>any</code> or <code>unknown</code> in performance-critical paths</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Advanced TypeScript features enable you to write more expressive, type-safe code. Start with generics and utility types, then explore conditional and mapped types as your needs grow. Always balance type safety with compilation performance.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&q=80",
    tags: ["TypeScript", "Advanced", "Types", "Patterns", "Development"],
    published: true,
    publishedAt: "2024-12-12T10:00:00Z",
    createdAt: "2024-12-11T10:00:00Z",
    updatedAt: "2024-12-12T10:00:00Z",
  },
];


// ============================================
// ANALYTICS DUMMY DATA
// ============================================

export const dummyAnalyticsData = {
  totalViews: 12543,
  recentViews: 3892,
  blogViews: 7234,
  projectViews: 5309,
  
  topBlogPosts: [
    { _id: 'b1', title: 'Building Scalable Microservices with Node.js', count: 1243 },
    { _id: 'b2', title: 'Mastering React Hooks: Advanced Patterns', count: 987 },
    { _id: 'b3', title: 'Database Design Best Practices', count: 756 },
    { _id: 'b4', title: 'Deploying Next.js Apps to AWS', count: 534 },
    { _id: 'b5', title: 'TypeScript Advanced Types and Patterns', count: 421 },
  ],
  
  topProjects: [
    { _id: '1', title: 'E-Commerce Platform', count: 892 },
    { _id: '2', title: 'AI-Powered Task Manager', count: 743 },
    { _id: '3', title: 'Real-Time Collaboration Tool', count: 567 },
    { _id: '4', title: 'Social Media Analytics Dashboard', count: 445 },
    { _id: '5', title: 'Video Streaming Platform', count: 334 },
  ],
  
  viewsByDay: [
    { _id: '2025-01-26', count: 234 },
    { _id: '2025-01-27', count: 289 },
    { _id: '2025-01-28', count: 312 },
    { _id: '2025-01-29', count: 267 },
    { _id: '2025-01-30', count: 345 },
    { _id: '2025-01-31', count: 298 },
    { _id: '2025-02-01', count: 356 },
    { _id: '2025-02-02', count: 401 },
    { _id: '2025-02-03', count: 378 },
    { _id: '2025-02-04', count: 423 },
    { _id: '2025-02-05', count: 389 },
    { _id: '2025-02-06', count: 445 },
    { _id: '2025-02-07', count: 412 },
    { _id: '2025-02-08', count: 467 },
    { _id: '2025-02-09', count: 434 },
    { _id: '2025-02-10', count: 489 },
    { _id: '2025-02-11', count: 456 },
    { _id: '2025-02-12', count: 501 },
    { _id: '2025-02-13', count: 478 },
    { _id: '2025-02-14', count: 523 },
    { _id: '2025-02-15', count: 498 },
    { _id: '2025-02-16', count: 534 },
    { _id: '2025-02-17', count: 512 },
    { _id: '2025-02-18', count: 567 },
    { _id: '2025-02-19', count: 543 },
    { _id: '2025-02-20', count: 589 },
    { _id: '2025-02-21', count: 612 },
    { _id: '2025-02-22', count: 634 },
    { _id: '2025-02-23', count: 598 },
    { _id: '2025-02-24', count: 623 },
  ],
};