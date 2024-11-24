from cryptography.hazmat.primitives.hashes import Hash, SHA256
from flask import Flask, request

app = Flask(__name__)

# SHA256 hash for the password "root", get from DB for future time
stored_password_hash = "4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2"

def generate_sha256_hash(password):
    digest = Hash(SHA256())
    digest.update(password.encode('utf-8'))
    return digest.finalize().hex()

@app.route('/sum')
def calculate():
    args = request.args
    try:
        number1 = float(args.get('number1', 0))
        number2 = float(args.get('number2', 0))
    except ValueError:
        return "Invalid input, please provide numbers.", 400

    total = number1 + number2
    return str(total)

@app.route('/')
def index():
    html_content = '''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Module 1 Task 1</title>
    </head>
    <body>
        <h1>Module 1 Task 1</h1>
        <form action="/login" method="post">
            <label>Username:</label><br>
            <input type="text" name="user_name"><br>
            <label>Password:</label><br>
            <input type="password" name="password"><br><br>
            <input type="submit" value="Login">
        </form>
        <p id="target"></p>
    </body>
    </html>
    '''
    return html_content

@app.route('/login', methods=['POST'])
def login():

    user_name = request.args.get('user_name')
    password = request.args.get('password')


    if not user_name or not password:
        return "Username and password are required"

    provided_hash = generate_sha256_hash(password)

    if provided_hash == stored_password_hash:
        return f"Welcome, {user_name}!"
    else:
        return "Invalid username or password"


@app.route('/echo/<number1>/<number2>')
def echo(number1, number2):

    number1=float(number1)
    number2=float(number2)

    return str(number1 + number2)

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=7777)
