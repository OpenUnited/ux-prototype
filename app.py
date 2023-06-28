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
    products_listings_file = os.path.abspath("data-sets/products_listings.json")
    with open(products_listings_file) as json_file:
        raw_products_listings = json.load(json_file)
    products_listings = raw_products_listings["data"]["products"]
    return render_template("home_products.html", products_listings=products_listings)

#product pages

@app.route('/product/summary')
def product_summary():
    return 'Product page with Summary tab active'

@app.route('/product/initiatives')
def product_initiatives():
    return 'Product page with Initiatives tab active'

@app.route('/product/challenges')
def product_challenges():
    product_challenges_listings_file = os.path.abspath("data-sets/product_challenges_listings.json")
    with open(product_challenges_listings_file) as json_file:
        raw_product_challenges_listings = json.load(json_file)
    product_challenges_listings = raw_product_challenges_listings["data"]["tasklistingByProduct"]
    return render_template("product_challenges.html", product_challenges_listings=product_challenges_listings, current_page="challenges_page")

@app.route('/product/product-tree')
def product_product_tree():
    return 'Product page with Product Tree tab active'

@app.route('/product/ideas-and-bugs')
def product_ideas_bugs():
    product_ideas_listings_file = os.path.abspath("data-sets/product_ideas_listings.json")
    person_info_file = os.path.abspath("data-sets/person_info.json")
    with open(product_ideas_listings_file) as json_file:
        raw_product_ideas_listings = json.load(json_file)
    product_ideas_listings = raw_product_ideas_listings["data"]["ideas"]
    with open(person_info_file) as json_file:
        raw_person_info = json.load(json_file)
    person_info_listings = raw_person_info["data"]["personInfo"]    
    return render_template("product_ideas.html", product_ideas_listings=product_ideas_listings, person_info_listings=person_info_listings, current_page="ideas_page")

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