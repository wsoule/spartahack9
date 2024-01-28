import * as FileSystem from "expo-file-system";
import axios from "axios";

export const analyzeImage = async (imageUri: string): Promise<any> => {
    try {
      if (!imageUri) {
        alert("Please select an image first!");
        return;
      }
      const API_KEY = "AIzaSyB6DYEaHHA6cJjwpGGTbkbnnKxxWAmD6_I";
      const apiURL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

      const base64ImageData = await FileSystem.readAsStringAsync(imageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const requestData = {
        requests: [
          {
            image: {
              content: base64ImageData,
            },
            features: [{ type: "LABEL_DETECTION", maxResults: 5 }],
          },
        ],
      };

      const config = {
        headers: {
          "Accept-Encoding": "gzip, deflate, br",
        },
      };

      const apiResponse = await axios.post(apiURL, requestData, config);
      return(apiResponse.data.responses[0].labelAnnotations);
    } catch (error) {
      console.error("Error analyzing image: ", error);
      alert("Error analyzing image. Please try again later");
    }
  };