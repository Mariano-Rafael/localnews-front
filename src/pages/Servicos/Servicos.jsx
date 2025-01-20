import React, { useState, useEffect } from "react";
import { Poll } from "../../components/Poll";

function Servicos() {
  const [polls, setPolls] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPolls = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("http://localhost:8080/polls/info");
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        const data = await response.json();
        setPolls(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPolls();
  }, []);

  if (loading) {
    return <div>Carregando enquetes...</div>;
  }

  if (error) {
    return <div>Erro ao carregar enquetes: {error.message}</div>;
  }

  if (!polls || polls.length === 0) {
    return <div>Nenhuma enquete ativa no momento.</div>;
  }

  return (
    <div>
      <h1>Serviços</h1>
      <h2>Enquetes</h2>
      {polls.map((poll) => (
        <Poll key={poll.id} poll={poll} />
      ))}
    </div>
  );
}

export default Servicos;
