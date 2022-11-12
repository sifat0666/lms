import axios from "axios";
import router from "next/router";
import toast from "react-hot-toast";

export const createUser = (value: any) => {
  return axios
    .post(`http://localhost:3000/api/auth/register`, value, {
      withCredentials: true,
    })
    .then((res) => {
      // console.log("res", res)
      const data = res.data;
      // console.log(data)
      if (data.message === "success") {
        // router.push("/");
        toast.success("succesfully created account");
      }
    })
    .then((err) => console.log("err", err));
};
