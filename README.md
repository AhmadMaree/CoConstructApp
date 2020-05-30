# CoConstructApp
Is an application  that focuses on the Construction work.


![CoConstructApp.](https://github.com/AhmadMaree/CoConstructApp/blob/master/21.png)

 
### Quick start

```bash
# clone repo
$ git clone https://github.com/AhmadMaree/CoConstructApp

# change directory to cloned app
$ cd CoConstructApp

# install the dependencies with npm
$ npm install

# start IOS emulator with running App
$ react-native run-android
```
# Table of Contents


* [Description](#Description)
* [Dependencies](#dependencies)
* [Developing](#developing)
* [Preview](#preview)
* [Demo](#Demo)
* [License](#license)


## Description
Co-Construct is an application  that focuses on the Construction work.
It helps provide users with real information about the requirements needed for Preparing to start building by
giving them the ability of access the engineering office and their requirements,also it give them the ability of look at the workers and review their works in order To  choose the worker they need.
The application also provides the possibility for engineers to add their offices and office information,they can contact their customers or chatting them by the application.
The process of developing this app starts with manually collecting data by visiting 
some engineer office in Nablus this data 
consisted of the necessary requirements in order to start and general information  about office 
like office name,engineer name,phone number and etc...
,this data is processed to be shown dynamically in the app, then we  developed the application using the react and react native
The whole experience the app provides is finally implemented to
deliver an mobile application using Android Studio.
Co-Construct is available on the web, too for an additional feature for all application users,
which gives them the chance of chatting each other safely
and cheaply.

## Dependencies
 
 You'll need to run this app:
 * `node` and `npm`
 * Ensure you're running Node (`v8.9.4`+) and NPM (`5.6.0`+)
 * `react-native-cli: 2.13.8`
 * `react-native: 0.61.5`
 #### More Detalis 
 You must do these things : 
 * configrartion for `FCM` and Firebase .
 * put Your IpV4 in src/screen/Ip.js For Server Node Backend.
 * change the cinfogration for Notifaction put Your serverKey and Anykeys from Firebase .
 * For `src/screen/ForgotPassword.js` You need configration for SMTP Mailer.
 
 ## Developing
 
 After you have installed all dependencies you can now start developing with:
 
 * `react-native run-android` or `react-native run-ios`
 
 It will start the desired mobile operating system emulator with the app running, any change made will refresh the app on emulator.
 
## License

This project is licensed under MIT License - see the [License.md](https://github.com/AhmadMaree/CoConstructApp/blob/master/License.md) file for details
