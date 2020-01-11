import { Button, Card, Container, Divider, Typography } from '@material-ui/core'
import React from 'react'
import { PlayerForm } from './PlayerForm'

export const App = () => (
  <Container>
    <Card>
      <Typography variant='h3'>Hello World!</Typography>
      <Divider
        style={{
          marginBottom: 10,
        }}
      />
      <Button variant='contained' color='primary' fullWidth>
        Hello World
      </Button>
    </Card>
    <Card>
      <PlayerForm />
    </Card>
  </Container>
)
