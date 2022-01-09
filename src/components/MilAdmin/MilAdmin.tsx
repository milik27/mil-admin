import {
  createContext, FC, ReactNode, useMemo,
} from 'react'

export type MyContextProps = {
    defaultUrl: string
    children: ReactNode
}

const Context = createContext({ defaultUrl: '/' })

export const MilAdmin: FC<MyContextProps> = ({ defaultUrl, children }) => {
  const providerValue = useMemo(() => ({ defaultUrl }), [defaultUrl])

  return (
    <Context.Provider value={providerValue}>{children}</Context.Provider>
  )
}
