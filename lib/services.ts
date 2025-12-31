// ============================================
// FILE: lib/services.ts (MODIFIED FOR DUMMY DATA)
// Switch between dummy data and real API calls
// ============================================

import { fetchAPI, API_ENDPOINTS } from './api';
import { Project, Skill, BlogPost, ApiResponse } from './types';
import { dummyProjects, dummySkills, dummyBlogPosts } from './dummyData';

// Toggle this to switch between dummy data and real API
const USE_DUMMY_DATA = true;

// Simulate API delay for realistic behavior
const simulateDelay = (ms: number = 500) => 
  new Promise(resolve => setTimeout(resolve, ms));

// ============= Projects =============

export async function getProjects(): Promise<Project[]> {
  if (USE_DUMMY_DATA) {
    await simulateDelay();
    return dummyProjects;
  }
  
  const response = await fetchAPI<ApiResponse<Project[]>>(API_ENDPOINTS.PROJECTS);
  return response.data || [];
}

export async function getProjectById(id: string): Promise<Project> {
  if (USE_DUMMY_DATA) {
    await simulateDelay();
    const project = dummyProjects.find(p => p._id === id);
    if (!project) throw new Error('Project not found');
    return project;
  }
  
  const response = await fetchAPI<ApiResponse<Project>>(
    API_ENDPOINTS.PROJECT_BY_ID(id)
  );
  if (!response.data) throw new Error('Project not found');
  return response.data;
}

