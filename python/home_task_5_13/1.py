from flask import Flask, jsonify

app = Flask(__name__)

def is_prime(n):
    if n <= 1: # smaller 1 or equal, not prime
        return False
    if n <= 3: # 2 and 3 prime
        return True
    if n % 2 == 0 or n % 3 == 0: # if divisible by 2 or 3 not prime
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6  # form 6k + 1 much more faster than iterate 1 by 1 and recheck
    return True


@app.route('/prime_number/<int:number>', methods=['GET'])
def check_prime(number):
    """ http://127.0.0.1:5000/prime_number/1232121221 test, is prime number """
    result = {
        "Number": number,
        "isPrime": is_prime(number)
    }
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
