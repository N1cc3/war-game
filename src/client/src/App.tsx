import { Button, Card, Container, Divider, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { fetchPlayers, Player } from './api'
import { PlayerForm } from './PlayerForm'

export const App = () => {
  const [players, setPlayers] = useState<Player[]>([])

  useEffect(() => {
    fetchPlayers().then(players => {
      setPlayers(players)
    })
  }, [])

  return (
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
        {players.map((p, idx) => (
          <div key={idx}>{p.name}</div>
        ))}
      </Card>
    </Container>
  )
}
