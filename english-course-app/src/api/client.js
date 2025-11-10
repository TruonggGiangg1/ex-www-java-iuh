const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {})
    },
    ...options
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed with status ${response.status}`);
  }

  return response.json();
}

export const CourseApi = {
  getCourses() {
    return request('/courses');
  },
  getCourseById(slug) {
    return request(`/courses/${slug}`);
  },
  getCategories() {
    return request('/categories');
  },
  getLessons() {
    return request('/lessons');
  },
  getLessonById(slug) {
    return request(`/lessons/${slug}`);
  }
};

export default CourseApi;
