import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import CheckboxComponent from "../components/CheckboxComponent";
import { Link } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import { useState } from "react";

const LoginPage = () => {
  const [inputState, setInputState] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="overflow-auto w-full max-w-sm p-4 bg-lightmode-accent border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
          Sign in
        </h5>
        <h4 className="text-md font-medium text-gray-900 dark:text-white text-center">
          to continue to Anatolia
        </h4>
        <div>
          <InputComponent
            inputState={inputState.email}
            name={"email"}
            label={"E-mail"}
            id={"email"}
          ></InputComponent>
        </div>
        <div>
          <InputComponent
            inputState={inputState.password}
            name={"password"}
            label={"Password"}
            id={"password"}
          ></InputComponent>
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <CheckboxComponent label={"Remember me"} />
            </div>
          </div>
        </div>
        <ButtonComponent label={"Sign in"}></ButtonComponent>
        <div className="flex text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?
          <Link to={ROUTES.REGISTER}>
            <div className="ml-1 text-lightmode-pBtn hover:underline dark:text-lightmode-pBtn">
              Create account
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
