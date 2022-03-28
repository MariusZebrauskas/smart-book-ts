import { Box, ButtonGroup, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { notebookPages } from './obj';
import { Item } from '../../components/item/Item';
import DeleteIcon from '@mui/icons-material/Delete';
import { TypographyStyled } from './styles';
import Task from './Task';
const NoteBook = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        mt: '5rem',
      }}
    >
      <Typography variant='h3'>Smart Notebook</Typography>
      <Typography variant='body1' sx={{ borderTop: '1px dashed black', pt: '.3rem' }}>
        ( create your own pages and add your notes to note book )
      </Typography>
      {/* input add task  */}
      <Box
        component='form'
        sx={{
          mt: '5rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        noValidate
        autoComplete='off'
      >
        {/* add buttons to notebook pages  */}
        <ButtonGroup color='secondary' aria-label='medium secondary button group'>
          {notebookPages.map((page) => (
            <Button sx={{ mb: '2rem' }} key={page.name}>
              {page.name}
            </Button>
          ))}
        </ButtonGroup>
        <Typography variant='h5'>Main</Typography>
        <Typography variant='body1' sx={{ borderTop: '1px dashed black', pt: '.3rem', mb: '2rem' }}>
          ( Section )
        </Typography>
        {/* input to enter value */}
        <TextField
          sx={{ width: '100%', maxWidth: '30rem' }}
          id='outlined-textarea'
          label='Enter Your Task'
          placeholder='Group your notes with + button'
          multiline
        />
        {/* add button */}
        <Box sx={{ position: 'fixed', right: '5vh', bottom: '5vh' }}>
          <Fab color='primary' aria-label='add'>
            <AddIcon />
          </Fab>
        </Box>
        {/* show tasks */}
        <Paper
          sx={{
            width: '100%',
            maxWidth: '60vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            mt: '2rem',
            boxShadow: '9',
          }}
        >
          <Typography variant='h5' sx={{ mt: '2rem' }}>
            Your tasks
          </Typography>

          {/* display all tasks */}
          {notebookPages[0].tasks.map((task, i) => {
            console.log('task:', task);
            return (
              <Item key={task.id} sx={{ boxShadow: '4' }}>
                {/* <TypographyStyled
                  onClick={() => setTextWithLine(!textWithLine)}
                  textWithLine={textWithLine}
                  variant='button'
                >
                  {task.id}. {task.task}
                </TypographyStyled> */}
                <Task>
                  {task.id}. {task.task}
                </Task>

                <IconButton aria-label='delete'>
                  <DeleteIcon />
                </IconButton>
              </Item>
            );
          })}

          {/* <Item sx={{ boxShadow: '4' }}>
            <TypographyStyled
              onClick={() => setTextWithLine(!textWithLine)}
              textWithLine={textWithLine}
              variant='button'
            >
              1. item 1
            </TypographyStyled>
            <IconButton aria-label='delete'>
              <DeleteIcon />
            </IconButton>
          </Item> */}
        </Paper>
      </Box>
    </Box>
  );
};

export default NoteBook;
