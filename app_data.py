import os, json


def get_bounties():
    bounty = os.path.abspath("data-sets/bounty.json")
    with open(bounty) as json_file:
        return json.load(json_file)


def get_challenges():
    challenge = os.path.abspath("data-sets/challenge.json")
    with open(challenge) as json_file:
        return json.load(json_file)


def get_users():
    user = os.path.abspath("data-sets/user.json")
    with open(user) as json_file:
        return json.load(json_file)


def get_products():
    user = os.path.abspath("data-sets/product.json")
    with open(user) as json_file:
        return json.load(json_file)


def get_bounty_delivery_attempt():
    user = os.path.abspath("data-sets/bounty_delivery_attempt.json")
    with open(user) as json_file:
        return json.load(json_file)


def get_bounty_claims():
    user = os.path.abspath("data-sets/bounty_claim.json")
    with open(user) as json_file:
        return json.load(json_file)


def get_skills():
    user = os.path.abspath("data-sets/skill.json")
    with open(user) as json_file:
        return json.load(json_file)


def get_expertises():
    user = os.path.abspath("data-sets/expertise.json")
    with open(user) as json_file:
        return json.load(json_file)
