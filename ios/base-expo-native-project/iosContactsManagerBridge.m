//
//  iosContactsManagerBridge.m
//  safeonscene
//
//  Created by Charles Major on 11/3/17.
//  Copyright © 2017 650 Industries, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(iosContactsManager, NSObject)

RCT_EXTERN_METHOD(getPhoneContact: (RCTResponseSenderBlock)callback)

@end
