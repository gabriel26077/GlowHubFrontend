'use client';
import { useState } from 'react';
import SwitchButton from '../components/SwitchButton/SwitchButton';

export default function Home() {
  const BASE_URL = "https://glowhub.onrender.com"; // backend no Render
  // const BASE_URL = "http://localhost:3000"; // backend local

  // Array de estados para os 6 botões
  const [btnStates, setBtnStates] = useState<boolean[]>([false, false, false, false, false, false]);

  // Função genérica para enviar comando
  const sendCommand = async (state: boolean, index: number) => {
    const cmd = state ? `set-on-${index + 1}` : `set-off-${index + 1}`; // se precisar diferenciar por botão
    try {
      const response = await fetch(`${BASE_URL}/send-cmd`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cmd }),
      });

      if (!response.ok) throw new Error('Erro na requisição');

      const data = await response.json();
      console.log(`Resposta da API do botão ${index + 1}:`, data);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  // Handler genérico para qualquer botão
  const onClickHandler = (index: number) => {
    setBtnStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];       // alterna o estado
      sendCommand(newStates[index], index);       // envia comando correto
      return newStates;
    });
  };

  return (
    <div style={{ backgroundColor: 'black', height: '100vh', padding: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {btnStates.map((state, index) => (
        <div key={index}>
          <SwitchButton
            key={index}
            isOn={state}
            onClick={() => onClickHandler(index)}
          />
         </div> 
      ))}
    </div>
  );
}
