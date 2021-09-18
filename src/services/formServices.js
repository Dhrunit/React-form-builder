import { get, getAll, post } from ".";

export const saveForm = async (form) => {
  try {
    const res = await post(form);
    return res;
  } catch (err) {
    return err.message;
  }
};

export const getAllForms = async () => {
  try {
    const res = await getAll();
    return res;
  } catch (err) {
    return err.message;
  }
};

export const getForm = async (formId) => {
  try {
    const res = await get(formId);
    return res;
  } catch (err) {
    return err.message;
  }
};
