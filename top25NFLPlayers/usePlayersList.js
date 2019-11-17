import { useQuery } from '@apollo/react-hooks';

import gql from "graphql-tag"

const PLAYERS_QUERY = gql`
  query players {
    players {
        position
        name
        team
        jerseyNumber
        wonSuperBowl
      }
  }
`
const usePlayersList = () => {
const { data, loading } = useQuery(PLAYERS_QUERY)
  const { players } = data || {}
  return {
    players,
    loading,
  }
}

export default usePlayersList