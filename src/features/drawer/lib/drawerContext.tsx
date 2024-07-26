import { useMediaQuery } from '@shared/lib/useMediaQuery'
import { createContext, useContext, useEffect, useState } from 'react'

type DrawerContextValue = {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DrawerContext = createContext<DrawerContextValue>({
	isOpen: false,
	setIsOpen: () => {}
})

export const DrawerContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState<boolean>(true)

	const isLargeScreen = useMediaQuery('(min-width: 1280px)')

	useEffect(() => {
		setIsOpen(isLargeScreen)
	}, [isLargeScreen])

	return <DrawerContext.Provider value={{ isOpen, setIsOpen }}>{children}</DrawerContext.Provider>
}

export const useDrawer = () => useContext(DrawerContext)