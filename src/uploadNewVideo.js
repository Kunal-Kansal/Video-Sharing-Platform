import React from "react";
import Window from "floating-window-ui";

const UploadNewVideo = () => {
  return (
    <Window
      id="react-window"
      height={664}
      width={868}
      top="19%"
      left="19%"
      resizable={false}
      titleBar={{
        title: "Upload New Video",
        backgroundColor:"black",
        buttons: { close:true },
      }}
    >
    <div id="uploadFile">
        <input type="file"/>
    </div>
    <div >
        <label id="videoUploadName">Name</label>
        <input type="text" id="videoUploadNameinput"/>
    </div>
    <div>
        <label id="videoUloadDescription">Descpription</label>
        <textarea id="videoUloadDescriptioninput" />
    </div>
    <div>
        <span id="uploadVideoCategory">Category</span>
        <span id="uploadVideoVisibilty">Visibilty</span>
        <span id="uploadVideoOther">Other</span>
    </div>
    <div>
        <input type="text" placeholder="Category" id="uploadVideoCategoryinput"/>
        <input type="text" placeholder="Public" id="uploadVideoVisibiltyinput"/>
        <input type="text" placeholder="Other" id="uploadVideoOtherinput"/>
    </div>
    <button id="saveButton">Save</button>
    </Window>
  );
};

export default UploadNewVideo;