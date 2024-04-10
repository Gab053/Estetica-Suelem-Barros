from flask import Flask, render_template

app = Flask(__name__)

# Página Inicial
@app.route("/")
def homepage():
    return render_template("homepage.html")

@app.route("/login")
def login():
    return render_template("login.html")

# Colocar o site no ar
if __name__ == "__main__":
    app.run(debug=True)