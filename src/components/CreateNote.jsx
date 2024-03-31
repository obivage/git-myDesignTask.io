import React from "react";

const CreateNote = ({ inputText, setInputText, saveHandler }) => {
  return (
    <div className="note">
      <textarea
        cols={10}
        rows={5}
        placeholder="Type..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        maxLength={200}
      ></textarea>
      <div className="note_footer">
        <span className="label">{} Left</span>
        <button className="note_save" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateNote;
