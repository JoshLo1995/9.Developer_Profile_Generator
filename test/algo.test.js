const Algo = require("../algo");

expect.extend({
    isString(val) {
        val ? check = true : check = false;
        if(check) {
            if(typeof(val) == String) {
                return {
                    message: () => 
                        'expected a string',
                    pass: true,
                };
            } else {
                return {
                    message: () =>
                        'expected a string',
                    pass: false,
                };
            }
        }
    }
});

describe("Algo", () => {
    describe("getUserName", () => {
        // Get username
        test("it should get a username input from the user", () => {
            expect(getUserName(input)).toEqual(String)

        }); 
    })
})


// Get profile image

// Get links to following:
    // User location via Google Maps

    // User GitHub profile

    // User blog

// User bio

// Number of public repositories

// Number of followers

// Number of Github stars
// Number of users following