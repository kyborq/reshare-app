import { useForm } from "react-hook-form";
import { KeyBoldIcon, UserBoldIcon } from "../assets/icons";
import { ActionButton } from "../components/ActionButton";
import { Field } from "../components/Field";
import { Form } from "../components/Form";
import { useMutation } from "react-query";
import { LoginCredentials } from "../api/models/authModel";
import { loginUser } from "../api/services/authService";

type Props = {
  onSuccess?: () => void;
};

export const LoginForm: React.FC<Props> = ({ onSuccess }) => {
  const { mutate } = useMutation({
    mutationFn: (credentials: LoginCredentials) => loginUser(credentials),
    onSuccess,
  });
  const { register, handleSubmit } = useForm<LoginCredentials>({});

  const onSubmit = (data: LoginCredentials) => {
    mutate(data);
  };

  return (
    <Form title="Добро пожаловать" onSubmit={handleSubmit(onSubmit)}>
      <Form.Content>
        <Field
          icon={<UserBoldIcon fill="#adb5bd" />}
          label="Электронная почта:"
          placeholder="example@mail.com"
          {...register("login")}
        />
        <Field
          icon={<KeyBoldIcon fill="#adb5bd" />}
          label="Пароль:"
          placeholder="Password"
          {...register("password")}
        />
      </Form.Content>
      <ActionButton icon={<KeyBoldIcon fill="#ffffff" />} label="Войти" />
    </Form>
  );
};
