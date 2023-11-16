import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { StateRender } from '../../components';
import { Button, InputItem } from '../../components/UI/';
import { UserServices } from '../../services';
import { emailOptions, passwordOptions } from '../../utils';

import styles from './sign-in.module.scss';
import { IError, IShippingFields } from './sign-in.types';

const SignIn = () => {
  const [error, setError] = useState<IError>({});
  const { sigInLoading, entrance } = useTypedSelector((state) => state.user);
  const { signIn, signInLoading, fetchUser } = useActions();
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IShippingFields>({
    mode: 'onBlur',
  });
  const userService = new UserServices();
  const eop = 'email or password';

  useEffect(() => {
    if (entrance) {
      history.push('/');
    }
  }, [entrance]);

  const onSubmit: SubmitHandler<IShippingFields> = (data) => {
    setError({});
    signInLoading(true);
    userService
      .postLogin({ user: data })
      .then((body) => {
        const token: string = body.user.token;
        signIn(token);
        fetchUser(token);
        signInLoading(false);
        reset();
        history.push('/');
      })
      .catch((e) => {
        signInLoading(false);
        setError(JSON.parse(e.message).errors);
      });
  };

  return (
    <StateRender isLoading={sigInLoading} isError={null}>
      <div className={`animation-router ${styles.parent}`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className={styles.formFieldset}>
            <legend className={styles.formTitle}>Sign In</legend>
            <div className={styles.formGroup}>
              <InputItem
                hasError={errors?.email ? errors?.email?.message : error[eop] ? error[eop] : undefined}
                type="text"
                placeholder="Email address"
                options={emailOptions}
                refName="email"
                field={register}
                title="Email address"
              />
            </div>
            <div className={styles.formGroup}>
              <InputItem
                hasError={errors?.password ? errors?.password?.message : error[eop] ? error[eop] : undefined}
                type="password"
                placeholder="Password"
                field={register}
                title="Password"
                options={passwordOptions}
                refName="password"
              />
            </div>
            <div className={styles.message}>
              <p>{error.message ? error.message : null}</p>
            </div>
            <Button type="default" color="primary" label="Login" />
          </fieldset>
          <p className={styles.text}>
            Don’t have an account?{' '}
            <Link to="/sign-up" className={styles.link}>
              Sign Up
            </Link>{' '}
            .
          </p>
        </form>
      </div>
    </StateRender>
  );
};

export default SignIn;
