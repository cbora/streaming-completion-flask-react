import { useState } from 'react';


function App() {
  const [promptArea, setPromptArea] = useState('');
  const [answer, setAnswer] = useState('');
  const [promptResponse, setPromptResponse] = useState('');

  const handleSubmit = async () => {
    const url = 'http://localhost:4444/api/prompt';
    var tmpPromptResponse = '';
    try {
      const response = await fetch(url , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: promptArea,
        }),
      });
      
      // eslint-disable-next-line no-undef
      let decoder = new TextDecoderStream();
      if (!response.body) return;
      const reader = response.body
        .pipeThrough(decoder)
        .getReader();
      
      while (true) {
        var {value, done} = await reader.read();
        
        if (done) {
          break;
        } else {
          tmpPromptResponse += value;
          setPromptResponse(tmpPromptResponse);
        }
      }
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
      
      <div style={{order: 1, width: '80vh'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <h2 style={{order: -1}}>Hello World!</h2>        
          <textarea                      
            rows={10}
            onChange={(e) => setPromptArea(e.target.value)}
            style={{order: 2, marginBottom: '1rem'}}
            value={promptArea}
            ></textarea>


          <div style={{order: 3}}>
            <button
              onClick={handleSubmit}
            >Submit</button> <button onClick={() => setPromptArea('')}>Clear</button>
          </div>

          <div style={{order: 4, marginTop: '1rem'}}>
            <h3>Streamed Prompt Response:</h3>
            <span>{promptResponse}</span>
          </div>

        </div>      
      </div>
    </div>
  );
}

export default App;
