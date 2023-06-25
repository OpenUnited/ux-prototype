from flask import Flask, render_template
import os
import json

app = Flask(__name__)

@app.route('/screen-list')
def screen_list():
    return render_template('screen_list.html')

#homepage views

@app.route('/')
def home_splash():
    return render_template("home_splash.html")

@app.route('/challenges')
def home_challenges():
    challenge_listings_file = os.path.abspath("data-sets/challenge_listings.json")
    with open(challenge_listings_file) as json_file:
        raw_challenge_listings = json.load(json_file)
    challenge_listings = raw_challenge_listings["data"]["challengelisting"]
    return render_template("home_challenges.html", challenge_listings=challenge_listings)

@app.route('/products')
def home_products():
    return 'Homepage with list of products'

#product pages

@app.route('/product/summary')
def product_summary():
    return 'Product page with Summary tab active'

@app.route('/product/initiatives')
def product_initiatives():
    return 'Product page with Initiatives tab active'

@app.route('/product/challenges')
def product_challenges():
    return 'Product page with Challenges tab active'

@app.route('/product/product-tree')
def product_product_tree():
    return 'Product page with Product Tree tab active'

@app.route('/product/ideas-and-bugs')
def product_ideas_bugs():
    return 'Product page with Ideas & Bugs tab active'

@app.route('/product/people')
def product_people():
    return 'Product page with People tab active'

@app.route('/users/sign-up')
def user_sign_up():
    return 'User Sign Up'

@app.route('/users/sign-in')
def user_sign_in():
    return 'User Sign In'

@app.route('/users/password-reset')
def user_password_reset():
    return 'Reset Password'