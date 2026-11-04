const predictCrop = async (req, res) => {
    try {
      console.log("Request Data:", req.body); // Request body ko log kar rahe hain
  
      // Data ko process karna agar required ho, jaise ki scaling ya transformation
      const { nitrogen, phosphorous, potassium, temperature, humidity, ph, rainfall } = req.body;
      
      // Ab aap yahan apne ML model ko load karke prediction karenge
      // Example: Model se crop predict karne ka logic
      const recommendedCrop = "Wheat"; // Example: Static value, aap apne ML model se isko replace karenge
  
      console.log("Predicted Crop:", recommendedCrop); // Predicted crop ko log karo
  
      res.status(200).json({ recommendedCrop }); // Prediction ka result frontend ko bhejein
    } catch (error) {
      console.error("Error occurred while predicting crop:", error); // Error ko log karo
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
  module.exports = predictCrop;
  