import React, { useState, useEffect } from "react";

function CommentBox({ pollId, userId, username }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/comments/poll/${pollId}`
        );
        if (!response.ok) {
          throw new Error(`Erro ao buscar comentários: ${response.status}`);
        }
        const data = await response.json();
        setComments(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchComments();
  }, [pollId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/comments/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          comment: newComment,
          userModel: { id: userId },
          pollModel: { id: pollId },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        try {
          const errorData = JSON.parse(errorText);
          throw new Error(
            `Erro ao criar comentário: ${response.status} - ${
              errorData.message || errorText
            }`
          );
        } catch (jsonError) {
          throw new Error(
            `Erro ao criar comentário: ${response.status} - ${errorText}`
          );
        }
      }

      const data = await response.json();

      setComments((prevComments) => [...prevComments, data]);
      setNewComment("");
      setError(null);
    } catch (error) {
      console.error("Erro ao criar comentário:", error);
      setError(error.message);
    }
  };

  return (
    <div className="container m-8 mx-auto w-4/5 max-w-3xl p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Comentários</h3>
      {error && <p className="text-red-500">{error.message}</p>}
      <ul>
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="mb-3 p-2 rounded bg-white max-w-5xl content-center"
          >
            <span className="font-semibold">{comment.username}: </span>
            {comment.comment}
            <br></br>
            <h4 className="text-xs">{comment.createdAt}</h4>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="mt-2">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full border rounded p-2 max-w-4xl"
          placeholder="Escreva seu comentário..."
        />
        <button
          type="submit"
          className="mt-2 bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default CommentBox;
