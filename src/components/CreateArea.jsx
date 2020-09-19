import React, {useState} from "react";

function CreateArea(props) {

const [noteText, setNoteText] = useState({
  title: "",
  content: ""
});

function handleChange(event){
  const {name, value} =event.target;
  setNoteText(prevValue => {
    return {
      ...prevValue,
      [name]: value
    }
  })
}

function submitNote(event){
  props.onAdd(noteText);
  setNoteText({
    title: "",
    content: ""
  });
  event.preventDefault();

}

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={noteText.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." value={noteText.content} rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
