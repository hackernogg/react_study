import './App.css'
import { StateExample } from './hooks/use-state';
import { EffectExample } from './hooks/use-effect';
import { ContextExample } from './hooks/use-context';
import { ReducerExample } from './hooks/use-reducer';
import { RefExample } from './hooks/use-ref';
import { ImperativeHandleExample } from './hooks/use-imperative-handle';
import { LayoutEffectExample } from './hooks/use-layout-effect';
import { UseIdExample } from './hooks/use-id';
import { TransitionExample } from './hooks/use-transition';

function App() {
  return (
    <>
      {/*<StateExample /> */}
      {/*<EffectExample /> */}
      {/*<ContextExample /> */}
      {/*<ReducerExample /> */}
      {/*<RefExample /> */}
      {/*<ImperativeHandleExample /> */}
      {/*<LayoutEffectExample /> */}
      {/*<UseIdExample /> */}
      <TransitionExample />
    </>
  );
}

export default App
