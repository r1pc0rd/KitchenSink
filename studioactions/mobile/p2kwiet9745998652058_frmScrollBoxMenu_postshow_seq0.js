function p2kwiet9745998652058_frmScrollBoxMenu_postshow_seq0(eventobject, neworientation) {
    if (kony.os.deviceInfo().name == "android") {
        glbScrollBegining = false;
        frmScrollBoxMenu.sboxGlobalHome.scrollToEnd()
    }
}