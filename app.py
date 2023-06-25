from flask import Flask, render_template
import os
import json

app = Flask(__name__)

@app.route('/screen-list')
def screen_list():
    return render_template('screen-list.html')

#homepage views

@app.route('/')
def home():
    challenge_listings_file = os.path.abspath("data-sets/challenge_listings.json")
    with open(challenge_listings_file) as json_file:
        raw_challenge_listings = json.load(json_file)
    challenge_listings = raw_challenge_listings["data"]["challengelisting"]
    return render_template("home.html", challenge_listings=challenge_listings)

@app.route('/products')
def home_products():
    return 'Homepage with list of products'

#product pages

@app.route('/product/summary')
def product_summary():
    return 'Product page with Summary'


@app.route('/users/sign-up')
def user_sign_up():
    return 'User Sign Up'

@app.route('/users/sign-in')
def user_sign_in():
    return 'User Sign In'

@app.route('/users/password-reset')
def user_password_reset():
    return 'Reset Password'