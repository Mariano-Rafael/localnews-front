const API_BASE_URL = "http://localhost:8080"; // URL do seu backend

export const getNews = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/main/main-news`); // Endpoint da sua API
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    throw error; // Re-lança o erro para ser tratado no componente
  }
};
