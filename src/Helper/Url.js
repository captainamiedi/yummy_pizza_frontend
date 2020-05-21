export const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://yummi-pizza-backend.herokuapp.com/"
    : "http://localhost:8000/";