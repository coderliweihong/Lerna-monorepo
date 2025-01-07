import { Button as ReactButton, ButtonType } from '@my-monorepo/package-a';



function App() {
  const handleClick = () => alert('React button clicked!');

  return (
    <div className="app">
      <h1>组件预览</h1>
      
      <div className="section">
        <h2>React 组件</h2>
        <ReactButton 
          label="Default Button" 
          onClick={handleClick} 
        />
        <ReactButton 
          type={'primary' as ButtonType}
          label="Primary Button" 
          onClick={handleClick} 
        />
        <ReactButton 
          type={'success' as ButtonType}
          label="Success Button" 
          onClick={handleClick} 
        />
        <ReactButton 
          type={'warning' as ButtonType}
          label="Warning Button" 
          onClick={handleClick} 
        />
        <ReactButton 
          type={'danger' as ButtonType}
          label="Danger Button" 
          onClick={handleClick} 
        />
        <ReactButton 
          label="Disabled Button" 
          disabled 
          onClick={handleClick} 
        />
      </div>
    </div>
  );
}

export default App; 