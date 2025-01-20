import React, { useState } from "react";

function Poll({ poll }) {
  // Agora recebe o objeto 'poll' diretamente
  const [voted, setVoted] = useState(false);
  const [error, setError] = useState(null);

  const handleVote = async (optionId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/poll-option/vote/${poll.id}/${optionId}`,
        {
          method: "POST",
        }
      );
      if (!response.ok) {
        throw new Error(`Erro ao votar: ${response.status}`);
      }

      // Atualiza os dados da enquete localmente após o voto
      setVoted(true);
    } catch (err) {
      setError(err);
    }
  };

  if (!poll) {
    return <div>Enquete não encontrada.</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-4">
      <h2>{poll.question}</h2>
      <ul>
        {poll.options.map((option) => (
          <li key={option.id} className="my-2">
            <button
              onClick={() => handleVote(option.id)}
              disabled={voted}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                voted ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {option.optionText} ({option.votes})
            </button>
          </li>
        ))}
      </ul>
      {error && <p className="text-red-500 mt-2">Erro: {error.message}</p>}
      {voted && <p className="text-green-500 mt-2">Obrigado por votar!</p>}
    </div>
  );
}

export default Poll;
