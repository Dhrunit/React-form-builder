import React from 'react'
 import { Button, FormControl, Input, IconButton } from '@mui/material'
import { withRouter, useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import {
    FormHead,
    FormQuestionContainer,
   
} from './style'
import DeleteIcon from '@mui/icons-material/Delete'
function QuestionForm({formValue,handleChange,handleDelete ,title,index}) {
    return (
        <div>
            <FormHead
                        key={formValue.id}
                        sx={{ marginTop: 2, position: 'relative' }}>
                        <FormQuestionContainer>
                            <p>{title}</p>
                        </FormQuestionContainer>
                        <FormControl fullWidth variant='standard'>
                            <Input
                                placeholder='Question Title'
                                onChange={(e) =>
                                    handleChange(e, 'questionTitle',index)
                                }
                            />
                        </FormControl>
                        <IconButton
                            onClick={() => handleDelete(formValue.id)}
                            sx={{
                                position: 'absolute',
                                right: -50,
                                top: 0,
                            }}>
                            <DeleteIcon />
                        </IconButton>
                    </FormHead>
        </div>
    )
}

export default QuestionForm
 