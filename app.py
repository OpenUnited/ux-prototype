from flask import Flask, render_template
import os
import json

app = Flask(__name__)

@app.context_processor
def inject_json_data():
    home_filter_listings_file = os.path.abspath("data-sets/home_filter_listings.json")
    with open(home_filter_listings_file) as json_file:
        raw_home_filter_listings = json.load(json_file)
    home_filter_listings = raw_home_filter_listings["data"]["filters"]
    return dict(home_filter_listings=home_filter_listings)

@app.route('/screen-list')
def screen_list():
    return render_template('screen_list.html')

#homepage views

@app.route('/')
def home_splash():
    return render_template("home_splash.html")

@app.route('/challenges/steps')
def challenges_steps():
    return render_template("challenges_steps.html")

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

# #product pages

@app.route('/product/summary')
def product_summary():
    product_summary_listings_file = os.path.abspath("data-sets/product_summary_listings.json")
    with open(product_summary_listings_file) as json_file:
        raw_product_summary_listings = json.load(json_file)
    product_summary_listings = raw_product_summary_listings["data"]["summary"]
    return render_template("product_summary.html", product_summary_listings=product_summary_listings, current_page="summary_page")

@app.route('/product/initiatives')
def product_initiatives():
    product_initiatives_listings_file = os.path.abspath("data-sets/product_initiatives_listings.json")
    with open(product_initiatives_listings_file) as json_file:
        raw_product_initiatives_listings = json.load(json_file)
    product_initiatives_listings = raw_product_initiatives_listings["data"]["initiatives"]
    return render_template("product_initiatives.html", product_initiatives_listings=product_initiatives_listings, current_page="initiatives_page")

@app.route('/product/challenges')
def product_challenges():
    product_challenges_listings_file = os.path.abspath("data-sets/product_challenges_listings.json")
    with open(product_challenges_listings_file) as json_file:
        raw_product_challenges_listings = json.load(json_file)
    product_challenges_listings = raw_product_challenges_listings["data"]["tasklistingByProduct"]
    return render_template("product_challenges.html", product_challenges_listings=product_challenges_listings, current_page="challenges_page")

@app.route('/product/product-tree')
def product_product_tree():
    product_summary_listings_file = os.path.abspath("data-sets/product_summary_listings.json")
    with open(product_summary_listings_file) as json_file:
        raw_product_summary_listings = json.load(json_file)
    product_summary_listings = raw_product_summary_listings["data"]["summary"]
    return render_template("product_tree.html", product_summary_listings=product_summary_listings, current_page="tree_page")

@app.route('/product/product-tree-interactive')
def product_product_tree_interactive():
    product_summary_listings_file = os.path.abspath("data-sets/product_summary_listings.json")
    with open(product_summary_listings_file) as json_file:
        raw_product_summary_listings = json.load(json_file)
    product_summary_listings = raw_product_summary_listings["data"]["summary"]
    return render_template("product_tree_interactive.html", product_summary_listings=product_summary_listings, current_page="tree_page_interactive")

@app.route('/product/product-area-detail')
def product_product_area_detail():
    challenge_listings_file = os.path.abspath("data-sets/challenge_listings.json")
    with open(challenge_listings_file) as json_file:
        raw_challenge_listings = json.load(json_file)
    challenge_listings = raw_challenge_listings["data"]["challengelisting"]
    return render_template("product_area_detail.html", challenge_listings=challenge_listings)

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
    product_people_listings_file = os.path.abspath("data-sets/product_people_listings.json")
    with open(product_people_listings_file) as json_file:
        raw_product_people_listings = json.load(json_file)
    product_people_listings = raw_product_people_listings["data"]["people"]
    return render_template("product_people.html", product_people_listings=product_people_listings, current_page="people_page")

@app.route('/profile/empty')
def profile_empty():
    return render_template("profile_empty.html")

@app.route('/profile')
def profile():
    return render_template("profile.html")

@app.route('/users/sign-up')
def user_sign_up():
    return render_template("user_sign_up.html")

@app.route('/users/sign-in')
def user_sign_in():
    return render_template("user_sign_in.html")

@app.route('/users/password-reset')
def user_password_reset():
    return render_template("user_reset_password.html")

@app.route('/portfolio')
def portfolio():
    return render_template("portfolio.html")

@app.route('/portfolio-figma')
def portfolio_figma():
    return render_template("portfolio_figma.html")

@app.route('/portfolio-clients')
def portfolio_clients():
    return render_template("portfolio_clients.html")

@app.route('/status-and-points')
def status_and_points():
    return render_template("status_and_points.html")

@app.route('/bounty_claim_requests_table')
def bounty_claim_requests_table():
    return render_template("bounty_claim_requests_table.html")