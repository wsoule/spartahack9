export type Data = {
  name: string;
  email: string;
  message: string;
};

export const sendDataToServer = async (data: Data) => {
  try {
    const response = await fetch('http://35.21.206.251:3000/submit-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    console.log(responseData); // Log the response data
  } catch (error) {
    console.error('Error sending data:', error);
  }
};
