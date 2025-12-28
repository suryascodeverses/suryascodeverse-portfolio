// API Configuration for connecting to Node.js + Express backend

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  // Auth
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  ME: `${API_BASE_URL}/auth/me`,

  // Projects
  PROJECTS: `${API_BASE_URL}/projects`,
  PROJECT_BY_ID: (id: string) => `${API_BASE_URL}/projects/${id}`,

  // Skills
  SKILLS: `${API_BASE_URL}/skills`,
  SKILL_BY_ID: (id: string) => `${API_BASE_URL}/skills/${id}`,

  // Blog
  BLOG_POSTS: `${API_BASE_URL}/blog`,
  BLOG_POST_BY_SLUG: (slug: string) => `${API_BASE_URL}/blog/${slug}`,
};

// Helper function for API calls
export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options?.headers,
  };

  const response = await fetch(endpoint, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Network error' }));
    throw new Error(error.message || 'API request failed');
  }

  return response.json();
}

export default API_ENDPOINTS;