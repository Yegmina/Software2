from flask import Flask, jsonify
import mysql.connector

app = Flask(__name__)

connection = mysql.connector.connect(
    user="yehort",
    password="root123",
    host="mysql.metropolia.fi",
    port=3306,
    database="yehort",
    autocommit=True
)

cursor = connection.cursor(dictionary=True)

def get_airport_by_icao(icao_code):
    query = "SELECT name, municipality FROM airport WHERE ident = %s"
    cursor.execute(query, (icao_code,))
    return cursor.fetchone()

@app.route('/airport/<string:icao_code>', methods=['GET'])
def get_airport(icao_code):
    airport = get_airport_by_icao(icao_code)
    if airport:
        response = {
            "ICAO": icao_code,
            "Name": airport["name"],
            "Location": airport["municipality"]
        }
    else:
        response = {
            "error": f"Error 404: Airport with ICAO code {icao_code} not found."
        }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
