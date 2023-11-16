import { ILogin, IRegister } from './user-services.types';

export default class UserServices {
  _apiUrl = 'https://blog.kata.academy/api';

  postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  getOptions = (token: string | null) => {
    return {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    };
  };

  putOptions = (token: string | null) => {
    return {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    };
  };

  postResponse = async (url: string, body: any) => {
    const response = await fetch(this._apiUrl + url, { ...this.postOptions, body: JSON.stringify(body) });

    const data = await response.json();

    if (data.errors) {
      throw new Error(`${JSON.stringify(data)}`);
    }
    if (response.ok) return data;

    if (response.status) {
      throw new Error(`${response.status}`);
    }
  };

  getResponse = async (url: string, token: string | null = null) => {
    const response = await fetch(this._apiUrl + url, this.getOptions(token));

    const data = await response.json();

    if (data.errors) {
      throw new Error(`${JSON.stringify(data)}`);
    }
    if (response.ok) return data;

    if (response.status) {
      throw new Error(`${response.status}`);
    }
  };

  putResponse = async (url: string, token: string | null = null, body: any) => {
    const response = await fetch(this._apiUrl + url, { ...this.putOptions(token), body: JSON.stringify(body) });

    const data = await response.json();

    if (data.errors) {
      throw new Error(`${JSON.stringify(data)}`);
    }
    if (response.ok) return data;

    if (response.status) {
      throw new Error(`${response.status}`);
    }
  };

  postLogin = async (body: ILogin) => {
    return this.postResponse('/users/login', body);
  };

  postRegister = async (body: IRegister) => {
    return this.postResponse('/users/', body);
  };

  getUser = async (token: string) => {
    return this.getResponse('/user', token);
  };

  editProfile = async (token: string | null, body: any) => {
    return this.putResponse('/user', token, body);
  };
}
