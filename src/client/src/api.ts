const url = 'http://localhost:8080'
export type Player = { name: string; password: string }
export const fetchPlayers = () => fetch(`${url}/players`, { mode: 'cors' }).then<Player[]>(res => res.json())

export const savePlayer = (player: Partial<Player>) =>
  fetch(`${url}/players/save`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(player),
  })
