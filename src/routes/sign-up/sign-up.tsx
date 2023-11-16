import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import InputItem from '../../components/UI/inputs/input-item/input-item';
import { emailOptions, passwordOptions, userNameOptions } from '../../utils';
import { InputCheckbox } from '../../components/UI';
import { UserServices } from '../../services';
import { Button } from '../../components/UI/buttons';
import { useActions } from '../../hooks/useActions';
import { StateRender } from '../../components';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { IError, IShippingFields } from './sign-up.types';
import styles from './sign-up.module.scss';

const SignUp = () => {
  const userService = new UserServices();
  const [error, setError] = useState<IError>({});
  const { signIn, signInLoading, fetchUser } = useActions();
  const { entrance } = useTypedSelector((state) => state.user);
  const { animation } = useTypedSelector((state) => state.visible);
  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IShippingFields>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<IShippingFields> = (data) => {
    const { email, password, username } = data;
    const user = { username, email, password };
    setError({});
    signInLoading(true);
    userService
      .postRegister({ user: user })
      .then((body) => {
        const token = body.user.token;
        signIn(token);
        fetchUser(token);
        signInLoading(false);
        reset();
        history.push('/');
      })
      .catch((e) => {
        setError(JSON.parse(e.message).errors);
      });
  };

  useEffect(() => {
    if (entrance) {
      history.push('/');
    }
  }, [entrance]);

  return (
    <StateRender isError={null} isLoading={false}>
      <div className={animation ? `animation-router ${styles.parent}` : styles.parent}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className={styles.formFieldset}>
            <legend className={styles.formTitle}>Create new account</legend>
            <div className={styles.formGroup}>
              <InputItem
                hasError={
                  errors?.username ? errors?.username.message : error?.username ? error?.username : error?.username
                }
                type="text"
                placeholder="Username"
                field={register}
                refName="username"
                options={userNameOptions}
                title="Username"
              />
            </div>
            <div className={styles.formGroup}>
              <InputItem
                hasError={errors?.email ? errors?.email.message : error?.email ? error?.email : error?.email}
                type="text"
                placeholder="Email address"
                field={register}
                refName="email"
                options={emailOptions}
                title="Email address"
              />
            </div>
            <div className={styles.formGroup}>
              <InputItem
                hasError={
                  errors?.password ? errors?.password.message : error?.password ? error?.password : error?.password
                }
                type="password"
                placeholder="Password"
                field={register}
                refName="password"
                options={passwordOptions}
                title="Password"
              />
            </div>
            <div className={styles.formGroup}>
              <InputItem
                hasError={errors?.repeatPassword?.message}
                type="password"
                placeholder="Password"
                field={register}
                refName="repeatPassword"
                options={{ ...passwordOptions, validate: (value, formValues) => value === formValues.password }}
                title="Repeat Password"
              />
            </div>
            <div className={styles.checkboxParent}>
              <InputCheckbox
                hasError={errors?.agreement}
                refName="agreement"
                options={{ value: true, validate: (value) => value === true }}
                field={register}
                label="I agree to the processing of my personal information"
              />
            </div>
            <div className={styles.message}>
              <p>{error.message ? error.message : null}</p>
            </div>
            <Button type="default" color="primary" label="Create" />
          </fieldset>
          <p className={styles.text}>
            Already have an account?{' '}
            <Link className={styles.link} to="/sign-in">
              Sign In
            </Link>
            .
          </p>
        </form>
      </div>
    </StateRender>
  );
};

export default SignUp;
