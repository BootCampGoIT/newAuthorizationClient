import styled from "styled-components";

export const AvatarEditorContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 350px;

  .options {
    padding: 20px;
  }

  .avatarWrapper {
    width: 190px;
    height: 190px;
    border-radius: 14px;
    overflow: hidden;
  }
  /* ======================================
   */
  input[type="range"] {
    background-color: ${(props) => props.theme.colors.primary};
    padding: 0;
    -webkit-appearance: none;
    width: 100%;
    border: none;
    cursor: pointer;
  }
  input[type="range"]:focus {
    outline: none;
    cursor: pointer;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 12.5px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: ${(props) => props.theme.colors.button};
    border-radius: 25px;
    border: 0px solid #000101;
  }
  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: 20px;
    width: 20px;
    border-radius: 50px;
    background: ${(props) => props.theme.colors.main};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -3.6px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: ${(props) => props.theme.colors.button};
    cursor: pointer;
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: ${(props) => props.theme.colors.button};
    border-radius: 25px;
    border: 0px solid #000101;
  }
  input[type="range"]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: 20px;
    width: 39px;
    border-radius: 7px;
    background: #65001c;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    border-width: 39px 0;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: ${(props) => props.theme.colors.button};
    border: 0px solid #000101;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    cursor: pointer;
  }
  input[type="range"]::-ms-fill-upper {
    background: ${(props) => props.theme.colors.button};
    border: 0px solid #000101;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    cursor: pointer;
  }
  input[type="range"]::-ms-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: 20px;
    width: 39px;
    border-radius: 7px;
    background: #65001c;
    cursor: pointer;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: ${(props) => props.theme.colors.button};
    cursor: pointer;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: ${(props) => props.theme.colors.button};
    cursor: pointer;
  }

  /* ======================== */
  .input__wrapper {
    width: 100%;
    position: relative;
    text-align: center;
  }

  .input__file {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    cursor: pointer;
  }

  .input__file-button {
    width: 150px;
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.buttonText};
    background-color: ${(props) => props.theme.colors.main};
    height: 30px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border: none;
    border-radius: 50pc;
    outline: none;
    cursor: pointer;
    padding: 0 10px;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-content: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
  }
  .input__file-button:hover {
    background-color: ${(props) => props.theme.colors.active};
  }

  .buttonsOptions {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .saveButton {
    border-radius: 14px 0 0 14px;
    margin-right: 1px;
    width: 120px;
  }
  .cancelButton {
    border-radius: 0 14px 14px 0;
    width: 120px;
  }
`;
