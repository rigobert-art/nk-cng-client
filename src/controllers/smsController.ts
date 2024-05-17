import AfricasTalking from 'africastalking';

const { api_key, username, senderID  } = process.env;
const credentials = {
    apiKey: api_key || '', // use your sandbox app API key for development in the test environment
    username: username || 'sandbox', // use 'sandbox' for development in the test environment
};
const africastalking = AfricasTalking(credentials);
const sms = africastalking.SMS;

interface SMSOptions {
    to: string[];
    message: string;
    from: string
}

export const sendSMS = async (phone: string, message: string): Promise<void> => {
        const options: SMSOptions = {
            to: [phone],
            message,
            from: senderID || ""
        };

    try {
        const response = await sms.send(options);
        console.log(response);
    } catch (error) {
        console.error('Error sending SMS:', error);
    }
};
