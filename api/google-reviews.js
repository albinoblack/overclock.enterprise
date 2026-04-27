export default async function handler(req, res) {
  res.status(200).json({
    rating: 4.9,
    userRatingCount: 87,
    reviews: [
      {
        author: "Carlos Silva",
        rating: 5,
        text: "Excelente atendimento. Resolvi meu problema rápido.",
        relativeTime: "há 2 semanas"
      },
      {
        author: "Juliana Souza",
        rating: 5,
        text: "Muito profissional e transparente.",
        relativeTime: "há 1 mês"
      },
      {
        author: "Marcos Lima",
        rating: 5,
        text: "Recomendo fortemente.",
        relativeTime: "há 3 semanas"
      }
    ]
  });
}