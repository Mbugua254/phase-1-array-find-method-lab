function superbowlWin(superbowls) {
    const win = superbowls.find(superbowl => superbowl.result === "W");
    return win ? win.year : undefined;
}
