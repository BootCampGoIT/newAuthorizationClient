import React from "react";
import ReactAvatarEditor from "react-avatar-editor";
import { LangContext } from "../../App";
import { AvatarEditorContainer } from "./AvatarEditorStyled";

class AvatarEditor extends React.Component {
  state = {
    image: "",
    allowZoomOut: false,
    position: { x: 0.5, y: 0.5 },
    scale: 1,
    rotate: 0,
    borderRadius: 14,
    width: 150,
    height: 150,
  };

  getDataUrl = (img) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL();
  };

  handleNewImage = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  handleSave = (data) => {
    const img = this.editor.getImageScaledToCanvas().toDataURL();
    const rect = this.editor.getCroppingRect();

    const resultImage = {
      img,
      rect,
      scale: this.state.scale,
      width: this.state.width,
      height: this.state.height,
      borderRadius: this.state.borderRadius,
    };

    this.props.setAvatar(resultImage);
    this.props.setAvatarModuleOpen(false);
  };

  handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  };

  handleAllowZoomOut = ({ target: { checked: allowZoomOut } }) => {
    this.setState({ allowZoomOut });
  };

  handleBorderRadius = (e) => {
    const borderRadius = parseInt(e.target.value);
    this.setState({ borderRadius });
  };

  handleXPosition = (e) => {
    const x = parseFloat(e.target.value);
    this.setState({ position: { ...this.state.position, x } });
  };

  handleYPosition = (e) => {
    const y = parseFloat(e.target.value);
    this.setState({ position: { ...this.state.position, y } });
  };

  handleWidth = (e) => {
    const width = parseInt(e.target.value);
    this.setState({ width });
  };

  handleHeight = (e) => {
    const height = parseInt(e.target.value);
    this.setState({ height });
  };

  logCallback(e) {
    // eslint-disable-next-line
    // console.log("callback", e);
  }

  setEditorRef = (editor) => {
    if (editor) this.editor = editor;
  };

  handlePositionChange = (position) => {
    this.setState({ position });
  };

  handleDrop = (acceptedFiles) => {
    this.setState({ image: acceptedFiles[0] });
  };
  close = () => {
    this.props.setAvatarModuleOpen(false);
  };

  render() {
    return (
      <AvatarEditorContainer>
        <LangContext.Consumer>
          {({ language }) => (
            <>
              <div className='avatarWrapper'>
                <ReactAvatarEditor
                  ref={this.setEditorRef}
                  scale={parseFloat(this.state.scale)}
                  width={this.state.width}
                  height={this.state.height}
                  position={this.state.position}
                  onPositionChange={this.handlePositionChange}
                  rotate={0}
                  borderRadius={14}
                  border={20}
                  onLoadFailure={this.logCallback.bind(this, "onLoadFailed")}
                  onLoadSuccess={this.logCallback.bind(this, "onLoadSuccess")}
                  onImageReady={this.logCallback.bind(this, "onImageReady")}
                  image={this.state.image}
                  className='editor-canvas'
                />
              </div>
              <div className='options'>
                <div className='input__wrapper'>
                  <label className='input__file-button'>
                    <input
                      className='input input__file'
                      name='newImage'
                      type='file'
                      onChange={this.handleNewImage}
                    />
                    <span className='input__file-button-text'>
                      {language.avatarEditor.chooseFile}
                    </span>
                  </label>
                </div>
                <label className='colored'>
                  {language.avatarEditor.size}
                  <input
                    name='scale'
                    type='range'
                    onChange={this.handleScale}
                    min={this.state.allowZoomOut ? "0.1" : "1"}
                    max='2'
                    step='0.01'
                    defaultValue='1'
                    className='colored'
                  />
                </label>
                <label className='colored'>
                  {language.avatarEditor.horizontal}
                  <input
                    name='scale'
                    type='range'
                    onChange={this.handleXPosition}
                    min='0'
                    max='1'
                    step='0.01'
                    value={this.state.position.x}
                  />
                </label>
                <label className='colored'>
                  {language.avatarEditor.vertical}
                  <input
                    name='scale'
                    type='range'
                    onChange={this.handleYPosition}
                    min='0'
                    max='1'
                    step='0.01'
                    value={this.state.position.y}
                  />
                </label>
                <div className='buttonsOptions'>
                  <button
                    type='button'
                    onClick={this.handleSave}
                    className='saveButton'>
                    {language.buttons.save}
                  </button>
                  <button
                    type='button'
                    onClick={this.close}
                    className='cancelButton'>
                    {language.buttons.cancel}
                  </button>
                </div>
              </div>
            </>
          )}
        </LangContext.Consumer>
      </AvatarEditorContainer>
    );
  }
}

export default AvatarEditor;
