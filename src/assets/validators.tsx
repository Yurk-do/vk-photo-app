export const required = (value: string) =>
  value ? undefined : 'Поле обязательно для заполнения';

export const mustBeNumber = (value: any) =>
  isNaN(value) ? 'Допустим ввод только числовых значений' : undefined;

export const phoneFormat = (value: string) => {
  const template = /^375\d{9}$/;
  return template.test(value) ? undefined : 'Номер не соответствует формату';
};
export const emailFormat = (value: string) => {
  const template = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return template.test(value) ? undefined : 'Email не соответствует формату';
};

export const composeValidators =
  (...validators: any) =>
  (value: any) =>
    validators.reduce(
      (error: any, validator: any) => error || validator(value),
      undefined
    );