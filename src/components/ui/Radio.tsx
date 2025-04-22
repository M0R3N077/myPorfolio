import React from 'react';
import styled from 'styled-components';

const radio = () => {
  return (
    <StyledWrapper>
      <div className="radio-inputs">
        <label>
          <input className="radio-input instagram" type="radio" name="engine" />
          <span className="radio-tile instagram">
            <span className="radio-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
            </span>
          </span>
        </label>
        
          
        <label>
          <input className="radio-input discord" type="radio" name="engine" />
          <span className="radio-tile discord">
            <span className="radio-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
            </span>
          </span>
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .radio-inputs {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 350px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .radio-inputs > * {
    margin: 6px;
  }

  .instagram:checked + .radio-tile {
    border-color: #cc39a4;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #cc39a4;
  }

  .instagram:checked + .radio-tile:before {
    transform: scale(1);
    opacity: 1;
    background-color: #cc39a4;
    border-color: #cc39a4;
  }

  .instagram:checked + .radio-tile .radio-icon svg {
    fill: #fff;
  }

  .instagram:checked + .radio-tile .radio-label {
    color: #cc39a4;
  }

  .instagram:focus + .radio-tile {
    background-color: #cc39a4;
    border-color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 0 0 4px #b5c9fc;
  }
  .instagram:checked + .radio-tile {
    background-color: #cc39a4;
    border-color: #fff;
  }

  .instagram:focus + .radio-tile:before {
    transform: scale(1);
    opacity: 1;
  }

  /*  Twitter */
  .twitter:checked + .radio-tile {
    border-color: #03a9f4;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #03a9f4;
  }

  .twitter:checked + .radio-tile:before {
    transform: scale(1);
    opacity: 1;
    background-color: #03a9f4;
    border-color: #03a9f4;
  }

  .twitter:checked + .radio-tile .radio-icon svg {
    fill: #fff;
  }

  .twitter:checked + .radio-tile .radio-label {
    color: #03a9f4;
  }

  .twitter:focus + .radio-tile {
    background-color: #03a9f4;
    border-color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 0 0 4px #b5c9fc;
  }
  .twitter:checked + .radio-tile {
    background-color: #03a9f4;
    border-color: #fff;
  }

  .twitter:focus + .radio-tile:before {
    transform: scale(1);
    opacity: 1;
  }
  /* discord */
  .discord:checked + .radio-tile {
    border-color: #8c9eff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #8c9eff;
  }

  .discord:checked + .radio-tile:before {
    transform: scale(1);
    opacity: 1;
    background-color: #8c9eff;
    border-color: #8c9eff;
  }

  .discord:checked + .radio-tile .radio-icon svg {
    fill: #fff;
  }

  .discord:checked + .radio-tile .radio-label {
    color: #8c9eff;
  }

  .discord:focus + .radio-tile {
    background-color: #8c9eff;
    border-color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 0 0 4px #b5c9fc;
  }
  .discord:checked + .radio-tile {
    background-color: #8c9eff;
    border-color: #fff;
  }

  .discord:focus + .radio-tile:before {
    transform: scale(1);
    opacity: 1;
  }

  .radio-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
    min-height: 80px;
    border-radius: 0.5rem;
    border: 2px solid #b5bfd9;
    background-color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: 0.15s ease;
    cursor: pointer;
    position: relative;
  }

  .instagram:hover {
    border-color: #cc39a4;
  }
  .twitter:hover {
    border-color: #03a9f4;
  }
  .discord:hover {
    border-color: #8c9eff;
  }

  .radio-tile:hover:before {
    transform: scale(1);
    opacity: 1;
  }

  .radio-icon svg {
    width: 2rem;
    height: 2rem;
  }
  .instagram {
    fill: #cc39a4;
  }
  .twitter {
    fill: #03a9f4;
  }
  .discord {
    fill: #8c9eff;
  }

  .radio-label {
    color: #707070;
    transition: 0.375s ease;
    text-align: center;
    font-size: 13px;
  }

  .radio-input {
    clip: rect(0 0 0 0);
    -webkit-clip-path: inset(100%);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }`;

export default radio;