export async function createProject(data: Omit<Project, '_id' | 'createdAt' | 'updatedAt'>): Promise<Project> {
  if (USE_DUMMY_DATA) {
    await simulateDelay();
    const newProject: Project = {
      ...data,
      _id: `project_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    dummyProjects.unshift(newProject);
    return newProject;
  }
  
  const response = await fetchAPI<ApiResponse<Project>>(API_ENDPOINTS.PROJECTS, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  if (!response.data) throw new Error('Failed to create project');
  return response.data;
}

export async function updateProject(id: string, data: Partial<Project>): Promise<Project> {
  if (USE_DUMMY_DATA) {
    await simulateDelay();
    const index = dummyProjects.findIndex(p => p._id === id);
    if (index === -1) throw new Error('Project not found');
    
    dummyProjects[index] = {
      ...dummyProjects[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    return dummyProjects[index];
  }
  
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
  if (USE_DUMMY_DATA) {
    await simulateDelay();
    const index = dummyProjects.findIndex(p => p._id === id);
    if (index === -1) throw new Error('Project not found');
    dummyProjects.splice(index, 1);
    return;
  }
  
  await fetchAPI<ApiResponse<void>>(API_ENDPOINTS.PROJECT_BY_ID(id), {
    method: 'DELETE',
  });
}

// ============= Skills =============

export async function getSkills(): Promise<Skill[]> {
  if (USE_DUMMY_DATA) {
    await simulateDelay();
    return dummySkills;
  }
  
  const response = await fetchAPI<ApiResponse<Skill[]>>(API_ENDPOINTS.SKILLS);
  return response.data || [];
}

export async function getSkillById(id: string): Promise<Skill> {
  if (USE_DUMMY_DATA) {
    await simulateDelay();
    const skill = dummySkills.find(s => s._id === id);
    if (!skill) throw new Error('Skill not found');
    return skill;
  }
  
  const response = await fetchAPI<ApiResponse<Skill>>(
    API_ENDPOINTS.SKILL_BY_ID(id)
  );
  if (!response.data) throw new Error('Skill not found');
  return response.data;
}

export async function createSkill(data: Omit<Skill, '_id' | 'createdAt' | 'updatedAt'>): Promise<Skill> {
  if (USE_DUMMY_DATA) {
    await simulateDelay();
    const newSkill: Skill = {
      ...data,
      _id: `skill_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    dummySkills.push(newSkill);
    return newSkill;
  }
  
  const response = await fetchAPI<ApiResponse<Skill>>(API_ENDPOINTS.SKILLS, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  if (!response.data) throw new Error('Failed to create skill');
  return response.data;
}

export async function updateSkill(id: string, data: Partial<Skill>): Promise<Skill> {
  if (USE_DUMMY_DATA) {
    await simulateDelay();
    const index = dummySkills.findIndex(s => s._id === id);
    if (index === -1) throw new Error('Skill not found');
    
    dummySkills[index] = {
      ...dummySkills[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    return dummySkills[index];
  }
  
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
  if (USE_DUMMY_DATA) {
    await simulateDelay();
    const index = dummySkills.findIndex(s => s._id === id);
    if (index === -1) throw new Error('Skill not found');
    dummySkills.splice(index, 1);
    return;
  }
  
  await fetchAPI<ApiResponse<void>>(API_ENDPOINTS.SKILL_BY_ID(id), {
    method: 'DELETE',
  });
}

// ============= Blog Posts =============

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (USE_DUMMY_DATA) {
    await simulateDelay();
    return dummyBlogPosts;
  }
  
  const response = await fetchAPI<ApiResponse<BlogPost[]>>(API_ENDPOINTS.BLOG_POSTS);
  return response.data || [];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  if (USE_DUMMY_DATA) {
    await simulateDelay();
    const post = dummyBlogPosts.find(p => p.slug === slug);
    if (!post) throw new Error('Blog post not found');
    return post;
  }
  
  const response = await fetchAPI<ApiResponse<BlogPost>>(
    API_ENDPOINTS.BLOG_POST_BY_SLUG(slug)
  );
  if (!response.data) throw new Error('Blog post not found');
  return response.data;
}

export async function createBlogPost(data: Omit<BlogPost, '_id' | 'createdAt' | 'updatedAt'>): Promise<BlogPost> {
  if (USE_DUMMY_DATA) {
    await simulateDelay();
    const newPost: BlogPost = {
      ...data,
      _id: `post_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    dummyBlogPosts.unshift(newPost);
    return newPost;
  }
  
  const response = await fetchAPI<ApiResponse<BlogPost>>(API_ENDPOINTS.BLOG_POSTS, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  if (!response.data) throw new Error('Failed to create blog post');
  return response.data;
}

export async function updateBlogPost(id: string, data: Partial<BlogPost>): Promise<BlogPost> {
  if (USE_DUMMY_DATA) {
    await simulateDelay();
    const index = dummyBlogPosts.findIndex(p => p._id === id);
    if (index === -1) throw new Error('Blog post not found');
    
    dummyBlogPosts[index] = {
      ...dummyBlogPosts[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    return dummyBlogPosts[index];
  }
  
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
  if (USE_DUMMY_DATA) {
    await simulateDelay();
    const index = dummyBlogPosts.findIndex(p => p._id === id);
    if (index === -1) throw new Error('Blog post not found');
    dummyBlogPosts.splice(index, 1);
    return;
  }
  
  await fetchAPI<ApiResponse<void>>(API_ENDPOINTS.BLOG_POST_BY_SLUG(id), {
    method: 'DELETE',
  });
}

// ============= Authentication =============

export async function login(email: string, password: string): Promise<{ token: string; user: any }> {
  if (USE_DUMMY_DATA) {
    await simulateDelay();
    
    // Dummy authentication - accept any email/password
    const dummyToken = 'dummy_jwt_token_' + Date.now();
    const dummyUser = {
      _id: 'admin_1',
      email: email,
      name: 'Admin User',
      role: 'admin'
    };
    
    localStorage.setItem('token', dummyToken);
    
    return { token: dummyToken, user: dummyUser };
  }
  
  const response = await fetchAPI<ApiResponse<{ token: string; user: any }>>(
    API_ENDPOINTS.LOGIN,
    {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }
  );
  
  if (!response.data) throw new Error('Login failed');
  localStorage.setItem('token', response.data.token);
  
  return response.data;
}

export async function logout(): Promise<void> {
  if (USE_DUMMY_DATA) {
    await simulateDelay();
    localStorage.removeItem('token');
    return;
  }
  
  localStorage.removeItem('token');
  await fetchAPI<ApiResponse<void>>(API_ENDPOINTS.LOGOUT, {
    method: 'POST',
  });
}

export async function getCurrentUser(): Promise<any> {
  if (USE_DUMMY_DATA) {
    await simulateDelay();
    
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Not authenticated');
    
    return {
      _id: 'admin_1',
      email: 'admin@example.com',
      name: 'Admin User',
      role: 'admin'
    };
  }
  
  const response = await fetchAPI<ApiResponse<any>>(API_ENDPOINTS.ME);
  return response.data;
}

// ADD THIS TO THE END OF YOUR EXISTING lib/services.ts FILE

// ============= Contact Form =============

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const response = await fetchAPI<ApiResponse<void>>(
    `${API_ENDPOINTS.CONTACT}`,
    {
      method: 'POST',
      body: JSON.stringify(data),
    }
  );
  
  if (!response.success) {
    throw new Error(response.error || 'Failed to send message');
  }
}