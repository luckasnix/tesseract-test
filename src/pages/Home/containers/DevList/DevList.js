import React, { useContext, useEffect } from 'react'
import DevItem from './components/DevItem/DevItem'
import DevsContext from '../../../../state/devs/Context'
import * as devsActions from '../../../../state/devs/actions'
import styles from './DevList.module.css'

const devListURL = 'https://api.github.com/orgs/grupotesseract/public_members'

// Contêiner de lista de desenvolvedores
function DevList() {
  // Consumo dos dados do estado global
  const { devs, dispatchToDevs } = useContext(DevsContext)
  // Busca dos dados referente aos desenvolvedores e depacho para o estado global
  async function fetchDeveloperList() {
    await fetch(devListURL)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        const fetchedDevs = res.map((cur) => {
          return {
            id: cur.id,
            user: cur.login,
            avatar: cur.avatar_url
          }
        })
        dispatchToDevs(devsActions.createDevList(fetchedDevs))
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
      fetchDeveloperList()
  // eslint-disable-next-line
  }, [])
  return (
    <div className={styles.container}>
      {devs.length ? (
        <ul>
          {devs.map((dev) => {
            return <DevItem  key={dev.id} {...dev} />
          })}
        </ul>
      ) : null}
    </div>
  )
}

export default DevList