const apiBaseUrl = "https://onglnakbsy.cdprojektred.com:3000/api";

const apiCall = (path: string, options: any) =>
  fetch(`${apiBaseUrl}${path}`, options);

export const sendProduct = (
  productFields: {
    name: string;
    quantity: number;
    description: string;
    email: string;
    date: Date;
  },
  navigate: (path: string) => void
) => {
  apiCall("/Products", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productFields),
  })
    .then((response) => {
      if (response.ok) {
        navigate("/success");
      } else {
        navigate("/failure");
      }
    })
    .catch((e) => navigate("/failure"));
};

export const deleteProduct = (
  productId: number,
  navigate: (path: string) => void
) => {
  apiCall(`/Products/${productId}`, { method: "DELETE" })
    .then((response) => {
      if (response.ok) {
        navigate("/success");
      } else {
        navigate("/failure");
      }
    })
    .catch((e) => navigate("/failure"));
};

export default apiCall;
