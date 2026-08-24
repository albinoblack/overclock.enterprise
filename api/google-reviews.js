export default async function handler(req, res) {
  res.status(501).json({
    error: "Integração com avaliações ainda não configurada.",
    reviews: []
  });
}
