// navbar toggle
$("#nav-toggle").click(function () {
  $(this).toggleClass("is-active");
  $("ul.nav").toggleClass("show");
});

// This is your serverless function (Webtask)
// This is your serverless function (Webtask)
module.exports = function(context, req, res) {
  const axios = require('axios');

  // Replace with your Discord webhook URL
  const discordWebhookUrl = "https://discord.com/api/webhooks/1186263736621740062/_AP4u0imQ7IlUANzHCvKxlg6GPA4gpFTQ3LslWONN-xyCVAQNiL7RCl7uzv8xkNdJeu9";

  // Get the content from the request body
  const content = req.body.content;

  // Check if content is provided
  if (!content) {
      res.status(400).send("Content is required.");
      return;
  }

  // Send message to Discord webhook
  axios.post(discordWebhookUrl, { content })
      .then(function(response) {
          console.log("Message sent to Discord webhook");
          res.status(200).send("Message sent to Discord webhook");
      })
      .catch(function(error) {
          console.error("Error sending message to Discord webhook", error);
          res.status(500).send("Error sending message to Discord webhook");
      });
};
