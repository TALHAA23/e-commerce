import "../AdminUtils/form.css";
import { useMutation } from "@tanstack/react-query";
import loginUser from "../AdminUtils/login";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useIsUserAuthenticated } from "../../Context/UserProvider";

export default function Auth() {
  const navigate = useNavigate();
  const isAuthenticated = useIsUserAuthenticated();
  const { mutate, isPending, isSuccess, isError, error, data } = useMutation({
    mutationKey: ["auth"],
    mutationFn: handleSubmit,
  });
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const response = await loginUser(email, password);
    return response;
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/admin");
  }, [isAuthenticated]);

  useEffect(() => {
    isSuccess && navigate("/admin");
  }, [isSuccess]);

  return (
    <form
      onSubmit={mutate}
      className="form absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
    >
      <p className="form-title">Login to your account</p>
      {isPending && (
        <h2 className="text-center text-sm font-semibold my-2">Please Wait</h2>
      )}
      {isError && (
        <h2 className="text-center text-red-600 text-sm font-semibold my-2">
          {error.message}
        </h2>
      )}
      <div className="input-container">
        <input type="email" name="email" placeholder="Enter email" required />
        <span></span>
      </div>
      <div className="input-container">
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
      </div>
      <button
        type="submit"
        className="submit disabled:opacity-40"
        disabled={isPending}
      >
        {isPending ? "Proccssing" : "Login"}
      </button>
    </form>
  );
}
