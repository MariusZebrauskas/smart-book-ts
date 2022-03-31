import { Box, ButtonGroup, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { obj } from './obj';
import { Item } from '../../components/item/Item';
import DeleteIcon from '@mui/icons-material/Delete';
import Task from './Task';
import { notebookPagesTypes } from './types';
import BottomFooter from '../../components/bottom/BottomFooter';
const NoteBook = () => {
  const [notebokPages, setNotebokPages] = useState<any>([]);
  const [tasksDisplayed, setTasksDisplayed] = useState<any>([]);

  // fech data and set task in to variable
  useEffect(() => {
    if (obj) {
      // setup pages
      setNotebokPages([...obj]);
      // setup task display on screenCenter
    }
    if (notebokPages[0]) {
      setTasksDisplayed([...notebokPages[0].tasks]);
    }
  }, []);

  useEffect(() => {
    // when data feched set up tasks
    if (notebokPages[0]) {
      setTasksDisplayed([...notebokPages[0].tasks]);
    }
  }, [notebokPages]);


  const buttonGroup = (idNumber: number) => {
    setTasksDisplayed([...notebokPages[idNumber].tasks]);
  };


// FIXME: make async code to fech data + set obj[0].tasks to show tasks ASYNC METHOD
// FIXME: make task compleated or not logic using object and loops

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
        {/* button group to swich tasks pages  */}
        <ButtonGroup color='secondary' aria-label='medium secondary button group'>
          {notebokPages.map((page: any, id: any) => (
            <Button onClick={() => buttonGroup(id)} sx={{ mb: '2rem' }} key={page.name}>
              {page.name}
            </Button>
          ))}
        </ButtonGroup>
        <Typography variant='h5'>Main</Typography>
        <Typography variant='body1' sx={{ borderTop: '1px dashed black', pt: '.3rem', mb: '2rem' }}>
          ( Section )
        </Typography>
        {/* input to enter NEW task */}
        <TextField
          sx={{ width: '100%', maxWidth: '30rem' }}
          id='outlined-textarea'
          label='Enter Your Task'
          multiline
        />
        {/* add button bottom right */}
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
          {tasksDisplayed.map((task: any) => {
            // console.log('task:', task.tasks)
            return (
              <Item key={task.id} sx={{ boxShadow: '4' }}>
                <Task>
                  {task.id}. {task.task}
                </Task>

                <IconButton aria-label='delete'>
                  <DeleteIcon />
                </IconButton>
              </Item>
            );
          })}
        </Paper>
      </Box>
      {/* bottom */}
      <BottomFooter />
    </Box>
  );
};

export default NoteBook;
