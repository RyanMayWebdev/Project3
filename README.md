Welcome to Bubbles!

Bubbles is a realtime chat application built using React and Firebase, with packages like React-input-emoji and bad-words to filter profanity. 

#Login Form
When a user visits the site they are presented with a login/signup screen as shown below: Once the user has either signed up or entered their login information, these variables are passed into the authentication script using Firebase email/password authentication. Once verified the user will be presented with the main app view.

![Login page view for Bubbles app](/images/login.jpg)

#Messages
After logging in the user will be brought to the message screen and start in the general channel. From here they can select a channel using the drop down and start messaging by simply typing a message and hitting enter.

![Messaging section view of the Bubbles app.](/images/bubbles.jpg)

Additionally users can use emojis through the use of the react-input-emoji package as seen below. Click on the smile symbol to reveal the menu.

![Emoji menu view from the Bubbles app](/images/emojiInput.jpg)

Whenever a user types in the message and sends it, the message is then filtered for profanity and placed into an object containing the date/time and the user's displayname. This info is then pushed the the database reference point for that chat channel. A useEffect function calls upon theonValue function from Firebase to lsiten for changes and then updates the message feed accordingly through the use of the message component.



