import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import InputItem from '../../components/UI/inputs/input-item/input-item';
import { emailOptions, passwordOptions, userNameOptions } from '../../utils';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { StateRender } from '../../components';
import { Button } from '../../components/UI';

import { IShippingFields } from './profile-route.types';
import styles from './profile-route.module.scss';

const ProfileRoute = () => {
  const { push } = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IShippingFields>();
  const { user, isLoading, error, entrance } = useTypedSelector((state) => state.user);
  const { animation } = useTypedSelector((state) => state.visible);
  const { fetchUser, editUser } = useActions();
  const token = sessionStorage.getItem('jwt');

  useEffect(() => {
    if (token && !user) {
      fetchUser(token);
    }
  }, []);

  useEffect(() => {
    if (!entrance) {
      push('/');
    }
  }, [entrance]);

  const onSubmit: SubmitHandler<IShippingFields> = (data) => {
    const copyData = JSON.parse(JSON.stringify(data));

    for (const key in copyData) {
      const element = copyData[key];

      if (!element) {
        delete copyData[key];
      }
    }

    editUser(token, { user: copyData });
    reset();
  };

  return (
    <StateRender isError={null} isLoading={isLoading}>
      <div className={animation ? `animation-router ${styles.parent}` : styles.parent}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend className={styles.formTitle}>Edit Profile</legend>
            <div className={styles.formGroup}>
              <InputItem
                hasError={
                  errors?.username?.message ? errors?.username?.message : error?.username ? error?.username : undefined
                }
                field={register}
                refName="username"
                options={{ ...userNameOptions, value: user?.username ? user?.username : '' }}
                placeholder="Username"
                type="text"
                title="Username"
              />
            </div>
            <div className={styles.formGroup}>
              <InputItem
                hasError={errors?.email?.message ? errors?.email?.message : error?.email ? error?.email : undefined}
                field={register}
                refName="email"
                options={{ ...emailOptions, value: user?.email ? user?.email : '' }}
                placeholder="Email address"
                type="text"
                title="Email address"
              />
            </div>
            <div className={styles.formGroup}>
              <InputItem
                hasError={errors?.password?.message}
                type="password"
                placeholder="New password"
                field={register}
                refName="password"
                options={{ ...passwordOptions, required: false }}
                title="New password"
              />
            </div>
            <div className={styles.formGroup}>
              <InputItem
                hasError={errors?.image?.message ? errors?.image?.message : error?.image ? error?.image : undefined}
                type="url"
                placeholder="Avatar image"
                field={register}
                refName="image"
                options={{ value: user?.image ? user?.image : '' }}
                title="Avatar image (url)"
              />
            </div>
            <div className={styles.btnParent}>
              <Button type="default" label="Save" color="primary" />
            </div>
            <div>{error ? error?.message : null}</div>
          </fieldset>
        </form>
      </div>
    </StateRender>
  );
};

export default ProfileRoute;
