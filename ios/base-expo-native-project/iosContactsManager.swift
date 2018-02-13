//
//  iosContactsManager.swift
//  safeonscene
//
//  Created by Charles Major on 11/3/17.
//  Copyright © 2017 650 Industries, Inc. All rights reserved.
//

import UIKit
import ContactsUI

struct myContact {
    let givenName: String?
    let familyName: String?
    let numberLabel: String?
    let phoneNumber: String?
    
    init (startCNContactProperty: CNContactProperty) {
        self.givenName = startCNContactProperty.contact.givenName
        self.familyName = startCNContactProperty.contact.familyName
        var startNumberLabel = startCNContactProperty.label
        self.phoneNumber = (startCNContactProperty.value as! CNPhoneNumber).stringValue
        
        if startNumberLabel != nil && startNumberLabel!.characters.count > 0 {
            var range = startNumberLabel!.startIndex ..< phoneNumber!.index((startNumberLabel!.startIndex), offsetBy: 4)
            if (startNumberLabel![range] == "_$!<") {
                startNumberLabel!.removeSubrange(range)
                range = startNumberLabel!.index(startNumberLabel!.endIndex, offsetBy: -4) ..< startNumberLabel!.endIndex
                startNumberLabel!.removeSubrange(range)
            }
            self.numberLabel = startNumberLabel!
        } else {
            self.numberLabel = ""
        }
    }
    
    init(GivenName: String?, FamilyName: String?, NumberLabel: String?, PhoneNumber: String?) {
        givenName = GivenName ?? ""
        familyName = FamilyName ?? ""
        let numLabelText = NumberLabel ?? ""
        numberLabel =  " (" + numLabelText + ")"
        phoneNumber = PhoneNumber ?? ""
    }
}

@objc(iosContactsManager)
class iosContactsManager: NSObject, CNContactPickerDelegate {
    
    var contactCallback: (([[String: String]]) -> ())? = nil
    
    @objc func getPhoneContact(_ callback: @escaping ([[String: String]]) -> () ) -> Void {
        contactCallback = callback
        openNativeContactSelectionViewController()
    }
    
    func openNativeContactSelectionViewController() {
        let appDelegate = UIApplication.shared.delegate as! UIApplicationDelegate
        let rootViewController = appDelegate.window??.rootViewController
        let contactPicker = CNContactPickerViewController()
        contactPicker.delegate = self
        contactPicker.displayedPropertyKeys = [CNContactPhoneNumbersKey]
        
        rootViewController?.present(contactPicker, animated: true, completion: nil)
    }
    
    func contactPicker(_ picker: CNContactPickerViewController, didSelect contactProperty: CNContactProperty) {
        let newContact = myContact(startCNContactProperty: contactProperty as CNContactProperty)
        contactCallback?([[
            "firstName": newContact.givenName ?? "No Name Entered",
            "lastName": newContact.familyName ?? "",
            "number": newContact.phoneNumber ?? "",
            "label": newContact.numberLabel ?? ""
            ]])
    }
}
