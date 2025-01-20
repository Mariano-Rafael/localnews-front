import React, { useState, useEffect } from "react";
import { getNews } from "../../services/api";
import { NewsCard } from "../../components/NewsCard";

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadNews() {
      try {
        const newsData = await getNews();
        setNews(newsData || []); // Garante que news seja um array
      } catch (err) {
        setError(err);
        console.error("Erro ao carregar as notícias:", err);
      } finally {
        setLoading(false);
      }
    }
    loadNews();
  }, []);

  return (
    <div className="container mx-auto p-7">
      <h1 className="text-3xl font-bold mb-4">
        <br></br>
      </h1>
      {loading ? (
        <div className="text-center text-gray-600 py-4">
          Carregando notícias...
        </div>
      ) : error ? (
        <div className="text-center text-red-500 py-4">
          Erro ao carregar as notícias: {error.message}
        </div>
      ) : !news || news.length === 0 ? (
        <div className="text-center text-gray-600 py-4">
          Nenhuma notícia encontrada.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {news.map((newsItem) => (
            <NewsCard key={newsItem.id} news={newsItem} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
