export const apiUrl =
  process.env.NODE_ENV === "production"
    ? "http://test.ansppb.an.gov.ng/"
    : "http://localhost:8000/";