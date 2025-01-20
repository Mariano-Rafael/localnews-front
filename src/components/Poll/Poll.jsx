import React, { useState, useContext } from "react";
import { CommentBox } from "../CommentBox";
import { AuthContext } from "../../context/AuthContext";

function Poll({ poll }) {
  const { userId, username } = useContext(AuthContext);
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

      setVoted(true);
    } catch (err) {
      setError(err);
    }
  };

  if (!poll) {
    return <div>Enquete não encontrada.</div>;
  }

  if (!userId) {
    return (
      <div>Você precisa estar logado para interagir com esta enquete.</div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-4">
      <h2 className="p-3 text-center text-xl">{poll.question}</h2>
      <div className="flex space-x-4 align-middle justify-center">
        {poll.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleVote(option.id)}
            disabled={voted}
            className={`bg-gray-300 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded ${
              voted ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {option.optionText} ({option.votes})
          </button>
        ))}
      </div>
      {error && <p className="text-red-500 mt-2">Erro: {error.message}</p>}
      {voted && (
        <p className="text-green-500 mt-2 text-center justify-center">
          Obrigado por votar!
        </p>
      )}
      {}
      <CommentBox pollId={poll.id} userId={userId} username={username} />
    </div>
  );
}

export default Poll;
