import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';
import { generatePitch } from './OpenAIServices';

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    & input {
        width: 80%;
        padding: 16px 24px;
        border: 1px solid #9CA3AF;
        background: #111;
        font-size: 1.5rem;
        border-radius: 5px;
        outline: none;
        font-weight: 400;
        transition: 0.3s ease-in-out;

        &::placeholder {
            color: #9CA3AF;
            font-weight: 400;
        }

        &:focus {
            border-color: #4F46E5;
        }
    }

    & button {
        padding: 16px 24px;
        color: #F4F4F4;
        /* border: 1px solid #9CA3AF; */
        border: none;
        font-size: 1.5rem;
        border-radius: 5px;
        outline: none;
        font-weight: 500;
        cursor: pointer;
        text-transform: capitalize;
        transition: 0.3s ease-in-out;
        background: #4F46E5;
        
        &:hover {
            background: #7C3AED;
        }
    }
`;

function InputComponent() {
    const { setIdea, setLoading, setResult, setError, loading, error } = useContext(AppContext);
    const [input, setInput] = useState('');

    const handleGenerate = async () => {
        if (!input.trim()) return;

        setLoading(true);
        setError('');
        try {
            const aiResponse = await generatePitch(input);

            const parts = aiResponse.split('\n').filter(item => item.trim() !== '');

            const mappedResult = [
                { title: 'Startup Name', content: parts[0] || '', state: false, style: { color: '#F4F4F4', textTransform: 'capitalize', fontWeight: '500', fontSize: '2rem' }, divStyle: null, click: null },
                { title: 'Elevator Pitch', content: parts[1] || '', state: false, style: null, divStyle: null, click: null },
                { title: 'Tagline', content: parts[2] || '', state: false, style: null, divStyle: null, click: null },
                { title: 'Features', content: parts[3] || '', state: false, style: null, divStyle: null, click: null },
                { title: 'Target Audience', content: parts[4] || '', state: false, style: null, divStyle: null, click: null },
                { title: 'Brand Identity', content: parts[5] || '', state: true, style: null, divStyle: { display: 'flex', alignItems: 'center', gap: '20px' }, click: (e) => { e.preventDefault(); console.log('Reloading brand identity...'); } }
            ];

            setResult(mappedResult);
            setIdea(input);
            // setInput('');
        } catch (err) {
            setError('Failed to generate pitch. Try again later.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

  return (
    <InputContainer>
        <input 
            type='text' 
            placeholder='An app for people to share their travel experiences' 
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleGenerate} disabled={loading}>
            {loading ? 'Generating...' : 'Generate'}
        </button>
    </InputContainer>
  )
}

export default InputComponent;