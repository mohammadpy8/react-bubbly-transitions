import { localStorageServicesTypes } from "../@types/localStorage/locaStorageTypes";

const localStorageServices = (
  type: string,
  data: localStorageServicesTypes
) => {
  switch (type) {
    case "SETITEM":
      return localStorage.setItem("todo", JSON.stringify(data) as string);
    case "GETITEM":
      return JSON.parse(localStorage.getItem("todo") as string);
    case "REMOVEITEM":
      return localStorage.removeItem("todo");
    default:
      throw new Error("todo is not supported");
  }
};

export default localStorageServices;
