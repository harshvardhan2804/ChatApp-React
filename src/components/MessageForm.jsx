import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

// Component for the message form
const MessageForm = (props) => {
  // State variable for the input value
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  // Function to handle input change
  const handleChange = (event) => {
    setValue(event.target.value);

    // Notify others that the user is typing
    isTyping(props, chatId);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      // Send the message
      sendMessage(creds, chatId, { text });
    }

    // Clear the input value
    setValue('');
  };

  // Function to handle file upload
  const handleUpload = (event) => {
    // Send the uploaded files as a message
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
