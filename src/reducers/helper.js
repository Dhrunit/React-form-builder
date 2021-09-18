import { v4 as uuidv4 } from "uuid";

export const INITIAL_STATE = {
  id: uuidv4(),
  showLoader:false,
  url:null,
  formTitle: "",
  formDescription: "",
  questions: [
    {
      id: uuidv4(),
      questionType: "",
      questionTitle: "",
      options: false,
      paragraph: "",
      options: [
        {
          id: uuidv4(),
          label: "",
        },
      ],
    },
  ],
};

export const getNewQuestion = (formState = {}) => {
  return {
    ...formState,
    questions: [
      ...formState.questions,
      {
        id: uuidv4(),
        questionType: "",
        questionTitle: "",
        showOptions: false,
        paragraph: "",
        options: [
          {
            id: uuidv4(),
            label: "",
          },
        ],
      },
    ],
  };
};
