export interface IProps {
  titleForm: string;
  onSubmit: (
    data: IShippingFields,
    setErrorModal: (value: boolean) => void,
    setSuccessModal: (value: boolean) => void
  ) => unknown;
  content?: IContent;
  successMessage: string;
  errorMessage: string;
  resetState: boolean;
}
interface IContent {
  title: string;
  description: string;
  body: string;
  tags: string[];
}

export interface IShippingFields {
  title: string;
  description: string;
  body: string;
}
