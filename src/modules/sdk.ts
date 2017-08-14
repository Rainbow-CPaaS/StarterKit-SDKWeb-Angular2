declare var rainbowSDK:any;
declare var angular:any;
declare var $:any;

/**
 * SDK
 * TypeScript Singleton
 * Centralize access to rainbowSDK global variable (avoid dispatching rainbowSDK anywhere in the application)
 */ 
class SDK { 

    initialize() {
        
        console.log("[DEMO] :: Starter-Kit of the Rainbow SDK for Web with React started!");
        
        var applicationID = "", 
            applicationSecret = "";
    
        /* Bootstrap the SDK */
        angular.bootstrap(document, ["sdk"]).get("rainbowSDK");
        
        /* Callback for handling the event 'RAINBOW_ONREADY' */
        var onReady = function onReady() {
            console.log("[DEMO] :: On SDK Ready !");
        };
    
        /* Callback for handling the event 'RAINBOW_ONCONNECTIONSTATECHANGED' */
        var onLoaded = function onLoaded() {
            console.log("[DEMO] :: On SDK Loaded !");
    
            rainbowSDK.initialize().then(function() {
                console.log("[DEMO] :: Rainbow SDK is initialized!");
            }).catch(function() {
                console.log("[DEMO] :: Something went wrong with the SDK...");
            });
        };
    
        /* Listen to the SDK event RAINBOW_ONREADY */
        $(document).on(rainbowSDK.RAINBOW_ONREADY, onReady);
    
        /* Listen to the SDK event RAINBOW_ONLOADED */
        $(document).on(rainbowSDK.RAINBOW_ONLOADED, onLoaded);
    
        rainbowSDK.load();
    }

    get version () {
        return rainbowSDK.version;
    }
};

let sdk = new SDK();

export { sdk } ;
