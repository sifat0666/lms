import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { createUser } from "../../utils/fetcher";
import { object, string } from "zod";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";

type Inputs = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const createUserSchema = object({
  password: string()
    .min(6, "Password too short - should be 6 chars minimum")
    .nonempty({
      message: "Password is required",
    }),
  name: string().min(2, "name too short - should be 2 chars minimum").nonempty({
    message: "name is required",
  }),
  passwordConfirmation: string().nonempty({
    message: "passwordConfirmation is required",
  }),
  email: string({
    required_error: "Email is required",
  })
    .email("Not a valid email")
    .nonempty({
      message: "Password is required",
    }),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "Passwords do not match",
  path: ["passwordConfirmation"],
});

const register = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (newUser) => {
      return axios.post("/api/auth/register", newUser);
    },
    onError: () => {
      toast.error("unexpected error occured");
    },
    onSuccess: (data) => {
      console.log(data.data.message);
      if (data.data.message === "user already exists") {
        toast.success("email already used by another user");
      }
      if (data.data.message === "success") {
        toast.success("user Created successfully");
        router.push("/");
      }
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (value) => {
    mutation.mutate(value as any);
  };

  return (
    <div className="flex items-center justify-center pt-8 w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card bg-base-100 shadow-xl w-96 h-fit"
      >
        <div className="p-10">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name:</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Name..."
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label text-alt error">
                {errors.name?.message}
              </span>
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email:</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="text"
              placeholder="Email..."
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label text-alt error">
                {errors.email?.message}
              </span>
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password:</span>
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label text-alt error">
                {errors.password?.message}
              </span>
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Confirm Password:</span>
            </label>
            <input
              {...register("passwordConfirmation", { required: true })}
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label text-alt error">
                {errors.passwordConfirmation?.message}
              </span>
            </label>
          </div>
          <button
            className={`mt-3 btn btn-primary ${
              mutation.isLoading ? "loading items-center" : ""
            }`}
          >
            {mutation.isLoading ? "" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default register;
