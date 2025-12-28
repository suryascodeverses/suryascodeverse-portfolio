// API Service Functions
// These functions call your Node.js + Express backend

import { fetchAPI, API_ENDPOINTS } from './api';
import { Project, Skill, BlogPost, ApiResponse } from './types';

// ============= Projects =============
export async function getProjects(): Promise<Project[]> {
  const response = await fetchAPI<ApiResponse<Project[]>>(API_ENDPOINTS.PROJECTS);
  return response.data || [];
}

export async function getProjectById(id: string): Promise<Project> {
  const response = await fetchAPI<ApiResponse<Project>>(
    API_ENDPOINTS.PROJECT_BY_ID(id)
  );
  if (!response.data) throw new Error('Project not found');
  return response.data;
}

export async function createProject(data: Omit<Project, '_id' | 'createdAt' | 'updatedAt'>): Promise<Project> {
  const response = await fetchAPI<ApiResponse<Project>>(API_ENDPOINTS.PROJECTS, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  if (!response.data) throw new Error('Failed to create project');
  return response.data;
}

export async function updateProject(id: string, data: Partial<Project>): Promise<Project> {
  const response = await fetchAPI<ApiResponse<Project>>(
    API_ENDPOINTS.PROJECT_BY_ID(id),
    {
      method: 'PUT',
      body: JSON.stringify(data),
    }
  );
  if (!response.data) throw new Error('Failed to update project');
  return response.data;
}

export async function deleteProject(id: string): Promise<void> {
  await fetchAPI<ApiResponse<void>>(API_ENDPOINTS.PROJECT_BY_ID(id), {
    method: 'DELETE',
  });
}

// ============= Skills =============
export async function getSkills(): Promise<Skill[]> {
  const response = await fetchAPI<ApiResponse<Skill[]>>(API_ENDPOINTS.SKILLS);
  return response.data || [];
}

export async function getSkillById(id: string): Promise<Skill> {
  const response = await fetchAPI<ApiResponse<Skill>>(
    API_ENDPOINTS.SKILL_BY_ID(id)
  );
  if (!response.data) throw new Error('Skill not found');
  return response.data;
}

export async function createSkill(data: Omit<Skill, '_id' | 'createdAt' | 'updatedAt'>): Promise<Skill> {
  const response = await fetchAPI<ApiResponse<Skill>>(API_ENDPOINTS.SKILLS, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  if (!response.data) throw new Error('Failed to create skill');
  return response.data;
}

export async function updateSkill(id: string, data: Partial<Skill>): Promise<Skill> {
  const response = await fetchAPI<ApiResponse<Skill>>(
    API_ENDPOINTS.SKILL_BY_ID(id),
    {
      method: 'PUT',
      body: JSON.stringify(data),
    }
  );
  if (!response.data) throw new Error('Failed to update skill');
  return response.data;
}

export async function deleteSkill(id: string): Promise<void> {
  await fetchAPI<ApiResponse<void>>(API_ENDPOINTS.SKILL_BY_ID(id), {
    method: 'DELETE',
  });
}

// ============= Blog Posts =============
export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await fetchAPI<ApiResponse<BlogPost[]>>(API_ENDPOINTS.BLOG_POSTS);
  return response.data || [];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  const response = await fetchAPI<ApiResponse<BlogPost>>(
    API_ENDPOINTS.BLOG_POST_BY_SLUG(slug)
  );
  if (!response.data) throw new Error('Blog post not found');
  return response.data;
}

export async function createBlogPost(data: Omit<BlogPost, '_id' | 'createdAt' | 'updatedAt'>): Promise<BlogPost> {
  const response = await fetchAPI<ApiResponse<BlogPost>>(API_ENDPOINTS.BLOG_POSTS, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  if (!response.data) throw new Error('Failed to create blog post');
  return response.data;
}

export async function updateBlogPost(id: string, data: Partial<BlogPost>): Promise<BlogPost> {
  const response = await fetchAPI<ApiResponse<BlogPost>>(
    API_ENDPOINTS.BLOG_POST_BY_SLUG(id),
    {
      method: 'PUT',
      body: JSON.stringify(data),
    }
  );
  if (!response.data) throw new Error('Failed to update blog post');
  return response.data;
}

export async function deleteBlogPost(id: string): Promise<void> {
  await fetchAPI<ApiResponse<void>>(API_ENDPOINTS.BLOG_POST_BY_SLUG(id), {
    method: 'DELETE',
  });
}

// ============= Authentication =============
export async function login(email: string, password: string): Promise<{ token: string; user: any }> {
  const response = await fetchAPI<ApiResponse<{ token: string; user: any }>>(
    API_ENDPOINTS.LOGIN,
    {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }
  );
  
  if (!response.data) throw new Error('Login failed');
  
  // Store token
  localStorage.setItem('token', response.data.token);
  
  return response.data;
}

export async function logout(): Promise<void> {
  localStorage.removeItem('token');
  await fetchAPI<ApiResponse<void>>(API_ENDPOINTS.LOGOUT, {
    method: 'POST',
  });
}

export async function getCurrentUser(): Promise<any> {
  const response = await fetchAPI<ApiResponse<any>>(API_ENDPOINTS.ME);
  return response.data;
}