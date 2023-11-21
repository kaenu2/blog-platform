import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Alert, Button, InputItem } from '../../UI';
import { articleOptions } from '../../../utils/input-options/input-options';
import FormTag from '../../tags/form-tag/form-tag';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { IProps, IShippingFields } from './article-form.types';
import styles from './article-form.module.scss';

const ArticleForm: React.FC<IProps> = ({ titleForm, onSubmit, content, successMessage, errorMessage, resetState }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IShippingFields>();
  const { tags } = useTypedSelector((state) => state.article);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onSubmitHandle = (data: IShippingFields) => {
    onSubmit(data, setError, setSuccess);
    if (resetState) {
      reset();
    }
  };

  return (
    <div className={styles.parent}>
      <h2 className={styles.title}>{titleForm}</h2>
      {success ? (
        <div className={styles.alert}>
          <Alert desc={successMessage} type="success" />
        </div>
      ) : null}
      {error ? (
        <div className={styles.alert}>
          <Alert desc={errorMessage} type="error" />
        </div>
      ) : null}
      <form onSubmit={handleSubmit(onSubmitHandle)}>
        <div className={styles.group}>
          <InputItem
            hasError={errors?.title ? errors?.title.message : undefined}
            type="text"
            placeholder="Title"
            field={register}
            refName="title"
            options={{ ...articleOptions, value: content?.title ? content?.title : '' }}
            title="Title"
          />
        </div>
        <div className={styles.group}>
          <InputItem
            hasError={errors?.description ? errors?.description.message : undefined}
            type="text"
            placeholder="Short description"
            field={register}
            refName="description"
            options={{ ...articleOptions, value: content?.description ? content?.description : '' }}
            title="Short description"
          />
        </div>
        <div className={styles.group}>
          <InputItem
            hasError={errors?.body ? errors?.body.message : undefined}
            type="text"
            placeholder="Text"
            field={register}
            refName="body"
            options={{ ...articleOptions, value: content?.body ? content?.body : '' }}
            title="Text"
            element="text-area"
          />
        </div>
        <div className={styles.group}>
          <FormTag tags={tags} />
        </div>
        <div className={styles.btnParent}>
          <Button type="default" color="primary" label="Send" />
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
