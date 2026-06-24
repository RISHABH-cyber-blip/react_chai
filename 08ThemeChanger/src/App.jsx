import React,{useState} from 'react'
import { ThemeProvider } from './Context/Theme'
import Card from './Compnents/Card'
import ThemeBtn from './Compnents/ThemeBtn'
import { useEffect } from 'react'

const App = () => {
  const [ThemeMode, setThemeMode] = useState('light');
  const darkTheme = () => setThemeMode('dark');
  const lightTheme = () => setThemeMode('light');

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(ThemeMode);
  }, [ThemeMode]);

  return (
    <ThemeProvider value={{ThemeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn />
            </div>
                <Card />
            <div className="w-full max-w-sm mx-auto">
                
            </div>
        </div>
      </div>
 </ThemeProvider>
  )
}

export default App