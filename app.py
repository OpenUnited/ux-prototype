from flask import Flask, render_template

app = Flask(__name__)

@app.route('/screen-list')
def screen_list():
    return render_template('screen-list.html')

@app.route('/')
def home():
    return 'Homepage with list of challenges'

@app.route('/products')
def home_products():
    return 'Homepage with list of products'

@app.route('/users/sign-up')
def user_sign_up():
    return 'User Sign Up'

@app.route('/users/sign-in')
def user_sign_in():
    return 'User Sign In'

@app.route('/users/password-reset')
def user_password_reset():
    return 'Reset Password'