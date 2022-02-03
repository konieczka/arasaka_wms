import apiCall from "utils/api";

export const validateName = async (nameInput: string) => {
  if (!nameInput) {
    return "Name field cannot be empty.";
  }

  if (nameInput.length < 5) {
    return "Name field has to be minimum 5 characters long.";
  }

  const isDuplicate = await apiCall(
    `/Products/count?where={"name":"${nameInput
      .replace(/ /g, "+")
      .toLowerCase()}"}
      `,
    { method: "GET" }
  )
    .then((response) => response.json())
    .then((data) => data.count !== 0);

  if (isDuplicate) {
    return "Name is not unique";
  }

  return "";
};

export const validateEmail = (emailInput: string) => {
  if (!emailInput) {
    return "Email field cannot be empty";
  }

  if (
    !String(emailInput)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return "Email is not valid. Please provide a valid email address.";
  }

  return "";
};
