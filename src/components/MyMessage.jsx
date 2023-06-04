const MyMessage = ({ message }) => {
  // Check if the message has attachments
  if (message.attachments && message.attachments.length > 0) {
    // Render the image attachment
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }}
      />
    );
  }

  // Render the text message
  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
      {message.text}
    </div>
  );
};

export default MyMessage;
