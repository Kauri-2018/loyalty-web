# Loyalty-web

## Getting started
Please note: These instructions apply to running both loyalty-web and loyalty-app together. Loyalty-app can be found at: 
 https://github.com/Kauri-2018/loyalty-app
 
*You will need Expo on your device: https://expo.io/
 
### Loyalty-web
#### Use the development branch
1. Open loyalty-web in VS Code / code edtior of your choice
2. Check what branch you are on and stage all of your changes if applicable 
3. Checkout development: 
- `git checkout development`
4. Pull down any chages: 
- `git pull origin development`
5. Intall dependencies as needed: 
-`yarn`

#### Set up the environment
1. Set up the database:
- `yarn knex migrate:rollback`
- `yarn knex migrate:latest`
- `yarn knex seed:run`
 
2. Check the .env file:
- there should be a JWT_SECRET and a PASSCODE in the file
- if not, you can add them or make a file with them inside

3. Check that the database has seeds in each of the tables:
- users
- profiles
- visits

4. Start the server with:
- `yarn dev`

5. Visit your localhost and ensure that you can login: if so, the server side is ready! 

### Loyalty-app
#### Use the development branch
1. Repeat steps 1 - 5 used in loyalty-web

#### Check IP address
1. Check apiClient and change the API calls to your own IP address in each of the four functions:
- loginUser
- getUser
- checkinUser
- getUserHistory

*Make sure you've saved those changes! 

#### Run the app
1. `npm run start`
2. If using iOS: send an email using the `s` hotkey or `Share`, then follow the link from your device
3. If using Android: scan the QR code in the terminal from within the Projects tab in Expo 

#### Making changes
1. You can now make a branch and start coding: 
- `git checkout -b <YourBranchNameHere>`

## Pages
  * Home(/)
  * Adminlogin(/adminlogin)
  * Adminregister(/adminregister)
  * UserRegister(/userRegister)
  * Admin profile(/profile)
  * Statistics(/profile/statistics)
  * Add new user(/profile/new)
