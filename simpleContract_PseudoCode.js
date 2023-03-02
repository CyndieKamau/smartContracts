
// Declare the smart contract
contract SimpleContract {

  // Declare a variable to store a message
  string public message;

  // Declare an event to indicate when the message has been changed
  event MessageChanged(string newMessage);

  // Declare a function to set the message
  function setMessage(string memory newMessage) public {
    // Set the message to the new value
    message = newMessage;

    // Emit an event to indicate that the message has been changed
    emit MessageChanged(newMessage);
  }

  // Declare a function to get the message
  function getMessage() public view returns (string memory) {
    // Return the current value of the message
    return message;
  }

}
