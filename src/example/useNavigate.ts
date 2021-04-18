import { useHistory } from 'react-router-dom'

export const useNavigate = () => {
  const history = useHistory()

  const navigate = (path: string) => () => {
    return history.push(path)
  }

  return navigate
}
