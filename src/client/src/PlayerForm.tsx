import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { savePlayer } from './api'

export const PlayerForm = () => {
  const [name, setName] = useState('')

  return (
    <div>
      <TextField label='Name' color='primary' onChange={e => setName(e.target.value)} />
      <Button color='secondary' onClick={() => savePlayer({ name })}>
        Submit
      </Button>
    </div>
  )
}
