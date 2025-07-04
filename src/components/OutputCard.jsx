import React from 'react';
import styled from 'styled-components';

const OutPutCardContainer = styled.div`
    width: 32%;
    /* width: fit-content; */
    height: 220px;
    padding: 20px;
    border-radius: 10px;
    max-width: 350px;
    border: 1px solid #9CA3AF;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & h5 {
        font-size: 1.5rem;
        font-weight: 400;
        text-transform: uppercase;
    }

    & div {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }

        & p {
            font-size: 1.35rem;
            font-weight: 300;
        }

        & img {
            width: 120px;
            height: 120px;
            object-fit: cover;
            border-radius: 50%;
            background: #4F46E5;
            transition: 0.3s ease-in-out;
            cursor: pointer;
        }
    }

`;

function OutputCard({ style, divStyle, state, title, content, click }) {
  return (
    <OutPutCardContainer>
        <h5>{title}</h5>
        <div style={divStyle}>
            {state && 
                <img src='/reload.png' alt='reload' onClick={click}/>
            }
            <p style={style}>{content}</p>
        </div>
    </OutPutCardContainer>
  )
}

export default OutputCard;