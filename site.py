from flask import Flask, render_template

app = Flask(__name__)

# Página Inicial
@app.route("/")
def homepage():
    return render_template("homepage.html")

# Colocar o site no ar
if __name__ == "__main__":
    app.run(debug=True)