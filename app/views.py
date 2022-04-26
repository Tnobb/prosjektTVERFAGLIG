from app import app
from flask import render_template


@app.route('/')
@app.route('/home')
def index():
    return render_template('home.html')

@app.route('/dokumentasjon')
def dokumentasjon():
    return render_template('dokumentasjon.html')