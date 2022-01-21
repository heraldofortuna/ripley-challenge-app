import React from "react";
import styled from "styled-components";

const StyledLoading = styled.div`
  position: relative;
  width: 300px;
  height: 36px;
  margin: auto;

  & > #fountainG_1 {
    left: 0;
    animation-delay: 0.6s;
    -o-animation-delay: 0.6s;
    -ms-animation-delay: 0.6s;
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
  }

  & > #fountainG_2 {
    left: 38px;
    animation-delay: 0.75s;
    -o-animation-delay: 0.75s;
    -ms-animation-delay: 0.75s;
    -webkit-animation-delay: 0.75s;
    -moz-animation-delay: 0.75s;
  }
  
  & > #fountainG_3 {
    left: 75px;
    animation-delay: 0.9s;
    -o-animation-delay: 0.9s;
    -ms-animation-delay: 0.9s;
    -webkit-animation-delay: 0.9s;
    -moz-animation-delay: 0.9s;
  }
  
  & > #fountainG_4 {
    left: 113px;
    animation-delay: 1.05s;
    -o-animation-delay: 1.05s;
    -ms-animation-delay: 1.05s;
    -webkit-animation-delay: 1.05s;
    -moz-animation-delay: 1.05s;
  }
  
  & > #fountainG_5 {
    left: 150px;
    animation-delay: 1.2s;
    -o-animation-delay: 1.2s;
    -ms-animation-delay: 1.2s;
    -webkit-animation-delay: 1.2s;
    -moz-animation-delay: 1.2s;
  }
  
  & > #fountainG_6 {
    left: 188px;
    animation-delay: 1.35s;
    -o-animation-delay: 1.35s;
    -ms-animation-delay: 1.35s;
    -webkit-animation-delay: 1.35s;
    -moz-animation-delay: 1.35s;
  }
  
  & > #fountainG_7 {
    left: 225px;
    animation-delay: 1.5s;
    -o-animation-delay: 1.5s;
    -ms-animation-delay: 1.5s;
    -webkit-animation-delay: 1.5s;
    -moz-animation-delay: 1.5s;
  }
  
  & > #fountainG_8 {
    left: 263px;
    animation-delay: 1.64s;
    -o-animation-delay: 1.64s;
    -ms-animation-delay: 1.64s;
    -webkit-animation-delay: 1.64s;
    -moz-animation-delay: 1.64s;
  }
  
  @keyframes bounce_fountainG {
    0% {
      transform: scale(1);
      background-color: var(--color-purple);
    }
  
    100% {
      transform: scale(0.3);
      background-color: rgb(255, 255, 255);
    }
  }
  
  @-o-keyframes bounce_fountainG {
    0% {
      -o-transform: scale(1);
      background-color: var(--color-purple);
    }
  
    100% {
      -o-transform: scale(0.3);
      background-color: rgb(255, 255, 255);
    }
  }
  
  @-ms-keyframes bounce_fountainG {
    0% {
      -ms-transform: scale(1);
      background-color: var(--color-purple);
    }
  
    100% {
      -ms-transform: scale(0.3);
      background-color: rgb(255, 255, 255);
    }
  }
  
  @-webkit-keyframes bounce_fountainG {
    0% {
      -webkit-transform: scale(1);
      background-color: var(--color-purple);
    }
  
    100% {
      -webkit-transform: scale(0.3);
      background-color: rgb(255, 255, 255);
    }
  }
  
  @-moz-keyframes bounce_fountainG {
    0% {
      -moz-transform: scale(1);
      background-color: var(--color-purple);
    }
  
    100% {
      -moz-transform: scale(0.3);
      background-color: rgb(255, 255, 255);
    }
  }
`;

const Loading = () => {
  return (
    <StyledLoading>
      <div id="fountainG_1" className="loader"></div>
      <div id="fountainG_2" className="loader"></div>
      <div id="fountainG_3" className="loader"></div>
      <div id="fountainG_4" className="loader"></div>
      <div id="fountainG_5" className="loader"></div>
      <div id="fountainG_6" className="loader"></div>
      <div id="fountainG_7" className="loader"></div>
      <div id="fountainG_8" className="loader"></div>
    </StyledLoading>
  )
}

export default Loading;