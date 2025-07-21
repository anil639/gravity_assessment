const STORAGE_KEY = "todos";

// load and save todos to localStorage
export const loadTodos = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

export const saveTodos = (todos) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error("Failed to save todos:", error);
  }
};
