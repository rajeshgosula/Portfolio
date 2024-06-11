// sesEmailService.js
import AWS from 'aws-sdk';

// Configure AWS SDK
AWS.config.update({ region: 'ap-southeast-2' }); // Update to your region

// Create SES service object
const ses = new AWS.SES({ apiVersion: '2010-12-01' });

const sendEmail = async (formData) => {
  const params = {
    Source: 'rajeshgosula1@gmail.com', // Replace with your verified email address
    Destination: {
      ToAddresses: ['rajeshgosula1@gmail.com'], // Recipient's email address
    },
    Message: {
      Subject: {
        Data: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
      },
      Body: {
        Text: {
          Data: `You have received a new contact form submission. Here are the details:\n
          First Name: ${formData.firstName}\n
          Last Name: ${formData.lastName}\n
          Email: ${formData.email}\n
          Phone Number: ${formData.phoneNumber}\n
          Comments: ${formData.comments}`,
        },
      },
    },
  };

  try {
    const data = await ses.sendEmail(params).promise();
    console.log("Email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendEmail;
