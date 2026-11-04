from flask import Flask, request, jsonify
import pickle
from flask_cors import CORS

app = Flask(__name__)

# CORS ko enable karen
CORS(app)

# Model ko load kar rahe hain
model = pickle.load(open("model.pkl", "rb"))
le = pickle.load(open("label_encoder.pkl", "rb"))
scaler = pickle.load(open("scaler.pkl", "rb"))

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Frontend se data le rahe hain
        data = request.get_json()
        
        # Features ko extract kar rahe hain
        features = [
            data["nitrogen"],
            data["phosphorous"],
            data["potassium"],
            data["temperature"],
            data["humidity"],
            data["ph"],
            data["rainfall"]
        ]
        
        # Model prediction
        features_scaled = scaler.transform([features])  # Scale the input
        prediction = model.predict(features_scaled)
        
        # Map the prediction to crop name
        result = le.inverse_transform(prediction)
        
        # Return the prediction as a message
        return jsonify({"message": f"You should grow {result[0]} in your farm!"})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True, port=5001)
