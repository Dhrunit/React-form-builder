import React, { useState } from "react";
import { Button, FormControl, Input, IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";
import { ButtonContainer, FormHead, FormTitleInput } from "./style";
import QuestionForm from "./QuestionForm";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuestion,
  saveFormAction,
  updateForm,
} from "../../reducers/actions";
 
export default function FormComponent() {
  const formState = useSelector((state) => {
    return state.form;
  });
  const dispatch = useDispatch();

  const setFormState = (form) => {
    dispatch(updateForm(form));
  };

  const handleChange = (evt, key, questionIndex) => {
    const form = formState;
    if (!isNaN(questionIndex)) {
      form.questions[questionIndex][key] = evt.target.value;
      setFormState({ ...form });
      return;
    }
    form[key] = evt.target.value;
    setFormState({ ...form });
  };

  const addQuestionHandler = () => {
    dispatch(addQuestion());
  };

  const handleDelete = (id) => {};
  const history = useHistory();
  const { questions,showLoader ,url} = formState;
  
  return (
    <>
      <FormHead elevation={0}>
        {showLoader && 'Loading'}
        {url}
        <FormControl sx={{ marginBottom: "1rem" }} fullWidth variant="standard">
          <FormTitleInput
            onChange={(e) => handleChange(e, "formTitle")}
            placeholder="Form Title"
          />
        </FormControl>
        <FormControl fullWidth variant="standard">
          <Input
            placeholder="Form Descripton"
            onChange={(e) => handleChange(e, "formDescription")}
          />
        </FormControl>
      </FormHead>
      {questions.map((formValue, idx) => {
        return (
          <>
            <QuestionForm
              index={idx}
              formValue={formValue}
              handleChange={handleChange}
              handleDelete={handleDelete}
              title={`Question no ${idx + 1}`}
            />
          </>
        );
      })}
      <ButtonContainer>
        <Button
          sx={{ marginTop: 3 }}
          variant="contained"
          color="primary"
          onClick={addQuestionHandler}
        >
          Add Question
        </Button>
        <Button variant="contained" onClick={() => history.push("/")}>
          Go back
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(saveFormAction(formState))}
        >
          Save
        </Button>
      </ButtonContainer>
    </>
  );
}
