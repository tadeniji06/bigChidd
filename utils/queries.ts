import groq from "groq";

export const predictionsQuery = groq`
  *[_type == "prediction"]{
    _id,
    predictedWinner,
    comment,
    isCorrect,
    match->{
      _id,
      homeTeam,
      awayTeam,
      utcDate,
      status,
      finalResult
    }
  } | order(match.utcDate desc)
`;
