import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'

export const PlayerForm = () => {
  const [name, setName] = useState('')

  return (
    <div>
      <TextField label='Name' color='primary' onChange={e => setName(e.target.value)} />
      <Button color='secondary' onClick={() => alert(name)}>
        Submit
      </Button>
    </div>
  )
}
