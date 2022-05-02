from app import app
from flask import render_template


@app.route('/')
@app.route('/home')
def index():
    return render_template('index.html')

@app.route('/chromebook')
def chromebook():
    return render_template('chromebook.html')

@app.route('/maskinvare')
def maskinvare():
    return render_template('maskinvare.html')

@app.route('/ansatte')
def ansatte():
    return render_template('ansatte.html')

@app.route('/programvare')
def programvare():
    return render_template('programvare.html')

@app.route('/hurtigtaster')
def hurtigtaster():
    return render_template('hurtigtaster.html')