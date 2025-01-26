from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html", debug=app.debug)


@app.route("/resume/")
def resume():
    return render_template("resume.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0")
