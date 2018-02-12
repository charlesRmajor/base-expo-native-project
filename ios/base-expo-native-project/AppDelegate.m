// Copyright 2015-present 650 Industries. All rights reserved.

#import "AppDelegate.h"
#import "ExpoKit.h"
#import "EXViewController.h"

#import <FBSDKCoreKit/FBSDKCoreKit.h>

NSString *OneSignal_AppID = @"70028655-b534-42b0-9ad8-04d6fb014371";

@interface AppDelegate ()

@property (nonatomic, strong) EXViewController *rootViewController;

@end

@implementation AppDelegate

@synthesize oneSignal = _oneSignal;

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    _window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    _window.backgroundColor = [UIColor whiteColor];
    [[ExpoKit sharedInstance] application:application didFinishLaunchingWithOptions:launchOptions];
    _rootViewController = [ExpoKit sharedInstance].rootViewController;
    _window.rootViewController = _rootViewController;
    
    [_rootViewController loadReactApplication];
    [_window makeKeyAndVisible];
    
    // Facebook Analytics
    [[FBSDKApplicationDelegate sharedInstance] application:application
                             didFinishLaunchingWithOptions:launchOptions];
    
    // For requiring push notification permissions manually.
    self.oneSignal = [[RCTOneSignal alloc] initWithLaunchOptions:launchOptions
                                                           appId:OneSignal_AppID
                                                        settings:@{kOSSettingsKeyAutoPrompt: @false}];
    
    return YES;
}

- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
    
    BOOL handled = [[FBSDKApplicationDelegate sharedInstance] application:application
                                                                  openURL:url
                                                        sourceApplication:options[UIApplicationOpenURLOptionsSourceApplicationKey]
                                                               annotation:options[UIApplicationOpenURLOptionsAnnotationKey]
                    ];
    // Add any custom logic here.
    return handled;
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
    [FBSDKAppEvents activateApp];
}

#pragma mark - Handling URLs

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(nullable NSString *)sourceApplication annotation:(id)annotation
{
    
    return [[ExpoKit sharedInstance] application:application openURL:url sourceApplication:sourceApplication annotation:annotation];
}

- (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity restorationHandler:(nonnull void (^)(NSArray * _Nullable))restorationHandler
{
    return [[ExpoKit sharedInstance] application:application continueUserActivity:userActivity restorationHandler:restorationHandler];
}

#pragma mark - Notifications

- (void)application:(UIApplication *)application didReceiveLocalNotification:(nonnull UILocalNotification *)notification
{
    [[ExpoKit sharedInstance] application:application didReceiveLocalNotification:notification];
}

@end
