import styled, { css } from 'styled-components'

export const SelectInputTag = styled.div`
  width: 100%;
  /* font-family: "Nunito", sans-serif; */
  border-radius: 10px;
  background: #ffffff;
  position: relative;
  transition: all 0.8s;
  cursor: pointer;
  border: 2px solid rgba(154, 159, 191, 0.25);
  box-shadow: 0px 1px 20px -10px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 1px 20px -10px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 1px 20px -10px rgba(0, 0, 0, 0.25);

  :hover,
  :focus {
    i {
      color: ${(props) => props.primaryColor && props.primaryColor};
    }
    svg {
      fill: ${(props) => props.primaryColor && props.primaryColor};

      path {
        fill: ${(props) => props.primaryColor && props.primaryColor};
      }
    }
  }
  .select-tag {
    display: flex;
    padding: 0.8rem;
    box-sizing: border-box;
    overflow: hidden;
    max-width: 100%;
    cursor: pointer;
    p {
      max-width: 90%;
      padding: 0;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: capitalize;
    }
    .placeholder {
      color: #9a9fbf;
    }
    .selected {
      color: #333;
    }
  }
  :hover,
  :focus {
    border-color: ${(props) => props.primaryColor && props.primaryColor};
  }
`

export const SelectIcon = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  svg {
    width: 1rem;
    height: 1rem;
  }
  input {
    opacity: 0;
    width: 100%;
    height: 100%;
    :checked + svg,
    img,
    i {
      transform: rotate(180deg);
    }
  }
  svg,
  img,
  i {
    position: absolute;
    right: 5%;
    top: 35%;
    color: rgba(154, 159, 191, 0.5);
    transition: all 0.8s;
    cursor: pointer;
    z-index: 1;
  }
`

export const SelectOptions = styled.div`
  position: absolute;
  transition: opacity 0s, max-height 1s;
  width: 100%;
  max-height: 0 !important;
  background: rgba(255, 255, 255, 0.89);
  border-radius: 10px;
  overflow: auto;
  top: 110%;
  box-sizing: border-box;
  border: 2px solid rgba(154, 159, 191, 0.25);
  padding: 1% 2%;
  opacity: 0;
  :hover,
  :focus {
    border-color: ${(props) => props.primaryColor && props.primaryColor};
  }
  .disabled {
    color: #9a9fbf;
    pointer-events: none;
  }
  p {
    margin: 0;
    text-align: left;
    height: 2rem;
    box-sizing: border-box;
    cursor: pointer;
  }
  ${(props) =>
    props.display &&
    css`
      max-height: 20rem !important;
      opacity: 1;
    `}
`
