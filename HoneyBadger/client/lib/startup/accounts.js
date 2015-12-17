Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});

// Switch to .js as I don't have typescript definition for accountsUIBootstrap
accountsUIBootstrap3.logoutCallback = function(error) {
	if (error) console.log("Error:" + error);
	Router.go('home');
}