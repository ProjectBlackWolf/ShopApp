const express = require('express');


function userToken(us, ps, cart)
{
    this.username = us;
    this.password = ps;
    this.cart = cart;
};

var userTokenFactoy = (fx = () => {
    var tokens = {};

    return {

        get: function (us, ps, cart) {
            if (!tokens[us + ps]) {
                tokens[us + ps] =
                    new userToken(us, ps, cart);
            }
            return tokens[us + ps];
        },

        getCount: function () {
            var count = 0;
            for (var f in tokens) count++;
            return count;
        }
    }
})
    ();

// Usage:

function userBase() {
    var users = {};
    var count = 0;

    return {
        add: function (us, ps, cart, id) {
            users[id] =
                new User(us, ps, cart, id);
            count++;
        },

        get: function (id) {
            return users[id];
        },

        getCount: function () {
            return count;
        }
    };
}

var User = function (us, ps, cart, id) {
    this.flyweight = userTokenFactoy.get(us, ps, cart, id);
    this.cart = cart;
    this.id = id;
    this.getMake = function () {
        return this.flyweight.us;
    }
}

function seed() {
    var users = new userBase();

    users.add("Chell", "uuR-Idx-3RG-7Eh", [], 0);
    users.add("I", "Letlslssef345%j()eh", [], 6);
    users.add("Dont", "FGZX-&73(-#($75-yuiF", [], 7);
    users.add("Care", "Fartmunch87#", [], 88);

    console.log("Users: " + users.getCount());
    console.log("Flyweights: " + userTokenFactoy.getCount());
}