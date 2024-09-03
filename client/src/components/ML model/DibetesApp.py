from flask import Flask, request, jsonify
import pickle

from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
# Load the models
diabetes_model = pickle.load(open('diabetes_model.sav', 'rb'))
heart_model = pickle.load(open('heart_model.sav', 'rb'))
parkinson_model = pickle.load(open('parkinson_model.sav', 'rb'))

from flask import Flask, request, jsonify

from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes


@app.route('/predict/diabetes', methods=['POST'])
def predict_diabetes():
    try:
        data = request.json
        print(data)
        # Validate and extract features
        required_fields = ['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness',
                           'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age']

        # Check if all required fields are in the data
        if not all(field in data for field in required_fields):
            return jsonify({'error': 'Missing fields in request'}), 400

        features = [data[field] for field in required_fields]

        # Ensure features are valid numbers
        try:
            features = [float(x) for x in features]
        except ValueError:
            return jsonify({'error': 'Invalid input data'}), 400

        # Make prediction
        prediction = diabetes_model.predict([features])

        # Return result
        return jsonify(result=int(prediction[0]))

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'An error occurred during prediction'}), 500


@app.route('/predict/heart', methods=['POST'])
def predict_heart():
    try:
        data = request.json
        # print(data)

        required_fields = ['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs',
                           'restecg', 'thalach', 'exang', 'oldpeak', 'slope',
                           'ca', 'thal']
        # print(required_fields)
        if not all(field in data for field in required_fields):
            return jsonify({'error': 'Missing fields in request'}), 400

        features = [data[field] for field in required_fields]
        print(features)

        try:
            features = [float(x) for x in features]
        except ValueError:
            return jsonify({'error': 'Invalid input data'}), 400

        prediction = heart_model.predict([features])

        return jsonify({'prediction': int(prediction[0])})

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'An error occurred during prediction'}), 500


@app.route('/predict/parkinsons', methods=['POST'])
def predict_parkinsons():
    try:
        data = request.json
        print(data)
        required_fields = ['fo', 'fhi', 'flo', 'Jitter_percent', 'Jitter_Abs',
                           'RAP', 'PPQ', 'DDP', 'Shimmer', 'Shimmer_dB',
                           'APQ3', 'APQ5', 'APQ', 'DDA', 'NHR', 'HNR', 'RPDE',
                           'DFA', 'spread1', 'spread2', 'D2', 'PPE']

        if not all(field in data for field in required_fields):
            return jsonify({'error': 'Missing fields in request'}), 400

        features = [data[field] for field in required_fields]
        print(features)
        try:
            features = [float(x) for x in features]
        except ValueError:
            return jsonify({'error': 'Invalid input data'}), 400

        prediction = parkinson_model.predict([features])

        return jsonify({'prediction': int(prediction[0])})

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'An error occurred during prediction'}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
