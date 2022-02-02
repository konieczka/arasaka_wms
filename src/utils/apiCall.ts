const apiBaseUrl = "http://onglnakbsy.cdprojektred.com:3000/api";

const apiCall = (path: string, options: any) =>
  fetch(`${apiBaseUrl}${path}`, options);

export default apiCall;

//   {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(productFields),
//   }
