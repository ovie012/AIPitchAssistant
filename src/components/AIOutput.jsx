import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';
import OutputCard from './OutputCard';

const AIOutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & h2 {
    font-size: 2.2rem;
  }
`;

const AIOutputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    /* align-items: center; */
    min-height: 300px;
    gap: 16px;
`;

function AIOutput() {
    const { result, loading, error } = useContext(AppContext);


    
    return (
        <AIOutputContainer>
        <h2>AI Output</h2>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {!loading && result && result.length > 0 && (
                <AIOutputWrapper>
                    {result.map((item, index) => (
                        <OutputCard
                        key={index}
                        title={item.title}
                        content={item.content}
                        state={item.state}
                        style={item.style}
                        divStyle={item.divStyle}
                        click={item.click}
                        />
                    ))}
                </AIOutputWrapper>
            )}
    </AIOutputContainer>
  )
}

export default AIOutput;



// const result =[
//     {
//         title: 'Startup Name',
//         content: 'travel experiences',
//         state: false,
//         style: { color: '#F4F4F4', textTransform: 'capitalize', fontWeight: '500', fontSize: '2rem' },
//         divStyle: null,
//         click: null,
//     },
//     {
//         title: 'Elevator pitch',
//         content: 'An app that connects people all over the world and helps bring them together',
//         state: false,
//         style: null,
//         divStyle: null,
//         click: null,
//     },
//     {
//         title: 'TagLine',
//         content: 'An app world and helps bring them together',
//         state: false,
//         style: null,
//         divStyle: null,
//         click: null,
//     },
//     {
//         title: 'Features',
//         content: 'An app that connects people all over the world and helps bring them together',
//         state: false,
//         style: null,
//         divStyle: null,
//         click: null,
//     },
//     {
//         title: 'Target Audience',
//         content: 'An app that connects people',
//         state: false,
//         style: null,
//         divStyle: null,
//         click: null,
//     },
//     {
//         title: 'Brand Identity',
//         content: 'Green',
//         state: true,
//         style: null,
//         divStyle: { display: 'flex', alignItems: 'center', gap: '20px' },
//         click: (e) => {
//             e.preventDefault();
//             console.log('Reloading brand identity...');
//         },
//     },
// ]