import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';

// import HooksApp from './HooksApp'
// import { TrafficLight } from './useState/TrafficLight'
// import { TrafficLightWithEffect } from './useEffect/TrafficLightWithEffect'
// import { TrafficLightWithHook } from './useEffect/TrafficLightWithHook'
// import { PokemonPage } from './examples/PokemonPage'
// import FocusScreen from './useRef/FocusScreen'
// import { TasksApp } from './useReducer/TaskApp'
// import { ScrambleWords } from './useReducer/ScrambleWords'
// import MemoHook from './memos/MemoHook'
// import MemoCounter from './memos/MemoCounter'
// import { InstagromApp } from './useOptimistic/instagromApp'
// import ClientInformation from './use-suspense/ClientInformation';
// import { getUserAction } from './use-suspense/api/get-user.action';

import './index.css'
import ProfessionalApp from './useContext/ProfessionalApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    {/* <Suspense fallback={<div>Loading client information...</div>}>
      <ClientInformation getUser={getUserAction(1000)}/>
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>,
)
