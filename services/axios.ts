import axios from "axios";
import { User } from "../models/User";
const urlBase: string = "https://reqres.in/api/login";
export default async function axiosFetch(user: User) {
  try {
    const response = await axios({
      url: urlBase,
      method: "POST",
      data: user,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}
