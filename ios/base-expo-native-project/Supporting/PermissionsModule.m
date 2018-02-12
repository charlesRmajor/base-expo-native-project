//
//  PermissionsModule.m
//  Betterment Labs
//
//  Created by Betterment Labs on 02/10/18.
//  Copyright © 2018 Betterment Labs, LLC. All rights reserved.
//

#import "PermissionsModule.h"

#import <OneSignal/OneSignal.h>

@implementation PermissionsModule

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

// MARK: getNotificationsPermissions
RCT_EXPORT_METHOD(getNotificationsPermissions:(RCTResponseSenderBlock)callback) {
    NSLog(@"getNotificationsPermissions");
    [OneSignal promptForPushNotificationsWithUserResponse:^(BOOL accepted) {
        NSArray *result = [NSNumber numberWithBool:accepted];
        callback(@[result]);
    }];
}

@end